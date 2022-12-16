import React from "react";
import Button from 'react-bootstrap/Button';
import "../../components/Financialaid/Events.css";

function Events() {
    return (
        <div className="container px-4">
            <h2>Events</h2>
            <div className="card-deck">
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    <div>
                        <div className="col">
                            <div className="card mb-4" id="events-card-border">
                                {/* Photo by fauxels: https://www.pexels.com/photo/photo-of-people-sitting-beside-table-3182755/ */}
                                <img className="card-img-top" src="image1.jpg" />
                                <div className="card-body p-2">
                                    <p className="events-text" type="button" data-bs-toggle="modal" data-bs-target="#event1-popup">Dec 02 - Fin Aid Fridays</p>
                                    <p className="card-text"></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="col">
                            <div className="card mb-4" id="events-card-border">
                                {/* Photo by Kindel Media: https://www.pexels.com/photo/man-couple-love-people-7979437/ */}
                                <img className="card-img-top" src="image2.jpg" />
                                <div className="card-body p-2">
                                    <p className="events-text" type="button" data-bs-toggle="modal" data-bs-target="#event2-popup">Oct 01 - 2023-2024 Financial Aid Applications OPEN!</p>
                                    <p className="card-text"></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="col">
                            <div className="card mb-4" id="events-card-border">
                                {/* Photo by Anna Shvets: https://www.pexels.com/photo/person-holding-bank-card-4482900/ */}
                                <img className="card-img-top" src="image3.jpg" />
                                <div className="card-body p-2">
                                    <p className="events-text" type="button" data-bs-toggle="modal" data-bs-target="#event3-popup">Sep 19 - Fall 2022 Tuition Payment Deadline</p>
                                    <p className="card-text"></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="col">
                            <div className="card mb-4" id="events-card-border">
                                {/* Photo by Antoni Shkraba: https://www.pexels.com/photo/person-in-black-suit-jacket-holding-white-paper-5816299/ */}
                                <img className="card-img-top" src="image4.jpg" />
                                <div className="card-body p-2">
                                    <p className="events-text" type="button" data-bs-toggle="modal" data-bs-target="#event4-popup">Aug 17 - Fall 2022 Financial Aid Disbursements Begin!</p>
                                    <p className="card-text"></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <p className="events-text" type="button" data-bs-toggle="modal" data-bs-target="#more-events-popup">More Events Here!</p>

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
                            <a href="https://financialaid.sfsu.edu/event/fin-aid-fridays-session-4"><Button type="button" className="okay-button">Okay</Button></a>
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
                            <a href="https://financialaid.sfsu.edu/2023-2024-financial-aid-applications-open"><Button type="button" className="okay-button">Okay</Button></a>
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
                            <a href="https://financialaid.sfsu.edu/fall-2022-tuition-payment-deadline"><Button type="button" className="okay-button">Okay</Button></a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="event4-popup" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Warning</h5>
                        </div>
                        <div className="modal-body">
                            The link you clicked on will now take you to an external link.
                            <Button type="button" className="cancel-button btn-secondary" data-bs-dismiss="modal">Cancel</Button>
                            <a href="https://financialaid.sfsu.edu/fall-2022-tuition-payment-deadline"><Button type="button" className="okay-button">Okay</Button></a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="more-events-popup" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Warning</h5>
                        </div>
                        <div className="modal-body">
                            The link you clicked on will now take you to an external link.
                            <Button type="button" className="cancel-button btn-secondary" data-bs-dismiss="modal">Cancel</Button>
                            <a href="https://financialaid.sfsu.edu/events"><Button type="button" className="okay-button">Okay</Button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Events