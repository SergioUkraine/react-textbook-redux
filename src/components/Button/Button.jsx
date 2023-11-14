import { Btn } from './Button.styled';

function Button({ selected = false, type = 'button', children }) {
  return (
    <Btn type={type} isSelected={selected}>
      {children}
    </Btn>
  );
}

export default Button;
