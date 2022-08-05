import { Component } from "react"
import { EducationDegrees } from "./EducationDegrees"

class Education extends Component {
    constructor() {
        super()

        this.state = {
            adding: false,
            degrees: [{
                id: 0,
                university: 'Tulsa',
                marks: '100/110'
            },
            {
                id: 1,
                university: 'Cyprus',
                marks: '110/110'
            }]
        }

        this.switchAddingState = this.switchAddingState.bind(this)
        this.renderEdit = this.renderEdit(this)
    }

    switchAddingState() {
        this.setState(prevState => ({
            adding: !prevState.adding
        }))
    }

    updateDegree() {
        this.setState({

        })
    }

    renderEdit() {
        return (
            <div>Testone<br></br>
                <button onClick={this.switchAddingState}>Back</button>
            </div>
        )
    }

    render() {
        return (
            <section id="Education" className="flex flex-c justify-center align-center">
                <h1>Education</h1>

                <hr className="wide"></hr>


                <EducationDegrees degrees={this.state.degrees} />

                {this.renderEdit}

                {this.state.adding === false ?
                    <button onClick={this.switchAddingState}>Add education</button>
                    : <button onClick={this.switchAddingState}>Add s</button>}
            </section>
        )
    }
}

export { Education }