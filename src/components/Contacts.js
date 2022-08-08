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
            links: { website: '',
                        linkedin: 'https://github.com/Osserc',
                        github: '',
                        twitter: '',
                        facebook: ''
                    },
            editing: false,
            currentEditing: 'website'
        }

        this.updateContacts = this.updateContacts.bind(this)
        this.toggleEditing = this.toggleEditing.bind(this)
        this.determineLink = this.determineLink.bind(this)
        this.updateLink = this.updateLink.bind(this)
    }

    updateContacts(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    toggleEditing() {
        this.setState(prevState => ({
            editing: !prevState.editing
          }));
    }

    determineLink(event) {
        console.log(event.target.value)
        this.setState({
            currentEditing: event.target.value
        })

    }

    updateLink(event) {
        this.setState(prevState => {
            const newLinks = prevState.links;
            newLinks[event.target.name] = event.target.value
            return {links: newLinks}
        })
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
                    <a href={`${this.state.links.github}`} target="_blank" rel="noreferrer"><i className="devicon-github-original colored" id="github"></i></a>
                    <a href={`${this.state.links.twitter}`} target="_blank" rel="noreferrer"><i className="devicon-twitter-original colored" id="twitter"></i></a>
                    <a href={`${this.state.links.facebook}`} target="_blank" rel="noreferrer"><i className="devicon-facebook-plain colored" id="facebook"></i></a>
                </div>
                {this.state.editing === false ?
                    <button onClick={this.toggleEditing}>Edit links</button> :
                    <div id="social-modal" className="flex flex-c justify-content align-center gap-15">
                        <select onChange={this.determineLink}>
                            <option value="website">Website</option>
                            <optgroup label="socials">
                                <option value="linkedin">Linkedin</option>
                                <option value="github">GitHub</option>
                                <option value="twitter">Twitter</option>
                                <option value="facebook">Facebook</option>
                            </optgroup>
                        </select>
                        <input type="text" id="link" name={this.state.currentEditing} defaultValue={this.state.links[this.state.currentEditing]} onChange={this.updateLink}></input>
                        <button onClick={this.toggleEditing}>Stop</button>
                    </div>
                }
            </section>
        )
    }
}

export { Contacts }