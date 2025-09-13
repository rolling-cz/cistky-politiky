import React from 'react';
import '../styles/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import PoliciesContainer from "./PoliciesContainer";
import LanguageSwitch from "./LanguageSwitch";

function App() {
  return (
    <div className="App">
      <LanguageSwitch/>
      <PoliciesContainer/>
    </div>
  );
}

export default App;
