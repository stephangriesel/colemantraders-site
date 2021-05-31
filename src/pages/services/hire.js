import React, { useState } from 'react';
import { Layout } from '../../components';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import SEO from '../../components/seo';

import { motion } from 'framer-motion';
import { pageAnimation } from '../../animation';

const accordionData = {
  title: 'More Specifications',
  content_one: `Yellow machinery`,
  content_two: `Water trucks`,
  content_three: `Tipper trucks`,
  content_four: `Forklifts`,
  content_five: `Generators`,
  content_six: `Lowbed`,
  content_seven: `Transportation services`,
};

const {
  title,
  content_one,
  content_two,
  content_three,
  content_four,
  content_five,
  content_six,
  content_seven,
} = accordionData;

const Hire = (props) => {
  const path = props.location.pathname.slice(1);
  const [isActive, setIsActive] = useState(false);
  console.log('Sub Page Props:', props);
  return (
    <Layout>
      <Wrapper>
        <SEO title='Plant Hire' />
        <motion.div
          exit='exit'
          variants={pageAnimation}
          initial='hidden'
          animate='show'
          className='info-box'
        >
          <h2>
            Plant <strong>Hire</strong>
          </h2>
          <p>
            With over 10 years of experience, Coleman Traders (Pty) Ltd can
            confidently offer innovative solutions for any construction and
            mining Plant Hire requirements. We work 24/7 365 days. With
            committed customer service and dedication to 100% reliability, we
            can assure our clients that we can make contracts and tenders look
            effortless. Maintenance teams are on standby to ensure maximum
            production. Other measures such as spare wheels and other wear &
            tear items can be held on site for timeously recoveries on
            breakdowns.
          </p>
          <div className='accordion'>
            <div className='accordion-item'>
              <div
                className='accordion-title'
                onClick={() => setIsActive(!isActive)}
              >
                <div>{title}</div>
                <div>{isActive ? '-' : '+'}</div>
              </div>
              {isActive && (
                <div className='accordion-content'>
                  <ul>
                    <li>{content_one}</li>
                    <li>{content_two}</li>
                    <li>{content_three}</li>
                    <li>{content_four}</li>
                    <li>{content_five}</li>
                    <li>{content_six}</li>
                    <li>{content_seven}</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </motion.div>
        <div className='image-box'>
          <StaticImage
            src='https://res.cloudinary.com/dvme554nj/image/upload/v1620189044/planthire.jpg'
            alt='plant hire'
            height={400}
            placeholder='dominantColor'
            className='img-box-inner fade-in'
          />
        </div>
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled(motion.main)`
  margin-top: -5rem;
  min-height: calc(100vh - 5rem);
  display: flex;
  flex-direction: column-reverse;
  place-items: center;
  padding-top: 5rem;
  justify-content: center;
  overflow-x: hidden;
  .info-box {
    width: 30em;
    margin: 3em 3em;
    ul {
      display: flex;
      flex-direction: column;
      list-style: circle;
      margin: 1em 3em;
    }
    li {
      text-align: left;
    }
    h1,
    p {
      margin: 2em 2em;
      text-align: left;
      padding: 0 1.5rem;
    }

    .accordion {
      max-width: 90%;
      margin: 2rem auto;
      transition: ease-in-out 1s;
      .accordion-content {
        padding: 1rem;
      }
      .accordion-content {
        border-bottom: 1px solid #929292;
        border-right: 1px solid #929292;
        border-left: 1px solid #929292;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        transition: ease-in-out 1s;
      }
      .accordion-title {
        margin: 0 1.5rem;
        color: var(--clr-white);
        transition: ease-in-out 0.5s;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        cursor: pointer;
        background: var(--clr-grey-1);
        padding: 1rem;
        &:hover {
          background-color: var(--clr-grey-1);
        }
      }
    }
  }
  .image-box {
    margin: 1em 1em;
    .img-box-inner {
      /* border: var(--clr-grey-1) solid 1px; */
      border-radius: 1rem;
      /* transform: rotate(-2deg); */
      box-shadow: 10px 10px 5px grey;
    }
  }
  div {
    text-align: center;
  }
  h1 {
    font-size: 2rem;
    color: var(--clr-primary-5);
    margin-bottom: 1.5rem;
  }

  // Animations

  .fade-in {
    animation: fadeIn ease 2s;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @media (min-width: 800px) {
    display: flex;
    flex-direction: row;
    h1 {
      font-size: 4rem;
    }
    .image-box {
      margin-top: 0;
    }
  }
`;

export default Hire;
