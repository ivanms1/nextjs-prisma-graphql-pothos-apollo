import Head from "next/head";

import Button from "@/components/Button";

import styles from "./Home.module.scss";
import { useState } from "react";

function Home() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <div className={styles.Container}>
      <Head>
        <title>Next Template</title>
        <meta name="description" content="Next.js template by Ivan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Welcome to My Next.js Template</h1>
      <a href="https://github.com/ivanms1" target="_blank" rel="noreferrer">
        ivanms1
      </a>
      <p>count: {count}</p>
      <Button onClick={handleClick} className={styles.Button}>
        Click Me
      </Button>
    </div>
  );
}

export default Home;
