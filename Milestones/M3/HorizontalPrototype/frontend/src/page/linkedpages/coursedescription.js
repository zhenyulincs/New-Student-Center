import React from 'react'
import Navbars from '../../components/Navbar/navbar'
import Footer from '../../components/Navbar/Footer'

function CourseDescription() {
    return (
        <section className="container">
            <div><Navbars></Navbars></div>
            <br></br>
            <br></br>
            <div className='container'>
                <div className='row'>
                    <div className='row text-center'>
                        <div className='col-md-12'>
                            <div className='v-heading-v2'>
                                <h3 className='v-search-result-count'>Course Description</h3>
                            </div>
                        </div>
                    </div>
                    <div className='clearfix mt-40'>
                        <div id="Result-Container">
                            <div id="Result-Title"><b>Class Name: Chinese</b>
                                <div id="Result-Description">
                                    <b>Prerequisites: </b>None
                                    <br></br>
                                    <b>Units: </b>3
                                    <br></br>
                                    <b>Course Attributes: </b>Lower Division
                                    <br></br>
                                    <b>Professor: </b> Michael
                                    <br></br>
                                    <b>Location: </b>Thornton Hall 328
                                    <br></br>
                                    <b>Time: </b>11:00 am - 12:15 pm
                                    <br></br>
                                    <b>Seats: </b>6
                                    <br></br>
                                    <b>Waitlist: </b> 5
                                    <br></br>
                                    <b>Class Description:</b>
                                    <br></br>
                                    Introduction course where students will learn Mandarin.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </section>
    )
}

export default CourseDescription