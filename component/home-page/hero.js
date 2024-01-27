import Image from 'next/image'
import classes from './hero.module.css'
import profile from '@/public/images/site/profile.jpeg'
function Hero(){
    return(<section className={classes.hero}>
        <div className={classes.image}>
           <Image src={profile} alt='bharat img' width={300} height={300} />
        </div>
        <h1>Hi i'm Bharat
        </h1>
        <p>I blog about web development</p>
        
    </section>)
}
export default Hero