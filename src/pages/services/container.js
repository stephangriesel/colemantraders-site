import React, { useState } from 'react';
import { Layout } from '../../components';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import SEO from '../../components/seo';

import { motion } from 'framer-motion';
import { pageAnimation } from '../../animation';

const accordionData = {
  title: 'More Specifications',
  content_one: `Ablution Blocks`,
  content_two: `6m/12m Office blocks`,
  content_three: `6m/12m storage containers`,
  content_four: `Transportation`,
};

const {
  title,
  content_one,
  content_two,
  content_three,
  content_four,
} = accordionData;

const Container = (props) => {
  const path = props.location.pathname.slice(1);
  const [isActive, setIsActive] = useState(false);
  console.log('Sub Page Props:', props);
  return (
    <Layout>
      <Wrapper>
        <SEO title='Container Services' />
        <motion.div
          exit='exit'
          variants={pageAnimation}
          initial='hidden'
          animate='show'
          className='info-box'
        >
          <h2>
            Container <strong>Services</strong>
          </h2>
          <p>
            Coleman Traders (Pty) Ltd can assist you with the right solutions to
            fulfil your container needs. Our cost-effective rates is one of the
            many reasons why we flourish. We sell a wide variety of used
            containers. Due to our large transportation network, it enables us
            to deliver to all provinces at very attractive rates. We are able to
            load and offload on construction and mining sites thanks to our
            safety procedures and awareness. Our equipment, drivers and crane
            operators are certified at highly recommended testing facilities.
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
                  </ul>
                </div>
              )}
            </div>
          </div>
        </motion.div>
        <div className='image-box'>
          <div className='img-box-outer'>
            <StaticImage
              src='https://res.cloudinary.com/dvme554nj/image/upload/v1620105823/coleman/container_hpi8zy.jpg'
              alt='container'
              height={400}
              placeholder='dominantColor'
              className='img-box-inner fade-in'
            />
          </div>
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
    margin: 3em;
    ul {
      display: flex;
      flex-direction: column;
      list-style: circle;
      margin: 1em 3em;
    }
    li {
      text-align: left;
    }
    p {
      margin: 2rem;
      text-align: left;
      padding: 0 1.5rem;
    }

    .accordion {
      max-width: 90%;
      margin: 2rem auto;
      display: flex;
      flex-direction: column;

      .accordion-content {
        margin: 0 1.5rem;
        padding: 1rem;
        border-bottom: 1px solid #929292;
        border-right: 1px solid #929292;
        border-left: 1px solid #929292;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
      }
      .accordion-title {
        margin: 0 1.5rem;
        color: var(--clr-white);
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
      .accordion-item {
        flex-basis: 20px;
        flex-grow: 0;
        transition: flex-grow 2s ease-out;
        &.accordion-content {
          flex-grow: 1;
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

export default Container;
