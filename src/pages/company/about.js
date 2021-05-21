import React from 'react';
import { Layout } from '../../components';
import styled from 'styled-components';
import SEO from '../../components/seo';
import { StaticImage } from 'gatsby-plugin-image';

const About = (props) => {
  // const path = props.location.pathname.slice(1);
  // console.log('Sub Page Props:', props);
  return (
    <Layout>
      <Wrapper>
        <SEO title='About Us' />
        <div className='about-wrapper'>
          <div className='overlay'>
            <div className='top-box'>
              <div className='img-box'>
                <StaticImage
                  src='../../images/company/director.png'
                  alt='excavators'
                  placeholder='tracedSVG'
                  width={800}
                  className='border-radius-50'
                ></StaticImage>
                <h4>Johnny Coleman</h4>
              </div>
              <div className='txt-box'>
                <p>
                  Coleman Traders (Pty) Ltd was registered in 2016, focusing on
                  selling containers and plant hire/sales. Since the economy
                  took it’s toll in 2020, the director started focusing on small
                  volume diesel deliveries which posed low risk. As he evolved
                  in the industry, he identified a demand in the market for
                  honest and reliable wholesale services. Thanks to dedicated
                  staff led by Johnny, the company has been able to grow in both
                  size and reputation.
                </p>
              </div>
            </div>
            <div className='two-column-alt'>
              <div className='txt-box'>
                <h3>
                  Our <strong>Mission</strong>
                </h3>
                <p>
                  Coleman Traders (Pty) Ltd is dedicated to delivering
                  effective, efficient, respectful services with integrity and
                  accountability using all our proven innovative methods, and
                  still expanding our knowledge to embrace the needs of a
                  continuously changing industry. We proudly offer quality
                  assurance, operational excellence and a fanatical concern for
                  our customer’s needs whilst complying with all environmental
                  and employee development responsibilities.
                </p>
              </div>
              <div className='img-box'>
                <StaticImage
                  src='../../images/company/director.png'
                  alt='excavators'
                  placeholder='tracedSVG'
                  width={800}
                  className='border-radius-50'
                ></StaticImage>
              </div>
            </div>
            <div className='two-column'>
              <div className='img-box'>
                <StaticImage
                  src='../../images/company/director.png'
                  alt='excavators'
                  placeholder='tracedSVG'
                  width={800}
                  className='border-radius-50'
                ></StaticImage>
              </div>
              <div className='txt-box'>
                <h3>
                  Our <strong>Vision</strong>
                </h3>
                <p>
                  Our key success factors are strategic focus, people,
                  operations, marketing and finances. Depending on these factors
                  we strive to be recognised as a premier Fuel Wholesale, Plant
                  Hire and Containers distributing company in South Africa.
                </p>
              </div>
            </div>
            <div className='two-column-alt'>
              <div className='txt-box'>
                <h3>
                  Core <strong>Values</strong>
                </h3>
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
              <div className='img-box'>
                <StaticImage
                  src='../../images/company/director.png'
                  alt='excavators'
                  placeholder='tracedSVG'
                  width={800}
                  className='border-radius-50'
                ></StaticImage>
              </div>
            </div>
            <div className='two-column'>
              <div className='img-box'>
                <StaticImage
                  src='../../images/company/director.png'
                  alt='excavators'
                  placeholder='tracedSVG'
                  width={800}
                  className='border-radius-50'
                ></StaticImage>
              </div>
              <div className='txt-box'>
                <h3>
                  The <strong>Why</strong>
                </h3>
                <p>
                  Empower People Today to Build a Better Future for the Next
                  Generation
                </p>
              </div>
            </div>
            <div className='two-column-alt'>
              <div className='txt-box'>
                <h3>
                  The <strong>Hows</strong>
                </h3>
                <ul>
                  <li>Do the right thing, the first time - Always</li>
                  <li>Lead by example, follow ethically</li>
                  <li>Bring out the best in everyone</li>
                  <li>Make them enquire again</li>
                  <li>Embrace transparency</li>
                  <li>Do it all in the spirit of Coleman Traders</li>
                </ul>
              </div>
              <div className='img-box'>
                <StaticImage
                  src='../../images/company/director.png'
                  alt='excavators'
                  placeholder='tracedSVG'
                  width={800}
                  className='border-radius-50'
                ></StaticImage>
              </div>
            </div>
            <div className='two-column'>
              <div className='img-box'>
                <StaticImage
                  src='../../images/company/director.png'
                  alt='excavators'
                  placeholder='tracedSVG'
                  width={800}
                  className='border-radius-50'
                ></StaticImage>
              </div>
              <div className='txt-box'>
                <h3>
                  The <strong>What's</strong>
                </h3>
                <ul>
                  <li>Identify & invest in improvement & development</li>
                  <li>Delight our customers</li>
                  <li>Honour our commitments</li>
                  <li>Incorporate new technology</li>
                  <li>Improve financial security</li>
                </ul>
              </div>
            </div>
            <div></div>
            <div></div>
          </div>
        </div>
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.main`
  min-height: calc(100vh - 5rem);
  margin-top: -5rem;
  margin: 0 2em;
  .about-wrapper {
    margin-top: 3em;
    .image-block {
      /* height: 400px; */
      /* position: relative; */
    }
    .top-box {
      background: rgba(255, 255, 255, 0.8);
      display: flex;
      flex-direction: column;
      .img-box {
        text-align: center;
        margin: 2em;
        width: 100%;
        .border-radius-50 {
          border-radius: 50%;
        }
      }
      .txt-box {
        width: 100%;
        display: flex;
        align-self: center;
        margin: 2em;
      }
    }
    .two-column {
      display: flex;
      flex-direction: column;
      .img-box {
        width: 100%;
      }
      .txt-box {
        width: 100%;
        display: flex;
        flex-direction: column;
        margin: 2em 0;
      }
    }
    .two-column-alt {
      display: flex;
      flex-direction: column-reverse;
      .img-box {
        width: 100%;
      }
      .txt-box {
        width: 100%;
        display: flex;
        flex-direction: column;
        margin: 2em 0;
      }
    }
  }

  @media (min-width: 800px) {
    .about-wrapper {
      .image-block {
      }
      .overlay {
      }
      .overlay::after {
      }
      .top-box {
        display: flex;
        flex-direction: row;
        .img-box {
          width: 50%;
          .border-radius-50 {
            border-radius: 50%;
          }
        }
        .txt-box {
          width: 50%;
        }
      }
      .two-column {
        display: flex;
        flex-direction: row;
        .img-box {
          width: 50%;
        }
        .txt-box {
          display: flex;
          align-self: center;
          width: 50%;
        }
      }
      .two-column-alt {
        display: flex;
        flex-direction: row;
        .img-box {
          width: 50%;
        }
        .txt-box {
          display: flex;
          align-self: center;
          height: auto;
          width: 50%;
        }
      }
    }
  }
`;

export default About;
