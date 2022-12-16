import Dropdown from 'react-bootstrap/Dropdown';
import Badge from 'react-bootstrap/Badge';
import React, { useState } from 'react'
function fetchNotification(body, result, setResult, setIsFinishLoad) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {

    if (this.readyState == 4 && this.status == 200) {
      const return_data = JSON.parse(this.responseText)
      if (return_data.status.message === "success" && Array.isArray(return_data.status.result)) {
        result.notifications.length = 0
        return_data.status.result.forEach((data) => {
          if (!data.read_status) {
            result.notifications.push(data)
          }

        })
      }
      setIsFinishLoad(true)

    }

  }
  xhttp.open("POST", "http://52.146.22.198/backend/notification");
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send(new URLSearchParams(body).toString());
}
function Notification({refresh}) {
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
  let isRefresh = refresh
  if (isRefresh) {
    fetchNotification(body, result, setResult, setIsFinishLoad)
    isRefresh=false
  }
  return (
    <Dropdown>
      <Dropdown.Toggle split className='not-nav navbar-dropdown-icon' variant="outline-dark">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25a" fill="currentColor" class="bi bi-bell-fill" viewBox="0 0 16 16">
          <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
        </svg>
        {!isFinishingLoad ?
          <Badge pill>
            <div class="spinner-border" role="status" style={{"width":"1rem","height":"1rem"}}>
              <span class="visually-hidden">Loading...</span>
            </div>
          </Badge> :
          result.notifications.length == 0 ? "" : <Badge pill>{result.notifications.length}</Badge>
        }
      </Dropdown.Toggle>
      <Dropdown.Menu style={{ right: 0, left: "auto" }}>
        {!isFinishingLoad ?

          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          : result.notifications.map((data) => (
            <Dropdown.Item href='./notifications'><p className='pe-2 ps-2 notification mb-0'>{data.name}</p></Dropdown.Item>
          ))

        }
        <Dropdown.Divider />
        <Dropdown.Item href='./notifications'> See the Full List of Notifications</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}
export default Notification