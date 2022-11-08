/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Routes, Route } from 'react-router';

import Home from '../components/Home/Home'
import UserCrud from '../components/User/UserCrud';

export default props =>
  <Routes>
    <Route exact path='/' element={<Home />} />
    <Route path='/users' element={<UserCrud />} />
    <Route path='*' element={<Home />} />
  </Routes>