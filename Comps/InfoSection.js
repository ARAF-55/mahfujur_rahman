'use client';
import Link from 'next/link';
import PropTypes from 'prop-types';
import styles from '../styles/InfoSection.module.css'; // Import the CSS module

const InfoSection = ({ heading, text, codelink, googleSlidesUrl }) => {


  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>{heading}</h2>
      <p className={styles.text}>{text} <Link href={codelink} target="_blank">GitHub.</Link></p>

      <div className={styles.sliderContainer}>
        
        {/* Embed Google Slides with iframe */}
        <iframe
          id="googleSlidesIframe"
          src={googleSlidesUrl}
          frameBorder="0"
          allowFullScreen={true}
          className={styles.googleSlides}
        ></iframe>

      </div>
    </div>
  );
};

// Define PropTypes for the component
InfoSection.propTypes = {
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  googleSlidesUrl: PropTypes.string.isRequired,
};

export default InfoSection;
