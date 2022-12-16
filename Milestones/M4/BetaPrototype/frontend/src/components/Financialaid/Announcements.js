import React from "react";

function Announcements() {
    return (
        <div className="col-md-6 col-sm-12 col-xs-12">
            <div className="card mb-4" id="card-border">
                <div className="card-header  text-center" id="header-color">
                    <b>Announcements</b>
                </div>
                <div className="card-body p-3 overflow-auto">
                    <div className="card-group" style={{ width: "100%" }}>
                        <div className="card-body ">
                            <p className="card-text">
                                <table class="table table-striped">
                                    <tbody>
                                        <tr>
                                            <td>2023-2024 FINANCIAL AID APPLICATIONS ARE LIVE! </td>
                                        </tr>
                                        <tr>
                                            <td>PRESIDENT BIDEN'S LOAN FORGIVENESS PROGRAM </td>
                                        </tr>
                                        <tr>
                                            <td> FALL 2022 FINANCIAL AID DISBURSEMENT</td>
                                        </tr>
                                        <tr>
                                            <td> 2022-2023 FINANCIAL AID AWARDS</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Announcements