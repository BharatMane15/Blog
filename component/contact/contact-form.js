import { useEffect, useRef, useState } from "react";
import classes from "./contact-form.module.css";
import Notification from "../ui/notification";

export async function fetchData(data) {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const newData = await response.json();

  if (!response.ok) {
    throw new Error(newData.message || "something went wrong");
  }
}

function ContactForm() {
  const [requestStatus, setRequestStatus] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const emailRef = useRef();
  const nameRef = useRef();
  const messageRef = useRef();

  async function handleClickSubmit(e) {
    e.preventDefault();
    setRequestStatus("pending");
    const email = emailRef.current.value;
    const name = nameRef.current.value;
    const message = messageRef.current.value;

    let data = {
      email: email,
      name: name,
      message: message,
    };

    try {
      await fetchData(data);
      setRequestStatus("success");
    } catch (error) {
      setRequestStatus("error");
      setErrorMessage(error.message);
    }
  }

  useEffect(() => {
    if (requestStatus === "success" || requestStatus === "error") {
      let timeout = setTimeout(() => {
        // notification = undefined;
        if (requestStatus === "success") {
          nameRef.current.value = "";
          emailRef.current.value = "";
          messageRef.current.value = "";
        }

        setRequestStatus(null);
        setErrorMessage(null);
      }, 3000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [requestStatus]);

  let notification;

  if (requestStatus === "pending") {
    notification = {
      status: "pending",
      title: "Sending message",
      message: "your message is on its way",
    };
  }
  if (requestStatus === "success") {
    notification = {
      status: "success",
      title: "success",
      message: "message sent successfully",
    };
  }
  if (requestStatus === "error") {
    notification = {
      status: "error",
      title: "error",
      message: errorMessage,
    };
  }

  return (
    <section className={classes.contact}>
      <h1>How Can i help you?</h1>
      <form className={classes.form}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" ref={emailRef} required />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" ref={nameRef} required />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea id="message" ref={messageRef} rows="5"></textarea>
        </div>
        <div className={classes.actions}>
          <button onClick={handleClickSubmit}>Send Message</button>
        </div>
      </form>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </section>
  );
}
export default ContactForm;
