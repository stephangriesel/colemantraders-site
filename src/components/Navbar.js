import React, { useContext } from 'react';
import styled from 'styled-components';
import logo from '../images/logo2.png';
import { GoThreeBars } from 'react-icons/go';
import { Link } from 'gatsby';
import NavLink from './NavLink';
import { GatsbyContext } from '../context/context';

const Navbar = () => {
  const { isSidebarOpen, showSidebar, links } = useContext(GatsbyContext);
  const tempLinks = [
    ...new Set(
      links.map((link) => {
        return link.page;
      })
    ),
  ];
  console.log('Check temp links:', tempLinks);
  return (
    <Wrapper>
      <div className='nav-center'>
        <div className='nav-header'>
          <Link to='/'>
            <div className='logo'>
              <img src={logo} />
              {/* <h2>Coleman Traders</h2> */}
            </div>
          </Link>
          {!isSidebarOpen && (
            <button className='toggle-btn' onClick={showSidebar}>
              <GoThreeBars />
            </button>
          )}
        </div>
        <ul className='nav-links'>
          {tempLinks.map((page, index) => {
            return <NavLink key={index} page={page} />;
          })}
        </ul>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  position: relative;
  background: var(--clr-grey-1);
  z-index: 1;
  height: 7rem;
  display: flex;
  align-items: center;
  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    .logo {
      display: flex;

      img {
        width: 10em;
        height: 3.5em;
      }
      h2 {
        display: flex;
        margin: 0;
        padding: 0;
        align-items: center;
      }
    }
    h2 {
      color: var(--clr-white);
    }
    color: var(--clr-grey-1);
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: auto;
    }
    .toggle-btn {
      width: 3.5rem;
      height: 2.25rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      border-radius: 2rem;
      border: transparent;
      color: var(--clr-white);
      background: var(--clr-grey-3);
      cursor: pointer;
      transition: var(--transition);
      &:hover {
        background: #f6b419;
      }
    }
  }
  .nav-links {
    display: none;
  }
  @media (min-width: 800px) {
    .nav-header {
      .toggle-btn {
        display: none;
      }
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 0 2rem;
      grid-gap: 0 20rem;
      align-items: center;
    }
    .nav-links {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      max-width: 500px;
    }
    li {
      padding: 1rem 0;
      position: relative;
    }
    button {
      color: var(--clr-white);
      background: transparent;
      border: transparent;
      font-size: 1rem;
      letter-spacing: 2px;
      font-weight: 500;
      padding: 10px 20px;
      width: 100%;
      text-transform: capitalize;
      position: relative;
    }
  }
`;

export default Navbar;
