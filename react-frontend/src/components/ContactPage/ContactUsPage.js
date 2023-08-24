import React, { useState,useEffect} from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";

// const getSchemaValidationErrorsStrings = (errorObj) => {
//     let errMsg = [];
//     for (const key in errorObj.errors) {
//         if (Object.hasOwnProperty.call(errorObj.errors, key)) {
//             const element = errorObj.errors[key];
//             if (element?.message) {
//                 errMsg.push(element.message);
//             }
//         }
//     }
//     return errMsg.length ? errMsg : errorObj.message ? errorObj.message : null;
// };


const ContactUsPage = (props) => {
    const [visibleRight, setVisibleRight] = useState(false); // SideBar

    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [contactnumber, setContNum] = useState("");
    const [emailaddress, setEmail] = useState("");
    const [company, setCompany] = useState("");
    const [position, setPosit] = useState("");
    const [message, setMessage] = useState("");

    const [firstnameError, setFirstNameError] = useState(null);
    const [lastnameError, setLastNameError] = useState(null);
    const [contactnumberError, setConNumError] = useState(null);
    const [emailaddressError, setEmailError] = useState(null);
    const [companyError, setCompanyError] = useState(null);
    const [positionError, setPositError] = useState(null);
    const [messageError, setMessageError] = useState(null);

    // const history = useHistory();

    // const [_entity, set_entity] = useState({});
    // const [error, setError] = useState("");

    // const [loading, setLoading] = useState(false);

    // useEffect(()=>{
    //     set_entity({})
    // },[props.show])
    // const onSave = async () => {
    //         let _data = {
    //             firstname:_entity.firstname,
    //             lastname:_entity.lastname,
    //             contactnumber:_entity.contactnumber, 
    //             emailaddress:_entity.emailaddress, 
    //             company:_entity.company, 
    //             position:_entity.position, 
    //             message:_entity.message, 

    //         };
   
    //     setLoading(true);
    //     try {
    //         const result = await client.service("aboutus").create(_data);
    //         props.onHide();
    //         props.alert({ type: "success", title: "Create", message: "Created successfully" });
    //         props.onCreateResult(result);
    //     } catch (error) {
    //         console.log("error", error);
    //         setError(getSchemaValidationErrorsStrings(error) || "Failed to create");
    //         props.alert({ type: "error", title: "Create", message: "Failed to create" });
    //     }
    //     setLoading(false);
    

    // const renderFooter = () => (
    //     <div className="flex justify-content-end">
    //         <Button label="save" className="p-button-text no-focus-effect" onClick={onSave} loading={loading} />
    //         <Button label="close" className="p-button-text no-focus-effect p-button-secondary" onClick={props.onHide} />
    //     </div>
    // );

    const history = useHistory();


    const onEnter = (e) => {
        if (e.key === "Submit") messagesignup();
    };

    const messagesignup = () => {
        if (validate()) {
            props.createUser({ firstname, lastname, contactnumber,emailaddress,company,position,message }).then((res) => {
                history.push("/")
            });
        }
    };

    const validate = () => {
        let isValid = true;
        let re = /\S+@\S+\.\S+/;
        if (!firstname & !lastname.length) {
            setFirstNameError("First name is required");
            isValid = false;
        } else if (firstname & lastname.length < 3) {
            setFirstNameError("Must be at least 3 characters long");
            isValid = false;
        }
        if (!lastname.length) {
            setLastNameError("Last name is required");
            isValid = false;
        } else if (lastname.length < 3) {
            setLastNameError("Must be at least 3 characters long");
            isValid = false;
        }
        if (!contactnumber.length) {
            setConNumError("Phone Number is required");
            isValid = false;
        } else if (contactnumber.length < 10) {
            setConNumError("Provide a valid number");
            isValid = false;
        }
        if (!re.test(emailaddress)) {
            setEmailError("Enter valid email");
            isValid = false;
        }
        if (!company.length) {
            setCompanyError("company name is required");
            isValid = false;
        } else if (company.length < 2) {
            setCompanyError("Enter Full Company Name");
            isValid = false;
        }
        if (!position.length) {
            setPositError("position is required");
            isValid = false;
        } else if (position.length < 1) {
            setPositError("example: Manager, Supervisor");
            isValid = false;
        }
        if (!message.length) {
            setMessageError("provide some infomartion");
            isValid = false;
        } else if (message.length < 10) {
            setMessageError("Explain breifly");
            isValid = false;
        }
        

        return isValid;
    };
    

    return (
        <div className="col-12 flex justify-content-center">
            <Sidebar visible={visibleRight} position="right" onHide={() => setVisibleRight(false)} className="p-sidebar-md">
                <h2>Contact</h2>
                    <div className="card">
                    <h2>We're available </h2>
                    <div className="formgrid grid">
                        <div className="field col-12 md:col-6">
                            <p className="m-0">First Name</p>
                            <InputText
                                type="text"
                                placeholder="Enter your name"
                                value={firstname}
                                onChange={(e) => {
                                    setFirstName(e.target.value);
                                    setFirstNameError(null);
                                }}
                                className={firstnameError ? "p-invalid" : ""}
                                onKeyDown={onEnter}
                            ></InputText>
                            <small className="p-error">{firstnameError}</small>
                        </div>
                        <div className="field col-12 md:col-6">
                            <p className="m-0">Last Name</p>
                            <InputText
                                type="text"
                                placeholder="Enter your last name"
                                value={lastname}
                                onChange={(e) => {
                                    setLastName(e.target.value);
                                    setLastNameError(null);
                                }}
                                className={lastnameError ? "p-invalid" : ""}
                                onKeyDown={onEnter}
                            ></InputText>
                            <small className="p-error">{lastnameError}</small>
                        </div>
                        <div className="field col-12 md:col-6">
                            <p className="m-0">Contact Number</p>
                            <InputText
                                type="text"
                                placeholder="Phone Number"
                                value={contactnumber}
                                onChange={(e) => {
                                    setContNum(e.target.value);
                                    setConNumError(null);
                                }}
                                className={contactnumberError ? "p-invalid" : ""}
                                onKeyDown={onEnter}
                            ></InputText>
                            <small className="p-error">{contactnumberError}</small>
                        </div>
                        <div className="field col-12 md:col-6">
                            <p className="m-0">Email Address</p>
                            <InputText
                                type="text"
                                placeholder="Email Address"
                                value={emailaddress}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    setEmailError(null);
                                }}
                                className={emailaddressError ? "p-invalid" : ""}
                                onKeyDown={onEnter}
                            ></InputText>
                            <small className="p-error">{emailaddressError}</small>
                        </div>
                        <div className="field col-12 md:col-6">
                            <p className="m-0">Company</p>
                            <InputText
                                type="text"
                                placeholder="Company Name"
                                value={company}
                                onChange={(e) => {
                                    setCompany(e.target.value);
                                    setCompanyError(null);
                                }}
                                className={companyError ? "p-invalid" : ""}
                                onKeyDown={onEnter}
                            ></InputText>
                            <small className="p-error">{companyError}</small>
                        </div>
                        <div className="field col-12 md:col-6">
                            <p className="m-0">Position</p>
                            <InputText
                                type="text"
                                placeholder="Position in the company"
                                value={position}
                                onChange={(e) => {
                                    setPosit(e.target.value);
                                    setPositError(null);
                                }}
                                className={positionError ? "p-invalid" : ""}
                                onKeyDown={onEnter}
                            ></InputText>
                            <small className="p-error">{positionError}</small>
                        </div>
                        <div className="field col-12 md:col-6">
                            <p className="m-0">Message</p>
                            <InputTextarea
                                type="text"
                                placeholder="What you want to know ?"
                                autoResize
                                value={message}
                                onChange={(e) => {
                                    setMessage(e.target.value);
                                    setMessageError(null);
                                }}
                                rows={5} 
                                cols={50} 
                                className={messageError ? "p-invalid" : ""}
                                onKeyDown={onEnter}
                            ></InputTextarea>
                            <small className="p-error">{messageError}</small>
                        </div>
                        </div>
                        <div className="field col-6">
                            <Button
                                label="Submit"
                                onClick={messagesignup}
                            />
                        </div>
                    </div>
            </Sidebar>
            <div className="block justify-content-left">
                <Button label="Contact Us" onClick={() => setVisibleRight(true)} />
            </div>
        </div>
    )
}

const mapState = () => {

};

const mapDispatch = (dispatch) => ({
    createUser: (data) => dispatch.auth.createUser(data),
});

export default connect(mapState, mapDispatch)(ContactUsPage);
        
        