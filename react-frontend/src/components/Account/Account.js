import React from "react";
import { connect } from "react-redux";
import { Avatar } from "primereact/avatar";

const Account = (props) => {
    return (
        <div className="col-12 flex justify-content-center">
            <div className="col-8">
                <div className="card flex flex-column align-items-start mb-3">
                    <Avatar className="p-overlay-badge m-3" icon="pi pi-user" size="xlarge" style={{ height: "6rem", width: "6rem" }}></Avatar>
                    <p className="m-0">Name: {props.user?.name}</p>
                    {props.user?.email ? <p className="m-0">Email: {props.user?.email}</p> : null}
                    {props.user?.address ? <p className="m-0">Address: {props.user?.address}</p> : null}
                    {props.user?.contact ? <p className="m-0">Contact: {props.user?.contact}</p> : null}
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
