import React from 'react';
import { Link } from 'react-router-dom';

//? MUI Components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';


const NavBar = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Switch />
                    <Button component={Link}
                        color="inherit" to={'/'}>Home</Button>

                    <Button component={Link}
                        color="inherit" to={'/login'}>login</Button>

                    <Button component={Link}
                        color="inherit" to={'/signup'}>sing up</Button>

                    <Button component={Link}
                        color="inherit" to={'/scoreboard'}>Scoreboard</Button>

                    <Button component={Link}
                        color="inherit" to={'/questions'}>Game</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar
