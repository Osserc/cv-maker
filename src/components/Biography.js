import { Component } from "react";

class Biography extends Component {
    constructor() {
        super()

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            address: '',
            town: '',
            country: '',
            occupation: ''
        }

        this.updateBio = this.updateBio.bind(this)
    }

    updateBio(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <section id="biography" className="flex flex-c justify-center align-center gap-15">
                <h1>Biography</h1>

                <div className="card w-75">
                    <div className="flex justify-evenly wide">
                        <div className="flex flex-c">
                            <label htmlFor="firstName"><h3>First name</h3></label>
                            <input type="text" id="firstName" name="firstName" defaultValue={this.state.firstName} onChange={this.updateBio}></input>
                        </div>
                        <div className="flex flex-c text-right">
                            <label htmlFor="occupation"><h3>Occupation</h3></label>
                            <input type="text" id="occupation" className="text-right" name="occupation" defaultValue={this.state.occupation} onChange={this.updateBio}></input>
                        </div>
                    </div>
                    <div className="flex justify-evenly wide">
                        <div className="flex flex-c">
                            <label htmlFor="lastName"><h3>Last name</h3></label>
                            <input type="text" id="lastName" className="text-right" name="lastName" defaultValue={this.state.lastName} onChange={this.updateBio}></input>
                        </div>
                        <div className="flex flex-c text-right">
                            <label htmlFor="country"><h3>Country</h3></label>
                            <input type="text" id="country" name="country" defaultValue={this.state.country} onChange={this.updateBio}></input>
                        </div>
                    </div>
                    <div className="flex justify-evenly wide">
                        <div className="flex flex-c">
                            <label htmlFor="email"><h3>Email</h3></label>
                            <input type="email" id="email" name="email" defaultValue={this.state.email} onChange={this.updateBio}></input>
                        </div>
                        <div className="flex flex-c text-right">
                            <label htmlFor="town"><h3>Town</h3></label>
                            <input type="text" id="town" className="text-right" name="town" defaultValue={this.state.town} onChange={this.updateBio}></input>
                        </div>
                    </div>
                    <div className="flex justify-evenly wide">
                        <div className="flex flex-c">
                            <label htmlFor="phone"><h3>Phone</h3></label>
                            <input type="tel" id="phone" className="text-right" name="phone" defaultValue={this.state.phone} onChange={this.updateBio}></input>
                        </div>
                        <div className="flex flex-c text-right">
                            <label htmlFor="address"><h3>Address</h3></label>
                            <input type="text" id="address" name="address" defaultValue={this.state.address} onChange={this.updateBio}></input>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export { Biography }