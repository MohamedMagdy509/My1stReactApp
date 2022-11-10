import React, { Component } from 'react'

import "./PortfolioItem.css"

export default class PortfolioItem extends Component {
    render() {
        return (
            <div className="col-md-4">
                <div className="container">
                    <div className="imgContainer rounded-4 overflow-hidden position-relative" onClick={()=>this.props.myOpenLayout(this.props.myItem)}>
                        <img src={this.props.myItem.src} className='img-fluid PortItem' alt="" />
                        <div className="ImgLayout position-absolute start-0 top-0 w-100 h-100 d-flex align-items-center justify-content-center">
                            <div className="layoutIcon w-25 text-white">
                                <svg className="svg-inline--fa fa-plus fa-w-14 fa-3x" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
