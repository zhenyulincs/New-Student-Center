// File Description: This file response to render the Finances components for HomePage.

import React from 'react'
import { useNavigate } from 'react-router-dom';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import '../home.css'

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
        <div className="col-9">
            <div className="card mb-4" id="card-border">
                <div className="card-header" id="header-color"><b>Finances</b></div>
                <div className="card-body p-3 overflow-auto">
                    <p className="card-text">
                        <Tabs defaultActiveKey="home" className="mb-3">
                            <Tab eventKey="home" title="My Account">
                                <table class="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">Link</th>
                                            <th scope="col">Payment Due</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Account Inquiry</td>
                                            <td>You owe: $4000</td>
                                        </tr>
                                        <tr>
                                            <td>Enroll In Direct</td>
                                            <td>*Due now: $4000</td>
                                        </tr>
                                        <tr>
                                            <td>Deposit</td>
                                            <td>*Future due: $00.00</td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>**You have a past due of $4000**</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="d-flex justify-content-center mx-4 mt-3">
                                    <a onClick={navigateFinancial} className="btn" id="button-color">See the full list of finances info</a>
                                </div>
                            </Tab>
                            <Tab eventKey="profile" title="Financial Aid">
                                <table class="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">Links</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="temp-links" data-bs-toggle="modal" data-bs-target="#popup">View Financial Aid</td>
                                            <td className="temp-links" data-bs-toggle="modal" data-bs-target="#popup">Accept/Decline Awards</td>
                                            <td className="temp-links" data-bs-toggle="modal" data-bs-target="#popup">Report Other Financial Aid</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </Tab>
                        </Tabs>
                    </p>
                </div>
            </div>

            <div className="modal fade" id="popup" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Alert!!</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            This feature has not been implemented yet. It will be released in the next prototype.
                        </div>
                    </div>
                </div>
            </div>
        </div>





    )
}
export default Finances;
