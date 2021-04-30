import React from 'react';
import { Layout } from '../../components';
import styled from 'styled-components';
import { Link } from 'gatsby';
const Fuel = (props) => {
  const path = props.location.pathname.slice(1);
  console.log('Sub Page Props:', props);
  return (
    <Layout>
      <Wrapper>
        <div>
          <h1>Fuel Wholesale Services</h1>
          {/* <Link to='/' className='btn'>
            Fuel
          </Link> */}
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
            Deliveries are based all over South Africa. Products include:
          </p>
          <ul>
            <li>Diesel 50ppm</li>
            <li>Illuminating Paraffin</li>
            <li>FOL</li>
            <li>Petrol</li>
            <li>LSR</li>
            <li>Fluorine Gas</li>
            <li>LP Gas</li>
          </ul>
          <p>
            Our products and services are not limited. We also sell brand new
            and rebuilt tanks according to your requirements delivered to your
            site. This will include all accessories and equipment as per demand.
          </p>
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

export default Fuel;
