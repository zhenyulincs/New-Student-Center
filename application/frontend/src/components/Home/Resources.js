// File Description: This file response to render the Resources components for HomePage.
import React from 'react'


function Resources() {
    return (
        <div className="col-md-3 col-sm-12 col-xs-12">
            <div className="card mb-4 login-height-100" id="card-border">
                <div className="card-header" id="header-color"><b>Resources</b></div>
                <div className="card-body p-3 overflow-auto">
                    <p className="card-text">
                        <p className="card-text">
                            <a href='./healthrecords'>Health Records</a>

                        </p>
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
export default Resources;
