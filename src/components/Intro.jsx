import styled from "styled-components"
import { keyframes } from "styled-components"
import code from "../img/code.jpg"


const Container = styled.div`
    display: flex;
    height: 100vh;
    
`

const LWrapper = styled.div`
    padding: 50px;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #163DE9;
    
`

const LIntro = styled.h2`
    font-size: 30px;
    font-weight: 300;
    color: aliceblue;
    
`

const LName = styled.h1`
    font-size: 60px;
    color: aliceblue;
    
`

const LITitle = styled.div`
    height: 50px;
    overflow: hidden;
`

const move = keyframes`
    25% {
        transform: translateY(-50px);
    }
    50% {
        transform: translateY(-100px);
    }
    75% {
        transform: translateY(-150px);
    }
    100% {
        transform: translateY(-200px);
    }
`

const LITWrapper = styled.div`
    height: 100%;
    animation: ${move} 10s ease-in-out infinite alternate;
`

const LITWItem = styled.div`
    height: 50px;
    font-size: 30px;
    font-weight: bold;
    color: #E9C216;
    display: flex;
    align-items: center;
`

const LIDesc = styled.p`
    color: white;
    display: flex;
    font-size: 20px;
    padding-top: 20px;
`

const RWrapper = styled.div`
     flex: 1;
    position: relative;
    clip-path: polygon(100% 0%, 75% 50%, 100% 100%, 25% 100%, 0% 50%, 25% 0%);
    background-color: #E9C216;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
`

const Right = styled.div`
    
    flex: 1;
    position: relative;
    
`

const Intro = () => {
  return (
    <Container>
        <Left>
            <LWrapper>
                <LIntro>Hello. My name is</LIntro>
                <LName>Shawn Shaknitz</LName>
                <LITitle>
                    <LITWrapper>
                        <LITWItem>Web Developer</LITWItem>
                        <LITWItem>UI/UX Designer</LITWItem>
                        <LITWItem>Full Stack Engineer</LITWItem>
                        <LITWItem>Musician</LITWItem>
                        <LITWItem>Video Game Enjoyer</LITWItem>
                    </LITWrapper>
                </LITitle>
                <LIDesc>
                    I am a full stack developer that is passionate about his craft.  
                    I have a thrist for knowledge, working with others, and continuously learning.  
                    I don't just want to make software people need to use; I want to make software people WANT to use and LOVE to use.
                </LIDesc>
            </LWrapper>
        </Left>
            
        <Right>
            <RWrapper>

            </RWrapper> 
        </Right>
    </Container>
  )
}

export default Intro