import { Component } from "react"
import { EducationDegrees } from "./EducationDegrees"
import { EducationForm } from "./EducationForm"

class Education extends Component {
    constructor() {
        super()

        this.state = {
            adding: false,
            degrees: [{
                id: 0,
                startDate: '',
                endDate: '',
                institution: 'Tulsa',
                field: '',
                mark: '100/110'
            }]
        }

        this.switchAddingState = this.switchAddingState.bind(this)
        this.addDegree = this.addDegree.bind(this)
    }

    switchAddingState() {
        this.setState(prevState => ({
            adding: !prevState.adding
        }))
    }

    addDegree(event) {
        event.preventDefault()
        const newDegree = { id: this.state.degrees.length,
                            startDate: event.target.startDate.value,
                            endDate: event.target.endDate.value,
                            institution: event.target.institution.value,
                            field: event.target.field.value,
                            mark: event.target.mark.value }
        this.setState({
            degrees: this.state.degrees.concat(newDegree)
        })
        this.switchAddingState()
    }

    updateDegree() {
        this.setState({

        })
    }


    render() {
        return (
            <section id="Education" className="flex flex-c justify-center align-center gap-15">
                <h1>Education</h1>

                <EducationDegrees degrees={this.state.degrees} />

                {this.state.adding === false ?
                    <button onClick={this.switchAddingState}>Add education</button>
                    : <EducationForm addDegree={this.addDegree} />}
            </section>
        )
    }
}

export { Education }