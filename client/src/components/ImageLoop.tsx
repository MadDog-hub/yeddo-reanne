import { useAnimationContext } from '@/contexts/AnimationContext';

// Image loop images - New cover photos
import imageLoop1 from '@assets/cover1_1762410458786.jpg';
import imageLoop2 from '@assets/cover2_1762410458787.jpg';
import imageLoop3 from '@assets/cover3_1762410458787.jpg';
import imageLoop4 from '@assets/cover1_1762410458786.jpg';
import imageLoop5 from '@assets/cover2_1762410458787.jpg';
import imageLoop6 from '@assets/cover3_1762410458787.jpg';
import imageLoop7 from '@assets/cover1_1762410458786.jpg';

const ImageLoop = () => {
  const { animationsEnabled } = useAnimationContext();
  const images = [
    imageLoop1,
    imageLoop2,
    imageLoop3,
    imageLoop4,
    imageLoop5,
    imageLoop6,
    imageLoop7,
    imageLoop1,
    imageLoop2
  ];

  return (
    <section id="slideshow" className="image-loop-section section-hard-blue w-full overflow-hidden py-4">
      <div className="image-loop-container">
        <div className={`${animationsEnabled ? 'image-loop-track' : 'image-loop-track-static'}`}>
          {/* First set of images */}
          {images.map((image, index) => (
            <div key={`set1-${index}`} className="image-loop-item">
              <img
                src={image}
                alt={`Urban nighttime couple moment ${index + 1}`}
                className="image-loop-img"
                loading="lazy"
                data-testid={`img-loop-${index + 1}`}
              />
            </div>
          ))}
          {/* Duplicate set for seamless looping */}
          {images.map((image, index) => (
            <div key={`set2-${index}`} className="image-loop-item">
              <img
                src={image}
                alt={`Urban nighttime couple moment ${index + 1} duplicate`}
                className="image-loop-img"
                loading="lazy"
                data-testid={`img-loop-dup-${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageLoop;
