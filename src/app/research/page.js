import {
    Code_1, Code_2,
    Code_3, Code_4,
    Code_5, Code_6,
    Code_7, Code_8,

    Headline_1, Headline_2,
    Headline_3, Headline_4,
    Headline_5, Headline_6,
    Headline_7, Headline_8,

    Text_1, Text_2, Text_3,
    Text_4, Text_5, Text_6,
    Text_7, Text_8,


    slide_1, slide_2, slide_3,
    slide_4, slide_5, slide_6,
    slide_7, slide_8
} from "../../../Comps/Data";


import InfoSection from "../../../Comps/InfoSection";
import styles from '../../../styles/Research.module.css';


export default function page() {

  return (
    <div className={styles.container}>

        <InfoSection
            heading={Headline_2} 
            text={Text_2}
            codelink= {Code_2} 
            googleSlidesUrl={slide_2}
        />

        <InfoSection
            heading={Headline_3} 
            text={Text_3}
            codelink= {Code_3} 
            googleSlidesUrl={slide_3}
        />

        <InfoSection
            heading={Headline_1} 
            text={Text_1}
            codelink= {Code_1} 
            googleSlidesUrl={slide_1}
        />

        <InfoSection
            heading={Headline_4} 
            text={Text_4}
            codelink= {Code_4} 
            googleSlidesUrl={slide_4}
        />

        <InfoSection
            heading={Headline_5} 
            text={Text_5}
            codelink= {Code_5} 
            googleSlidesUrl={slide_5}
        />

        <InfoSection
            heading={Headline_6} 
            text={Text_6}
            codelink= {Code_6} 
            googleSlidesUrl={slide_6}
        />

        <InfoSection
            heading={Headline_7} 
            text={Text_7}
            codelink= {Code_7} 
            googleSlidesUrl={slide_7}
        />

        <InfoSection
            heading={Headline_8} 
            text={Text_8}
            codelink= {Code_8} 
            googleSlidesUrl={slide_8}
        />
        
    </div>
  )
}
