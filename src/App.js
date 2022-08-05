import React from 'react';
import './stylesheets/styles.css';
import { Biography } from './components/Biography'

class App extends React.Component {
  render() {
    return (
      <div className="flex flex-c justify-center align-center wide">
        <Biography />
      </div>
    )
  }
   
}

export default App;
