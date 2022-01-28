import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Github } from '../components/AllSvgs';

const Icons = styled.div`
display: flex;
flex-direction: column;
align-items: center;

position; fixed;
bottom: 0;
left: 2rem;

z-index: 3;
`

const SocialIcons = () => {
  return (
      <Icons>
          <div>
              <Link to="/">
                  <Github width={25} height={25} fill="currentColor" />
              </Link>
          </div>
      </Icons>
  );
};

export default SocialIcons;