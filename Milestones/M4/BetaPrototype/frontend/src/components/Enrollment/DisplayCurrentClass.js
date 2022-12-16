import React from 'react'

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import AddDropSection from './AddDropSection';
import WaitListSection from './WaitListSection';

function DisplayCurrentClass({enrollSubmit, isLoadingFinish, setEnrollPage,currentClass,dropClass, waitListClass}) {
    return (
        <Tabs defaultActiveKey="home" className="mb-3">
            {/* Add Drop Classes */}
            <Tab eventKey="home" title="Add / Drop">
                <div className="card-group">
                    <label>Current Schedule</label>
                    <AddDropSection type="current" isLoadingFinish={isLoadingFinish} elements={currentClass} enrollSubmit={enrollSubmit}></AddDropSection>
                    <label>Potential Classes</label>
                    <AddDropSection type="potential" isLoadingFinish={isLoadingFinish} elements={dropClass} enrollSubmit={enrollSubmit}></AddDropSection>
                    <div className="d-flex justify-content-center me-auto ms-auto ">
                        <a type="submit" className="btn" id="button-color" onClick={() => setEnrollPage(true)}> Begin to Enroll Classes </a>
                    </div>
                </div>
            </Tab>
            {/* Waitlist section */}
            <Tab eventKey="Waitlist" title="Waitlist">
                <div className="card-group ">
                    <label>Waitlist</label>
                    <WaitListSection waitListClass={waitListClass}></WaitListSection>
                </div>
            </Tab>
        </Tabs>

    )
}

export default DisplayCurrentClass