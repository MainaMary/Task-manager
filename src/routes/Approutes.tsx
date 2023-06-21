import React from 'react'
import { Routes, Route } from "react-router-dom";
const Home = React.lazy(() =>import('../pages/Home'))

const routesList = [
    {
     path:'/',
     component: <Home/>,
    
    },
]

const AppRoutes = () =>{
    return <Routes>{routesList.map(({path, component})=> <Route key={path} path={path} element={component}/>)}</Routes>
}
export default AppRoutes