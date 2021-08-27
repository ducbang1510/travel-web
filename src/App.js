import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollTop from './components/ScrollTop'
import Login from './pages/Login'
import Register from './pages/Register'
import Logout from './Logout'

export default function App() {
  return (
    <div className="boxed_wrapper">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/logout" component={Logout} />
        </Switch>
        <Footer />
        <ScrollTop />
      </BrowserRouter>
    </div>
  );
}