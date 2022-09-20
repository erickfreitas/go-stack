import React, { Component } from "react";

import TechItem from "./TechItem";

class TechList extends Component {
    //definindo default Properties em componente tipo classe
    // static defaultProps = {
    //     tech: 'Oculto'
    // };

    //Definindo propTypes em componente tipo classe
    static propTypes = {
        tech: PropTypes.string,
    }

    state = {
        newTech: '',
        techs: [
            'Node.js',
            'React.js',
            'React Native'
        ]
    };

    handleInputChange = e => {
        this.setState({ newTech: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();

        this.setState({ 
            techs: [...this.state.techs, this.state.newTech ], 
            newTech: '' 
        });
    }

    handleDelete = (tech) => {
        this.setState({ techs: this.state.techs.filter(t => t != tech) })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <ul>
                    {this.state.techs.map(tech => (
                        <TechItem 
                            key={tech} 
                            tech={tech} 
                            onDelete={() => this.handleDelete(tech)}
                        />
                    ))}
                    <TechItem tech='test'/>
                </ul>
                <input 
                    type="text" 
                    onChange={this.handleInputChange} 
                    value={this.state.newTech}
                />
                <button type="submit">Enviar</button>
            </form>
        )
    }
}

export default TechList;