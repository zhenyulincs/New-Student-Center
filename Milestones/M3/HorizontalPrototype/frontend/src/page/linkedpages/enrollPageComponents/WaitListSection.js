import React from 'react'
import Table from 'react-bootstrap/Table';
function WaitListSection() {
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
                <tr>
                    <td>MATH 228</td>
                    <td>Tu Th 5:00 PM - 6:15 PM</td>
                    <td>Thornton Hall 210</td>
                    <td>Shidong Li</td>
                    <td>3</td>
                    <td>Closed</td>
                </tr>
                
            </tbody>
        </Table>
    )
}

export default WaitListSection