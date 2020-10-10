import React from 'react';
import { Container } from 'react-bootstrap';

import Home from './components/pages/Home';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

function App() {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
          <Home />
        </Container>
      </main>

      <Footer />
    </>
  );
}

export default App;
