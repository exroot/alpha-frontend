import React from 'react';
import './Notes.css';

const Notes = props => {
    return (
        <div className="card" key={ props.id }>
            <div className="card__container">
                <h4 className="card__title"><b>{ props.title }</b></h4>
                <hr />
                <p className="card__body">{ props.body }</p>
            </div>
        </div>
    );
}

export default Notes;