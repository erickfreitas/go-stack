import React from 'react';
import PropTypes from 'prop-types';

function TechItem({ tech, onDelete }) {
    return(
        <li>
            {tech}
            <button onClick={onDelete} type="button">Remover</button>
        </li>
    );
}

//definindo default Properties em componente tipo function
TechItem.defaultProps = {
    tech: 'Oculto'
}

//Definindo propTypes em componente tipo function
TechItem.propTypes = {
    tech: PropTypes.string,
    onDelete: PropTypes.func.isRequired
}

export default TechItem;