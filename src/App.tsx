import React from "react";
import "./App.scss";
import { Header } from "./app/components/Header/Header";
import { HomePage } from "./app/pages/HomePage/HomePage";
import { Footer } from "./app/components/Footer/Footer";
import { MarketPlace } from "./app/pages/MarketplacePage/MarketplacePage";
import { ArtistPage } from "./app/pages/ArtistPage/ArtistPage";
import { CreateAccountPage } from "./app/pages/CreateAccountPage/CreateAccountPage";
import { SignInPage } from "./app/pages/SignInPage/SignInPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="artist-page" element={<ArtistPage />} />
          <Route path="marketplace" element={<MarketPlace />} />
          <Route path="create-account" element={<CreateAccountPage />} />
          <Route path="sign-in" element={<SignInPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
