import React from 'react';
import './App.css';
import DisplayComponent from "./components/displayComponent/displayComponent";
import SetComponent from "./components/setComponent/setComponent";

function App() {
  return (
      <div className='App'>
          <SetComponent/>
          <DisplayComponent/>
      </div>
  );
}

export default App;
