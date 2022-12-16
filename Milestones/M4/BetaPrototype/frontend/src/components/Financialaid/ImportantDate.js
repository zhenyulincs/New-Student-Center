import React from "react";

function ImportantDate() {
    return (
        <div className="col-md-6 col-sm-12 col-xs-12">
            <div className="card mb-4" id="card-border">
                <div
                    className="card-header col d-flex justify-content-center text-center"
                    id="header-color"
                >
                    <b>Important Dates</b>
                </div>
                <div
                    className="card-body p-3"
                >
                    <div className="card-body">
                        <div className="card-group">
                            <div className="card-body ">
                                <p className="card-text">
                                    <table class="table table-striped">
                                        <thead>
                                            <tr>
                                                <th scope="col">Date</th>
                                                <th scope="col">Event</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td> 11/18/2022</td>
                                                <td>Fin Aid Fridays </td>

                                            </tr>
                                            <tr>
                                                <td> 10/01/22</td>
                                                <td>2023-2024 Financial Aid Applicatino Open! </td>

                                            </tr>
                                            <tr>
                                                <td>9/19/2022 </td>
                                                <td> Fall 2022 Tuition Deadline</td>

                                            </tr>
                                            <tr>
                                                <td>8/17/2022 </td>
                                                <td> Fall 2022 Financial Aid Disbursements Begin!</td>

                                            </tr>
                                        </tbody>
                                    </table>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImportantDate