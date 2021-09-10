import football from '../public/images/football.png'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function HomePage() {
  return (
    <div>
      This is the index page
      <section className={styles.page}>
      <marquee className={styles.marquee} behavior="alternate" direction="right" scrollamount="5">
        My Team My Ball
        <Image src={football} className={styles.ball}></Image>
        My Team My Ball
      </marquee>
      </section>
    </div>
  )
}
