import {AppBar, Toolbar, makeStyles} from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const useStyle = makeStyles({
    header:{
        background: '#000'
    },
    tabs: {
        color: '#fff',
        textDecoration: 'none',
        marginRight: 20,
        fontSize:20
    }
})

const Navbar = () =>{
    const classes = useStyle();
    return (
        <AppBar className={classes.header}position="static">
            <Toolbar>
                <NavLink className={classes.tabs} to="./" exact>Arpit Chauhan</ NavLink>
                <NavLink className={classes.tabs} to="/all" exact>All User</ NavLink>
                <NavLink className={classes.tabs} to="/add" exact>Add User</ NavLink>
            </Toolbar>
        </AppBar>
    )
}
export default Navbar;

