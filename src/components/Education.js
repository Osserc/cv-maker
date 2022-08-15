import { Component } from "react"

class Education extends Component {
    constructor() {
        super()

        this.state = {
            degrees: [{
                id: 0,
                startDate: '07/2022',
                endDate: '12/2022',
                institution: 'Tunisi Hut',
                field: 'Hut hu hut!-ology',
                mark: '98'
            }]
        }

        this.addDegree = this.addDegree.bind(this)
        this.removeDegree = this.removeDegree.bind(this)
        this.updateDegree = this.updateDegree.bind(this)
    }

    addDegree() {
        const newDegree = { id: this.state.degrees.length,
                            startDate: 'Start',
                            endDate: 'End',
                            institution: 'Institution',
                            field: 'Type of degree',
                            mark: 'Final mark'
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
            newDegrees[event.target.dataset.index][event.target.name] = event.target.value;
            return {degrees: newDegrees};
        })
        console.log(this.state.degrees)
    }

    render() {
        return (
            <section id="education">
                <h1>Education</h1>

                {this.state.degrees.map((degree) => {
                    if (degree != null) {
                        return <div key={degree.id} className="card flex flex-c gap-5 wide">
                                    <div className="flex justify-between wide">
                                        <div className="flex flex-c i-block">
                                            <input type="text" id="institution" name="institution" data-index={degree.id} defaultValue={degree.institution} onChange={this.updateDegree} style={{width: `${degree.institution.length}ch`}}></input>
                                        </div>
                                        <div>
                                            <div className="flex flex-c i-block">
                                                <input type="text" className="text-right" id="startDate" name="startDate" data-index={degree.id} defaultValue={degree.startDate} onChange={this.updateDegree} style={{width: `${degree.startDate.length}ch`}}></input>
                                            </div>
                                            <div className="i-block">
                                                 -
                                            </div>
                                            <div className="flex flex-c i-block">
                                                <input type="text" id="endDate" name="endDate" data-index={degree.id} defaultValue={degree.endDate} onChange={this.updateDegree} style={{width: `${degree.endDate.length}ch`}}></input>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-c i-block">
                                        <input type="text" id="field" name="field" data-index={degree.id} defaultValue={degree.field} onChange={this.updateDegree} style={{width: `${degree.field.length}ch`}}></input>
                                    </div>
                                    <div className="flex flex-c i-block">
                                        <input type="text" id="mark" name="mark" data-index={degree.id} defaultValue={degree.mark} onChange={this.updateDegree} style={{width: `${degree.mark.length}ch`}}></input>
                                    </div>
                                    <div className="wide text-right">
                                        <button data-index={degree.id} onClick={this.removeDegree}>Remove degree</button>
                                    </div>
                                </div>
                    } else {
                        return null
                    }
                })}
                <button className="no-print" onClick={this.addDegree}>Add education</button>
            </section>
        )
    }
}

export { Education }