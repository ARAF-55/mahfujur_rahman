'use client';

import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';


export default function Home() {
  return (
    <>
      <Head>
        <title>Mahfujur Rahman | Home</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.imageSection}>
        <img className={styles.image} src="./ara.jpg" alt="Mahfujur Rahman" />
          <Link href="https://drive.google.com/file/d/1-rMAqKDy9FKjF83wNTWT09wOHbb2YGRM/view?usp=drive_link" className={styles.cv} target="_blank" rel="noopener noreferrer">
            CV
          </Link>
        </div>
        <div className={styles.descriptionSection}>
          <h1 className={styles.robotoMonoKasa}>About Me</h1>
          
          {/*
          <p className={styles.monsTrate}>
            Hello, I am Mahfujur Rahman. I am a Computer Science and Engineering Graduate, with experience working in frontend applications. Additionally, I find Data Structures and Algorithmic concepts very interesting and always continue to solve problems regarding these topics. Besides that, I am a Machine Learning and Deep Learning enthusiast. I love working on Computer Vision, Natural Language Processing, and Time series Data related porblems. Currently, I am looking for PhD positions in the Computer Science domain. I look forward to working in any one of these areas.
          </p> 
           */}


          <p className={styles.monsTrate}>
            Hello, I am Mahfujur Rahman. I am a Computer Science and Engineering Graduate, with research interests focusing on making AI applications robust and more secured. I have a firm knowledge base in the fundamentals of Machine Learning, Natural Language Processing and Computer Vision. I have also completed several projects and a research article in these areas. Currently, I am studying and exploring the security issues in AI applications and I intend to start working on porjects very soon. Additionally, I want to mention of my immense interest in the Data Structures and Algorithmic concepts. I find them very interesting and continue to solve programming problems related to these topics.
          </p>
        </div>
      </div>
    </>
  );
}
