import { Email, GitHub, LinkedIn, LocationCity, PhoneAndroid } from "@material-ui/icons"
import { useRef } from "react"
import styled from "styled-components"
import emailjs from '@emailjs/browser';
import { useState } from "react";
import {mobile} from "../responsive"

const Container = styled.div`
  height: 100vh;
  position: relative;
`

const Cbg = styled.div`
  width: 20px;
  height: 100vh;
  position: absolute;
 // background: linear-gradient(110deg, #2d29ff, #ff50e8);
`

const CWrapper = styled.div`
  padding: 50px;
  display: flex;
  
`

const CLeft = styled.div`
  flex: 1;

  ${mobile({ display: 'none' })}
`

const CRight = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
`

const CLTitle = styled.h1`
  font-size: 60px;
  width: 80%; 
  justify-content: center;
`

const CLInfo = styled.div`
  display: flex;
  align-items: center;
  margin: 50px 0px;
  font-weight: 300;
  width: 70%;
`

const ContactItemIcon = styled.div`
  display: flex;
  align-items: center;
    
`

const RDesc = styled.p`
  font-weight: 200;
  font-size: 30px;
`

const Form = styled.form`
  margin-top: 20px;
`

const Input = styled.input`
  width: 50%;
  height: 50px;
  border: none;
  border-bottom: 1px solid #000;
  margin: 10px 0px;
  font-size: 14px;
  padding-left: 10px;
`

const Textarea = styled.textarea`
  width: 100%;
  margin: 10px 0px;
  font-size: 14px;
  padding-left: 10px;
`

const Buttton = styled.button`
  border: none;
  padding: 15px;
 // background-color: #ff50e8;
  font-weight: 500;
  cursor: pointer;
  color: #2d29ff;
`

const Footer = () => {

  const formRef = useRef();
  const [done, setDone] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_a31yisq', 
      'template_aubnc4l', 
      formRef.current, 
      'h73E7TCTP2UzOoY7e')
    .then((result) => {
        console.log(result.text);
        setDone(true);
    }, (error) => {
        console.log(error.text);
    });
};

  return (
    <Container>
      <Cbg></Cbg>
        <CWrapper>
          <CLeft>
            <CLTitle>
            Let's connect and create!
            </CLTitle>
              <CLInfo>
                <ContactItemIcon>
                  <PhoneAndroid style={{marginRight:"10px"}}/>
                  717-799-7378
                </ContactItemIcon>
              </CLInfo> 
              <CLInfo>
                <ContactItemIcon>
                  <Email style={{marginRight:"10px"}}/>
                  shawnshaknitz@gmail.com
                </ContactItemIcon>
              </CLInfo>
              <CLInfo>
                <ContactItemIcon>
                  <LinkedIn style={{marginRight:"10px"}}/>
                  Shawn Shaknitz
                </ContactItemIcon>
              </CLInfo>
              <CLInfo>
                <ContactItemIcon>
                  <GitHub style={{marginRight:"10px"}}/>
                  SShak
                </ContactItemIcon>
              </CLInfo>
              <CLInfo>
                <ContactItemIcon>
                  <LocationCity style={{marginRight:"10px"}}/>
                  Lancaster, PA, USA
                </ContactItemIcon>
              </CLInfo>
          </CLeft>
          <CRight>
            <RDesc>
              <b>Reach out!</b> I would love to work with you or your team.
            </RDesc>
            <Form ref={formRef} onSubmit={handleSubmit} >
              <Input type="text" placeholder="Name" name="user_name" />
              <Input type="text" placeholder="Subject" name="user_subject" />
              <Input type="text" placeholder="Email" name="user_email" />
              <Textarea rows="5" placeholder="Message" name="message" />
              <Buttton>Send</Buttton>
              {done && "Thank you for your email!"}
            </Form>
          </CRight>
        </CWrapper>
      
    </Container>
  )
}

export default Footer