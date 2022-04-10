import { ArrowLeft, ArrowRight } from '@material-ui/icons'
import { useState } from 'react';
import styled from 'styled-components';
import { sliderItems } from '../data';
import {mobile} from "../responsive";


const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;

    
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #6b6bce60;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=> props.direction === "left" && "10px"};
    right: ${props=> props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 1;
    z-index: 2;
    
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${props=>props.slideIndex * -100}vw);
`

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props=>props.bg};

    ${mobile({ flexDirection: 'column' })}
`


const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`


const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: #ff50e8;
    cursor: pointer;
    color: #2d29ff;
`

const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
    justify-content: center;
`

const Image = styled.img`
    padding-top: 150px;
    height: 60%;

    ${mobile({ height: '20%' })}
    ${mobile({ paddingTop: '20px' })}
    
`

const Title = styled.h1`
    font-size: 70px;

    ${mobile({ fontSize: '20px' })}
`

const Description = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;

    ${mobile({ fontSize: '10px' })}
`

export const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        
      if(direction==="left"){
          setSlideIndex(slideIndex > 0 ? slideIndex -1 : 3 )
      }  else {
          setSlideIndex(slideIndex < 3 ? slideIndex +1 : 0 )
      }
    };
    
  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}>
            <ArrowLeft/>
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {sliderItems.map((item) =>(
            <Slide key={item.id}>
                <InfoContainer>
                    <Title>{item.title}</Title>
                    <Description>{item.desc}</Description>
                    <a style={{display: "table-cell"}} href={item.link} target="_blank" rel="noreferrer">
                    <Button >Check out the code
                    </Button>
                    </a>  
                </InfoContainer>
                <ImgContainer  ImgContainer>
                    <Image src={item.img} />
                </ImgContainer>
            </Slide>
            ))}
        </Wrapper>
        <Arrow direction="right" onClick={()=>handleClick("right")}>
            <ArrowRight/>
        </Arrow>
    </Container>
  )
}

export default Slider