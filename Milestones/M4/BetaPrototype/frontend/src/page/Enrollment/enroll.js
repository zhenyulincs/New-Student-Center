/* 
File Description: This file response to render the Enroll page.
Enroll  page contains page contains the following module:
- Enroll
- Search Class
- Current Class Schedule
The Enroll page contains the hyperlink to the following website:
- Shopping cart

This file displays the students class schedule and shows the students shopping cart with there new class schedule for the following semester.

*/
import React, { useState, useEffect } from 'react'
import DisplayCurrentClass from '../../components/Enrollment/DisplayCurrentClass';
import SearchClass from '../../components/Enrollment/SearchClass';
import ShoppingCar from '../../components/Enrollment/ShoppingCar';
import "./enroll.css"
import Navbars from '../../components/Navbar/navbar'
import Footer from '../../components/Footer/Footer'

function compareDesc(a, b) {
    if (a.id > b.id) {
        return -1;
    }
    if (a.id < b.id) {
        return 1;
    }
    return 0;


}
function compareAsc(a, b) {
    if (a.id < b.id) {
        return -1;
    }
    if (a.id > b.id) {
        return 1;
    }
    return 0;
}



function getAllCourses(classes, setClasses, setIsLoadingFinish, user_token) {


    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {
            const return_data = JSON.parse(this.responseText)

            classes.currentClass.length = 0
            classes.waitListClass.length = 0
            classes.shoppingCarResults.length = 0
            classes.dropClass.length = 0
            classes.allClass.length = 0

            if (return_data.status.message === "success") {
                return_data.status.result.forEach(element => {
                    classes.allClass.push(element)
                    if (element.enrollments.length != 0) {
                        if (element.enrollments[0].enrollment_status == 0) {
                            classes.currentClass.push(element)
                        }
                        else if (element.enrollments[0].enrollment_status == 1) {
                            classes.waitListClass.push(element)
                        }
                        else if (element.enrollments[0].enrollment_status == 2) {
                            console.log(element)
                            classes.shoppingCarResults.push(element)
                        }
                        else if (element.enrollments[0].enrollment_status == 3) {
                            classes.dropClass.push(element)
                        }
                    }

                })
            }
            else {
                setClasses({ ...classes, message: return_data.result })
            }


            setIsLoadingFinish(true);
        }

    }
    const body = {
        token: user_token
    };

    xhttp.open("POST", "http://52.146.22.198/backend/getAllCourses");
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(new URLSearchParams(body).toString());
}


function Enroll() {
    const resizeObserver = new ResizeObserver(entries => {
        if (entries[0].target.scrollHeight > entries[0].target.clientHeight) {
            document.getElementsByClassName("footer")[0].style.position = "relative"
        } else {
            document.getElementsByClassName("footer")[0].style.position = "absolute"
        }
    }
    )
    resizeObserver.observe(document.body)

    let user_token = ""
    if (localStorage.getItem("user") != null) {
        user_token = localStorage.getItem("user")
    } else {
        user_token = sessionStorage.getItem("user")
    }
    const [classes, setClasses] = useState({
        message: "",
        status: false,
        currentClass: [],
        shoppingCarResults: [],
        dropClass: [],
        allClass: [],
        waitListClass: [],
        timeConflictClass: []
    })
    const [searchResults, setSearchResults] = useState([])
    const [isLoadingFinish, setIsLoadingFinish] = useState(false);
    const [searchField, setSearchField] = useState([""])
    const [init, SetInit] = useState(true)
    const [searchFilter, setSearchFilter] = useState({
        filters: [
            "Sorted rating by  Descending Order",
            "Sorted rating by Ascending Order",
        ],
        default_filter: "Sorted by Descending Order"
    });
    const [enrollPage, setEnrollPage] = useState(false)
    if (init) {
        getAllCourses(classes, setClasses, setIsLoadingFinish, user_token)
        SetInit(false)
    }

    const sortByRank = (type) => {
        if (type === searchFilter.filters[0]) {
            searchResults.sort(compareDesc)
        } else if (type === searchFilter.filters[1]) {
            searchResults.sort(compareAsc)
        }
        setSearchResults([...searchResults])
        setSearchFilter({ ...searchFilter, default_filter: type })
    }


    const timeConflict = (ref_element) => {
        if (classes.shoppingCarResults.length == 0) {
            console.log("no conflict")
        }
        classes.shoppingCarResults.forEach((element) => {

            if (ref_element.meeting_days == element.meeting_days) {
                const ref_start_time = ref_element.start_time.split(":")
                const ref_end_time = ref_element.end_time.split(":")
                const element_start_time = element.start_time.split(":")
                const element_end_time = element.end_time.split(":")
                if (element_start_time > ref_start_time && element_start_time < ref_end_time) {
                    classes.timeConflictClass.push(ref_element.id)
                    classes.timeConflictClass.push(element.id)
                    console.log("Conflict")
                }
                else if (element_end_time > ref_start_time && element_end_time < ref_end_time) {
                    classes.timeConflictClass.push(ref_element.id)
                    classes.timeConflictClass.push(element.id)
                    console.log("Conflict")
                }
                else if (element_start_time < ref_start_time && element_end_time > ref_end_time) {
                    classes.timeConflictClass.push(ref_element.id)
                    classes.timeConflictClass.push(element.id)
                    console.log("Conflict")
                }

            }
            else {
                console.log("no conflict")
            }
        })
    }
    const enrollSubmit = (e, section_id, instruction) => {

        let url = ""
        let body = null
        if (instruction == "AddToShoppingCart") {
            body = {
                token: user_token,
                section_id: section_id
            };
            url = "http://52.146.22.198/backend/addToCart"
        } else if (instruction == "DropClass") {
            body = {
                token: user_token,
                section_id: section_id
            };
            url = "http://52.146.22.198/backend/drop"
        } else if (instruction == "removeFromShoppingCart") {
            body = {
                token: user_token,
                section_id: section_id
            };
            url = "http://52.146.22.198/backend/drop"
        } else if (instruction == "fullyEnrolled") {
            body = {
                token: user_token,
            };
            url = "http://52.146.22.198/backend/enrollment"
        }
        setIsLoadingFinish(false)
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                const return_data = JSON.parse(this.responseText)
                if (instruction == "AddToShoppingCart" || (instruction == "removeFromShoppingCart" && enrollPage)) {
                    searchSubmit(searchField)
                }
                getAllCourses(classes, setClasses, setIsLoadingFinish, user_token)
                if (Array.isArray(return_data.status.result)) {
                    let message = "Message: "
                    return_data.status.result.forEach((messages) => {
                        message = message + messages.message + " "
                        messages.value.forEach((prerequisite) => {
                            message = message + prerequisite + " "
                        })
                        message = message + "\n"

                    })
                    setClasses({ ...classes, message: message })
                }




            }
        }
        xhttp.open("POST", url);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send(new URLSearchParams(body).toString());


    }
    const searchSubmit = (e, field) => {
        if (field != undefined) {
            e.preventDefault();

        } else {
            field = e
        }

        setClasses({ ...classes, message: "Working on it, please be patient!" })
        if (field == null || field == "") {
            setClasses({ ...classes, message: "Please Enter Class Name" })
            return
        }
        const body = {
            category: "course",
            field: field,
            token: user_token
        };
        var xhttp = new XMLHttpRequest();
        setSearchField(field)
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                const return_data = JSON.parse(this.responseText)
                searchResults.length = 0
                if (return_data.status.message === "success") {
                    return_data.status.result.forEach(element => {
                        searchResults.push(element)
                        setClasses({ ...classes, message: "" })
                    })
                } else {
                    setClasses({ ...classes, message: return_data.status.message })
                }



            }
        }
        xhttp.open("POST", "http://52.146.22.198/backend/search");
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send(new URLSearchParams(body).toString());
    }

    return (
        <div className='main-wrap'>
            <Navbars></Navbars>
            <div>
                <div className="container mt-4">
                    <div className='row text-center'>
                        <div className='col-md-12'>
                            <div className='v-heading-v2'>
                                <h3 className='v-search-result-count'>{classes.message}</h3>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-8'>
                            <div className="card mb-4" id="card-border">
                                <div className="card-header" id="header-color">
                                    <b>Enrollment</b>
                                </div>
                                <div className="card-body p-3 overflow-auto">
                                    {
                                        enrollPage ?
                                            <SearchClass search_filter={sortByRank} default_filter={searchFilter.default_filter} filters={searchFilter.filters} isLoadingFinish={isLoadingFinish} timeConflict={timeConflict} enrollSubmit={enrollSubmit} searchSubmit={searchSubmit} message={classes.message} searchResults={searchResults} setEnrollPage={setEnrollPage}></SearchClass> :
                                            <DisplayCurrentClass isLoadingFinish={isLoadingFinish} waitListClass={classes.waitListClass} enrollSubmit={enrollSubmit} setEnrollPage={setEnrollPage} currentClass={classes.currentClass} dropClass={classes.dropClass}></DisplayCurrentClass>
                                    }
                                </div>
                            </div>
                        </div>
                        <ShoppingCar timeConflictClass={classes.timeConflictClass} isLoadingFinish={isLoadingFinish} enrollSubmit={enrollSubmit} enrollPage={enrollPage} shoppingCarResults={classes.shoppingCarResults}></ShoppingCar>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}
export default Enroll