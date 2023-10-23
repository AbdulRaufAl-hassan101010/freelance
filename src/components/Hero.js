import React from 'react';
import styled from 'styled-components';
import heroImage from '../assets/imgs/hero.jpg';
import hero1 from '../assets/imgs/hero1.png';
import Button from './Button';

const Styles = styled.section`
  width: 100%;
  height: 60rem;
  background: url(${heroImage}) no-repeat center/cover;
  position: relative;

  .overlay {
    display: block;
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    min-height: 60rem;
    height: 100%;
    background-color: rgba(26, 172, 172, 0.85);
    color: var(--white-color);
    text-shadow: 0.1rem 0.1rem 0.2rem #111;

    .container {
      width: 100%;
      min-height: 100%;
      height: 100%;
      display: grid;
      grid-template-columns: 7fr 5fr;
      align-content: center;

      h1 {
        font-weight: 900;
        font-size: 4.6rem;
        margin-bottom: 2rem;
        line-height: 1.2;
      }

      p {
        font-size: 1.8rem;
        font-weight: 200;
        margin-bottom: 3rem;
      }

      .btn {
      }

      img {
        width: 100%;
        height: 100%;
      }
    }

    @media (max-width: 596px) {
      img {
        display: none;
      }
    }
  }
`;

const Hero = () => {
  return (
    <Styles id="hero">
      <div className="overlay">
        <div className="container">
          <div className="content">
            <h1>Best Software Freelancer.</h1>
            <p>
              Contact me for fast and affordable website creation, cross
              platform mobile apps and more.
            </p>
            <div className="btn">
              <Button to="/">Learn more</Button>
            </div>
          </div>
          <div className="image">
            <img src={hero1} alt="" />
          </div>
        </div>
      </div>
    </Styles>
  );
};

export default Hero;
