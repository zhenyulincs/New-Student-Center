import React from 'react'
import Table from 'react-bootstrap/Table';

function Tables({ type, elements, drop }) {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Drop</th>
                    <th>Class</th>
                    <th>Title</th>
                    <th>Days/Times</th>
                    <th>Location</th>
                    <th>Instructor</th>
                    <th>Units</th>

                </tr>
            </thead>
            <tbody>
                {
                    elements.map((element, index) => (
                        element != undefined ?

                            <tr>
                                {type == "current" ?
                                    <td>
                                        <a type="submit" className="btn" id="button-color" onClick={() => { drop(index) }}>
                                            Drop
                                        </a>
                                    </td>
                                    
                                    : <td>Dropped</td>
                                    
                                }
                                {element.map((content, index) => (
                                    element != undefined ?
                                        <td>{content}</td>
                                        : ""
                                ))}
                            </tr>
                            : ""
                    ))}
            </tbody>
        </Table>
    )
}

function AddDropSection({ type, elements, drop }) {
    return (
        <Tables type={type} elements={elements} drop={drop} />
    )
}

export default AddDropSection