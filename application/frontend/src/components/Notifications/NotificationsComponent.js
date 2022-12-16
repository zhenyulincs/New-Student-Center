import React from 'react'
function NotificationsComponent({ result, isFinishingLoad, read }) {
    return (
        <div className="col-12 mb-4">
            <div className="accordion" id="header-color">
                <div className="accordion-item" id="accordion-border">
                    <h2 className="accordion-header" id="headingOne">
                        <button
                            className="accordion-button"
                            id="header-color"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="panelsStayOpen-collapseTwo">
                            <b>Notifications</b>
                        </button>
                    </h2>
                    <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <table className="table table-striped table-hover">
                                <tbody>
                                    <th>
                                        Name
                                    </th>
                                    <th>
                                        Start Time
                                    </th>
                                    <th>
                                        End Time
                                    </th>
                                    <th>
                                        read
                                    </th>
                                    {!isFinishingLoad ?
                                        <tr>
                                            <td>
                                                <div class="spinner-border" role="status">
                                                    <span class="visually-hidden">Loading...</span>
                                                </div>
                                            </td>
                                        </tr>
                                        : result.map((data) => (
                                            <>
                                                <tr>
                                                    <td>{data.name}</td>
                                                    <td>{new Date(data.start_time).toDateString()}</td>
                                                    <td>{new Date(data.end_time).toDateString()}</td>
                                                    <td>
                                                        {
                                                            data.read_status ?
                                                                "Alread Read"
                                                                :
                                                                <a type="submit" className="btn" id="button-color" onClick={(e) => { read(data.id) }}>
                                                                    Read
                                                                </a>
                                                        }

                                                    </td>
                                                </tr>
                                            </>


                                        ))}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NotificationsComponent