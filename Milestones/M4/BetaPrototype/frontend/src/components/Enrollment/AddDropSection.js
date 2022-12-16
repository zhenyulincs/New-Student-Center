import React from 'react'
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';

function Tables({ type, elements, enrollSubmit, isLoadingFinish }) {
    const navigate = useNavigate();
    const DropClass = (e, id) => {
        enrollSubmit(e, id, "DropClass")
    }

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Rank</th>
                    <th>Drop</th>
                    <th>Class</th>
                    <th>Title</th>
                    <th>Days/Times</th>
                    <th>Location</th>
                    <th>Instructor</th>
                    <th>Units</th>
                    <th>Rank</th>

                </tr>
            </thead>
            <tbody>
                {!isLoadingFinish ?
                    <tr>
                        <td>
                            <div class="spinner-border" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        </td>
                    </tr> :
                    elements.map((element) => (
                        type == "current" ?
                            <tr>
                                <td>
                                    <a type="submit" className="btn" id="button-color" onClick={(e) => { DropClass(e, element.id) }}>
                                        Drop
                                    </a>
                                </td>
                                <td>
                                    {element.short_name}
                                </td>
                                <td>
                                    {element.name}
                                </td>
                                <td>
                                    {element.meeting_days}
                                </td>
                                <td>
                                    {element.location}
                                </td>
                                <td>
                                    {element.professor_name}
                                </td>
                                <td>
                                    {element.units}
                                </td>
                                <td>
                                    {element.rating == null ? "N/A" : element.rating}
                                </td>
                            </tr>
                            : <tr><td>Dropped</td>

                                <td>
                                    {element.short_name}
                                </td>
                                <td>
                                    {element.name}
                                </td>
                                <td>
                                    {element.meeting_days}
                                </td>
                                <td>
                                    {element.location}
                                </td>
                                <td>
                                    {element.professor_name}
                                </td>
                                <td>
                                    {element.units}
                                </td>
                                <td>
                                    {element.rating == null ? "N/A" : element.rating}
                                </td>

                            </tr>

                    ))}
            </tbody>
        </Table>
    )
}

function AddDropSection({ type, elements, enrollSubmit, isLoadingFinish }) {
    return (
        <Tables type={type} elements={elements} isLoadingFinish={isLoadingFinish} enrollSubmit={enrollSubmit} />
    )
}

export default AddDropSection