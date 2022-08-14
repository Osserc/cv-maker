import { Component } from "react";

class Identity extends Component {
    constructor() {
        super()

        this.state = {
            firstName: 'First name',
            lastName: 'Last name',
            occupation: 'Occupation'
        }

        this.updateBio = this.updateIdentity.bind(this)
    }

    updateIdentity(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <section id="identity" className="flex flex-c justify-evenly gap-15">
                <input type="text" id="firstName" name="firstName" defaultValue={this.state.firstName} onChange={this.updateIdentity}></input>
                <input type="text" id="lastName" name="lastName" defaultValue={this.state.lastName} onChange={this.updateIdentity}></input>
                <input type="text" id="occupation" name="occupation" defaultValue={this.state.occupation} onChange={this.updateIdentity}></input>
            </section>
        )
    }
}

export { Identity }