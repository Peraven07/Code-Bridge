import React, { useState, useRef } from "react";
import { Toast } from 'primereact/toast';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';

const UserDetailForm = () => {
    const toast = useRef(null);

    const [userDetails, setUserDetails] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        address: "",
        dateOfBirth: null,
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    const handleDateOfBirthChange = (event) => {
        setUserDetails((prevDetails) => ({
            ...prevDetails,
            dateOfBirth: event.value,
        }));
    };

    const handleSubmit = () => {
        // Submit the form or perform further actions here
        toast.current.show({
            severity: 'success',
            summary: 'Form Submitted',
            detail: 'User details have been submitted successfully.',
        });
    };

    return (
        <div className="p-fluid">
            <Toast ref={toast} />
            
            <h2>User Details</h2>

            <div className="p-fieldset p-d-flex p-flex-column">
                <div className="p-inputgroup">
                    <span className="p-float-label">
                        <InputText
                            id="firstName"
                            name="firstName"
                            value={userDetails.firstName}
                            onChange={handleInputChange}
                            placeholder=" "
                        />
                        <label htmlFor="firstName">First Name</label>
                    </span>
                </div>
                <div className="p-inputgroup">
                    <span className="p-float-label">
                        <InputText
                            id="lastName"
                            name="lastName"
                            value={userDetails.lastName}
                            onChange={handleInputChange}
                            placeholder=" "
                        />
                        <label htmlFor="lastName">Last Name</label>
                    </span>
                </div>
                <div className="p-inputgroup">
                    <span className="p-float-label">
                        <InputText
                            id="email"
                            name="email"
                            value={userDetails.email}
                            onChange={handleInputChange}
                            placeholder=" "
                        />
                        <label htmlFor="email">Email</label>
                    </span>
                </div>
                <div className="p-inputgroup">
                    <span className="p-float-label">
                        <InputText
                            id="phoneNumber"
                            name="phoneNumber"
                            value={userDetails.phoneNumber}
                            onChange={handleInputChange}
                            placeholder=" "
                        />
                        <label htmlFor="phoneNumber">Phone Number</label>
                    </span>
                </div>
                <div className="p-inputgroup">
                    <span className="p-float-label">
                        <InputText
                            id="address"
                            name="address"
                            value={userDetails.address}
                            onChange={handleInputChange}
                            placeholder=" "
                        />
                        <label htmlFor="address">Address</label>
                    </span>
                </div>
                <div className="p-inputgroup">
                    <span className="p-float-label">
                        <Calendar
                            id="dateOfBirth"
                            name="dateOfBirth"
                            value={userDetails.dateOfBirth}
                            onChange={handleDateOfBirthChange}
                            placeholder=" "
                        />
                        <label htmlFor="dateOfBirth">Date of Birth</label>
                    </span>
                </div>

                <Button
                    label="Submit"
                    onClick={handleSubmit}
                />
            </div>
        </div>
    );
};

export default UserDetailForm;
