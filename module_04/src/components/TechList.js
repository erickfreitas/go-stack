import React, { Component } from "react";
import TechItem from "./TechItem";
import PropTypes from "prop-types";

class TechList extends Component {

    //Definindo propriedades padrões
    static defaultProps = {
        // tech: 'oculto',        
    };

    //Definindo tipos das propriedade
    static propTypes = {
        // tech: PropTypes.string,
        // onDelete: PropTypes.func.isRequired
    }
    

    state = {
        newTech: '',
        techs: []
    };

    //Executado assim que o componente aparece em tela
    componentDidMount() {

    }

    //Executado sempre que houver alterações nas props ou no estado
    componentDidUpdate(prevProps, prevState) {
        // -> valores antigos -> prevProps, prevState
        // -> novos valores -> this.props, this.state

        if(this.state.techs !== prevState.techs) {
            localStorage.setItem('techs', JSON.stringify(this.state.techs))
        }

    }

    //Executado quando o componente deixa de existir
    componentWillUnmount() {

    }

    handleInputChange = e => {
        this.setState({ newTech: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();

        if (this.state.newTech != '') {
            this.setState({ 
                techs: [... this.state.techs, this.state.newTech],
                newTech: '' 
            });
        }
    }

    handleDelete = (tech) => {
        this.setState({ techs: this.state.techs.filter(t => t != tech) });
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <ul>
                    {this.state.techs.map(tech => 
                        <TechItem
                            key={tech} 
                            tech={tech} 
                            onDelete={() => { this.handleDelete(tech) }}
                        />)
                    }
                </ul>
                <input 
                    type="text" 
                    onChange={this.handleInputChange} 
                    value={this.state.newTech}
                />                
                <button type="submit">Enviar</button>
            </form>
        );
    }
}

export default TechList;