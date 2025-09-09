import styles from '../../../styles/Education.module.css'


export default function page() {
  return (
    
      <div className={styles.container}>




        
        <div className={styles.components}>
            
            <img className={styles.edu_image}src="./Extra/1.png" alt="Mahfujur Rahman" />
            
            <div>
                <h1 className={styles.robotoMonoKasa}>Vice President</h1> 
                <h1 className={styles.robotoMonoKasa}>CUET Chess Club, Chittagong University of Engineering and Technology (CUET), Chittagong, Bangladesh.</h1>
                <div className={styles.portion}>
                <p className={styles.monsTrate}>May 2021 - June 2022</p>
                <p className={styles.monsTrate}>- Arranged and participated in Inter University Chess Competition</p>
                <p className={styles.monsTrate}>- Mentored juniors for developing skills in Chess</p>
                <p className={styles.monsTrate}>- Led the chess team to 4th Place in 2021 Online Intra University Chess Competition</p>
                </div>
            </div>
        </div>



        <div className={styles.components}>
            
            <img className={styles.edu_image}src="./Extra/2.jpg" alt="Mahfujur Rahman" />
            
            <div>
                <h1 className={styles.robotoMonoKasa}>Travel and Tourism secretary</h1> 
                <h1 className={styles.robotoMonoKasa}>Khulna Divisional Association, Chittagong University of Engineering and Technology (CUET), Chittagong, Bangladesh.</h1>
                <div className={styles.portion}>
                <p className={styles.monsTrate}>Jan 2021 - July 2022</p>
                <p className={styles.monsTrate}>Made Travel arrangements in different places such as Kaptai, Bandarbans in Bangladesh</p>
                </div>
            </div>
        </div>

        <div className={styles.components}>
            
            <img className={styles.edu_image}src="./Extra/5.jpg" alt="Mahfujur Rahman" />
            
            <div>
                <h1 className={styles.robotoMonoKasa}>Volunteer at 2017 National Collegiate Programming Contest</h1> 
                <h1 className={styles.robotoMonoKasa}>Chittagong University of Engineering and Technology (CUET), Chittagong, Bangladesh.</h1>
                <div className={styles.portion}>
                <p className={styles.monsTrate}>April 2017</p>
                <p className={styles.monsTrate}>Volunteered as a worker during the NCPC 2017 at CUET</p>
                </div>
            </div>
        </div>


      </div>
    
  )
}
