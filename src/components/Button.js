import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinkStyles = styled.span`
  a,
  button {
    border: none;
    outline: none;
    padding: 1rem;
    background-color: var(--grey-color);
  }
`;

const Button = ({ type, children, to }) => {
  if (type) {
    return (
      <LinkStyles>
        <button type={type}>{children}</button>
      </LinkStyles>
    );
  }

  return (
    <LinkStyles>
      <Link to={to}>{children}</Link>
    </LinkStyles>
  );
};

export default Button;
