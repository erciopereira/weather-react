import React from 'react';
import { Switch } from 'react-router-dom'

import Home from './pages/Home';

export default () =>{
    return (
        <Switch>
            <Home/>
        </Switch>
    )
}