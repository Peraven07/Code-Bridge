import React, { useState } from "react";
import { connect } from "react-redux";
import { Button } from "primereact/button";
import FeedbackPopUp from "./FeedbackPopUp";

const ContactUsPage = (props) => {
    const [data, setData] = useState([]);
    const [showPopUp, setShowPopUp] = useState(false);

    const onCreateResult = (newEntity) => {
        setData([...data, newEntity]);
    };

    return (
        <div className="col-12 flex flex-column align-items-center">
            <div className="col-10">
                <div className="col flex justify-content-end">
                    <Button label="Feedback" onClick={() => setShowPopUp(true)} role="feedback-button"/>
                </div>
            </div>
            <FeedbackPopUp show={showPopUp} onHide={() => setShowPopUp(false)} onCreateResult={onCreateResult} />
        </div>
    );
};
const mapState = (state) => ({
    //
});
const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data),
});

export default connect(mapState, mapDispatch)(ContactUsPage);
