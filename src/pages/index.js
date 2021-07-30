import React from 'react';
import {graphql} from 'gatsby';
import {
  Layout,
  Hero,
  About,
  // Projects,
  // Survey,
  // Slider,
  // GridProjects,
} from '../components';
import SEO from '../components/seo';
const HomePage = ({data}) => {
  console.log('Query Data:', data);
  const {
    allAirtable: {nodes: projects},
  } = data;
  return (
    <Layout>
      <SEO title='Home' />
      <Hero projects={projects} />
      <About />
      {/* <GridProjects projects={projects} title='' /> */}
      {/* <Survey /> */}
      {/* <Slider /> */}
    </Layout>
  );
};

export const query = graphql`
  {
    allAirtable(
      filter: {table: {eq: "Projects"}}
      limit: 8
      sort: {fields: data___date, order: DESC}
    ) {
      nodes {
        id
        data {
          date
          name
          type
          image {
            localFiles {
              childImageSharp {
                fluid(maxWidth: 1200, maxHeight: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default HomePage;
