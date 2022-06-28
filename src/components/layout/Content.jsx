import React from "react";
import {Routes, Route} from 'react-router-dom'

import About from '../../views/exemples/About'
import Home from '../../views/exemples/Home'
import Param from "../../views/exemples/Param";
import NotFound from "../../views/exemples/NotFound";

import './Content.css'

const Content = props => (
    <main className="Content">
        <Routes>

            <Route exact path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>            
            <Route path="/param/:id" element={<Param/>}></Route>
            <Route path="*" element={<NotFound/>}></Route>
        </Routes>
    </main>
)
export default Content