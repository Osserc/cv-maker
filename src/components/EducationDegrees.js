import { Component } from "react"

class EducationDegrees extends Component {
    render() {
        return (
            <div>{this.props.degrees.map((degree) => {
                return <div key={degree.id}>Studied at {degree.university} University and graduated with {degree.marks}</div>
            })}</div>
        )
    }
}

export { EducationDegrees }