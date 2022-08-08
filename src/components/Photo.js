import { Component } from "react"

class Photo extends Component {
    constructor() {
        super()

        this.state = {
            profilePicture: ''
        }
    }

    render () {
        return (
            <section className="flex justify-center align-center">
                <label htmlFor="photo">Photo thingy</label>
                <input type="file" id="photo" name="photo"></input>
            </section>
        )
    }
}

export { Photo }