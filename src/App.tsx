import { Login, Profile } from './pages';
import { Route } from 'react-router-dom';
import { GlobalStyle } from './components/Styled';
import { Header } from './components';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Route path="/login" component={Login} exact />
      <Route path="/profile" component={Profile} exact />
    </div>
  );
}

export default App;
