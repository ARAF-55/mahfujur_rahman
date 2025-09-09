import styles from '../../../styles/Work.module.css'

export default function page() {
  return (
    <div className={styles.container}>

        <div className={styles.components}>
            
            <img className={styles.edu_image}src="./Works/14.jpeg" alt="Mahfujur Rahman" />
            
            <div>
                <h1 className={styles.robotoMonoKasa}>Doctoral Instructional Assistant (DIA)</h1> 
                <h1 className={styles.robotoMonoKasa}>Texas State University, San Marcos, Texas</h1>
                <div className={styles.portion}>
                <p className={styles.monsTrate}>August 2025 - Present</p>
                <p className={styles.monsTrate}>Currently assigned to the CS-4388/5388 (Advanced Computer Graphics) course</p>
                <p className={styles.monsTrate}>Helping students with day to day coding works. Implementing many projects using the core graphics algorithms. Have worked on the Gophergfx module</p>
                </div>
            </div>
        </div>


        <div className={styles.components}>
            
            <img className={styles.edu_image}src="./Works/11.jpeg" alt="Mahfujur Rahman" />
            
            <div>
                <h1 className={styles.robotoMonoKasa}>Frontend Engineer - (Part time - freelance based, Remote)</h1> 
                <h1 className={styles.robotoMonoKasa}>Softexpoit Pvt. Limited</h1>
                <div className={styles.portion}>
                <p className={styles.monsTrate}>Feb 2023 - November 2024</p>
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
                <p className={styles.monsTrate}>Feb 2022 - March 2022</p>
                <p className={styles.monsTrate}>I worked at Teletalk Bangladesh as a Computer Science intern. It was part of the industrial attachment program. I was assigned in a project that developed a system for detecting and verifying the quality and orientation of the images that gets uploaded to the server of the company. I used several deep learning procedures in the process. After testing out with several models with the dataset, we settled on DenseNet 201, with an accuracy rate of 93%.</p>
                </div>
            </div>
        </div>

        <div className={styles.components}>
            
            <img className={styles.edu_image}src="./Works/13.jpg" alt="Mahfujur Rahman" />
            
            <div>
                <h1 className={styles.robotoMonoKasa}>System Analysis and Design, Sessional Attachment</h1> 
                <h1 className={styles.robotoMonoKasa}>AB Bank Limited, Noapara, Chittagong</h1>
                <div className={styles.portion}>
                <p className={styles.monsTrate}>Jan 2020 - Feb 2020</p>
                <p className={styles.monsTrate}>
                - This task was a part of the sessional work of SAD course.</p>
                <p className={styles.monsTrate}>
                - We studied the system of the bank and prepared the Process Models,
                Object Oriented Analysis and Feasibility Analysis
                </p>
                </div>
            </div>
        </div>
    </div>
  )
}
