import React from 'react'
import styled from 'styled-components'

function Login() {
  return (
   <Container>
   <CTA>
    <CTALogoOne src="/images/cta-logo-one.svg" />
    <Signup>Get All THERE</Signup>

   </CTA>
   <Description>
    <p>
        Get premier Access to Raya and l A faded movie star and a neglected young woman form an unlikely bond after crossing paths in Tokyo. Director: Sofia Coppola | Stars: Bill Murray, Scarlett ...
     
        a male or female actor who is famous for being in filmsTopics Film and theatrea1. I always wanted to be a movie star, even when I was a child.
        </p>
   </Description>
   <CTALogoTwo src="/images/cta-logo-two.png" />
   </Container>
  )
}

export default Login

const Container =styled.div`
    position: relative;
    height: calc(100vh - 70px );
    /* display: flex; */
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &:before {
        position: absolute;
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;

        content: "";
        top: 0;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-image: url("/images/login-background.jpg");
        z-index: -1;
    }

`
const CTA =styled.div `
    max-width: 650px;
    padding: 80px 40px;
    width: 60%;
    /* display: flex; */
    flex-direction: column;
   

`

const CTALogoOne = styled.img`

`

const Signup =styled.a`
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    padding: 17px 0;
    border-radius: 4px;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-bottom: 12px;
    margin-left: 40%;

    &:hover{
        background: #0483ee;
    }

`

const Description = styled.p`
    font-size: 15px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;
    padding: 30px;
    margin: 30px;



`

const CTALogoTwo =styled.img `
    width: 90%;

`