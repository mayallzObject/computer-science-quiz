import React from 'react';
import { Link } from 'react-router-dom';

//? MUI Components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';


const NavBar = () => {

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Button component={Link}
                        color="inherit" to={'/'}>Scoreboard</Button>
                    <Button component={Link}
                        color="inherit" to={'/login'}>login</Button>
                    <Button component={Link}
                        color="inherit" to={'/signup'}>sing up</Button>
                    <Button component={Link}
                        color="inherit" to={'/scoreboard'}>My button</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar
