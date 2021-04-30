import React from 'react';
import { Layout } from '../../components';
import styled from 'styled-components';
import Title from '../../components/Title';
import about from '../../constants/about';
// import { Link } from 'gatsby';
const About = (props) => {
  // const path = props.location.pathname.slice(1);
  // console.log('Sub Page Props:', props);
  return (
    <Layout>
      <Wrapper className='about'>
        <div className='section-center'>
          <Title title='About Us' />
          {about.map(({ id, icon, label, text }) => {
            return (
              <article key={id}>
                <span>{icon}</span>
                <h4>{label}</h4>
                <p>{text}</p>
              </article>
            );
          })}
        </div>
        <div>
          <span>Icon</span>
          <h4>Unique Approach</h4>
          <div>
            The Why:
            <ul>
              <li>
                Empower People Today to Build a Better Future for the Next
                Generation
              </li>
            </ul>
          </div>
          <div>
            The Hows:
            <ul>
              <li>Do the right thing, the first time - Always</li>
              <li>Lead by example, follow ethically</li>
              <li>Bring out the best in everyone</li>
              <li>Make them enquire again</li>
              <li>Embrace transparency</li>
              <li>Do it all in the spirit of Coleman Traders</li>
            </ul>
          </div>
          <div>
            The Whats:
            <ul>
              <li>Identify & invest in improvement & development</li>
              <li>Delight our customers</li>
              <li>Honour our commitments</li>
              <li>Incorporate new technology</li>
              <li>Improve financial security</li>
            </ul>
          </div>
        </div>
        <div>
          <span>Icon</span>
          <h4>Core Values</h4>
          <div>
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
  background: var(--clr-primary-8);
  height: auto;
  min-height: calc(100vh - 5rem);
  display: grid;
  place-items: center;
  margin-top: -5rem;

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
