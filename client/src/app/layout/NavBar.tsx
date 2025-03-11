import { DarkMode, LightMode, ShoppingCart } from "@mui/icons-material";
import { AppBar, IconButton, List, ListItem, Toolbar, Typography ,Badge, Box, LinearProgress} from "@mui/material";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../store/store";
import { useDispatch } from "react-redux";
import { toggleDarkMode } from "./uiSlice";

const midLinks = [
    {title: 'catalog', path: '/catalog'},
    {title: 'about', path: '/about'},
    {title: 'contact', path: '/contact'}
]

const rightLinks = [
    {title: 'login', path: '/login'},
    {title: 'register', path: '/register'}
]

const navStyles = {
    color: 'inherit', 
    typography: 'h6',
    textDecoration: 'none',
    '&:hover': {
        color: 'grey.500'
    },
    '&.active': {
        color: '#baecf9',
    }

}



export default function NavBar() {
    const {isLoading, darkMode} = useAppSelector(state => state.ui);
    const dispatch = useDispatch();
    

    return (
        <AppBar position="fixed">
        <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
            <Box display="flex" flexDirection="row" alignItems="center">
                <Typography variant="h6" component={NavLink} to={'/'} sx={navStyles}>RE-STORE</Typography>
                <IconButton onClick={() => dispatch(toggleDarkMode())}>{darkMode ? <DarkMode/> : <LightMode sx={{ color: 'yellow'}}/>}</IconButton>
            </Box>

            <List sx={{display: 'flex', flexDirection: 'row'}}>
                {midLinks.map(({title, path}) => (
                    <ListItem 
                        component={NavLink}
                        to={path}
                        key={path}
                        sx={navStyles}
                            >
                            {title.toUpperCase()}
                    </ListItem>
                ))}
            </List>
            <Box display="flex" flexDirection="row" alignItems="center">
            <IconButton size="large" sx={{color: 'inherit'}}>
                <Badge badgeContent={4} color="secondary">
                    <ShoppingCart/>
                </Badge>
            </IconButton>
            <List sx={{display: 'flex', flexDirection: 'row'}}>
                {rightLinks.map(({title, path}) => (
                    <ListItem 
                        component={NavLink}
                        to={path}
                        key={path}
                        sx={navStyles}>
                            {title.toUpperCase()}
                    </ListItem>
                ))}
            </List>
            </Box>

        </Toolbar>
        {isLoading && (
            <Box sx={{width: '100%'}}>
                <LinearProgress color="secondary"/>
            </Box>
        )}
        </AppBar>
    );
}
