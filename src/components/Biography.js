import { Component } from "react";

class Biography extends Component {
    render() {
        return (
            <section id="biography" className="flex flex-c justify-center align-center">
                <h1>Biography</h1>

                <hr className="wide"></hr>

                <form>
                    <label htmlFor="firstName">First name</label>
                    <input type="text" id="firstName" name="firstName"></input>
                    <label htmlFor="lastName">Last name</label>
                    <input type="text" id="lastName" name="lastName"></input>
                </form>
            </section>
        )
    }
}

export { Biography }