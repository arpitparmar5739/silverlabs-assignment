import React from "react";
import Home from "../components/home";
import useWindowSize from "../hooks/useWindowSize";
import styles from "./App.module.css";

function App() {
  const windowSize = useWindowSize();
  return (
    <div className="App">
      {windowSize && windowSize.width > 767 ? (
        <div className={styles.message}>Please use a mobile device.</div>
      ) : (
        <Home windowSize={windowSize} />
      )}
    </div>
  );
}

export default App;
