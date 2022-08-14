import { Component } from "react";

class Contacts extends Component {
    constructor() {
        super()

        this.state = {
            email: 'email@proton.com',
            phone: 'Phone',
            address: 'Address',
            town: 'Town',
            country: 'Country'
        }

        this.updateContacts = this.updateContacts.bind(this)
    }

    updateContacts(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <section id="contacts" className="flex flex-c justify-center align-center gap-15">
                <h1>Contacts</h1>
                <input type="email" id="email" name="email" defaultValue={this.state.email} onChange={this.updateContacts}></input>
                <input type="tel" id="phone" name="phone" defaultValue={this.state.phone} onChange={this.updateContacts}></input>
                <input type="text" id="address" name="address" defaultValue={this.state.address} onChange={this.updateContacts}></input>
                <input type="text" id="town" name="town" defaultValue={this.state.town} onChange={this.updateContacts}></input>
                <input type="text" id="country" name="country" defaultValue={this.state.country} onChange={this.updateContacts}></input>
            </section>
        )
    }
}

export { Contacts }