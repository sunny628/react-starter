import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const SharedFilters = (prop) => {
    return (
        <div className="md-card">
            <div className="md-card-content">
                <div className="uk-margin-bottom" data-uk-margin>
                    <h1 className="heading_b uk-margin-bottom">Shared filters</h1>
                </div>
                <hr/>
                <div className="uk-input-group">
                    <span className="uk-input-group-addon"><i className="material-icons md-24">&#xE8B6;</i></span>
                    <input type="text" className="md-input"/>
                    <span className="uk-input-group-addon"><a className="md-btn md-btn-primary" href="#">Search</a></span>
                </div>
                <table className="uk-table uk-text-nowrap">
                    <thead>
                    <tr>
                        <th>Order</th>
                        <th>Name</th>
                        <th className="uk-text-center">Icon</th>
                        <th className="uk-text-center">Role</th>
                        <th className="uk-text-center">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>DO IT</td>
                        <td className="uk-text-center">ICON</td>
                        <td className="uk-text-center">Agent,Manager,Admin</td>
                        <td className="uk-text-center">
                            <a className="md-btn md-btn-danger" href="#">Delete</a>
                            <a className="md-btn md-btn-primary" href="settings_shared_filter.html">Edit</a>
                            <a className="md-btn md-btn-primary" href="settings_project_shared_filter.html">UP</a>
                            <a className="md-btn md-btn-primary" href="settings_project_shared_filter.html">Down</a>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Assigned</td>
                        <td className="uk-text-center">ICON</td>
                        <td className="uk-text-center">Agent,Manager,Admin,Customer</td>
                        <td className="uk-text-center">
                            <a className="md-btn md-btn-danger" href="#">Delete</a>
                            <a className="md-btn md-btn-primary" href="settings_shared_filter.html">Edit</a>
                            <a className="md-btn md-btn-primary" href="settings_project_shared_filter.html">UP</a>
                            <a className="md-btn md-btn-primary" href="settings_project_shared_filter.html">Down</a>
                        </td>
                    </tr>
                    </tbody>
                </table>

                <div className="text-allign-right">
                    <a className="md-btn md-btn-primary" href="settings_company.html">Add</a>
                </div>



            </div>
        </div>
    );
};

SharedFilters.propTypes = {
    prop: PropTypes.object.isRequired
};

export default SharedFilters;
