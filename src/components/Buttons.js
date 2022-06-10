import styled from 'styled-components';

const Button = styled.button`
  /* our styles will go here*/
  display: block;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  color: #fff;
  background-color: #0077cc;
  cusor: pointer;
  :hover {
    opacity: 0.8;
  }
  :active {
    backgrouhd-color: #005fa3;
  }
`;

export default Button;
