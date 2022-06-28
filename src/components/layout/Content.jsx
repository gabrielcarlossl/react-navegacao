import React from "react";
import {Routes, Route} from 'react-router-dom'

import About from '../../views/exemples/About'
import Home from '../../views/exemples/Home'
import Param from "../../views/exemples/Param";

import './Content.css'

const Content = props => (
    <main className="Content">
        <Routes>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/param/:id" element={<Param/>}></Route>
        </Routes>
    </main>
)
export default Content