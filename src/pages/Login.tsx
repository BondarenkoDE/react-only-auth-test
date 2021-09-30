import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';

import {
  Wrapper,
  Form,
  Input,
  InputRemember,
  Error,
  Warning,
  WarningIcon,
  LabelForm,
  ButtonSignIn,
} from '../components/Styled';
import warningIcon from '../assets/icons/warning.svg';

interface IUser {
  login: string;
  password: string;
}

const user: IUser = {
  login: 'steve.jobs@example.com',
  password: 'password',
};

const Login: React.FC = () => {
  const history = useHistory();
  const [remember, setRemember] = useState<boolean>(true);
  const [disabled, setDisabled] = useState<boolean>(false);
  const [isEntered, setIsEntered] = useState<boolean>(false);
  const [loginEntered, setLoginEntered] = useState<string>('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUser>();

  const onSubmit: SubmitHandler<IUser> = (data) => {
    if (JSON.stringify(user) === JSON.stringify(data)) {
      setLoginEntered(data.login);
      localStorage.setItem('remember', remember.toString());
      localStorage.setItem('login', data.login);
      setDisabled(true);
      setIsEntered(false);
      setTimeout(() => {
        history.push('/profile');
      }, 1000);
    } else {
      setLoginEntered(data.login);
      setDisabled(true);
      setTimeout(() => {
        setIsEntered(true);
        setDisabled(false);
      }, 1000);
    }
  };

  const handleClickChange = (): void => {
    setRemember((prev: boolean) => !prev);
    console.log('yes');
  };

  return (
    <Wrapper>
      {isEntered && (
        <Warning>
          <WarningIcon src={warningIcon} alt="warning" />
          <div>User {loginEntered} does not exist</div>
        </Warning>
      )}
      <Form onSubmit={handleSubmit(onSubmit)}>
        <LabelForm htmlFor="login">Login</LabelForm>
        <Input
          {...register('login', {
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Incorrect email',
            },
          })}
          style={{ border: errors.login ? '1px solid #E26F6F' : '' }}
          type="email"
          id="login"
        />
        {errors.login && <Error>Required field</Error>}
        <LabelForm htmlFor="password">Password</LabelForm>
        <Input
          {...register('password', {
            required: true,
          })}
          style={{ border: errors.password ? '1px solid #E26F6F' : '' }}
          type="password"
          id="password"
        />
        {errors.password && <Error>Required field</Error>}
        <LabelForm>
          <InputRemember
            type="checkbox"
            id="remember"
            checked={remember}
            onChange={handleClickChange}
          />
          Remember password
        </LabelForm>
        <ButtonSignIn disabled={disabled} type="submit">
          Sign In
        </ButtonSignIn>
      </Form>
    </Wrapper>
  );
};

export default Login;
