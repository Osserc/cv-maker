import { Component } from "react"

class Experience extends Component {
    constructor() {
        super()

        this.state = {
            experiences: [{
                id: 0,
                startDate: '01/2021',
                endDate: '04/2016',
                company: 'NY Police department',
                job: 'Hut hu hut!-ing',
            }]
        }

        this.addExperience = this.addExperience.bind(this)
        this.removeExperience = this.removeExperience.bind(this)
        this.updateExperience = this.updateExperience.bind(this)
    }

    addExperience() {
        const newExperience = { id: this.state.experiences.length,
                            startDate: 'Start',
                            endDate: 'End',
                            company: 'Company',
                            job: 'Job description'
                        }
        this.setState({
            experiences: this.state.experiences.concat(newExperience)
        })
    }

    removeExperience(event) {
        this.setState(prevState => {
            const newExperiences = [...prevState.experiences];
            newExperiences[event.target.dataset.index] = null;
            return {experiences: newExperiences};
        })
    }

    updateExperience(event) {
        this.setState(prevState => {
            const newExperiences = [...prevState.experiences];
            newExperiences[event.target.dataset.index][event.target.name] = [event.target.value];
            return {experiences: newExperiences};
        })
    }

    render() {
        return (
            <section id="experience" className="flex flex-c justify-center align-center gap-15">
                <h1>Experience</h1>

                {this.state.experiences.map((experience) => {
                    if (experience != null) {
                        return <div key={experience.id} className="card flex flex-c gap-15 wide">
                                    <div className="flex justify-between wide">
                                        <div className="flex flex-c">
                                            <input type="text" id="startDate" name="startDate" data-index={experience.id} defaultValue={experience.startDate} onChange={this.updateExperience}></input>
                                        </div>
                                        <div className="flex flex-c text-right">
                                            <input type="text" id="endDate" name="endDate" data-index={experience.id} defaultValue={experience.endDate} onChange={this.updateExperience}></input>
                                        </div>
                                    </div>
                                    <div className="flex flex-c">
                                        <input type="text" id="company" name="company" data-index={experience.id} defaultValue={experience.company} onChange={this.updateExperience}></input>
                                    </div>
                                    <div className="flex flex-c">
                                        <input type="text" id="job" name="job" data-index={experience.id} defaultValue={experience.job} onChange={this.updateExperience}></input>
                                    </div>
                                    <div className="actions">
                                        <button data-index={experience.id} onClick={this.removeExperience}>Remove experience</button>
                                    </div>
                                </div>
                    } else {
                        return null
                    }
                })}
                <button className="no-print" onClick={this.addExperience}>Add experience</button>
            </section>
        )
    }
}

export { Experience }