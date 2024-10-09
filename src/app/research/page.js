import InfoSection from "../../../Comps/InfoSection";
import styles from '../../../styles/Research.module.css';


export default function page() {
  

  const googleSlidesUrl = "https://docs.google.com/presentation/d/e/2PACX-1vSZu7YqyZrWkRYzlJB7rDoH8Zq4VQx0AYT2P79_R0oIA7cDm4utXuJkcpjEAYnH8Fx_-hUOj_z9f8aB/embed?start=false&loop=false&delayms=3000" 

  return (
    <div className={styles.container}>
        <InfoSection
            heading="Tennis Video Analysis System With Yolov5 and Resnet50" 
            text="Discover new places, meet new people, and experience unforgettable moments. Discover new places, meet new people, and experience unforgettable moments. Discover new places, meet new people, and experience unforgettable moments. Discover new places, meet new people, and experience unforgettable moments. Discover new places, meet new people, and experience unforgettable moments. Discover new places, meet new people, and experience unforgettable moments. Discover new places, meet new people, and experience unforgettable moments. Discover new places, meet new people, and experience unforgettable moments.," 
            googleSlidesUrl={googleSlidesUrl}
        />
        <InfoSection
            heading="Explore the World" 
            text="Discover new places, meet new people, and experience unforgettable moments." 
            googleSlidesUrl={googleSlidesUrl}
        />
    </div>
  )
}
