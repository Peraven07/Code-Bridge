import React, { useRef } from "react";
import { connect } from "react-redux";
import { Avatar } from "primereact/avatar";
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';

const Account = (props) => {
    const toast = useRef(null);

    const handleSubmit = () => {
        // Submit the form or perform further actions here
        toast.current.show({
            severity: 'success',
            summary: 'Profile Updated',
        });
    };
    return (
        <div className="col-12 flex justify-content-center">
            <div className="col-8">
                <div className="card flex flex-column align-items-start mb-3">
                    <Avatar className="p-overlay-badge m-3" icon="pi pi-user" size="xlarge" style={{ height: "6rem", width: "6rem" }}></Avatar>
                    <p className="m-0">Name: {props.user?.name}</p>
                    {props.user?.email ? <p className="m-0">Email: {props.user?.email}</p> : null}
                </div>

            <div className="card">
                <Toast ref={toast} />
                <h2>User Profile</h2>
                <div className="formgrid grid">
                    <div className="field col-12 md:col-6">
                        <label for="firstname6">Firstname</label>
                        <input id="firstname6" type="text" className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"></input>
                    </div>
                    <div className="field col-12 md:col-6">
                        <label for="lastname6">Lastname</label>
                        <input id="lastname6" type="text" className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"></input>
                    </div>
                    <div className="field col-12">
                        <label for="address">Address</label>
                        <textarea id="address" type="text" rows="4" className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"></textarea>
                    </div>
                    <div className="field col-12 md:col-6">
                        <label for="city">City</label>
                        <input id="city" type="text" className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"></input>
                    </div>
                    <div className="field col-12 md:col-3">
                        <label for="state">State</label>
                        <select id="state" className="w-full text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round outline-none focus:border-primary">
                            <option>KL</option>
                            <option>Selangor</option>
                            <option>Johor Bahru</option>
                            <option>Penang</option>
                            <option>Negeri Sembilan</option>
                        </select>
                    </div>
                    <div classNames="field col-12 md:col-3">
                        <label for="zip">Zip</label>
                        <input id="zip" type="text" className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"/>
                    </div>
                    <div className="field col-3">
                        <label for="phonenum">Phone Number</label>
                        <input id="phonenum" type="text" className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"></input>
                    </div>
                    <div className="field col-5">
                        <label for="email">Email Address</label>
                        <input id="email" type="text" className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"></input>
                    </div>
                    <div className="field col-5">
                        <Button
                            label="Update"
                            onClick={handleSubmit}
                        />
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapState = (state) => {
    const { user } = state.auth;
    return { user };
};

export default connect(mapState)(Account);
