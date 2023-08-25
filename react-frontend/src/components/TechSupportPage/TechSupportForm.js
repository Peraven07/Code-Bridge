import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import client from "../../services/restClient";
import { Button } from "primereact/button";
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from "primereact/inputtextarea";
import { Dialog } from 'primereact/dialog';
import { FileUpload } from 'primereact/fileupload';

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

const TechSupportForm = (props) => {
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
            issue: _entity.issue,
            image: _entity.image,

        };

        setLoading(true);
        try {
            const result = await client.service("techSupport").create(_data);
            props.onHide();
            props.alert({ type: "success", title: "Thank You", message: "Your issue will be resolve soon !!" });
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
            <div role="techsupport-component">
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
                    <p className="m-0" >Issue to solve</p>
                    <InputTextarea autoResize className="w-full mb-3" placeholder="Descibe the problem you face.." value={_entity?.issue} onChange={(e) => setValByKey("issue", e.target.value)} rows={5} cols={30} />
                </div>
                <div>
                    <p className="m-0" >Upload the image</p>
                        <FileUpload name="demo[]" url={'/api/upload'} multiple accept="image/*" maxFileSize={1000000} emptyTemplate={<p className="m-0">Drag and drop files to here to upload.</p>} value={_entity?.image} onChange={(e) => setValByKey("image", e.target.value)} />               
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
            <div style={{ height: "20px" }} />
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

export default connect(null, mapDispatch)(TechSupportForm);
