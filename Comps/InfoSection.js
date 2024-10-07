'use client';

import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from '../styles/InfoSection.module.css'; // Import the CSS module


const InfoSection = ({ heading, text, images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  // Handler to go to the next image
  const nextImage = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Handler to go to the previous image
  const prevImage = () => {
    setCurrentImage((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>{heading}</h2>
      <p className={styles.text}>{text}</p>

      <div className={styles.sliderContainer}>
        <button onClick={prevImage} className={styles.navButton}>←</button>
        <img src={images[currentImage]} alt={`Slide ${currentImage + 1}`} className={styles.image} />
        <button onClick={nextImage} className={styles.navButton}>→</button>
      </div>
    </div>
  );
};

// Define PropTypes for the component
InfoSection.propTypes = {
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default InfoSection;
