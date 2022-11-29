import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import HeadlineCards from "./components/HeadlineCards";
import Food from "./components/Food";
import Category from "./components/Category";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <HeadlineCards />
      <Food />
      <Category />
    </div>
  );
}

export default App;
