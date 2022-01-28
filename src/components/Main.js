import React, { useState } from 'react';
import { motion } from 'framer-motion'
import styled, { keyframes } from 'styled-components';
import LogoComponent from '../subComponents/LogoComponent';
import PowerButton from '../subComponents/PowerButton';
import { Link } from "react-router-dom";
import YinYang from '../components/AllSvgs';
import Intro from './Intro';
const MainContainer = styled.div`
background: ${props => props.theme.body};
width: 100vw;
height: 100vh;
overflow: hidden;
positon: relative;
h2,h3,h4,h5,h6 {
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 500;
}
`

const Container = styled.div`
padding: 2rem;
`

const Contact = styled(Link)`
color: ${props => props.theme.text};
position: absolute;
top: 2.2rem;
right: 2vw;
text-decoration: none;
z-index: 3;
`

const Work = styled(Link)`
color: ${props => props.click ? props.theme.body : props.theme.text};
position: absolute;
top: 50%;
left: 2vw;
transform: translate(-50%, -50%) rotate(-90deg);
text-decoration: none;
z-index: 1;
`

const About = styled(Link)`
color: ${props => props.theme.text};
position: absolute;
top: 50%;
right: 2vw;
transform: rotate(90deg) translate(-50%, -50%);
text-decoration: none;
z-index: 1;
`

const BottomBar = styled.div`
position: absolute;
bottom: 1rem;
left: 0;
right: 0;
width: 100%;

display: flex;
justify-content: space-evenly;
`

const Skills = styled(Link)`
color: ${props => props.theme.text};
text-decoration: none;
z-index: 1;
position: absolute;
top: -90px;
`

const rotate = keyframes`
from {
    transform: rotate(0);
}
to {
    transform: rotate(360deg);
}
`

const Center = styled.button`
position: absolute;
top: ${props => props.click ? '85%' : '50%'};
left: ${props => props.click ? '92%' : '50%'};
transform: translate(-50%, -50%);
border: none;
outline: none;
background-color: transparent;
cursor: pointer;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
transition: all 1s ease;

&>:first-child {
    animation: ${rotate} infinite 1.5s linear;
}

&>:last-child {
    display: ${props => props.click ? "none" : "inline-block"};
    padding: 1rem;
}
`

const DarkDiv = styled.div`
position: absolute;
top: 0;
background-color: #000;
bottom: 0;
right: 50%;
height: ${props => props.click ? "100%" : "0%"};
width: ${props => props.click ? "50%" : "0%"};
z-index: 1;
transition: height 0.5s ease, width 1s ease 0.5s;
`

const Main = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (
        <MainContainer>
            <Container>
                <DarkDiv click={click} />
                <PowerButton />
                <LogoComponent theme={click ? 'dark' : 'light'} />
                <Center click={click}>
                    <YinYang onClick={()=> handleClick()} width={click ? 120 : 200} height={click ? 120 : 200} fill='currentColor' />
                    <span>click here</span>
                </Center>
                <Contact target="_blank" to={{pathname: "mailto:bv7887393@gmail.com"}}>
                <motion.h2
                initial={{
                    y:-200,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                animate={{
                    y:0,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}

                >
                    Say hi..
                </motion.h2>
                </Contact>
                <About to="/about">
                <motion.h2
                initial={{
                    y:-200,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                animate={{
                    y:0,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}

                >
                    About
                </motion.h2>
                </About>
                <Work to="/work" click={click}>
                <motion.h2 style={{marginTop: "40px"}}
                initial={{
                    y:-200,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                animate={{
                    y:0,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}

                >
                    Work
                </motion.h2>
                </Work>
            </Container>
            {click ? <Intro click={click} /> : null}
        </MainContainer>
    )
}

export default Main;