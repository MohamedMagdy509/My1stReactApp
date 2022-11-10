import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <section className='vh-100 bg-success'>
                <div className="container">
                <div className="container text-center w-100 overflow-hidden">
                    <h2 className='text-white fw-bold fs-1 mt-5'>ABOUT</h2>
                    <div className="container w-100 d-flex justify-content-center align-items-center">
                        <div className="star-line bg-white"></div>
                        <div className="star-icon mx-3 text-white"><svg className="svg-inline--fa fa-star fa-w-18" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg></div>
                        <div className="star-line bg-white"></div>
                    </div>
                </div>
                <div className="row w-75 text-white  mt-5 mx-auto lh-lg">
                    <div className="col-6 px-4 fs-5">
                        <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    </div>
                    <div className="col-6 px-4 fs-5">
                        <p>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
                    </div>
                </div>
                </div>
            </section>
        )
    }
}
