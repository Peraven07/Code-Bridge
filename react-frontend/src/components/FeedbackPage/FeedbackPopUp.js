import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import client from "../../services/restClient";
import { Button } from "primereact/button";
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from "primereact/inputtextarea";
import { Dialog } from 'primereact/dialog';
import { Rating } from "primereact/rating";

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

const FeedbackPopUp = (props) => {
    const [_entity, set_entity] = useState({});     // linking to the database
    const [error, setError] = useState("");         // check the error(validation)
    const [loading, setLoading] = useState(false);  // submit button loading

    useEffect(() => {
        set_entity({})
    }, [props.show])
    const onSave = async () => {
        let _data = {
            fullname: _entity.fullname,
            contactnumber: _entity.contactnumber,
            emailaddress: _entity.emailaddress,
            rating: _entity.rating,
            feedback: _entity.feedback,

        };

        setLoading(true);
        try {
            const result = await client.service("feedback").create(_data);
            props.onHide();
            props.alert({ type: "success", title: "Thank You", message: "We will improve our service!" });
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
        <Dialog position="center" visible={props.show} closable={false} onHide={props.onHide} modal style={{ width: "30vw" }} className="min-w-max" resizable={false}>
            <div role="feedback-component">
                <h2>Feedback Form</h2>
                <div>
                    <p className="m-0" >Full Name</p>
                    <InputText className="w-full mb-3" placeholder="Enter your full name" value={_entity?.fullname} onChange={(e) => setValByKey("fullname", e.target.value)} />
                </div>
                <div>
                    <p className="m-0" >Contact Number</p>
                    <InputText className="w-full mb-3" placeholder="Active Contact Number" value={_entity?.contactnumber} onChange={(e) => setValByKey("contactnumber", e.target.value)} />
                </div>
                <div>
                    <p className="m-0" >Email</p>
                    <InputText className="w-full mb-3" placeholder="Email Address" value={_entity?.emailaddress} onChange={(e) => setValByKey("emailaddress", e.target.value)} />
                </div>
                <div>
                    <p className="m-0" >Feedback</p>
                    <InputTextarea autoResize className="w-full mb-3" placeholder="What can we improve?" value={_entity?.feedback} onChange={(e) => setValByKey("feedback", e.target.value)} rows={5} cols={30} />
                </div>
                <div>
                    <p className="m-0" >Website Rating</p>
                    <Rating className="w-full mb-3" value={_entity?.rating} onChange={(e) => setValByKey("rating", e.target.value)} cancel={false} />
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
            <div className="flex-wrap justify-content-left">
                <Button label="Submit" severity="danger" onClick={onSave} loading={loading} />
                <Button label="Close" className="p-button-text no-focus-effect p-button-secondary" onClick={props.onHide} />
            </div>
        </Dialog>
    );
};

const mapState = (state) => {
    //
};
const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data),
});

export default connect(null, mapDispatch)(FeedbackPopUp);
