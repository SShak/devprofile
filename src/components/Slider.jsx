import { ArrowLeft, ArrowLeftOutlined, ArrowRight, ArrowRightOutlined } from '@material-ui/icons'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { sliderItems } from '../data';


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
`


const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`


const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`

const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
    //margin-left: 250px;
`

const Image = styled.img`
    height: 80%;
    padding-left: 250px;
`

const Title = styled.h1`
    font-size: 70px;
`

const Description = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`

export const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        
      if(direction==="left"){
          setSlideIndex(slideIndex > 0 ? slideIndex -1 : 2 )
      }  else {
          setSlideIndex(slideIndex < 2 ? slideIndex +1 : 0 )
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
                    <Link to={item.link} >
                    <Button >Check out the code
                    </Button>
                    </Link>
                    
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