import React from 'react';
import styled from 'styled-components';
import contactImg from '../assets/gifs/contact.gif';
import Input from './Input';
import Textarea from './Textarea';
import Button from './Button';

import background from '../assets/gifs/bubbles.gif';

const Styles = styled.section`
  background: linear-gradient(to right, var(--primary-color) 50%, white 50%);
  background-position: 50% 50%;
  min-height: 100vh;
  height: 100%;

  .container {
    padding-top: 10rem;
    min-height: 100vh;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;

    legend,
    h2 {
      font-size: 3.6rem;
    }
    h2 {
      font-size: 3.6rem;
      margin-left: 1rem;
    }

    form {
      padding-left: 1.5rem;
    }

    .right {
      background: url(${background});
    }

    .left {
      &,
      a {
        color: var(--white-color);
      }

      .header {
        margin-bottom: 2rem;

        img {
        }
      }

      ul {
        margin-left: 1.5rem;
      }
    }
  }

  @media (max-width: 876px) {
    background: linear-gradient(to bottom, var(--primary-color) 50%, white 50%);
    padding: 5rem 0;
    .container {
      grid-template-columns: 1fr;
      padding-top: 0rem;

      .left {
        padding: 2rem;
      }
    }
  }
`;

const Contact = () => {
  return (
    <Styles id="contact">
      <div className="container row jc-sb align-items-c">
        <div className="left">
          <div className="header row align-items-c">
            <img src={contactImg} alt="contact icon" />
            <h2>Contact Us</h2>
          </div>
          <ul>
            <li>
              <strong>Email:</strong>{' '}
              <a href="mailto:bonifytech@gmail.com">bonifytech@gmail.com</a>
            </li>
            <li>
              <strong>Phone:</strong>{' '}
              <a href="tel:+233202511342">+233 202 511 342</a>
            </li>

            <address>
              <li>
                <strong>Country:</strong> Ghana
              </li>
              <li>
                <strong>Address 1:</strong> Ashongman Estate
              </li>
              <li>
                <strong>Address 2:</strong> Greater Accra
              </li>
            </address>
          </ul>
        </div>
        <div className="right">
          <form action="">
            <legend>Leave a message</legend>
            <fieldset>
              <div className="mb-1">
                <Input placeholder="Email" type="email" />
              </div>
              <div className="mb-1">
                <Input placeholder="Subject" />
              </div>
              <div className="mb-1">
                <Textarea placeholder="Leave a message" />
              </div>
            </fieldset>
            <Button>Submit</Button>
          </form>
        </div>
      </div>
    </Styles>
  );
};

export default Contact;
