import React from 'react';
import { Layout } from '../../components';
import styled from 'styled-components';
import { Link } from 'gatsby';
const News = (props) => {
  const path = props.location.pathname.slice(1);
  console.log('Sub Page Props:', props);
  return (
    <Layout>
      <Wrapper>
        <div>
          <h1>{path}</h1>
          <Link to='/' className='btn'>
            News
          </Link>
        </div>
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.main`
  margin-top: -5rem;
  min-height: calc(100vh - 5rem);
  display: grid;
  place-items: center;

  div {
    text-align: center;
  }
  h1 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
  @media (min-width: 800px) {
    h1 {
      font-size: 4rem;
    }
  }
`;

export default News;
