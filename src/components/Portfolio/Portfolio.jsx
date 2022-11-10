import React, { Component } from 'react'
import img1 from "../../assets/images/cabin.png"
import img2 from "../../assets/images/cake.png"
import img3 from "../../assets/images/circus.png"
import img4 from "../../assets/images/game.png"
import img5 from "../../assets/images/safe.png"
import img6 from "../../assets/images/submarine.png"
import PortfolioItem from './PortfolioItem/PortfolioItem'
import $ from "jquery"

export default class Portfolio extends Component {
    state = {
        items: [
            { src: img1, name: "LOG CABIN", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur aperiam blanditiis voluptatibus, accusantium beatae provident inventore minima at explicabo ullam quos nesciunt sequi natus similique dignissimos eos. Laudantium, fuga perferendis!" },
            { src: img2, name: "TASTY CAKE", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur aperiam blanditiis voluptatibus, accusantium beatae provident inventore minima at explicabo ullam quos nesciunt sequi natus similique dignissimos eos. Laudantium, fuga perferendis!" },
            { src: img3, name: "CIRCUS TENT", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur aperiam blanditiis voluptatibus, accusantium beatae provident inventore minima at explicabo ullam quos nesciunt sequi natus similique dignissimos eos. Laudantium, fuga perferendis!" },
            { src: img4, name: "CONTROLLER", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur aperiam blanditiis voluptatibus, accusantium beatae provident inventore minima at explicabo ullam quos nesciunt sequi natus similique dignissimos eos. Laudantium, fuga perferendis!" },
            { src: img5, name: "LOCKED SAFE", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur aperiam blanditiis voluptatibus, accusantium beatae provident inventore minima at explicabo ullam quos nesciunt sequi natus similique dignissimos eos. Laudantium, fuga perferendis!" },
            { src: img6, name: "SUBMARINE", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur aperiam blanditiis voluptatibus, accusantium beatae provident inventore minima at explicabo ullam quos nesciunt sequi natus similique dignissimos eos. Laudantium, fuga perferendis!" },
        ],
        popUp: { src: img6, name: "gfdg", text: "gfdg" }
    }
    openLayout = (item) => {
        this.setState({ popUp: item });
        $(".popWindow").fadeIn(500)
        $(".portLayout").fadeIn(500)
    }
    closeLayout = () => {
        $(".popWindow").fadeOut(500)
        $(".portLayout").fadeOut(500)
    }
    render() {
        return (
            <section className=' position-relative py-5 text-center'>
                <div className='container position-relative'>
                    <div className="container text-center w-100 overflow-hidden">
                        <h2 className='text-dark fw-bold fs-1 mt-5'>PORTFOLIO</h2>
                        <div className="container w-100 d-flex justify-content-center align-items-center">
                            <div className="star-line bg-dark"></div>
                            <div className="star-icon mx-3 text-dark"><svg className="svg-inline--fa fa-star fa-w-18" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg></div>
                            <div className="star-line bg-dark"></div>
                        </div>
                    </div>
                    <div className="row gy-5 mt-3">
                        {this.state.items.map((e, index) => <PortfolioItem myItem={e} myOpenLayout={this.openLayout} key={index} />)}
                    </div>
                </div>
                <div className="portLayout bg-black position-fixed top-0 bottom-0 start-0 end-0" onClick={this.closeLayout}></div>
                <div className="popWindow position-absolute top-0 w-50 start-50 translate-middle-x text-center">
                    <div className="container w-100 bg-white p-4 position-relative rounded-4 text-center mt-3">
                        <i className="fa-solid fa-xmark fa-2x position-absolute top-0 end-0 m-4" onClick={this.closeLayout}></i>
                        <div className="container text-center w-100 overflow-hidden">
                            <h2 className='text-dark fw-bold fs-1 mt-5'>{this.state.popUp.name}</h2>
                            <div className="container w-100 d-flex justify-content-center align-items-center">
                                <div className="star-line bg-dark"></div>
                                <div className="star-icon mx-3 text-dark"><svg className="svg-inline--fa fa-star fa-w-18" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg></div>
                                <div className="star-line bg-dark"></div>
                            </div>
                        </div>
                        <img src={this.state.popUp.src} className="img-fluid w-50 my-5 rounded-4" alt="" />
                        <p className='px-5'>{this.state.popUp.text}</p>
                        <button className='btn btn-success mt-5' onClick={this.closeLayout}>Close Window</button>
                    </div>
                </div>
            </section>
        )
    }
}
