import React from 'react';
import { Layout } from '../../components';
import styled from 'styled-components';
import { Link } from 'gatsby';
const Hire = (props) => {
  const path = props.location.pathname.slice(1);
  console.log('Sub Page Props:', props);
  return (
    <Layout>
      <Wrapper>
        <div>
          <h1>Plant Hire</h1>
          {/* <Link to='/' className='btn'>
            Hire
          </Link> */}
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
            <li>
              Yellow machinery (Rollers, Graders, Excavators, TLB’s, ADT’s,
              Front End Loaders, etc.)
            </li>
            <li>Water trucks</li>
            <li>Tipper trucks</li>
            <li>Forklifts</li>
            <li>Generators</li>
            <li>Lowbed</li>
            <li>Transportation services</li>
          </ul>
        </div>
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.main`
  margin-top: -5rem;
  background: var(--clr-primary-8);
  min-height: calc(100vh - 5rem);
  display: grid;
  place-items: center;

  div {
    text-align: center;
    color: var(--clr-white);
  }
  h1 {
    font-size: 2rem;
    color: var(--clr-primary-5);
    margin-bottom: 1.5rem;
  }
  @media (min-width: 800px) {
    h1 {
      font-size: 4rem;
    }
  }
`;

export default Hire;
