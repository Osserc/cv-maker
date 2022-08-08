import { Component } from "react"
import nullImage from '../images/nullImage.png'

class Photo extends Component {
    constructor() {
        super()

        this.state = {
            profilePicture: nullImage
        }

        this.fireForm = this.fireForm.bind(this)
        this.setPortrait = this.setPortrait.bind(this)
        this.logStatus = this.logStatus.bind(this)
    }

    logStatus() {
        console.log(this.state.profilePicture)
    }

    fireForm(event) {
        event.target.parentElement.submit()
    }

    setPortrait(event) {
        event.preventDefault()
        console.log(event.target.files[0])
        this.setState({
            profilePicture: URL.createObjectURL(event.target.files[0])
        })
    }

    render () {
        return (
            <section id="photo">
                <form id="photo-form" className="flex flex-c justify-center align-center" onSubmit={this.setPortrait}>
                    <label htmlFor="portrait"><img src={this.state.profilePicture} alt=""></img></label>
                    <input type="file" id="portrait" name="portrait" onChange={this.setPortrait}></input>
                </form>
            </section>
        )
    }
}

export { Photo }