import React from "react";
import PropTypes from "prop-types";

function TechItem({ tech, onDelete }) {
    return (
        <li>
            {tech}
            <button type='button' onClick={onDelete}>Remover</button>
        </li>
    );
}

//Definindo propriedades padrões caso vazio
TechItem.defaultProps = {
    tech: 'Oculto'
}

//Definindo tipos dos parametros da prop
TechItem.propTypes = {
    tech: PropTypes.string,
    onDelete: PropTypes.func.isRequired
}

export default TechItem;