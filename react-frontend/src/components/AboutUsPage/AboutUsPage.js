import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Image } from "primereact/image";
// import peopleImg from "../../assets/media/people.png";
import { Button } from "primereact/button";
import { Splitter, SplitterPanel } from "primereact/splitter";

const AboutUsPage = (props) => {
    const history = useHistory();
    useEffect(() => {}, []);

    return (
        <div className="flex flex-column align-items-center" /*style={{ backgroundColor: "var(--purple-200)" }}*/>
            <div className="grid col-12 lg:col-10">
                <div className="col-12 lg:col-6 mt-7">
                    <p className="text-900 text-7xl line-height-1 font-bold">We help developers focus on what is important</p>
                    <h5>We are a team of self-taught developers. We decided to bring a tool to help others skip many setup steps.</h5>
                    {/* <Button className="p-button-rounded" label="Get Started" /> */}
                </div>
                {/* <div className="col-offset-0 lg:col-offset-1 "></div> */}
                <div className="col-12 lg:col-6 relative flex flex-column align-items-start justify-content-end py-8 overflow-hidden" style={{ borderRadius: "2%" }}>
                    
                    <div className="bg-pink-100 absolute " style={{ rotate: "15deg", width: "100%", height: "200%", right: "-20%", top: "-50%" }}></div>
                </div>
            </div>
            <div style={{ height: "100px" }} />
            <div className="col-10">
                <Splitter style={{ height: "300px" }} className="mb-5">
                    <SplitterPanel className="p-6">
                        <p className="text-5xl font-bold">Our Mission</p>
                        <h5>
                            To make database application development accessible to everyone.
                            <br />
                            <br /> Build rich interactive database applications that manage your structured data within minutes. Manage your data like a Data Scientist.
                        </h5>
                    </SplitterPanel>
                    <SplitterPanel className="p-6">
                        <p className="text-5xl font-bold">Our Goal</p>
                        <h5>To create an expert coder community across all popular languages. Get hands on in building applications in any programming language. Get started in minutes. We have put together 20 years of programming experience to help get off to a great start.</h5>
                    </SplitterPanel>
                </Splitter>
            </div>
            <div className="w-12 flex align-items-center justify-content-center p-6" style={{ backgroundImage: "linear-gradient(to right top, rgb(203 173 255), rgb(255 125 197))" }}>
                <Button label="Get Started Now" style={{ transform: "scale(1.2)" }} onClick={() => history.push("/getting-started")}></Button>
            </div>
            <div style={{ height: "200px" }} />
        </div>
    );
};
const mapState = (state) => ({});
const mapDispatch = (dispatch) => ({
    //
});

export default connect(mapState, mapDispatch)(AboutUsPage);
