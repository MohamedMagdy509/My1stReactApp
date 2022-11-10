import React, { Component } from 'react'
import $ from "jquery"

export default class Contact extends Component {
    emailCheckFlag = true;
    messageCheck = () => {
        let myName = $("#contactName").val();
        let myEmail = $("#contactEmail").val();
        let myPhone = $("#contactPhone").val();
        let myMessage = $("#contactMessage").val();
        let doneFlag = 0;
        if (myName === "") {
            $("#contactName").next().css({ "display": "block" });
            doneFlag++;
        } else {
            $("#contactName").next().css({ "display": "none" });
        }
        if (myEmail === "") {
            $("#contactEmail").next().css({ "display": "block" });
            doneFlag++;
        } else {
            $("#contactEmail").next().css({ "display": "none" });
        }
        if (myPhone === "") {
            $("#contactPhone").next().css({ "display": "block" });
            doneFlag++;
        } else {
            $("#contactPhone").next().css({ "display": "none" });
        }
        if (myMessage === "") {
            $("#contactMessage").next().css({ "display": "block" });
            doneFlag++;
        } else {
            $("#contactMessage").next().css({ "display": "none" });
        }
        if (!doneFlag && !this.emailCheckFlag) {
            $("#sorryMessage p").html(`Sorry ${myName}, it seems that my mail server is not responding. Please try again later!`);
            $("#sorryMessage").css({ "display": "flex" })
            $(".myForm input,.myForm textarea").val("");
        }
        else {
            $("#sorryMessage").css({ "display": "none" }).html("");
        }
    }
    emailCheck = () => {
        let myEmail = $("#contactEmail").val();
        let myRegex = /^[a-z]+@{1}[a-z]+\.{1}[a-z]{1,4}$/gm;
        let myTest = myRegex.test(myEmail);
        if (myEmail !== "") {
            if (myTest) {
                $("#contactEmail").next().next().css({ "display": "none" });
                this.emailCheckFlag = false;
            }
            else {
                $("#contactEmail").next().next().css({ "display": "block" });
                $("#contactEmail").next().css({ "display": "none" });
                this.emailCheckFlag = true;
            }
        }
        else {
            this.emailCheckFlag = true;
            $("#contactEmail").next().next().css({ "display": "none" });
        }
    }
    clearInput = (e) => {
        $(e).next().css({ "display": "none" });
        $(".myForm input,.myForm textarea").not(e).prev().slideUp(0)
        $(e).prev().slideDown(500)
        $(e).focusout(this.closeAllSildes)
    }
    closeAllSildes = () => {
        $(".myForm input,.myForm textarea").prev().slideUp(0)
    }
    closeSorryMsg=()=>{
        $("#sorryMessage p").html("");
        $("#sorryMessage").css({ "display": "none" })
    }
    render() {
        return (
            <section className='min-vh-100'>
                <div className="container py-5">
                    <div className="container text-center w-100 overflow-hidden">
                        <h2 className='text-dark fw-bold fs-1 mt-5'>CONTACT ME</h2>
                        <div className="container w-100 d-flex justify-content-center align-items-center">
                            <div className="star-line bg-dark"></div>
                            <div className="star-icon mx-3 text-dark"><svg className="svg-inline--fa fa-star fa-w-18" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg></div>
                            <div className="star-line bg-dark"></div>
                        </div>
                    </div>
                    <div className="container myForm w-75 px-5">
                        <div className="container mt-5 position-relative">
                            <p className='alert text-success my-0 position-absolute translate-middle-y'>Name</p>
                            <input type="text" className='form-control py-3 border-top-0 border-start-0 border-end-0 rounded-0 fs-5' placeholder='Name' onFocus={() => {this.clearInput("#contactName");this.closeSorryMsg();}} id='contactName' /> {/*onBlur={this.closeAllSildes} can be used as att instead of focusout*/}
                            <p className='alert text-danger'><li>Please enter your name.</li></p>
                        </div>
                        <div className="container mt-5 position-relative">
                            <p className='alert text-success my-0 position-absolute translate-middle-y'>Email Address</p>
                            <input type="email" className='form-control py-3 border-top-0 border-start-0 border-end-0 rounded-0 fs-5' placeholder='Email Address' id='contactEmail' onKeyUp={this.emailCheck} onFocus={() => this.clearInput("#contactEmail")} />
                            <p className='alert text-danger'><li>Please enter your email.</li></p>
                            <p className='alert text-danger'><li>Not a valid email address</li></p>
                        </div>
                        <div className="container mt-5 position-relative">
                            <p className='alert text-success my-0 position-absolute translate-middle-y'>Phone Number</p>
                            <input type="text" className='form-control py-3 border-top-0 border-start-0 border-end-0 rounded-0 fs-5' placeholder='Phone Number' id='contactPhone' onFocus={() => this.clearInput("#contactPhone")} />
                            <p className='alert text-danger'><li>Please enter your phone number.</li></p>
                        </div>
                        <div className="container mt-5 position-relative">
                            <p className='alert text-success my-0 position-absolute translate-middle-y'>Message</p>
                            <textarea style={{ resize: "none" }} cols="30" rows="7" className='form-control py-3 border-top-0 border-start-0 border-end-0 rounded-0 fs-5' placeholder='Message' id="contactMessage" onFocus={() => this.clearInput("#contactMessage")}></textarea>
                            <p className='alert text-danger'><li>Please enter your message.</li></p>
                            <div id='sorryMessage' className='alert alert-danger justify-content-between align-items-center alert alert-danger'>
                                <p className='fs-6'></p><i style={{cursor:"pointer"}} className="fa-solid fa-xmark" onClick={this.closeSorryMsg}></i>
                            </div>
                        </div>
                        <button className='btn btn-success my-4 px-4 py-3' id="contactButton" onClick={this.messageCheck}>Send</button>
                    </div>
                </div>
                <div className="infos w-100 px-0 p-5">
                    <div className="container">
                        <div className="row text-center text-white px-5">
                            <div className="col-md-4 px-3">
                                <h3 className='mb-4'>LOCATION</h3>
                                <p>2215 John Daniel Drive Clark, MO 65243</p>
                            </div>
                            <div className="col-md-4 px-3">
                                <h3 className='mb-4'>AROUND THE WEB</h3>
                                <div className="webIcons d-flex justify-content-center align-items-center">
                                    <a href="https://.com" className='p-0 m-0 text-decoration-none p-0 mx-1'>
                                        <div style={{ "width": "40px", "height": "40px" }} className="webIcon rounded-circle border border-white border-2 d-flex justify-content-center align-items-center">
                                            <i className="fa-brands fa-facebook-f"></i>
                                        </div>
                                    </a>
                                    <a href="https://.com" className='p-0 m-0 text-decoration-none p-0 mx-1'>
                                        <div style={{ "width": "40px", "height": "40px" }} className="webIcon rounded-circle border border-white border-2 d-flex justify-content-center align-items-center">
                                            <i className="fa-brands fa-twitter"></i>
                                        </div>
                                    </a>
                                    <a href="https://.com" className='p-0 m-0 text-decoration-none p-0 mx-1'>
                                        <div style={{ "width": "40px", "height": "40px" }} className="webIcon rounded-circle border border-white border-2 d-flex justify-content-center align-items-center">
                                            <i className="fa-brands fa-linkedin-in"></i>
                                        </div>
                                    </a>
                                    <a href="https://.com" className='p-0 m-0 text-decoration-none p-0 mx-1'>
                                        <div style={{ "width": "40px", "height": "40px" }} className="webIcon rounded-circle border border-white border-2 d-flex justify-content-center align-items-center">
                                            <i className="fa-brands fa-dribbble"></i>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-4 px-3">
                                <h3 className='mb-4'>ABOUT FREELANCER</h3>
                                <p>Freelance is a free to use, MIT licensed Bootstrap theme created by Route</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
