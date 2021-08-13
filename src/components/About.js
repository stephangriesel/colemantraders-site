import React from 'react';
import styled from 'styled-components';
import services from '../constants/services';

// https://reactjs.org/docs/forwarding-refs.html
const About = React.forwardRef((props, ref) => {
  return (
    <Wrapper className='section'>
      <div className='section-center'>
        {services.map(({id, icon, label, text}) => {
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
});
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
