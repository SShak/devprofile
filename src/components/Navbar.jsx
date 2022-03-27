import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
  height: 60px;
  background-color: #5ec7b5;
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
const Logo = styled.h1`
  font-weight: bold;
  color: white;
`


const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Center>
                <Logo>
                  Shawn Shaknitz
                </Logo>
            </Center>
        </Wrapper>
    </Container>
  )
}

export default Navbar