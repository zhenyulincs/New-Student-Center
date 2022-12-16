import React from 'react'

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import AddDropSection from './AddDropSection';
import WaitListSection from './WaitListSection';
import ConflictingClassSection from './ConflictingClassSection';

function DisplayCurrentClass({navigateEnroll,current_class,potential_class,drop}) {
    return (
        <Tabs defaultActiveKey="home" className="mb-3">
            {/* Add Drop Classes */}
            <Tab eventKey="home" title="Add / Drop">
                <div className="card-group">
                    <label>Current Schedule</label>
                    <AddDropSection type="current" elements={current_class} drop={drop}></AddDropSection>
                    <label>Potential Classes</label>
                    <AddDropSection type="potential" elements={potential_class}></AddDropSection>
                    <div className="d-flex justify-content-center me-auto ms-auto ">
                        <a type="submit" className="btn" id="button-color" onClick={navigateEnroll}> Begin to Enroll Classes </a>
                    </div>
                </div>
            </Tab>
            {/* Waitlist section */}
            <Tab eventKey="Waitlist" title="Waitlist">
                <div className="card-group ">
                    <label>Waitlist</label>
                    <WaitListSection></WaitListSection>
                </div>
            </Tab>
        </Tabs>

    )
}

export default DisplayCurrentClass