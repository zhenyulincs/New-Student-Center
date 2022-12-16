import React from 'react'
import Table from 'react-bootstrap/Table';
function WaitListSection({waitListClass}) {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Class</th>
                    <th>Days/Times</th>
                    <th>Location</th>
                    <th>Instructor</th>
                    <th>Units</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>

                {
                    waitListClass.map((course) => (
                        <tr>
                            <td>{course.short_name}</td>
                            <td>{course.meeting_days}</td>
                            <td>{course.location}</td>
                            <td>Shidong Li</td>
                            <td>{course.units}</td>
                            <td>open</td>
                        </tr>
                    ))
                }


            </tbody>
        </Table >
    )
}

export default WaitListSection