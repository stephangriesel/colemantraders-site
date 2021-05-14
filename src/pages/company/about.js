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
          <div className='image-block'>
            {/* <StaticImage
              src='../../images/excavator.jpg'
              alt='excavators'
              placeholder='tracedSVG'
              layout='fullWidth'
              className='top-img'
            ></StaticImage> */}
          </div>
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
            <div>
              <h3>
                Our <strong>Mission</strong>
              </h3>
              <p>
                Coleman Traders (Pty) Ltd is dedicated to delivering effective,
                efficient, respectful services with integrity and accountability
                using all our proven innovative methods, and still expanding our
                knowledge to embrace the needs of a continuously changing
                industry. We proudly offer quality assurance, operational
                excellence and a fanatical concern for our customer’s needs
                whilst complying with all environmental and employee development
                responsibilities.
              </p>
            </div>
            <div>
              <h3>
                Our <strong>Vision</strong>
              </h3>
              <p>
                Our key success factors are strategic focus, people, operations,
                marketing and finances. Depending on these factors we strive to
                be recognised as a premier Fuel Wholesale, Plant Hire and
                Containers distributing company in South Africa.
              </p>
            </div>
            <div>
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
            <div>
              <h3>
                The <strong>Why</strong>
              </h3>
              <p>
                Empower People Today to Build a Better Future for the Next
                Generation
              </p>
            </div>
            <div>
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
            <div>
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
        </div>
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.main`
  min-height: calc(100vh - 5rem);
  margin-top: -5rem;
  margin: 0 10em;
  .about-wrapper {
    /* margin-top: 7em; */
    .image-block {
      /* height: 400px; */
      /* position: relative; */
    }
    .overlay {
      /* position: absolute; */
      height: 100%;
      width: 100%;
      background-color: rgba(255, 255, 255, 0.5);
    }
    .overlay::after {
    }
    .top-box {
      background: rgba(255, 255, 255, 0.8);
      display: flex;
      flex-direction: column;
      .img-box {
        text-align: center;
        margin: 2em;
        .border-radius-50 {
          border-radius: 50%;
        }
      }
      .txt-box {
        display: flex;
        align-items: center;
        p {
          margin: 1em 2em;
        }
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
          .border-radius-50 {
            border-radius: 50%;
          }
        }
        .txt-box {
        }
      }
    }
  }
`;

export default About;
