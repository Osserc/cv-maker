import { Component } from "react"

class Skills extends Component {
    constructor() {
        super()

        this.state = {
            skills: []
        }

        this.addSkill = this.addSkill.bind(this)
        this.removeSkill = this.removeSkill.bind(this)
        this.updateSkill = this.updateSkill.bind(this)
    }

    addSkill() {
        const newSkills = { id: this.state.skills.length,
                            tongue: ''
                        }
        this.setState({
            skills: this.state.skills.concat(newSkills)
        })
    }

    removeSkill(event) {
        this.setState(prevState => {
            const newSkills = [...prevState.skills];
            newSkills[event.target.dataset.index] = null;
            return {skills: newSkills};
        })
    }

    updateSkill(event) {
        this.setState(prevState => {
            const newSkills = [...prevState.skills];
            newSkills[event.target.dataset.index][event.target.name] = [event.target.value];
            return {skills: newSkills};
        })
    }

    render() {
        return (
            <section id="skills" className="flex flex-c justify-center align-center gap-15">
                <h1>Skills</h1>

                {this.state.skills.map((skill) => {
                    if (skill != null) {
                        return (
                            <div key={skill.id} className="flex justify-center align-center gap-15">
                                <input type="text" id="tongue" name="tongue" data-index={skill.id} defaultValue={skill.tongue} onChange={this.updateSkill}></input>
                                <button data-index={skill.id} onClick={this.removeSkill}>X</button>
                            </div>
                        )
                    } else {
                        return null
                    }
                })}
                <button className="no-print" onClick={this.addSkill}>Add skill</button>
            </section>
        )
    }
}

export { Skills }