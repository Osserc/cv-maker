import { Component } from "react"

class EducationForm extends Component {
    render() {
        return (
            <div className="wide flex justify-center align-center">
                <form className="flex flex-c justify-center align-center w-75 card" onSubmit={this.props.addDegree}>
                    <div className="flex justify-between align-center wide">
                        <div className="flex flex-c">
                            <label htmlFor="startDate"><h3>Start date</h3></label>
                            <input type="month" id="startDate" name="startDate"></input>
                        </div>
                        <div className="flex flex-c text-right">
                            <label htmlFor="endDate"><h3>End date</h3></label>
                            <input type="month" id="endDate" name="endDate"></input>
                        </div>
                    </div>
                    <div className="flex flex-c align-center wide">
                        <label htmlFor="institution"><h3>Institution</h3></label>
                        <input type="text" id="institution" className="text-center" name="institution"></input>
                    </div>
                    <div className="flex justify-between align-center wide">
                        <div className="flex flex-c">
                            <label htmlFor="field"><h3>Field</h3></label>
                            <input type="text" id="field" name="field"></input>
                        </div>
                        <div className="flex flex-c text-right">
                            <label htmlFor="mark"><h3>Final mark</h3></label>
                            <input type="number" id="mark" name="mark"></input>
                        </div>
                    </div>
                    <div className="flex justify-evenly align-center wide actions">
                        <button>Confirm</button>
                        <button>Cancel</button>
                    </div>
                </form>
            </div>
        )
    }
}

export { EducationForm }