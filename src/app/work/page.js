import styles from '../../../styles/Work.module.css'

export default function page() {
  return (
    <div className={styles.container}>
        <div className={styles.components}>
            
            <img className={styles.edu_image}src="./Works/11.jpeg" alt="Mahfujur Rahman" />
            
            <div>
                <h1 className={styles.robotoMonoKasa}>Frontend Engineer</h1> 
                <h1 className={styles.robotoMonoKasa}>Softexpoit Pvt. Limited</h1>
                <div className={styles.portion}>
                <p className={styles.monsTrate}>Feb 2023 - May 2024</p>
                <p className={styles.monsTrate}>
                - Developed the frontend of the Fleet Management Module with
                React.js and Redux. Integrated with Firebase DB for database.</p>
                <p className={styles.monsTrate}>
                - Developed the frontend of a HR Management system using Next.js
                for SSR. Used Firebase Auth for user authentication.
                </p>
                </div>
            </div>
        </div>

        <div className={styles.components}>
            
            <img className={styles.edu_image}src="./Works/12.jpeg" alt="Mahfujur Rahman" />
            
            <div>
                <h1 className={styles.robotoMonoKasa}>Internship in Machine Learning</h1> 
                <h1 className={styles.robotoMonoKasa}>Teletalk Bangladesh Limited, Dhaka</h1>
                <div className={styles.portion}>
                <p className={styles.monsTrate}>Nov 2022 - Dec 2022</p>
                <p className={styles.monsTrate}>I worked at Teletalk Bangladesh as a Computer Science intern. It was part of the industrial attachment program. I was assigned in a project that developed a system for detecting and verifying the quality and orientation of the images that gets uploaded to the server of the company. I used several deep learning procedures in the process. After testing out with several models with the dataset, we settled on DenseNet 201, with an accuracy rate of 93%.</p>
                </div>
            </div>
        </div>
    </div>
  )
}
