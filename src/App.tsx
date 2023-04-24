import React from 'react';
import './App.scss';
import { Header } from './Header';
import { HomePage } from './pages/HomePage/HomePage';
import { Footer } from './Footer';

function App() {
  return (
    <>
    <Header />
    <main>
      <HomePage />
    </main>
    <Footer />
    </>
  );
}

export default App;
