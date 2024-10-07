import styles from '../../../styles/Scores.module.css'


export default function page() {
  return (
    <div className={styles.container}>
        <div className={styles.components}>
            
        <img className={styles.edu_image}src="./Scores/gre.png" alt="Mahfujur Rahman" />
            
            <div>
                <h1 className={styles.robotoMonoKasa}>GRE Score</h1> 
                <div className={styles.portion}>
                <p className={styles.monsTrate}>Test Date: September 3, 2024</p>
                <p className={styles.monsTrate}>Total Score: 314</p>
                <p className={styles.monsTrate}>Verbal Score: 152 (48th Percentile)</p>
                <p className={styles.monsTrate}>Quant Score: 162 (60th Percentile)</p>
                <p className={styles.monsTrate}>AWA Score: 3.5 (41st Percentile)</p>
                </div>
            </div>
        </div>

        <div className={styles.components}>
            
            <img className={styles.edu_image}src="./Scores/ielts.png" alt="Mahfujur Rahman" />
            
            <div>
                <h1 className={styles.robotoMonoKasa}>IELTS Score</h1> 
                <div className={styles.portion}>
                <p className={styles.monsTrate}>Test Date: September 9, 2023</p>
                <p className={styles.monsTrate}>Listening Score : 8.5</p>
                <p className={styles.monsTrate}>Reading Score   : 7.5</p>
                <p className={styles.monsTrate}>Speaking Score  : 7.0</p>
                <p className={styles.monsTrate}>Writing Score   : 6.5</p>
                </div>
            </div>
        </div>

        <div className={styles.components}>
            
            <img className={styles.edu_image}src="./Scores/ML.png" alt="Mahfujur Rahman" />
            
            <div>
                <h1 className={styles.robotoMonoKasa}>Machine Learning (Stanford Online)</h1> 
                <div className={styles.portion}>
                <p className={styles.monsTrate}>Learnt the fundamental ideas of Hypothesis, Cost function, Gradient Descent, Supervised and Unsupervised Learning, Activation Functions</p>
                <p className={styles.monsTrate}>Learnt many fundamental Algorithms such as Logistic Regression, Support Vector Machine, Anamoly detections e.t.c.</p>
                <p className={styles.monsTrate}>Implemented the algorithms using Python and Octave</p>
                </div>
            </div>
        </div>

        <div className={styles.components}>
            
            <img className={styles.edu_image}src="./Scores/DL-1.png" alt="Mahfujur Rahman" />
            
            <div>
                <h1 className={styles.robotoMonoKasa}>Neural Networks and Deep Learning</h1>
                <div className={styles.portion}>
                <p className={styles.monsTrate}>Understood Neural Networks from ground up and implemented it from scratch using only numpy array of Python</p>
                <p className={styles.monsTrate}>Deeply studied the Backpropagation process and understood how it worked to reduce cost functions, also implemented it in Python</p>
                </div>
            </div>
        </div>

        <div className={styles.components}>
            
            <img className={styles.edu_image}src="./Scores/DL-2.png" alt="Mahfujur Rahman" />
            
            <div>
                <h1 className={styles.robotoMonoKasa}>Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization</h1> 
                <div className={styles.portion}>
                <p className={styles.monsTrate}>Understood the importance of hyperparameters and how they should be manipulated in certain scenarios</p>
                <p className={styles.monsTrate}>Learnt differnet techniques like, Regularization, Dropout etc. to avoid overfitting a model in a dataset.</p>
                <p className={styles.monsTrate}>Understood the importance of visualization of charts inorder to take correct decisions during the implementation pahase of a project. It can help to build successful models</p>
                </div>
            </div>
        </div>

        <div className={styles.components}>
            
            <img className={styles.edu_image}src="./Scores/DL-3.png" alt="Mahfujur Rahman" />
            
            <div>
                <h1 className={styles.robotoMonoKasa}>Convolutional Neural Networks</h1>
                <div className={styles.portion}>
                <p className={styles.monsTrate}>Learnt the basic building blocks of CNN, such as filters, stride, padding etc. and also implemented it from scratch with Python</p>
                <p className={styles.monsTrate}>
                Learnt differnet CNN architectures, such as Inception Networks, VGG - 16, Resnet etc
                </p>
                <p className={styles.monsTrate}>
                Learnt the YOLO object detection algorithm from the basics, including background ideas such as sliding window technique, anchor boxes etc.
                </p>
                </div>
            </div>
        </div>
    </div>
  )
}
