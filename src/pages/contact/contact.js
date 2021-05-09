import React from 'react';
import { Layout } from '../../components';
import styled from 'styled-components';
import { Link } from 'gatsby';
const Contact = (props) => {
  const path = props.location.pathname.slice(1);
  console.log('Sub Page Props:', props);
  return (
    <Layout>
      <Wrapper>
        <div>
          {/* <h1>{path}</h1> */}
          <p>
            368 Main Street, Waterkloof, Pretoria, 0145
            <ul>
              <li>Office: 012 997 1801</li>
              <li>
                Johnny Coleman: 072 596 8362 /
                <a href='mailto:johnny@colemantraders.co.za'>
                  johnny@colemantraders.co.za
                </a>
              </li>
              <li>
                Anzel Smit: 084 738 0783 /
                <a href='mailto:anzel@colemantraders.co.za'>
                  anzel@colemantraders.co.za
                </a>
              </li>
              <li>
                Jonty Pretorius: 061 392 3343 /
                <a href='mailto:jonty@colemantraders.co.za'>
                  jonty@colemantraders.co.za
                </a>
              </li>
              <li>
                Lucille Pretorius: 074 158 7642 /
                <a href='mailto:lucille@colemantraders.co.za'>
                  lucille@colemantraders.co.za
                </a>
              </li>
            </ul>
          </p>
          {/* <Link to='/' className='btn'>
            Go
          </Link> */}
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

export default Contact;
