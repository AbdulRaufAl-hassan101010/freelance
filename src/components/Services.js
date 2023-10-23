import styled from 'styled-components';
import Card from './Card';
import background from '../assets/gifs/bubbles.gif';

const Styles = styled.section`
  background: url(${background}) no-repeat right;
  padding: 10rem 0 !important;

  h2 {
    font-size: 2.6rem;
    margin-bottom: 2rem;
  }

  .card {
    padding: 3rem 4rem;

    &:hover {
      transition: transform ease-in-out 500ms;
      transform: scale(1.1);
    }
  }

  .service-items {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
  }

  .header {
    margin-bottom: 2rem;
    text-align: center;
  }

  ul {
    /* text-align: left; */
    li {
      padding: 0.3rem 1rem;
      color: #737373;
    }
  }

  @media (max-width: 996px) {
    background: url(${background}) no-repeat top;
    .service-items {
      grid-template-columns: repeat(2, 1fr);
    }

    .card {
      &:hover {
        transition: none;
        transform: scale(1);
      }
    }
  }

  @media (max-width: 596px) {
    .service-items {
      grid-template-columns: 1fr;
    }
  }
`;

const Services = () => {
  return (
    <Styles id="services">
      <div className="container">
        <h2>Our Services</h2>
        <div className="service-items">
          <article>
            <Card className="card">
              <div className="header">
                <div className="icon">
                  <i className="fa-solid fa-code fa-2xl"></i>
                </div>
                <h3>Web Dev</h3>
              </div>
              <ul>
                <li>
                  <i className="fa-solid fa-chevron-right"></i> Ecommerce
                  website
                </li>
                <li>
                  <i className="fa-solid fa-chevron-right"></i> Business
                  Websites
                </li>
                <li>
                  <i className="fa-solid fa-chevron-right"></i> Instuition
                  Websites
                </li>
              </ul>
            </Card>
          </article>
          <article>
            <Card className="card">
              <div className="header">
                <div className="icon">
                  <i className="fa-solid fa-mobile fa-2xl"></i>
                </div>
                <h3>Mobile App Dev</h3>
              </div>
              <ul>
                <li>
                  <i className="fa-solid fa-chevron-right"></i> Andriod Apps
                </li>
                <li>
                  <i className="fa-solid fa-chevron-right"></i> IOS Apps
                </li>
                <li>
                  <i className="fa-solid fa-chevron-right"></i> Cross platform
                </li>
              </ul>
            </Card>
          </article>
          <article>
            <Card className="card">
              <div className="header">
                <div className="icon">
                  <i className="fa-solid fa-server fa-2xl"></i>
                </div>
                <h3>App Hosting</h3>
              </div>
              <ul>
                <li>
                  <i className="fa-solid fa-chevron-right"></i> Play store
                </li>
                <li>
                  <i className="fa-solid fa-chevron-right"></i> Apple store
                </li>
                <li>
                  <i className="fa-solid fa-chevron-right"></i> Heroku and more
                </li>
              </ul>
            </Card>
          </article>
          <article>
            <Card className="card">
              <div className="header">
                <div className="icon">
                  <i className="fa-brands fa-wordpress fa-2xl"></i>
                </div>
                <h3>Wordpress</h3>
              </div>
              <ul>
                <li>
                  <i className="fa-solid fa-chevron-right"></i> Ecommerce
                  website
                </li>
                <li>
                  <i className="fa-solid fa-chevron-right"></i> Business
                  Websites
                </li>
                <li>
                  <i className="fa-solid fa-chevron-right"></i> Instuition
                  Websites
                </li>
              </ul>
            </Card>
          </article>
        </div>
      </div>
    </Styles>
  );
};

export default Services;
