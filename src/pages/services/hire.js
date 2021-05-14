import React from 'react';
import { Layout } from '../../components';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import SEO from '../../components/seo';

const Hire = (props) => {
  const path = props.location.pathname.slice(1);
  console.log('Sub Page Props:', props);
  return (
    <Layout>
      <Wrapper>
        <SEO title='Plant Hire' />
        <div className='info-box'>
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
          <ul>
            <li>Yellow machinery</li>
            <li>Water trucks</li>
            <li>Tipper trucks</li>
            <li>Forklifts</li>
            <li>Generators</li>
            <li>Lowbed</li>
            <li>Transportation services</li>
          </ul>
        </div>
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

const Wrapper = styled.main`
  margin-top: -5rem;
  min-height: calc(100vh - 5rem);
  display: flex;
  flex-direction: column-reverse;
  place-items: center;
  padding-top: 5rem;
  justify-content: center;
  .info-box {
    width: 30em;
    margin: 3em;
    ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      list-style: circle;
    }
    h1,
    p {
      margin-top: 2rem;
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
