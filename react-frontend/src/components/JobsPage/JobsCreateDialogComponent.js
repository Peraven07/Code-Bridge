
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import client from "../../services/restClient";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from 'primereact/inputtext';
import { Checkbox } from 'primereact/checkbox';


 
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

const JobsCreateDialogComponent = (props) => {
    const [_entity, set_entity] = useState({});
    const [error, setError] = useState("");

    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        set_entity({})
    },[props.show])
    const onSave = async () => {
        let _data = {
            companyname: _entity.companyname,
            addrescompany: _entity.addrescompany,
            emailcompany: _entity.emailcompany,
            phonenumber: _entity.phonenumber,
            joboffer: _entity.joboffer,
            numofstaff: _entity.numofstaff

        };

        setLoading(true);
        try {
            const result = await client.service("jobs").create(_data);
            props.onHide();
            props.alert({ type: "success", title: "Create", message: "Created successfully" });
            props.onCreateResult(result);
        } catch (error) {
            console.log("error", error);
            setError(getSchemaValidationErrorsStrings(error) || "Failed to create");
            props.alert({ type: "error", title: "Create", message: "Failed to create" });
        }
        setLoading(false);
    };

    const renderFooter = () => (
        <div className="flex justify-content-end">
            <Button label="save" className="p-button-text no-focus-effect" onClick={onSave} loading={loading} />
            <Button label="close" className="p-button-text no-focus-effect p-button-secondary" onClick={props.onHide} />
        </div>
    );

    const setValByKey = (key, val) => {
        let new_entity = { ..._entity, [key]: val };
        set_entity(new_entity);
        setError("");
    };

    return (
        <Dialog header="Create" visible={props.show} closable={false} onHide={props.onHide} modal style={{ width: "40vw" }} className="min-w-max" footer={renderFooter()} resizable={false}>
            <div role="jobs-create-dialog-component">
                <div>
                    <p className="m-0" >Company Name:</p>
                    <InputText className="w-full mb-3" value={_entity?.companyname} onChange={(e) => setValByKey("companyname", e.target.value)}  />
                </div>
                <div>
                    <p className="m-0" >Company Address:</p>
                    <InputText className="w-full mb-3" value={_entity?.addrescompany} onChange={(e) => setValByKey("addrescompany", e.target.value)}  />
                </div>
                <div>
                    <p className="m-0" >Email Address:</p>
                    <InputText className="w-full mb-3" value={_entity?.emailcompany} onChange={(e) => setValByKey("emailcompany", e.target.value)}  />
                </div>
                <div>
                    <p className="m-0" >Contact Number:</p>
                    <InputText type="number" className="w-full mb-3" value={_entity?.phonenumber} onChange={(e) => setValByKey("phonenumber", e.target.value)}  />
                </div>
                <div>
                    <p className="m-0" >Job Vacancy:</p>
                    <Checkbox checked={_entity?.joboffer} onChange={ (e) => setValByKey("joboffer", e.checked)}  ></Checkbox>
                </div>
                <div>
                    <p className="m-0" >Number of Staff :</p>
                    <InputText type="number" className="w-full mb-3" value={_entity?.numofstaff} onChange={(e) => setValByKey("numofstaff", e.target.value)}  />
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
        </Dialog>
    );
};

const mapState = (state) => {
    //
};
const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data),
});

export default connect(null, mapDispatch)(JobsCreateDialogComponent);
// createDialog_code.template
