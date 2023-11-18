import styled from "@emotion/styled";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  float: left;
`;

export const Title = styled.h1``;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 16px;

  margin-bottom: 30px;
`;

export const Label = styled.label`
  margin-bottom: 8px;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  padding: 8px;
  margin-bottom: 16px;
`;

export const ErrorMsg = styled.div`
  color: red;
`;

export const Button = styled.button`
  background-color: rgb(29, 29, 85);
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 10px;
  width: 300px;
`;
