import styles from '../../../styles/Education.module.css'


export default function page() {
  return (
    
      <div className={styles.container}>
        
        <div className={styles.components}>
            
            <img className={styles.edu_image}src="./Education/3.jpg" alt="Mahfujur Rahman" />
            
            <div>
                <h1 className={styles.robotoMonoKasa}>Bachelor of Science (B.Sc.) in Computer Science and Engineering,</h1> 
                <h1 className={styles.robotoMonoKasa}>Chittagong University of Engineering and Technology (CUET), Chittagong, Bangladesh.</h1>
                <div className={styles.portion}>
                <p className={styles.monsTrate}>Feb 2017 - Sep 2022</p>
                <p className={styles.monsTrate}>CGPA (US eval): 3.29/4.00 (3.63 in last 60 credits)</p>
                <p className={styles.monsTrate}>Merit Position: 37th out of 131</p>
                </div>
            </div>
        </div>


        <div className={styles.components}>
            
                <img className={styles.edu_image} src="./Education/1.jpeg" alt="Mahfujur Rahman" />
            
            <div>
                <h1 className={styles.robotoMonoKasa}>Higher Secondary School Certificate (HSC),</h1>
                <h1 className={styles.robotoMonoKasa}>Government M. M. City College, Khulna, Bangladesh</h1>

                <div className={styles.portion}>
                <p className={styles.monsTrate}>May 2014 - July 2016</p>
                <p className={styles.monsTrate}>GPA: 5.00/5.00</p>
                <p className={styles.monsTrate}>Activities: Placed 127th in Jessore Board</p> 

                </div>
            </div>
        </div>

        

        <div className={styles.components}>
            
                <img className={styles.edu_image} src="./Education/2.jpeg" alt="Mahfujur Rahman" />
          
            <div>
                <h1 className={styles.robotoMonoKasa}>Secondary School Certificate (SSC),</h1>
                <h1 className={styles.robotoMonoKasa}>Khulna Zilla School, Khulna</h1>
                
                <div className={styles.portion}>
                <p className={styles.monsTrate}>Jan 2006 - Feb 2014</p>
                <p className={styles.monsTrate}>GPA: 5.00/5.00</p>
                <p className={styles.monsTrate}>Activities: Placed 8th in Jessore Board</p>
                </div>
            </div>
        </div>
      </div>
    
  )
}
