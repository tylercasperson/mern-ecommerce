import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Home from './components/pages/Home';
import SpecificProduct from './components/pages/SpecificProduct';
import Cart from './components/pages/Cart';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Profile from './components/pages/Profile';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/profile' component={Profile} />
          <Route path='/product/:id' component={SpecificProduct} />
          <Route path='/cart/:id?' component={Cart} />
          <Route path='/' component={Home} exact />
        </Container>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
