import React, { Component } from 'react';
import {Routes,Route} from 'react-router-dom'
import Login from './pages/login'
import Header from './components/header'
import AppLayout from './AppLayout'
import Admin from './pages/admin'
import Pest from './pages/admin/pest'
import Durs from './pages/admin/durs'
import Jnw from './pages/admin/jnw'
import Experts from './pages/admin/experts'
import Cxg from './pages/admin/cxg'
import Zf from './pages/admin/zf'
import Cases from './pages/admin/cases'
import Pestcase from './pages/admin/pestcase'
import Test from './pages/admin/test'
import Dylz from './pages/admin/dylz'
import Qb from './pages/admin/qb'
import Data from './pages/admin/data'
import D220101 from './pages/admin/D220101'
import D220102 from './pages/admin/D220102'





export default class App extends Component {
  render() {
    return (
        <div>
            <div className='div1'>
            <Header/>
            </div>
            <div className='div2'>
              <Routes>
              <Route path="/" element={<Login/>}/>
              <Route path="/admin" element={<AppLayout/>}>
                <Route index element={<Admin/>}/>
                <Route path="/admin/pest" element={<Pest/>}>
                       <Route index element={<Durs/>}/>
                       <Route path="/admin/pest/jnw" element={<Jnw/>}/>
                </Route>
                <Route path="/admin/experts" element={<Experts/>}>
                       <Route path="/admin/experts/cxg" element={<Cxg/>}/>
                       <Route path="/admin/experts/zf" element={<Zf/>}/>
                </Route>
                <Route path="/admin/cases" element={<Cases/>}>
                        <Route index element={<Pestcase/>}/>
                        
                </Route>
                <Route path="/admin/tests" element={<Test/>}>
                        <Route index element={<Dylz/>}/>
                        <Route path="/admin/tests/qb" element={<Qb/>}/>
                </Route>
                <Route path="/admin/data" element={<Data/>}>
                  <Route index element={<D220101/>}/>
                  <Route path="/admin/data/220102" element={<D220102/>}/>
                  </Route>                 
              </Route>
               </Routes>
            </div>
        </div>
    )}
}