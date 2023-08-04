import { useState, useEffect } from 'react';
import backgroundImage1 from '../../../../assets/gradution.jpg';
import backgroundImage2 from '../../../../assets/gradution2.jpg';
import backgroundImage3 from '../../../../assets/gradution3.jpg';
import './Banner.css';

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(0);
  const backgrounds = [backgroundImage1, backgroundImage2, backgroundImage3];
  const texts = [
    {
      "heading": "Empower Your Future",
      "description": "Unlock your potential and shape your future with our diverse range of academic programs and opportunities."
    },
    {
      "heading": "Unleash Your Creativity",
      "description": "Discover a world of creativity and innovation through our cutting-edge arts and design programs."
    },
    {
      "heading": "Pursue Knowledge",
      "description": "Embark on a journey of intellectual growth and curiosity with our comprehensive research and academic resources."
    }
  ]
  

  useEffect(() => {
    const timer = setInterval(() => {
      setPreviousIndex(currentIndex);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <div>
      <section
        id="banner-section"
        className="bg-gradient-to-r from-blue-900 to-blue-800 bg-cover bg-center min-h-[750px]"
        style={{
          backgroundImage: `url(${backgrounds[previousIndex]}), url(${backgrounds[currentIndex]})`,
          transition: 'background-image 1s linear',
        }}
      >
        <div className="dark-overlay">
          <div className="banner-inner mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="lg:me-96 max-w-xlt" data-aos="zoom-in">
              <h1
                className="font-bold text-6xl text-white mb-5"
              >
                {texts[currentIndex].heading}
              </h1>
              <p
                className="text-white font-bold py-5 text-xl"
              >
                {texts[currentIndex].description}
              </p>
              <button
                className="btn bg-blue-700 hover:bg-blue-800 text-white border-blue-700 px-5 py-2"
              >
                Find University
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
