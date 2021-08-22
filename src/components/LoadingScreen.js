import React from 'react';
import styled from 'styled-components';

const LoadingScreen = () => {
  return (
    <Loading>
      <div className='load-wrapper'></div>
    </Loading>
  );
};

const Loading = styled.nav`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .load-wrapper {
    width: 4em;
    height: 4em;
    border-radius: 4em;
    background-color: #fbb03f;
    outline: 1px solid transparent;
    animation: pulseanim 1.2s ease-in-out infinite;
  }

  @keyframes pulseanim {
    0% {
      transform: scale(0);
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 0;
    }
  }
  img {
    width: 5em;
  }
`;

export default LoadingScreen;
