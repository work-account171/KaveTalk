import React from 'react';
import styled from 'styled-components';
import heroImage from '../assets/mobile.png'
import giftLine from "../assets/sellLine.svg"
import giftLine2 from "../assets/smallSellLine.svg"
import { Link } from 'react-router-dom';

const NewLanding: React.FC = () => {
    return (
      <HeroSection>
        <Container>
          <HeroText>
            <h1>
              easy{" "}
              <span>
                KaveTalk <img src={giftLine} alt="giftline" />
              </span>{" "}
                lets chat💬
            </h1>
            <p>
              Go In-House private conversations
              <br /> to connections with friends and family.
            </p>    
          </HeroText>
          <HeroImage>
            <img src={heroImage} alt="heroImage" />
          </HeroImage>
        </Container>
        <Button>
            <Link to="/login">
                <button>
                    Sign In Now
                </button>
            </Link> 
            <p>Have an account already? Signin
            on{" "}
              <span>
                KaveTalk! <img src={giftLine2} alt="giftline" />
              </span>{" "}
                lets chat💬
            </p>
        </Button>
      </HeroSection>
    );
};

const HeroSection = styled.section`
background-color: white;
width: 100%;
margin-top: -100px;
min-height: 100vh;
overflow-x: hidden;
@media screen and (max-width: 1030px) {
    margin-top: 0px;
  }

@media screen and (max-width: 920px) {
    margin-top: 0px;
  }

  @media screen and (max-width: 875px) {
    margin-top: 0px;
  }

  @media screen and (max-width: 580px) {
    margin-top: 0px;
  }
`
const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  min-height: 75vh;
  padding-top: 2rem;

  @media screen and (max-width: 1030px) {
    width: 85%;
  }

  @media screen and (max-width: 875px) {
    flex-direction: column;
    text-align: center;
    padding-top: 2rem;
  }
`;

const HeroText = styled.article`
  display: flex;
  flex-direction: column;
  width: 50%;
  h1 {
    position: relative;
    text-transform: capitalize;
    color: #000;
    font-size: 3.5rem;
    span {
      color: #00D280;
      position: relative;
      img {
        position: absolute;
        right: 0;
        bottom: -0.8rem;
      }
    }
    &::before {
      content: "";
      background-color: #023047;
      height: 6.5rem;
      width: 6.5rem;
      border-radius: 50%;
      z-index: -1;
      position: absolute;
      left: -2.5rem;
      top: -1.5rem;
    }
  }

  p {
    color: #fff;
    font-size: 1.5rem;
    margin: 1.3rem 0;
    font-weight: 200;
  }

  div {
    margin-top: 1rem;
    img {
      margin-right: 0.7rem;
      cursor: pointer;
    }
  }

  @media screen and (max-width: 920px) {
    h1 {
      font-size: 3rem;
      width: 100%;
    }
    p {
      font-size: 1.2rem;
      width: 100%;
    }
  }

  @media screen and (max-width: 875px) {
    width: 90%;
    img {
      width: 14rem;
    }
    div {
      img {
        width: 12rem;
        margin-bottom: 1rem;
      }
    }
  }

  @media screen and (max-width: 580px) {
    h1 {
      font-size: 2.6rem;
    }
  }
`;

const HeroImage = styled.article`
  width: 50%;
  img {
    width: 90%;
    height: 35rem;
  }

  @media screen and (max-width: 875px) {
    width: 100%;
    img {
      height: 29rem;
    }
  }
`;


const Button = styled.div`
  width: 80%;
  margin: 4rem auto ;
  text-align: center;
  
  button {
    border-radius: 10px;
    background-color: #00D280;
    cursor: pointer;
    color: white;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
    border: none;
    font-weight: 700;
    font-size: 16px;
    padding: 15px 50px;

    // height: 3.5rem;
    // width: 10rem;
    // font-family: inherit;
    // border: none;
    // border-radius: 16px;
    // background-color: #f0f0f0;
    // color: #0a2b43;
    // font-size: 1rem;
    // font-weight: bold;
    // cursor: pointer;
  }
  p {
    margin-top: 1rem;
    color: #000;
    font-size: 1rem;

    span {
        color: #00D280;
        position: relative;
        img {
          position: absolute;
          right: 0;
          bottom: -0.8rem;
        }
  }
`;

export default NewLanding;
