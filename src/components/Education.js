import { Component } from "react"

class Education extends Component {
    constructor() {
        super()

        this.state = {
            editing: false,
            education: [{
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

        this.switchEditingState = this.switchEditingState.bind(this)
        this.renderEdit = this.renderEdit(this)
    }

    switchEditingState() {
        this.setState(prevState => ({
            editing: !prevState.editing
        }))
    }

    renderEdit() {
        return (
            <div>Testone<br></br>
                <button onClick={this.switchEditingState}>Back</button>
            </div>
        )
    }

    render() {
        return (
            <section id="Education" className="flex flex-c justify-center align-center">
                <h1>Education</h1>

                <hr className="wide"></hr>

                {this.state.education.map((title) => {
                    return <div key={title.id}>Studied at {title.university}, graduated with {title.marks}
                            <br></br>
                            He did good.</div>
                })}

                {this.renderEdit}

                {this.state.editing === false ?
                    <button onClick={this.switchEditingState}>Add education</button>
                    : <button onClick={this.switchEditingState}>Add s</button>}
            </section>
        )
    }
}

export { Education }