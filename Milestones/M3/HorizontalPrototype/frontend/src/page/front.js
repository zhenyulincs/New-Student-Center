
// import 'bootstrap/dist/css/bootstrap.min.css'
import "./front.css"
import React from 'react'
import university from "../assets/university.svg"
function front() {
    const background = {
        background: `no-repeat url(${university})`,
        backgroundSize: "100vw 100vh",
        overflow: "scroll"
    }

    return (
        <section className='vh-100 overflow-auto' style={background}>
            <div id='container'>
                <h1 id='word'>Welcome to the new and improved SFSU student center! To get started, click below!
                <a href="./login"><button id='start-here-button'>Start Here</button></a>
                </h1>

            </div>
         </section>

    )

}
export default front;