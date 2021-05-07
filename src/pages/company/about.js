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
          <div class='left-big'>
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
          <div class='right-big'>
            <span>icon</span>
            <h2>Our Vision</h2>
            <p>
              Our key success factors are strategic focus, people, operations,
              marketing and finances. Depending on these factors we strive to be
              recognised as a premier Fuel Wholesale, Plant Hire and Containers
              distributing company in South Africa.
            </p>
          </div>
          <div class='middle'>
            <span>icon</span>
            <h2>Unique Approach</h2>
          </div>
          <div class='bottom-one'>
            <span>icon</span>
            <h2>The Why</h2>
            <p>
              Empower People Today to Build a Better Future for the Next
              Generation
            </p>
          </div>
          <div class='bottom-two'>
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
          <div class='bottom-three'>
            <span>icon</span>
            <h2>The What's</h2>
            <ul>
              <li>Identify & invest in improvement & development</li>
              <li>Delight our customers</li>
              <li>Honour our commitments</li>
              <li>Incorporate new technology</li>
              <li>Improve financial security</li>
            </ul>
          </div>
          <div class='bottom-four'>
            <span>icon</span>
            <h2>Core Values</h2>
            <ul>
              <li>Commitment to customers above all else</li>
              <li>We can generate profit without acting unethically</li>
              <li>Great just isn’t good enough</li>
              <li>Connect with transparency, dignity and respect</li>
              <li>Act with courage</li>
              <li>Awareness of social and physical environment</li>
              <li>We look beyond the present to deliver future value</li>
            </ul>
          </div>
        </div>
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.main`
  min-height: calc(100vh - 5rem);
  display: grid;
  place-items: center;
  margin-top: -5rem;

  .section-center {
    margin-top: 7rem;
  }

  .grid-container {
    display: flex;
    flex-direction: column;
    padding-top: 7rem;
  }

  div {
    text-align: center;
  }
  h1 {
    margin-top: 2rem;
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }

  @media (min-width: 800px) {
    .grid-container {
      padding-top: 7rem;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-template-rows: auto;
      gap: 0px 0px;
      grid-template-areas:
        'top top top top'
        'left-big left-big right-big right-big'
        'middle middle middle middle'
        'bottom-one bottom-two bottom-three bottom-four';
    }

    .top {
      grid-area: top;
    }

    .left-big {
      grid-area: left-big;
    }

    .right-big {
      grid-area: right-big;
    }

    .middle {
      grid-area: middle;
    }

    .bottom-one {
      grid-area: bottom-one;
    }

    .bottom-two {
      grid-area: bottom-two;
    }

    .bottom-three {
      grid-area: bottom-three;
    }

    .bottom-four {
      grid-area: bottom-four;
    }

    h1 {
      margin-top: 2rem;
      font-size: 4rem;
    }
  }
`;

export default About;
