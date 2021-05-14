import React from 'react';
import { Layout } from '../../components';
import styled from 'styled-components';
import SEO from '../../components/seo';

const Contact = (props) => {
  const path = props.location.pathname.slice(1);
  console.log('Sub Page Props:', props);
  return (
    <Layout>
      <Wrapper>
        <SEO title='Contact' />
        <div className='contact-wrapper'>
          <div className='info-box'>
            <h2>
              Contact <strong>Us</strong>
            </h2>
            <div>
              368 Main Street, Waterkloof, Pretoria, 0145
              <ul>
                <li>Office: 012 997 1801</li>
                <li>
                  <a href='mailto:johnny@colemantraders.co.za'>
                    <strong>Johnny Coleman</strong>
                  </a>
                  : 072 596 8362
                </li>
                <li>
                  <a href='mailto:anzel@colemantraders.co.za'>
                    <strong>Anzel Smit</strong>
                  </a>
                  : 084 738 0783
                </li>
                <li>
                  <a href='mailto:jonty@colemantraders.co.za'>
                    <strong>Jonty Pretorius</strong>
                  </a>
                  : 061 392 3343
                </li>
                <li>
                  <a href='mailto:lucille@colemantraders.co.za'>
                    <strong>Lucille Pretorius</strong>
                  </a>
                  : 074 158 7642
                </li>
              </ul>
            </div>
          </div>
          <div className='form-box'>
            <form
              name='contact'
              method='POST'
              data-netlify='true'
              action='/success'
            >
              <p>
                <label>
                  Your Name: <br />
                  <input type='text' name='name' />
                </label>
              </p>
              <p>
                <label>
                  Your Email: <br />
                  <input type='email' name='email' />
                </label>
              </p>
              <p>
                <label>
                  Message: <br />
                  <textarea rows='5' name='message'></textarea>
                </label>
              </p>
              <p>
                <button type='submit'>Send</button>
              </p>
            </form>
          </div>
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

  a {
    color: var(--clr-grey-1);
  }
  div {
    text-align: center;
  }
  h1 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
  .contact-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    button {
      cursor: pointer;
      background-color: var(--clr-grey-1);
      color: var(--clr-white);
      border: 0;
      padding: 1em;
    }
    .form-box {
      input,
      textarea {
        padding: 1em;
        margin: 0.5em;
      }
      p {
        margin: 0.2em;
      }
    }
    .info-box {
      h2 {
        /* margin-top: 2.5em; */
      }
    }
  }
  @media (min-width: 800px) {
    h1 {
      font-size: 4rem;
    }

    .contact-wrapper {
      display: flex;
      flex-direction: row;
      .info-box {
        width: 25em;

        h2 {
          margin: 1em 0;
        }
      }
      .form-box {
        width: 25em;
      }
    }
  }
`;

export default Contact;
