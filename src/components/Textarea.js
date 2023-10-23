import { styled } from 'styled-components';

const Styles = styled.div`
  margin-bottom: 1rem;
  textarea {
    border: 0.1rem solid #ccc;
    width: 100%;
    padding: 1rem;
    outline-color: var(--primary-color);
    font-family: var(--primary-font);
  }
`;

const Textarea = ({
  placeholder = '',
  value,
  update,
  type = 'text',
  max,
  min,
}) => {
  const onChangeHandler = (event) => {
    if (update) {
      update(event.target.value);
    }
  };

  return (
    <Styles>
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={onChangeHandler}
        max={max}
        min={min}
        rows="5"
      ></textarea>
    </Styles>
  );
};

export default Textarea;
