import React from 'react'

function HoldsAndAlerts() {
    return (
        <div className="col-12 mb-4 mt-4">
            <div className="accordion" style={{ paddingbottom: "50px" }} id="header-color">
                <div className="accordion-item" id="accordion-border">
                    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                        <button
                            className="accordion-button"
                            id="header-color"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseOne"
                            aria-expanded="true"
                            aria-controls="panelsStayOpen-collapseOne">
                            <b>Holds and Alerts</b>
                        </button>
                    </h2>
                    <div
                        id="panelsStayOpen-collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="panelsStayOpen-headingOne">
                        <div className="accordion-body">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">Item</th>
                                        <th scope="col">Amount</th>
                                        <th scope="col">Due Date</th>
                                        <th scope="col">Department</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">Pay tuition</th>
                                        <td>$3000</td>
                                        <td>January 5, 2023</td>
                                        <td>N/A</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Submit health records</th>
                                        <td>N/A</td>
                                        <td>January 5, 2023</td>
                                        <td>Health</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Complete assessment</th>
                                        <td>N/A</td>
                                        <td>January 25, 2023</td>
                                        <td>N/A</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HoldsAndAlerts