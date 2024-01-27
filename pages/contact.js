import ContactForm from "@/component/contact/contact-form";
import Head from "next/head";

function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="Send Me your Messages" />
      </Head>
      <ContactForm />
    </>
  );
}
export default ContactPage;
