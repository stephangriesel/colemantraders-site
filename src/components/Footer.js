import React from 'react';
import styled from 'styled-components';
const Footer = () => {
  return (
    <Wrapper>
      <p>
        Coleman Traders &copy; {new Date().getFullYear()} | Created & Hosted by{' '}
        <a href='https://www.consulitate.com'>Consulitate</a>
      </p>
    </Wrapper>
  );
};
const Wrapper = styled.footer`
  height: 5rem;
  display: grid;
  place-items: center;
  background: var(--clr-grey-1);
  text-align: center;
  padding: 1rem;
  a {
    color: #fff;
  }
  p {
    color: var(--clr-white);
    margin-bottom: 0;
    @media (max-width: 576px) {
      font-size: 0.75rem;
    }
  }
`;
export default Footer;
