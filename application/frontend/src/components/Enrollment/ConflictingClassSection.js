import React from 'react'
import Table from 'react-bootstrap/Table';
function ConflictingClassSection() {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Class</th>
                    <th>Description</th>
                    <th>Days/Times</th>
                    <th>Location</th>
                    <th>Instructor</th>
                    <th>Units</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td colSpan={2}>Larry the Bird</td>
                    <td>@twitter</td>
                </tr>
            </tbody>
        </Table>
    )
}

export default ConflictingClassSection