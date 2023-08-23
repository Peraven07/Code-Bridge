
import React, { useState,useRef } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { connect } from "react-redux";

const ContactUsPage = (props) => {
    
    const [visibleRight, setVisibleRight] = useState(false); // SideBar
    const toast = useRef(null);

    const handleSubmit = () => {
        // Submit the form or perform further actions here
        toast.current.show({
            severity: 'success',
            summary: 'Successfully Booked',
        });
    };

    return (
        <div className="col-12 flex justify-content-center">
            <Sidebar visible={visibleRight} position="right" onHide={() => setVisibleRight(false)} className="p-sidebar-md">
                <h2>Contact</h2>
                    <div className="card">
                    <Toast ref={toast} position="top-right"/>
                    <h2>We're available </h2>
                    <div className="formgrid grid">
                        <div className="field col-12 md:col-6">
                            <label for="firstname6">First Name</label>
                            <input id="firstname6" type="text" className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"></input>
                        </div>
                        <div className="field col-12 md:col-6">
                            <label for="firstname6">Last Name</label>
                            <input id="firstname6" type="text" className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"></input>
                        </div>
                        <div className="field col-12 md:col-6">
                            <label for="firstname6">Contact Number</label>
                            <input id="firstname6" type="text" className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"></input>
                        </div>
                        <div className="field col-12 md:col-6">
                            <label for="firstname6">Email Address</label>
                            <input id="firstname6" type="text" className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"></input>
                        </div>
                        <div className="field col-12 md:col-6">
                            <label for="firstname6">Company</label>
                            <input id="firstname6" type="text" className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"></input>
                        </div>
                        <div className="field col-12 md:col-6">
                            <label for="firstname6">Position</label>
                            <input id="firstname6" type="text" className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"></input>
                        </div>
                        <div className="field col-12 md:col-10">
                            <label for="address">Message</label>
                            <textarea id="address" type="text" rows="6" className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"></textarea>
                        </div>
                        </div>
                        <div className="field col-6">
                            <Button
                                label="Submit"
                                onClick={handleSubmit}
                            />
                        </div>
                    </div>
            </Sidebar>
            <Button icon="pi pi-arrow-left" onClick={() => setVisibleRight(true)} />
        </div>
    )
}

const mapState = (state) => {

};

export default connect(mapState)(ContactUsPage);
        