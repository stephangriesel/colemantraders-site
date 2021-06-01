import React, { useState } from 'react';
import { Layout } from '../../components';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import SEO from '../../components/seo';

import { motion } from 'framer-motion';
import { pageAnimation } from '../../animation';

const accordionData = {
  title: 'More Specifications',
  content_one: `Diesel 50ppm`,
  content_two: `Illuminating Paraffin`,
  content_three: `FOL`,
  content_four: `Petrol`,
  content_five: `LSR`,
  content_six: `Fluorine Gas`,
  content_seven: `LP Gas`,
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

const Fuel = (props) => {
  const path = props.location.pathname.slice(1);
  const [isActive, setIsActive] = useState(false);
  console.log('Sub Page Props:', props);
  return (
    <Layout>
      <Wrapper>
        <SEO title='Fuel Services' />
        <motion.div
          exit='exit'
          variants={pageAnimation}
          initial='hidden'
          animate='show'
          className='info-box'
        >
          <h2>
            Fuel <strong>Services</strong>
          </h2>
          <p>
            Focusing on 40 000l best quality product deliveries at a time, we
            are enabled and driven to provide 100% reliable personal service due
            to our professionally trained team working 24/7. Our magnificent
            growth in a short amount of time since entering the market proofs
            our success rate, leading the way in fuel wholesale distribution at
            very competitive delivery prices, since sourcing directly from
            several major fuel refineries . We strongly believe to support local
            communities and individuals, considering and following all
            environmental, safety and legislative factors and procedures.
            Deliveries are based all over South Africa.
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
          <p>
            Our products and services are not limited. We also sell brand new
            and rebuilt tanks according to your requirements delivered to your
            site. This will include all accessories and equipment as per demand.
          </p>
        </motion.div>
        <div className='image-box'>
          <StaticImage
            src='https://res.cloudinary.com/dvme554nj/image/upload/v1620187660/coleman/fuel.jpg'
            alt='fuel'
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
    h1,
    p {
      text-align: left;
      margin: 2em;
      padding: 0 1.5rem;
    }

    .accordion {
      max-width: 90%;
      margin: 2rem auto;
      transition: ease-in-out 1s;
      .accordion-content {
        margin: 0 1.5rem;
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

    p {
      margin: 2em 1em;
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
      margin-top: 2em;
    }
    .info-box {
      p {
        margin-top: 2em;
      }
    }
  }
`;

export default Fuel;
