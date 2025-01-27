import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import AboutPage from './components/AboutPage';
import PrivateBlog from './components/PrivateBlog';
import Projects from './components/Projects';
import Contact from './components/Contact';
import SecretPage from './components/Secret';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/private-blog" component={PrivateBlog} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
          <Route path="/secret" component={SecretPage} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;