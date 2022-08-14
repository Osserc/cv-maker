import React from 'react'
import './stylesheets/styles.css'
import { Photo } from './components/Photo'
import { Identity  } from './components/Identity'
import { Contacts } from './components/Contacts'
import { Socials } from './components/Socials'
import { Education } from './components/Education'
import { Skills } from './components/Skills'
import { Experience } from './components/Experience'
import ReactToPrint from 'react-to-print';


class App extends React.Component {
  render() {
    return (
      <div className="p-15" ref={element => (this.componentRef = element)}>
        <div className="top flex wide align-center justify-between">
          <Photo />
          <Identity />
          <Contacts />
          <Socials />
        </div>

        <div className="">
          <Skills />
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
