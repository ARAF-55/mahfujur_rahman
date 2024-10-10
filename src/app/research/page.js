import { Code_1, Headline_1, Text_1 } from "../../../Comps/Data";
import InfoSection from "../../../Comps/InfoSection";
import styles from '../../../styles/Research.module.css';


export default function page() {
  

  const googleSlidesUrl = "https://docs.google.com/presentation/d/e/2PACX-1vSZu7YqyZrWkRYzlJB7rDoH8Zq4VQx0AYT2P79_R0oIA7cDm4utXuJkcpjEAYnH8Fx_-hUOj_z9f8aB/embed?start=false&loop=false&delayms=3000" 

  return (
    <div className={styles.container}>
        <InfoSection
            heading={Headline_1} 
            text={Text_1}
            codelink= {Code_1} 
            googleSlidesUrl={googleSlidesUrl}
        />
        <InfoSection
            heading="Explore the World" 
            text="Discover new places, meet new people, and experience unforgettable moments." 
            codelink= {Code_1}
            googleSlidesUrl={googleSlidesUrl}
        />
    </div>
  )
}
