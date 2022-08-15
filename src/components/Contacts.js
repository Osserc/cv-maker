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
            <section id="contacts" className="flex flex-c justify-center align-end gap-15">
                <input type="email" className="text-right" id="email" name="email" defaultValue={this.state.email} onChange={this.updateContacts} style={{width: `${this.state.email.length}ch`}}></input>
                <input type="tel" className="text-right" id="phone" name="phone" defaultValue={this.state.phone} onChange={this.updateContacts} style={{width: `${this.state.phone.length}ch`}}></input>
                <input type="text" className="text-right" id="address" name="address" defaultValue={this.state.address} onChange={this.updateContacts} style={{width: `${this.state.address.length}ch`}}></input>
                <input type="text" className="text-right" id="town" name="town" defaultValue={this.state.town} onChange={this.updateContacts} style={{width: `${this.state.town.length}ch`}}></input>
                <input type="text" className="text-right" id="country" name="country" defaultValue={this.state.country} onChange={this.updateContacts} style={{width: `${this.state.country.length}ch`}}></input>
            </section>
        )
    }
}

export { Contacts }