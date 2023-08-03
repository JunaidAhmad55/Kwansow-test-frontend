// StyledInput.tsx
import React from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const InputField = styled.input`
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

interface StyledInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const StyledInput: React.FC<StyledInputProps> = ({ value, onChange }) => {
  return (
    <InputWrapper>
      <InputField type="text" value={value} onChange={onChange} />
    </InputWrapper>
  );
};

export default StyledInput;
