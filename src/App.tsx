import React from 'react';
import './App.scss';
import { Header } from './app/components/Header/Header';
import { HomePage } from './app/pages/HomePage/HomePage';
import { Footer } from './app/components/Footer/Footer';
import { ArtistPage } from './app/pages/ArtistPage/ArtistPage';

function App() {
  return (
    <>
    <Header />
    <main>
      <HomePage />
      {/* <ArtistPage /> */}
    </main>
    <Footer />
    </>
  );
}

export default App;
