import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import sfsu_transcript from "../../assets/sfsu_transcript.pdf";

function fetchNot(body, setFilePath,setIsFinishLoad) {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            const return_data = JSON.parse(this.responseText)

            if (return_data.status.message == "success") {
                setFilePath(return_data.status.result.path)
                setIsFinishLoad(true)
            }
        }
    };
    xhttp.open("POST", "http://52.146.22.198/backend/getTranscript");
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(new URLSearchParams(body).toString());
}




function Transcript() {
    let user_token = ""
    if (localStorage.getItem("user") != null) {
        user_token = localStorage.getItem("user")
    } else {
        user_token = sessionStorage.getItem("user")
    }
    const [filename, setFileName] = useState(null)
    const [filePath, setFilePath] = useState(null)
    const [isFirstTime, setIsFirstTime] = useState(true)
    const [isFinishingLoad, setIsFinishLoad] = useState(false)
    let body = {
        "token": user_token
    }
    if (isFirstTime) {
        fetchNot(body, setFilePath,setIsFinishLoad)
        setIsFirstTime(false)
    }
    return (
        <div className="col-md-3 col-sm-12 col-xs-12">
            <div className="card mb-4" id="card-border">
                <div className="card-header align-items-center" id="header-color">
                    <b>Transcript</b>
                </div>
                {!isFinishingLoad ?
                    <tr>
                        <td>
                            <div class="spinner-border" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        </td>
                    </tr> :
                    <div className="card-body p-3 overflow-auto col text-center">
                        <a
                            href={"http://52.146.22.198/backend/"+filePath}
                            target="_blank"
                            className="w-20 btn mb-3"
                            id="button-color"
                        >
                            View Transcript
                        </a >
                    </div>
                }
                <div className="card-body p-3 overflow-auto col text-center">
                    <form method="POST" action="http://52.146.22.198/backend/uploadTranscript" encType="multipart/form-data">
                        <label className="w-20 btn mb-3" id="button-color" for="contained-button-file">Upload Transcript</label>
                        <input style={{ "display": "none" }} name="transcript" id="contained-button-file" type="file" onChange={(e) => { setFileName(e.target.value.replace(/.*[\/\\]/, '')) }} />
                        <input style={{ "display": "none" }} name="token" value={user_token} />
                        <p>{filename == null ? "" : "Ready to upload " + filename + "?"}</p>
                        {filename == null ? "" : <button type="submit" className="w-20 btn mb-3" id="button-color">Ready to Submit</button>}
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Transcript