import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  list-style: none;
  outline: none;
  font-family: 'Work Sans', sans-serif;
  font-style: normal;
  box-sizing: border-box;
}
`;

const Wrapper = styled.div`
  position: relative;
  width: 640px;
  margin: 0 auto;
  padding-top: 210px;
`;

const WrapperProfile = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 640px;
  margin: 0 auto;
  padding-top: 320px;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const LabelForm = styled.label`
  display: flex;
  align-items: center;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  margin-top: 20px;
  margin-bottom: 10px;
  &:first-child {
    margin-top: 0;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 60px;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  outline: none;
  border-color: transparent;
`;

const InputRemember = styled.input.attrs({ type: 'checkbox' })`
  width: 20px;
  height: 20px;
  border: 1px solid #000000;
  border-radius: 4px;
  margin-right: 14px;
`;

const Title = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 64px;
  line-height: 78px;
`;

const Error = styled.div`
  font-size: 14px;
  line-height: 17px;
  color: #e26f6f;
  margin-top: 8px;
`;

const Warning = styled.div`
  position: absolute;
  top: 125px;
  display: flex;
  width: 640px;
  height: 60px;
  background-color: #f5e9e9;
  border-color: 1px solid #e26f6f;
  border-radius: 8px;
  padding: 20px;
`;

const Welcome = styled.div`
  font-weight: normal;
  font-size: 40px;
  line-height: 48px;
`;

const WarningIcon = styled.img`
  width: 20px;
  height: 20px;
  background-color: #ffc8c8;
  margin-right: 14px;
  border-radius: 50%;
  padding: 4px;
`;

const ButtonSignIn = styled.button`
  width: 100%;
  height: 60px;
  background-color: #4a67ff;
  border-radius: 8px;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;
  border-color: transparent;
  margin-top: 30px;
  cursor: pointer;
  opacity: ${(props) => (props.disabled ? '0.8' : '1')};
  &:hover {
    background-color: #5d77ff;
  }
`;
const ButtonSignUp = styled.button`
  width: 200px;
  height: 60px;
  background-color: #f5f5f5;
  border-radius: 8px;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  color: #000000;
  border-color: transparent;
  margin-top: 50px;
  cursor: pointer;
  &:hover {
    background-color: #4a67ff;
    color: #ffffff;
  }
`;

export {
  Wrapper,
  WrapperProfile,
  Form,
  Input,
  InputRemember,
  Title,
  Error,
  Warning,
  WarningIcon,
  LabelForm,
  ButtonSignIn,
  ButtonSignUp,
  GlobalStyle,
  Welcome,
};
