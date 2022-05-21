import React from 'react'
import styled from 'styled-components'



const Container = styled.div`
  height: 60px;
  background: linear-gradient(25deg, #ff50e8, #2d29ff);
`
const Wrapper = styled.div`
  padding: 10px, 20px;
  display: flex;
  align-items: center;
  justify-content:space-between;
`
const Center = styled.div`
  flex:1;
  text-align: center;
  margin-top: 10px;
  
`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: #ff50e8;
    cursor: pointer;
    color: #2d29ff;  
`




const Wordle = () => {
  return (
    <Container>
      <Wrapper>
        <Center>
                <a href='https://6288fb9e161e1a1cb249d21b--dynamic-cendol-5953c1.netlify.app/' target="_blank" rel="noreferrer">
                    <Button >Play Wordle
                    </Button>
                    </a>  
        </Center>
      </Wrapper>
    </Container>
  )
}

export default Wordle