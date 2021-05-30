import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { motion } from 'framer-motion';
import { useScroll } from '../components/useScroll';

const AboutTwo = () => {
  const [element, controls] = useScroll();

  const slideInRight = {
    hidden: { x: 100 },
    show: { x: 0, transition: { duration: 0.75, ease: 'easeOut' } },
  };

  const textSlideInFromLeft = {
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0, transition: { duration: 2, ease: 'easeOut' } },
  };

  return (
    <div className='top-box'>
      <motion.div className='img-box'>
        <StaticImage
          src='https://res.cloudinary.com/dvme554nj/image/upload/v1621572150/coleman/pexels-quintin-gellar-2199293_wtvvuu.jpg'
          alt='excavators'
          placeholder='tracedSVG'
          width={800}
          className='border-radius-50'
        ></StaticImage>
        <h4>Johnny Coleman</h4>
      </motion.div>
      <div className='txt-box'>
        <motion.p
          variants={textSlideInFromLeft}
          initial='hidden'
          animate='show'
        >
          Coleman Traders (Pty) Ltd was registered in 2016, focusing on selling
          containers and plant hire/sales. Since the economy took it’s toll in
          2020, the director started focusing on small volume diesel deliveries
          which posed low risk. As he evolved in the industry, he identified a
          demand in the market for honest and reliable wholesale services.
          Thanks to dedicated staff led by Johnny, the company has been able to
          grow in both size and reputation.
        </motion.p>
      </div>
    </div>
  );
};

export default AboutTwo;
