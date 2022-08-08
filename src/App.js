import React from 'react'
import './stylesheets/styles.css'
import { Photo } from './components/Photo'
import { Identity  } from './components/Identity'
import { Contacts } from './components/Contacts'
import { Education } from './components/Education'
import { Skills } from './components/Skills'
import { Experience } from './components/Experience'

class App extends React.Component {
  render() {
    return (
      <div className="grid-app">
        <div className="grid-left">
          <Photo />
          <Contacts />
          <Skills />
        </div>

        <div className="grid-right">
          <Identity />
          <Education />
          <Experience />
        </div>
      </div>
    )
  }
   
}

export default App;
