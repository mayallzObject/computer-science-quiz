import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';




const NavBar = () => {


    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Button component={Link} color="inherit" to={'/'}>Scoreboard</Button>
                    <Button component={Link} color="inherit" to={'/login'}>login</Button>
                    <Button component={Link} color="inherit" to={'/singup'}>sing up</Button>
                    <Button component={Link} color="inherit" to={'/scoreboard'}>My button</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar
