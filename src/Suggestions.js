import React from 'react';

const Suggestions = (props) => {
    const options = props.results.map(i => (
        <li key = {i.id}>
            {i.title}
        </li>
    ))
    return <ul>{options}</ul>
}
export default Suggestions;