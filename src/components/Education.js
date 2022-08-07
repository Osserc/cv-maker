import { Component } from "react"

class Education extends Component {
    constructor() {
        super()

        this.state = {
            degrees: [{
                id: 0,
                startDate: "2022-06",
                endDate: "2022-03",
                institution: "Tunisi Hut",
                field: "Hut hu hut!-ology",
                mark: "98"
            },
            {
                id: 1,
                startDate: "",
                endDate: "",
                institution: "",
                field: "",
                mark: ""
            }]
        }

        this.addDegree = this.addDegree.bind(this)
        this.removeDegree = this.removeDegree.bind(this)
        this.updateDegree = this.updateDegree.bind(this)
    }

    addDegree() {
        const newDegree = { id: this.state.degrees.length,
                            startDate: "",
                            endDate: "",
                            institution: "",
                            field: "",
                            mark: ""
                        }
        this.setState({
            degrees: this.state.degrees.concat(newDegree)
        })
    }

    removeDegree(event) {
        this.setState(prevState => {
            const newDegrees = [...prevState.degrees];
            newDegrees[event.target.dataset.index] = null;
            return {degrees: newDegrees};
        })
    }

    updateDegree(event) {
        this.setState(prevState => {
            const newDegrees = [...prevState.degrees];
            newDegrees[event.target.dataset.index][event.target.name] = [event.target.value];
            return {degrees: newDegrees};
        })
    }


    render() {
        return (
            <section id="Education" className="flex flex-c justify-center align-center gap-15">
                <h1>Education</h1>

                {this.state.degrees.map((degree) => {
                    if (degree != null) {
                        return <div key={degree.id} className="card wide">
                                    <div className="flex justify-between wide">
                                        <div className="flex flex-c">
                                            <label htmlFor="startDate"><h3>Start Date {degree.startDate}</h3></label>
                                            <input type="text" id="startDate" name="startDate" data-index={degree.id} defaultValue={degree.startDate} onChange={this.updateDegree}></input>
                                        </div>
                                        <div className="flex flex-c text-right">
                                            <label htmlFor="occupation"><h3>End Date {degree.endDate}</h3></label>
                                            <input type="text" id="endDate" name="endDate" data-index={degree.id} defaultValue={degree.endDate} onChange={this.updateDegree}></input>
                                        </div>
                                    </div>
                                    <div className="flex flex-c">
                                        <label htmlFor="institution"><h3>Institution {degree.institution}</h3></label>
                                        <input type="text" id="institution" name="institution" data-index={degree.id} defaultValue={degree.institution} onChange={this.updateDegree}></input>
                                    </div>
                                    <div className="flex flex-c">
                                        <label htmlFor="field"><h3>Field {degree.field}</h3></label>
                                        <input type="text" id="field" name="field" data-index={degree.id} defaultValue={degree.field} onChange={this.updateDegree}></input>
                                    </div>
                                    <div className="flex flex-c">
                                        <label htmlFor="mark"><h3>Final mark {degree.mark}</h3></label>
                                        <input type="text" id="mark" name="mark" data-index={degree.id} defaultValue={degree.mark} onChange={this.updateDegree}></input>
                                    </div>
                                    <div className="actions">
                                        <button data-index={degree.id} onClick={this.removeDegree}>Remove degree</button>
                                    </div>
                                </div>
                    }
                })}
                <button onClick={this.addDegree}>Add education</button>
            </section>
        )
    }
}

export { Education }