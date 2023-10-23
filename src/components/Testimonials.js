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

  .client-items {
    text-align: center;
    display: inline-flex;
    gap: 1rem;

    article {
      width: 30rem;
      min-height: 25rem;
      height: 100%;
      overflow: hidden;
      .card {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        /* padding: 3rem 4rem; */
        min-height: 25rem;
        height: 100%;
      }
    }
  }

  .header {
    margin-bottom: 2rem;
  }

  p {
    color: #757575;
    font-size: 2rem;
    font-weight: 300;
    line-height: 1.6;
  }

  .scrolling-text-container {
    width: 100%;
    overflow: hidden;
  }

  .scrolling-text {
    animation: scroll 50s linear infinite;
  }

  @keyframes scroll {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`;

const Testimonials = () => {
  return (
    <Styles>
      <div className="container">
        <h2>Testimonials</h2>
        <div className="scrolling-text-container">
          <div className="client-items scrolling-text">
            <article>
              <Card className="card">
                <div className="header">
                  <div className="icon">
                    <i className="fa-solid fa-code fa-2xl"></i>
                  </div>
                  <h3>Flit Ghana</h3>
                </div>
                <p>
                  "I love the great work he did, it was nice working with him."
                </p>
              </Card>
            </article>
            <article>
              <Card className="card">
                <div className="header">
                  <div className="icon">
                    <i className="fa-solid fa-code fa-2xl"></i>
                  </div>
                  <h3>Easy Retail</h3>
                </div>
                <p>
                  "Did a neat work for an affordable price, couldn't believe
                  it."
                </p>
              </Card>
            </article>
            <article>
              <Card className="card">
                <div className="header">
                  <div className="icon">
                    <i className="fa-solid fa-code fa-2xl"></i>
                  </div>
                  <h3>Stock Manager</h3>
                </div>
                <p>"I love the time management and transparent"</p>
              </Card>
            </article>
            <article>
              <Card className="card">
                <div className="header">
                  <div className="icon">
                    <i className="fa-solid fa-code fa-2xl"></i>
                  </div>
                  <h3>Handoff Labs</h3>
                </div>
                <p>"I would like to work with him again"</p>
              </Card>
            </article>
          </div>
        </div>
      </div>
    </Styles>
  );
};

export default Testimonials;
