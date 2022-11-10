import React, { Component } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from '../About/About'
import Contact from '../Contact/Contact'
import ErrorPage from '../ErrorPage/ErrorPage'
import Home from '../Home/Home'
import MasterLayout from '../MasterLayout/MasterLayout'
import Portfolio from '../Portfolio/Portfolio'


export default class App extends Component {
  routes=createBrowserRouter([
    {path:"/My1stReactApp",element:<MasterLayout/>,errorElement:<ErrorPage/>,children:[
      {index:true,element:<Home/>},
      {path:"portfolio",element:<Portfolio/>},
      {path:"about",element:<About/>},
      {path:"contact",element:<Contact/>},
    ]}
  ])
  render() {
    return (
      <RouterProvider router={this.routes}/>
    )
  }
}
