
/* 
File Description: This file response to render the Front page.

Front  page contains page contains the following module:
-displays a welcome message

The Front page contains the hyperlink to the following website:
- home Page

This file displays the important dates and announcments for the Financial Aid page.


*/

// import 'bootstrap/dist/css/bootstrap.min.css'
import "./front.css"
import React from 'react'
import Footer from "../../components/Footer/Footer"
import Button from 'react-bootstrap/Button';
import university from "../../assets/university.svg"

function front() {
    const background = {
        background: "repeat",
        backgroundSize: "100vw 100vh",
        overflow: "scroll"
    }

    return (
        <div className="container px-4">
            <div className="col-12">
                <div className="card mb-4" id="card-border" style={{ marginTop: "50px" }}>
                    <div className="card-body p-3 overflow-auto" style={{ height: "600px" }}>
                        <div className="row">
                            <div className="col-4" style={{ borderRight: "1px solid black" }}>
                                {/* Photo by Tima Miroshnichenko: https://www.pexels.com/photo/people-studying-in-the-library-together-9572669/ */}
                                <img src="frontimage.jpg" className="front-image" style={{ height: "550px" }}/>
                            </div>

                            <div className="col-8 text-center">
                                <h1 className="welcome-text">Welcome!</h1>
                                <p>
                                    This is the new and improved San Francisco State University student center. 
                                    Our goal was to create a student center that is easy to use and understand to ensure success.
                                    This student centers displays all of the vital information a college student will need in one 
                                    place so there is no need to go searching the web.
                                </p>
                                <a href="./registration"><Button className="get-started-button">Get Started</Button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )

}
export default front;