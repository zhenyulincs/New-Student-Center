import React from "react";
import Navbars from "../../components/Navbar/navbar";
import Footer from "../../components/Navbar/Footer";

function Financialaid() {
  return (
    <div>
      <Navbars></Navbars>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="container px-4">
        <div className="row">
          <div className="col-12">
            <div className="card mb-4" id="card-border">
              <div className="card-header text-center" id="header-color">
                <b>Financial aid</b>
              </div>
              <div className="card-body text-center p-3 overflow-auto">
                <p className="card-text text-center col-sm-12">
                  <div className="d-flex justify-content-center me-auto ms-auto ">
                    <button type="submit" className="btn "  id="button-color" data-bs-toggle="modal" data-bs-target="#popup" style={{ marginRight: "10px" }}> Upload Document </button>
                  
                    <button type="submit" className="btn" style={{mardingleft: "15px"}} id="button-color" data-bs-toggle="modal" data-bs-target="#popup"> Financial Aid Info</button>
                 
                    <button type="submit" className="btn" id="button-color" data-bs-toggle="modal" data-bs-target="#popup" style={{ marginLeft: "10px" }}> Verifications & Forms </button>
                  </div>
                </p>
              </div>
            </div>
            </div>
          <div className="col-6">
            <div className="card mb-4" id="card-border">
              <div
                className="card-header col d-flex justify-content-center text-center"
                id="header-color"
              >
                <b>Immportant Dates</b>
              </div>
              <div
                className="card-body p-3 overflow-auto"
                style={{ height: "250px" }}
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
                              <td> 10.01.22</td>
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
          <div className="col-6">
            <div className="card mb-4" id="card-border">
              <div className="card-header  text-center" id="header-color">
                <b>Announcements</b>
              </div>
              <div
                className="card-body p-3 overflow-auto"
                style={{ height: "250px" }}
              >
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

          <div className="col-9">
            <div
              class="accordion"
              style={{ paddingbottom: "50px" }}
              id="header-color"
            ></div>
          </div>
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
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Footer></Footer>
    </div>
  );
}

export default Financialaid;
