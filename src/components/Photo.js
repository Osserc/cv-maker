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
    }

    fireForm(event) {
        event.target.parentElement.submit()
    }

    setPortrait(event) {
        event.preventDefault()
        let image = event.target.files[0]
        if (!this.checkFileExtension(image.name)) {
            alert('Invalid extensions')
        } else {
            this.setState({
                profilePicture: URL.createObjectURL(image)
            })
        }
    }

    checkFileExtension(filename) {
        let allowedExtensions = ['png', 'jpg', 'jpeg']
        let extension = filename.split('.').pop()
        if (allowedExtensions.includes(extension)) return true
        return false
    }

    render () {
        return (
            <section id="photo">
                <form id="photo-form" className="flex flex-c justify-center align-center" onSubmit={this.setPortrait}>
                    <label htmlFor="portrait"><img src={this.state.profilePicture} alt=""></img></label>
                    <input type="file" id="portrait" name="portrait" accept="image/*" onChange={this.setPortrait}></input>
                </form>
            </section>
        )
    }
}

export { Photo }