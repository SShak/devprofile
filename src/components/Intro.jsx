import styled from "styled-components"
import { keyframes } from "styled-components"


const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #163DE9;
`

const LWrapper = styled.div`
    padding: 50px;
`

const Left = styled.div`
    flex: 1;
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


const Right = styled.div`
    flex: 1;
    padding: 20px;
`

const Intro = () => {
  return (
    <Container>
        <LWrapper>
            <Left>
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
            </Left>
        </LWrapper>
        <Right>Right</Right>
    </Container>
  )
}

export default Intro