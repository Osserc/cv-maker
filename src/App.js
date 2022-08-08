import React from 'react'
import './stylesheets/styles.css'
import { Photo } from './components/Photo'
import { Identity  } from './components/Identity'
import { Contacts } from './components/Contacts'
import { Education } from './components/Education'
import { Skills } from './components/Skills'
import { Experience } from './components/Experience'
import ReactToPrint from 'react-to-print';


class App extends React.Component {
  render() {
    return (
      <div className="grid-app" ref={el => (this.componentRef = el)}>
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
        <div className="print-button no-print flex justify-center">
          <ReactToPrint
            trigger={() => {
              return <button>Generate PDF</button>
            }}
            content={() => this.componentRef}
          />
        </div>
      </div>
    )
  }
   
}

export default App;
