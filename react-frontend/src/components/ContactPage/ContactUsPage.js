import React, { useState } from "react";
import { connect } from "react-redux";
import { Button } from "primereact/button";
import ContactUsSideBar from "../ContactPage/ContactUsSideBar";

const ContactUsPage = (props) => {
    const [data, setData] = useState([]);
    const [showSideBar, setShowSideBar] = useState(false);

    const onCreateResult = (newEntity) => {
        setData([...data, newEntity]);
    };

    return (
        <div className="col-12 flex flex-column align-items-center">
            <div className="col-10">
                <div className="col flex justify-content-end">
                    <Button label="Contact Us" onClick={() => setShowSideBar(true)} role="contact-us-button"/>
                </div>
            </div>
            <ContactUsSideBar show={showSideBar} onHide={() => setShowSideBar(false)} onCreateResult={onCreateResult} />
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
