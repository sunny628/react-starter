import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const trigers = (prop) => {
    return (
        <div className="md-card">
            <div className="md-card-content">
                <div className="uk-margin-bottom" data-uk-margin>
                    <h1 className="heading_b uk-margin-bottom">Trigers</h1>
                </div>
                <hr/>
            </div>
        </div>
    );
};

trigers.propTypes = {
    prop: PropTypes.object.isRequired
};

export default trigers;
