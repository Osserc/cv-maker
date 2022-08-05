import { Component } from "react"

class EducationDegrees extends Component {
    render() {
        return (
            <div>{this.props.degrees.map((degree) => {
                return <div key={degree.id}>Studied at {degree.institution} University and graduated with {degree.mark}. Started on {degree.startDate} and finished on {degree.endDate}. He obtained a degree in {degree.field}.</div>
            })}</div>
        )
    }
}

export { EducationDegrees }