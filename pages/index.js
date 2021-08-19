import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Ullamco laboris amet excepteur incididunt. Et consequat sit minim
          cillum mollit adipisicing Lorem incididunt pariatur amet laboris
          ullamco laboris. Et occaecat ex ullamco culpa ad reprehenderit velit
          est anim.
        </p>
        <p className={styles.text}>
          Ullamco laboris amet excepteur incididunt. Et consequat sit minim
          cillum mollit adipisicing Lorem incididunt pariatur amet laboris
          ullamco laboris. Et occaecat ex ullamco culpa ad reprehenderit velit
          est anim.
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
