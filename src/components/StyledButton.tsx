import React from "react";
import styled from "styled-components";

// Define button colors
const colorStyles = {
  primary: "#007bff",
  danger: "#dc3545",
};
const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color: keyof typeof colorStyles;
}

const StyledButton = styled.button<ButtonProps>`
  background-color: ${(props) => colorStyles[props.color] || colorStyles.primary};
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
`;

const Button: React.FC<ButtonProps> = ({ color, children, ...rest }) => {
  return (
    <StyledButton color={color} {...rest}>
      {children}
    </StyledButton>
  );
};

export { Button, ButtonContainer };
