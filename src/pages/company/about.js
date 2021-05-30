import React from 'react';
import { Layout } from '../../components';
import AboutIntro from '../../components/AboutIntro';
import AboutOne from '../../components/AboutOne';
import AboutTwo from '../../components/AboutTwo';
import AboutThree from '../../components/AboutThree';
import AboutFour from '../../components/AboutFour';
import AboutFive from '../../components/AboutFive';
import AboutSix from '../../components/AboutSix';
import styled from 'styled-components';
import SEO from '../../components/seo';
import { motion } from 'framer-motion';
import { useScroll } from '../../components/useScroll';

const About = (props) => {
  const [element, controls] = useScroll();
  const container = {
    hidden: {
      x: 5,
    },
    show: {
      x: 0,
      transition: {
        duration: 1.75,
        ease: 'easeOut',
        staggerChildren: 1,
        when: 'afterChildren',
      },
    },
  };

  return (
    <Layout>
      <Wrapper>
        <SEO title='About Us' />
        <motion.div initial='show' className='about-wrapper'>
          <div className='overlay'>
            {/* <AboutIntro initial='hidden' ref={element} animate={controls} /> */}
            <AboutOne initial='hidden' ref={element} animate={controls} />
            <AboutTwo initial='hidden' ref={element} animate={controls} />
            <AboutThree initial='hidden' ref={element} animate={controls} />
            <AboutFour initial='hidden' ref={element} animate={controls} />
            <AboutFive initial='hidden' ref={element} animate={controls} />
            <AboutSix initial='hidden' ref={element} animate={controls} />
            <div className='spacer'></div>
          </div>
        </motion.div>
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled(motion.main)`
  min-height: calc(100vh - 5rem);
  margin-top: -5rem;
  margin: 0 2em;
  .about-wrapper {
    margin-top: 3em;
    .image-block {
      /* height: 400px; */
      /* position: relative; */
    }
    .top-box {
      height: 80vh;
      background: rgba(255, 255, 255, 0.8);
      display: flex;
      flex-direction: column;
      .img-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        align-content: center;
        margin: 2em;
        width: 100%;
        .border-radius-50 {
          border-radius: 50%;
        }
      }
      .txt-box {
        width: 100%;
        display: flex;
        align-self: center;
        margin: 2em;
      }
    }
    .two-column {
      /* height: 100vh; */
      display: flex;
      flex-direction: column;
      .img-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        align-content: center;
        width: 100%;
      }
      .txt-box {
        width: 100%;
        display: flex;
        flex-direction: column;
        margin: 2em 0;
        h3 {
          margin: 0.5rem 2rem;
        }
        p,
        ul {
          margin: 0 2rem;
        }
      }
    }
    .two-column-alt {
      /* height: 100vh; */
      display: flex;
      flex-direction: column-reverse;
      .img-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        align-content: center;
        width: 100%;
      }
      .txt-box {
        width: 100%;
        display: flex;
        flex-direction: column;
        margin: 2em 0;
        h3 {
          margin: 0.5rem 2rem;
        }
        p,
        ul {
          margin: 0 2rem;
        }
      }
    }
  }

  .spacer {
    margin: 5em 0;
  }

  @media (min-width: 800px) {
    .about-wrapper {
      .image-block {
      }
      .overlay {
      }
      .overlay::after {
      }
      .top-box {
        display: flex;
        flex-direction: row;
        .img-box {
          width: 50%;
          .border-radius-50 {
            border-radius: 50%;
          }
        }
        .txt-box {
          width: 50%;
        }
      }
      .two-column {
        display: flex;
        flex-direction: row;
        .img-box {
          width: 50%;
        }
        .txt-box {
          display: flex;
          align-self: center;
          width: 50%;
        }
      }
      .two-column-alt {
        display: flex;
        flex-direction: row;
        .img-box {
          width: 50%;
        }
        .txt-box {
          display: flex;
          align-self: center;
          height: auto;
          width: 50%;
        }
      }
    }
  }
`;

export default About;
