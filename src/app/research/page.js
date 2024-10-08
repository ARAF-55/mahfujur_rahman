import InfoSection from "../../../Comps/InfoSection";
import styles from '../../../styles/Research.module.css';


export default function page() {
  
  const images = [
        '/1.jpg',
        '/2.jpg',
        '/3.jpg',
        ];

  return (
    <div className={styles.container}>
        <InfoSection
            heading="Tennis Video Analysis System With Yolov5 and Resnet50" 
            text="Discover new places, meet new people, and experience unforgettable moments. Discover new places, meet new people, and experience unforgettable moments. Discover new places, meet new people, and experience unforgettable moments. Discover new places, meet new people, and experience unforgettable moments. Discover new places, meet new people, and experience unforgettable moments. Discover new places, meet new people, and experience unforgettable moments. Discover new places, meet new people, and experience unforgettable moments. Discover new places, meet new people, and experience unforgettable moments.," 
            images={images} 
        />
        <InfoSection
            heading="Explore the World" 
            text="Discover new places, meet new people, and experience unforgettable moments." 
            images={images} 
        />
    </div>
  )
}
