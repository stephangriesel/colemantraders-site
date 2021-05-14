import React from 'react';
import { Layout } from '../../components';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import SEO from '../../components/seo';

const Fuel = (props) => {
  const path = props.location.pathname.slice(1);
  console.log('Sub Page Props:', props);
  return (
    <Layout>
      <Wrapper>
        <SEO title='Fuel Services' />
        <div className='info-box'>
          <h2>
            Fuel Wholesale <strong>Services</strong>
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
          <div className='info-double'>
            <div className='info-double-left'>
              <ul>
                <span>{/* <strong>Products include:</strong> */}</span>
                <li>Diesel 50ppm</li>
                <li>Illuminating Paraffin</li>
                <li>FOL</li>
                <li>Petrol</li>
                <li>LSR</li>
                <li>Fluorine Gas</li>
                <li>LP Gas</li>
              </ul>
            </div>
            <div className='info-double-right'>
              <p>
                Our products and services are not limited. We also sell brand
                new and rebuilt tanks according to your requirements delivered
                to your site. This will include all accessories and equipment as
                per demand.
              </p>
            </div>
          </div>
        </div>
        <div className='image-box'>
          <StaticImage
            src='https://res.cloudinary.com/dvme554nj/image/upload/v1620187660/coleman/fuel.jpg'
            alt='fuel'
            height={400}
            placeholder='dominantColor'
            className='img-box-inner'
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
    .info-double {
      display: flex;
      flex-direction: column;
    }
  }
  .image-box {
    margin-top: 1em;
  }
  div {
    text-align: center;
  }
  h1 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
  @media (min-width: 800px) {
    display: flex;
    flex-direction: row;
    .info-box {
      .info-double {
        display: flex;
        flex-direction: row;
        margin: 2em 0;
        align-items: center;
        .info-double-left,
        .info-double-right {
          background: var(--clr-grey-2);
          width: 50%;
          padding: 0.5em;
          margin: 0.5em;
          border-radius: 0.5em;
        }
        p {
          margin-top: 0;
        }
      }
    }
    h1 {
      font-size: 4rem;
    }
    .image-box {
      margin-top: 0;
      .img-box-inner {
        /* border: var(--clr-grey-1) solid 1px; */
        border-radius: 1rem;
        /* transform: rotate(-2deg); */
        box-shadow: 10px 10px 5px grey;
      }
    }
  }
`;

export default Fuel;
