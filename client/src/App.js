import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Home from './components/pages/Home';
import SpecificProduct from './components/pages/SpecificProduct';
import Cart from './components/pages/Cart';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/' component={Home} exact />
          <Route path='/product/:id' component={SpecificProduct} />
          <Route path='/cart/:id?' component={Cart} />
        </Container>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
