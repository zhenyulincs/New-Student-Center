/* 
File Description: This file response to render the Notification page.

Notifications page contains page contains the following module:
-Hold and Alerts
- Notification component

This file displays holds and alerts as well as the notification components for the notification page.


*/

import React, { useState } from 'react'
import Navbars from '../../components/Navbar/navbar'
import Footer from '../../components/Footer/Footer'
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';
import HoldsAndAlerts from '../../components/Notifications/HoldsAndAlerts'
import NotificationsComponent from '../../components/Notifications/NotificationsComponent'
import "./notifications.css"


function fetchNotification(body, result, setResult, setIsFinishLoad) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {
            const return_data = JSON.parse(this.responseText)
            if (return_data.status.message === "success") {
                result.notifications.length = 0
                return_data.status.result.forEach((data) => {
                    result.notifications.push(data)
                })
            }
            setIsFinishLoad(true)

        }

    }
    xhttp.open("POST", "http://52.146.22.198/backend/notification");
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(new URLSearchParams(body).toString());
}

function Notifications() {
    const resizeObserver = new ResizeObserver(entries => {
        if (entries[0].target.scrollHeight > entries[0].target.clientHeight) {
            document.getElementsByClassName("footer")[0].style.position = "relative"
        } else {
            document.getElementsByClassName("footer")[0].style.position = "absolute"
        }
    })
    resizeObserver.observe(document.body)
    let user_token = ""
    if (localStorage.getItem("user") != null) {
        user_token = localStorage.getItem("user")
    } else {
        user_token = sessionStorage.getItem("user")
    }
    const [isFirstTime, setIsFirstTime] = useState(true)
    const [result, setResult] = useState({
        notifications: [],
    })
    const [isFinishingLoad, setIsFinishLoad] = useState(false)
    const body = {
        token: user_token,
    };
    if (isFirstTime) {
        fetchNotification(body, result, setResult, setIsFinishLoad)
        setIsFirstTime(false)
    }

    const read = (id) => {
        setIsFinishLoad(false)
        var xhttp = new XMLHttpRequest();
        const sendReadRequestNotificationBody = {
            notification_id: id,

        };
        xhttp.onreadystatechange = function () {

            if (this.readyState == 4 && this.status == 200) {
                const return_data = JSON.parse(this.responseText)
                if (return_data.status.message === "success") {
                    fetchNotification(body, result, setResult, setIsFinishLoad)
                }

            }

        }
        xhttp.open("POST", "http://52.146.22.198/backend/readNotification");
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send(new URLSearchParams(sendReadRequestNotificationBody).toString());
    }

    return (
        <div>
            <Navbars refresh={true}></Navbars>
            <div className="container px-4">
                <div>
                    <div className='col-md-12 mt-4'>
                        <div className='v-heading-v2'>
                            <h2 className='v-search-result-count text-center'> Notification Center</h2>
                        </div>
                    </div>
                </div>
                {/* Notifications */}
                <NotificationsComponent read={read} isFinishingLoad={isFinishingLoad} result={result.notifications}></NotificationsComponent>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Notifications