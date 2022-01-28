import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import {DarkTheme} from './Theme';


import LogoComponent from '../subComponents/LogoComponent';
import PowerButton from '../subComponents/PowerButton';
import BigTitle from '../subComponents/BigTitlte'
import astronaut from '../assets/spaceman.png'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
overflow: hidden;
`
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }
`
const Spaceman = styled.div`
position: absolute;
top: 10%;
right: 5%;
width: 20vw;
animation: ${float} 4s ease infinite;
img{
    width: 100%;
    height: auto;
}
`
const Main =  styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
 backdrop-filter: blur(4px);

  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: 'Source Sans Pro', 'Karla';
`




const AboutPage = () => {
    return (
        <ThemeProvider theme={DarkTheme}>
<Box>

<LogoComponent theme='dark'/>
<PowerButton />

        <Spaceman>
            <img src={astronaut} alt="spaceman" />
        </Spaceman>
        <Main>
        I'm a Front end developer A Competitive Programmer and a UI Designer, I am learning full-stack development.
<br /> <br/>
I like to create websites using React JS, CSS, and Bootstrap, I can create responsive websites using CSS or Bootstrap. I also do open-source, I have 3000+ Commits in the year 2021 in GitHub.
<br/> <br/>
I have completed Internship at Crediometer in 2021, as a Front end developer, I used React JS + CSS + HTML + Bootstrap, 18 September - 12 January.
        </Main>

        <BigTitle text="ABOUT" top="10%" left="5%" />


        </Box>

        </ThemeProvider>

    )
}

export default AboutPage;