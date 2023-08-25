import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import client from "../../services/restClient";
import { Button } from "primereact/button";
import { InputText } from 'primereact/inputtext';
import { Sidebar } from 'primereact/sidebar';
import { InputTextarea } from "primereact/inputtextarea";
        
const getSchemaValidationErrorsStrings = (errorObj) => {
    let errMsg = [];
    for (const key in errorObj.errors) {
        if (Object.hasOwnProperty.call(errorObj.errors, key)) {
            const element = errorObj.errors[key];
            if (element?.message) {
                errMsg.push(element.message);
            }
        }
    }
    return errMsg.length ? errMsg : errorObj.message ? errorObj.message : null;
};

const ContactUsSideBar = (props) => {
    const [_entity, set_entity] = useState({});
    const [error, setError] = useState("");

    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        set_entity({})
    },[props.show])
    const onSave = async () => {
        let _data = {
            firstname:_entity.firstname,
            lastname:_entity.lastname,
            contactnumber:_entity.contactnumber, 
            emailaddress:_entity.emailaddress, 
            company:_entity.company, 
            position:_entity.position, 
            message:_entity.message, 

        };

        setLoading(true);
        try {
            const result = await client.service("contactus").create(_data);
            props.onHide();
            props.alert({ type: "success", title: "Thank You", message: "Application successfully sent" });
            props.onCreateResult(result);
        } catch (error) {
            console.log("error", error);
            setError(getSchemaValidationErrorsStrings(error) || "Failed to create");
            props.alert({ type: "error", title: "Create", message: "Failed to create" });
        }
        setLoading(false);
    };

    const setValByKey = (key, val) => {
        let new_entity = { ..._entity, [key]: val };
        set_entity(new_entity);
        setError("");
    };

    return (
        <Sidebar position="right" visible={props.show} closable={false} onHide={props.onHide} modal style={{ width: "25vw" }} className="min-w-max" resizable={false}>
            <div role="contactus-sidebar-component">
                <h2>Contact Us</h2>
                <div>
                    <p className="m-0" >First Name</p>
                    <InputText className="w-full mb-3" placeholder="Enter your first name" value={_entity?.firstname} onChange={(e) => setValByKey("firstname", e.target.value)}  />
                </div>
                <div>
                    <p className="m-0" >Last Name</p>
                    <InputText className="w-full mb-3" placeholder="Enter your last name" value={_entity?.lastname} onChange={(e) => setValByKey("lastname", e.target.value)}  />
                </div>
                <div>
                    <p className="m-0" >Contact Number</p>
                    <InputText className="w-full mb-3" placeholder="Current Contact Number" value={_entity?.contactnumber} onChange={(e) => setValByKey("contactnumber", e.target.value)}  />
                </div>
                <div>
                    <p className="m-0" >Email</p>
                    <InputText className="w-full mb-3" placeholder="Active Email" value={_entity?.emailaddress} onChange={(e) => setValByKey("emailaddress", e.target.value)}  />
                </div>
                <div>
                    <p className="m-0" >Company Name</p>
                    <InputText className="w-full mb-3" placeholder="(example: Google, Apple)" value={_entity?.company} onChange={(e) => setValByKey("company",e.target.value)}  />
                </div>
                <div>
                    <p className="m-0" >Position</p>
                    <InputText className="w-full mb-3" placeholder="(e.g: Manager)" value={_entity?.position} onChange={(e) => setValByKey("position",e.target.value)}  />
                </div>
                <div>
                    <p className="m-0" >Message</p>
                    <InputTextarea autoResize className="w-full mb-3" placeholder="What's on your mind?" value={_entity?.message} onChange={(e) => setValByKey("message",e.target.value)} rows={5} cols={30}  />
                </div>


                <small className="p-error">
                    {Array.isArray(error)
                        ? error.map((e, i) => (
                              <p className="m-0" key={i}>
                                  {e}
                              </p>
                          ))
                        : error}
                </small>
            </div>
            <div className="flex justify-content-left">
                <Button label="Submit" onClick={onSave} loading={loading} severity="danger" />
            </div>
        </Sidebar>
    );
};

const mapState = (state) => {
    //
};
const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data),
});

export default connect(null, mapDispatch)(ContactUsSideBar );
