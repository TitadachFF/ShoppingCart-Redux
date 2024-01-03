import { useState } from "react";
import "./App.css";
import Navbar from "./component/Navbars/Navbar";
import Footer from "./component/Footers/Footer";
import Page from "./component/Pages/Page";
import { store } from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Page />
      <Footer />
    </Provider>
  );
}

export default App;
