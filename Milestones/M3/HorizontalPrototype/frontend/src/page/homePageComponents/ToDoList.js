// File Description: This file response to render the ToDoList components for HomePage.

import React from 'react'
function ToDoList() {
    return (
        <div className="col-3">
            <div className="card mb-4" id="card-border">
                <div className="card-header" id="header-color">
                    <b>To-Do List</b>
                </div>
                <div className="card-body p-3 overflow-auto">
                    <p className="card-text">
                        <ul>
                            <li>Register for classes</li>
                            <li>Pay for classes</li>
                            <li>Check housing status</li>
                            <li>Apply for graduation</li>
                            <li>Complete professor evaluation</li>
                        </ul>
                        <div className="d-flex">
                            <label className="form-check-label" htmlFor="form2Example3">
                                <p></p>
                            </label>
                        </div>
                        <div className="d-flex">
                            <label className="form-check-label" htmlFor="form2Example3">
                                <p></p>
                            </label>
                        </div>
                        <div className="d-flex">
                            <label className="form-check-label" htmlFor="form2Example3">
                                <p></p>
                            </label>
                        </div>
                    </p>
                </div>
            </div>
        </div>
    )
}
export default ToDoList;
