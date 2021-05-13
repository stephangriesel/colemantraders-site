import React from 'react';
import styled from 'styled-components';
import Title from './Title';
import services from '../constants/services';
import { Link } from 'gatsby';
const About = () => {
  return (
    <Wrapper className='section'>
      {/* <Title title='Services' /> */}
      <div className='section-center'>
        {services.map(({ id, icon, label, text }) => {
          return (
            <article key={id}>
              <span>{icon}</span>
              <h4>{label}</h4>
              <p>{text}</p>
            </article>
          );
        })}
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .section-center {
    margin-top: 4rem;
    display: grid;
    gap: 2rem;
    /* safari workaround */
    grid-gap: 2rem;
    .icon {
      font-size: 4rem;
      margin-bottom: 1rem;
    }
    h4 {
      text-transform: uppercase;
      font-weight: 500;
    }
    p {
      max-width: 35em;
    }
    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 992px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (min-width: 1200px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;
export default About;
