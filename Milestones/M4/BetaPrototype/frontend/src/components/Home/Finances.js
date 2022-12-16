// File Description: This file response to render the Finances components for HomePage.

import React from 'react'
import { useNavigate } from 'react-router-dom';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';


function Finances() {
    const navigate = useNavigate();
    // redirect to error page
    const navigateError = () => {
        navigate('./ErrorPage');
    };
    const navigateFinancial = () => {
        navigate('./Financialaid');
    };
    return (
        <div className="col-md-9 col-sm-12 col-xs-12">
            <div className="card mb-4 login-height-100" id="card-border">
                <div className="card-header" id="header-color"><b>Finances</b></div>
                <div className="card-body p-3 overflow-auto">
                    <p className="card-text">
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">Links</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>

                                    <p className="events-text" type="button" data-bs-toggle="modal" data-bs-target="#event1-popup">FAFSA Application</p>
                                    <p className="events-text" type="button" data-bs-toggle="modal" data-bs-target="#event2-popup">SFSU Financial Office</p>
                                    <p className="events-text" type="button" data-bs-toggle="modal" data-bs-target="#event3-popup">Submit Your Document</p>
                                    <p className="events-text" data-bs-toggle="modal" data-bs-target="#event1-popup"><a className="events-text" style={{ "color": "black" }} href='./Financialaid' >View financial Event</a></p>
                                </tr>
                            </tbody>
                        </table>

                    </p>
                </div>
            </div>

            <div className="modal fade" id="event1-popup" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Warning</h5>
                        </div>
                        <div className="modal-body">
                            The link you clicked on will now take you to an external link.
                            <Button type="button" className="cancel-button btn-secondary" data-bs-dismiss="modal">Cancel</Button>
                            <a href="https://studentaid.gov/h/apply-for-aid/fafsa"><Button type="button" className="okay-button">Okay</Button></a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="event2-popup" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Warning</h5>
                        </div>
                        <div className="modal-body">
                            The link you clicked on will now take you to an external link.
                            <Button type="button" className="cancel-button btn-secondary" data-bs-dismiss="modal">Cancel</Button>
                            <a href="https://financialaid.sfsu.edu/"><Button type="button" className="okay-button">Okay</Button></a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="event3-popup" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Warning</h5>
                        </div>
                        <div className="modal-body">
                            The link you clicked on will now take you to an external link.
                            <Button type="button" className="cancel-button btn-secondary" data-bs-dismiss="modal">Cancel</Button>
                            <a href="https://financialaid.sfsu.edu/submit-documents-online"><Button type="button" className="okay-button">Okay</Button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>




    )
}
export default Finances;
