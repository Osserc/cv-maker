import { Component } from "react";

class Contacts extends Component {
    constructor() {
        super()

        this.state = {
            email: 'email@proton.com',
            phone: 'Phone',
            address: 'Address',
            town: 'Town',
            country: 'Country',
            links: { website: 'mywebsite.com',
                        linkedin: 'https://github.com/Osserc',
                        github: '',
                        twitter: '',
                        facebook: ''
                    }
        }

        this.updateContacts = this.updateContacts.bind(this)
        this.insertLink = this.insertLink.bind(this)
        this.updateLink = this.updateLink.bind(this)
    }

    updateContacts(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    insertLink(event) {
        let container = document.querySelector('#social-modal')
        container.classList.remove('invisible')
        let element = document.querySelector('#social')
        element.name = event.target.id
        console.log(element)
    }

    updateLink(event) {

    }

    render() {
        return (
            <section id="contacts" className="flex flex-c justify-center align-center gap-15">
                <h1>Contacts</h1>
                <input type="email" id="email" name="email" defaultValue={this.state.email} onChange={this.updateContacts}></input>
                <input type="tel" id="phone" name="phone" defaultValue={this.state.phone} onChange={this.updateContacts}></input>
                <input type="text" id="town" name="town" defaultValue={this.state.town} onChange={this.updateContacts}></input>
                <input type="text" id="address" name="address" defaultValue={this.state.address} onChange={this.updateContacts}></input>
                <input type="text" id="country" name="country" defaultValue={this.state.country} onChange={this.updateContacts}></input>
                <a href={`${this.state.links.website}`} target="_blank" rel="noreferrer">Personal website</a>
                <div className="flex justify-center align-center gap-15">
                    <a href={`${this.state.links.linkedin}`} target="_blank" rel="noreferrer"><i className="devicon-linkedin-plain colored" id="linkedin"></i></a>
                    <a href={`${this.state.links.github}`}><i className="devicon-github-original colored" id="github"></i></a>
                    <a href={`${this.state.links.twitter}`}><i className="devicon-twitter-original colored" id="twitter"></i></a>
                    <a href={`${this.state.links.facebook}`}><i className="devicon-facebook-plain colored" id="facebook"></i></a>
                    <i className="devicon-facebook-plain colored" id="facebook" onClick={this.insertSocial}></i>
                </div>
                <div id="social-modal" className="f">
                    <form className="flex flex-c justify-content align-center gap-15">
                        <select></select>
                        <input type="text" id="social" name="placeholder" onSubmit={this.updateSocial}></input>
                        <button>Add social</button>
                    </form>
                </div>
            </section>
        )
    }
}

export { Contacts }