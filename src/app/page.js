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
        <img className={styles.image} src="./1.jpg" alt="Mahfujur Rahman" />
          <Link href="https://drive.google.com/file/d/1Y5NPsrA196Tf3Zl-JjRdvTqeIHLznaaw/view?usp=drive_link" className={styles.cv} target="_blank" rel="noopener noreferrer">
            Projects and Research
          </Link>
          {
            /*
            <Link href="https://drive.google.com/file/d/18d-mYbou_94PufB43RU9IWRMRWmakJ2b/view?usp=drive_link" className={styles.cv} target="_blank" rel="noopener noreferrer">
            CV
          </Link>
            */
          }
          
        </div>
        <div className={styles.descriptionSection}>
          <h1 className={styles.robotoMonoKasa}>About Me</h1>
          
          {/*
          <p className={styles.monsTrate}>
            Hello, I am Mahfujur Rahman. I am a Computer Science and Engineering Graduate, with experience working in frontend applications. Additionally, I find Data Structures and Algorithmic concepts very interesting and always continue to solve problems regarding these topics. Besides that, I am a Machine Learning and Deep Learning enthusiast. I love working on Computer Vision, Natural Language Processing, and Time series Data related porblems. Currently, I am looking for PhD positions in the Computer Science domain. I look forward to working in any one of these areas.
          </p> 
           */}
    
          {
            /*

            <p className={styles.monsTrate}>
            Hello, I am Mahfujur Rahman. I am a Computer Science and Engineering Graduate, with research interests focusing on making AI applications robust and more secured. I have a firm knowledge base in the fundamentals of Machine Learning, Natural Language Processing and Computer Vision. I have also completed several projects and a research article in these areas. Currently, I am studying and exploring the security issues in AI applications and I intend to start working on porjects very soon. Additionally, I want to mention of my immense interest in the Data Structures and Algorithmic concepts. I find them very interesting and continue to solve programming problems related to these topics.
          </p>

            */
          }

          <p className={styles.monsTrate}>
            Hi! I am Mahfujur Rahman. I am a first year PhD student at the Texas State University, San Marcos. I am currently working under the supervision of Dr. Isayas Berhe Adhanom and my initial goal is to identify and mitigate Cybersickness in Virtual and Augmented Reality applications. Besides that, I am also focusing in the Eye Tracking research domain. Additionally, I am currently working on AR and VR app development areas for the 3D UI Contest organized by IEEE VR. Besides these current activities, I have a firm knowledge base in the Computer Vision and Natural Language Processing areas. I have rigorously explored the core concepts in these domains and developed many projects in these areas. Some of my projects are - Building a Large Language Model from Scratch, Tennis Video Analysis System, Human Activity Recognition etc. My undergraduate thesis was also in the Computer Vision area. It was in the Human Object Interaction Detection domain. In addition to this, I love solving programming problems related to Data Structures and Algorithmic concepts. I love exploring and teaching these concepts, and also solve problems related to these areas in Leetcode, whenever I get the chance.
          </p>



        </div>
      </div>
    </>
  );
}
