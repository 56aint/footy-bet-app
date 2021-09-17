import Head from 'next/head';
import Image from 'next/image';
import football from '../public/images/football.png';
import styles from '../styles/HomePage.module.css';

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>FootyBet</title>
        <meta name="keywords" content="football betting" />
      </Head>
      <section className={styles.page}>
        <marquee className={styles.marquee} behavior="alternate" direction="right" scrollamount="5">
          My Team My Ball
          <Image src={football} className={styles.ball} />
          My Team My Ball
        </marquee>
      </section>
    </div>
  );
}
