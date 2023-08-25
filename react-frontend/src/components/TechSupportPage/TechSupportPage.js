import React, { useState } from "react";
import { connect } from "react-redux";
import { Button } from "primereact/button";
import TechSupportForm from "./TechSupportForm";

const TechSupportPage = (props) => {
    const [data, setData] = useState([]);
    const [showPopUp, setShowPopUp] = useState(false);

    const onCreateResult = (newEntity) => {
        setData([...data, newEntity]);
    };

    return (
        <div className="col-12 flex flex-column align-items-center">
            <div className="col-10">
                <div className="col flex justify-content-left">
                    <Button label="Issue/Problem" onClick={() => setShowPopUp(true)} role="techsupport-button" />
                </div>
            </div>
            <TechSupportForm show={showPopUp} onHide={() => setShowPopUp(false)} onCreateResult={onCreateResult} />
        </div>
    );
};
const mapState = (state) => ({
    //
});
const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data),
});

export default connect(mapState, mapDispatch)(TechSupportPage);
