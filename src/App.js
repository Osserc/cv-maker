import React from 'react';
import './stylesheets/styles.css';
import { Biography } from './components/Biography'
import { Education } from './components/Education'

class App extends React.Component {
  render() {
    return (
      <div className="flex flex-c align-center gap-15">
        <div className="flex flex-c justify-center align-center wide">
          <Biography />
        </div>

        <hr className="w-50"></hr>

        <div className="flex flex-c justify-center align-center wide">
          <Education />
        </div>
      </div>
    )
  }
   
}

export default App;
