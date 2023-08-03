// StyledLink.tsx
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  color: #007bff;
  text-decoration: none;
  font-size: 18px;
  padding: 5px 10px;
  border-radius: 5px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f2f2f2;
  }

  &:active {
    background-color: #d4d4d4;
  }
`;

export default StyledLink ;
