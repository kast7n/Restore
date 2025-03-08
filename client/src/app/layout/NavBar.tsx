import { DarkMode, LightMode, ShoppingCart } from "@mui/icons-material";
import { AppBar, IconButton, List, ListItem, Toolbar, Typography ,Badge, Box} from "@mui/material";
import { NavLink } from "react-router-dom";

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

type Props = {
    darkMode: boolean;
    handleDarkMode: () => void;
}

export default function NavBar({darkMode, handleDarkMode}: Props) {



    return (
        <AppBar position="fixed">
        <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
            <Box display="flex" flexDirection="row" alignItems="center">
                <Typography variant="h6" component={NavLink} to={'/'} sx={navStyles}>RE-STORE</Typography>
                <IconButton onClick={handleDarkMode}>{darkMode ? <DarkMode/> : <LightMode sx={{ color: 'yellow'}}/>}</IconButton>
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
        </AppBar>
    );
}
