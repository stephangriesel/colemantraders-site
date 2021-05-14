import React from 'react';
import { Layout } from '../../components';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import SEO from '../../components/seo';

const Container = (props) => {
  const path = props.location.pathname.slice(1);
  console.log('Sub Page Props:', props);
  return (
    <Layout>
      <Wrapper>
        <SEO title='Container Services' />
        <div className='info-box'>
          <h2>
            Container <strong>Services</strong>
          </h2>
          <p>
            Coleman Traders (Pty) Ltd can assist you with the right solutions to
            fulfil your container needs. Our cost-effective rates is one of the
            many reasons why we flourish. We sell a wide variety of used
            containers. Due to our large transportation network, it enables us
            to deliver to all provinces at very attractive rates. We are able to
            load and offload on construction and mining sites thanks to our
            safety procedures and awareness. Our equipment, drivers and crane
            operators are certified at highly recommended testing facilities.
          </p>
          <ul>
            <li>Ablution Blocks</li>
            <li>6m/12m Office blocks</li>
            <li>6m/12m storage containers</li>
            <li>Transportation</li>
          </ul>
          {/* <Link to='/' className='btn'>
            Container
          </Link> */}
        </div>
        <div className='image-box'>
          <div className='img-box-outer'>
            <StaticImage
              src='https://res.cloudinary.com/dvme554nj/image/upload/v1620105823/coleman/container_hpi8zy.jpg'
              alt='container'
              height={400}
              placeholder='dominantColor'
              className='img-box-inner'
            />
          </div>
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
    h1,
    p {
      margin-top: 2rem;
    }
  }
  .image-box {
    margin-top: 1em;
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
    margin-bottom: 1.5rem;
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

export default Container;
