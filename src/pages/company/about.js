import React from 'react';
import { Layout } from '../../components';
import styled from 'styled-components';
const About = (props) => {
  // const path = props.location.pathname.slice(1);
  // console.log('Sub Page Props:', props);
  return (
    <Layout>
      <Wrapper>
        <div class='grid-container'>
          <div class='top'>
            <span>Icon</span>
            <h2>Director: Johnny Coleman</h2>
            <p>
              Coleman Traders (Pty) Ltd was registered in 2016, focusing on
              selling containers and plant hire/sales. Since the economy took
              it’s toll in 2020, the director started focusing on small volume
              diesel deliveries which posed low risk. As he evolved in the
              industry, he identified a demand in the market for honest and
              reliable wholesale services. Thanks to dedicated staff led by
              Johnny, the company has been able to grow in both size and
              reputation.
            </p>
          </div>
          <div class='left'>
            <span>icon</span>
            <h2>Our Mission</h2>
            <p>
              Coleman Traders (Pty) Ltd is dedicated to delivering effective,
              efficient, respectful services with integrity and accountability
              using all our proven innovative methods, and still expanding our
              knowledge to embrace the needs of a continuously changing
              industry. We proudly offer quality assurance, operational
              excellence and a fanatical concern for our customer’s needs whilst
              complying with all environmental and employee development
              responsibilities.
            </p>
          </div>
          <div class='right'>
            <span>icon</span>
            <h2>Our Vision</h2>
            <p>
              Our key success factors are strategic focus, people, operations,
              marketing and finances. Depending on these factors we strive to be
              recognised as a premier Fuel Wholesale, Plant Hire and Containers
              distributing company in South Africa.
            </p>
          </div>
        </div>
        <div class='grid-container-more'>
          <div class='top-more'>
            <span>icon</span>
            <h2>Unique Approach</h2>
          </div>
          <div class='more-info-one'>
            <span>icon</span>
            <h2>The Why</h2>
            <p>
              Empower People Today to Build a Better Future for the Next
              Generation
            </p>
          </div>
          <div class='more-info-two'>
            <span>icon</span>
            <h2>The Hows</h2>
            <ul>
              <li>Do the right thing, the first time - Always</li>
              <li>Lead by example, follow ethically</li>
              <li>Bring out the best in everyone</li>
              <li>Make them enquire again</li>
              <li>Embrace transparency</li>
              <li>Do it all in the spirit of Coleman Traders</li>
            </ul>
          </div>
          <div class='more-info-three'>
            <span>icon</span>
            <h2>The What's</h2>
            <li>Identify & invest in improvement & development</li>
            <li>Delight our customers</li>
            <li>Honour our commitments</li>
            <li>Incorporate new technology</li>
            <li>Improve financial security</li>
          </div>
        </div>
        <div>
          <span>icon</span>
          <h2>Core Values</h2>
          <li>Commitment to customers above all else</li>
          <li>We can generate profit without acting unethically</li>
          <li>Great just isn’t good enough</li>
          <li>Connect with transparency, dignity and respect</li>
          <li>Act with courage</li>
          <li>Awareness of social and physical environment</li>
          <li>We look beyond the present to deliver future value</li>
        </div>
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.main`
  background: var(--clr-primary-8);
  /* height: auto; */
  min-height: calc(100vh - 5rem);
  display: grid;
  place-items: center;
  margin-top: -5rem;

  .grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 0px 0px;
    grid-template-areas:
      'top top . .'
      'left right . .';
  }

  .top {
    grid-area: top;
  }

  .left {
    grid-area: left;
  }

  .right {
    grid-area: right;
  }

  .grid-container-more {
    display: grid;
    grid-template-columns: 1fr 1.1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 0px 0px;
    grid-template-areas:
      'top-more top-more top-more .'
      'more-info-one more-info-two more-info-three .';
  }

  .top-more {
    grid-area: top-more;
  }

  .more-info-one {
    grid-area: more-info-one;
  }

  .more-info-two {
    grid-area: more-info-two;
  }

  .more-info-three {
    grid-area: more-info-three;
  }

  .section-center {
    margin-top: 7rem;
  }

  div {
    text-align: center;
    color: var(--clr-white);
  }
  h1 {
    margin-top: 2rem;
    font-size: 2rem;
    color: var(--clr-primary-5);
    margin-bottom: 1.5rem;
  }
  @media (min-width: 800px) {
    h1 {
      margin-top: 2rem;
      font-size: 4rem;
    }
  }
`;

export default About;
