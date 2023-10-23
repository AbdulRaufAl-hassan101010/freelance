import styled from 'styled-components';
import teamImg from '../assets/imgs/team.png';

const Styles = styled.section`
  background-color: var(--white-color);
  padding: 10rem 0;
  margin-bottom: 5rem;
  background: linear-gradient(to right, #fff 50%, var(--primary-color) 50%);

  .container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  h2 {
    margin-bottom: 4rem;
  }

  .right {
    padding-left: 2rem;
    color: #fff;
  }

  .left {
    background: url(${teamImg}) no-repeat left/contain;
  }

  article {
    p {
      font-size: 2rem;
      font-weight: 300;
      font-style: italic;
    }
  }

  @media (max-width: 896px) {
    background: var(--primary-color);

    .container {
      grid-template-columns: 1fr;
    }
    .left {
      display: none;
    }
  }
`;

const About = () => {
  return (
    <Styles id="about">
      <div className="container">
        <div className="left"></div>
        <div className="right">
          <h2>About Us.</h2>
          <article>
            <p>
              We are a company that does freelancing for all your tech
              requirements, we handle creating of simple and complex website,
              such as a simple landing page for orginazations, complex website
              such as customize ecommerce website, school management system,
              store managemenet system and cross platform mobile apps. We are
              passionate about what we do, and take our clients budget to
              consideration while providing quality work.
            </p>
          </article>
        </div>
      </div>
    </Styles>
  );
};

export default About;
