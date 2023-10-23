import styled from 'styled-components';

const Nav = styled.nav`
  position: sticky;
  top: 0;
  background-color: var(--white-color);
  padding: 1rem 0.5rem;
  z-index: 1000;
  border-bottom: 0.1rem solid #ddd;

  .logo {
    font-size: 3rem;
  }

  .toggler-icon {
    display: none;
  }

  ul {
    li {
      a {
        font-size: 1.4rem;
        display: inline-block;
        margin-left: 2rem;
        font-weight: 300;
        letter-spacing: 0.1rem;
      }
    }
  }

  @media (max-width: 596px) {
    .logo-wrapper {
      width: 100%;
    }
    .toggler-icon {
      display: inline-block;
    }

    ul {
      display: none;
    }
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <div className="container row jc-sb align-items-c">
        <div className="row jc-sb align-items-c logo-wrapper">
          <a href="#hero" className="logo">
            &lt;BonifyTech/&gt;
          </a>
        </div>
        <ul className="row jc-sb align-items-c">
          <li>
            <a href="#hero">Home</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contacts</a>
          </li>
        </ul>
      </div>
    </Nav>
  );
};

export default Navbar;
