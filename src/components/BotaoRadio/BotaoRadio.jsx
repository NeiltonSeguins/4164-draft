import styled from "styled-components";

export const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RadioInput = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  input[type="radio"] {
    margin-right: 10px;
    margin-bottom: 8px;
  }

  label {
    font-size: 1rem;
  }
`;
