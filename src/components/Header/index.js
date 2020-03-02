import React from "react";
import {withStyles} from "@material-ui/styles";
import { 
    Grid, 
    Hidden,
    Box, 
    AppBar,
    Toolbar,
    Typography,
    Button } from '@material-ui/core';

//icons from react-icons
import { 
    FaSearch, 
    FaPlusCircle, 
    FaRegUserCircle, 
    FaSignInAlt } from 'react-icons/fa';

//logo img
import logo from "./logo.png";

const styles = () => ({
    root: {
        color: '#fff',
    },
    logo: {
        fontSize: '1.6em',
        maxHeight: '1.8em',
        padding: '0.2em 0 0 0',
    },
    barcolor: {
        background: '#009ACD',
        boxShadow: 'none',
    },
    textbutton: {
        background: 'inherit',
        color: '#FFF',
        textTransform: 'capitalize',
        fontWeight: 'bold',
        boxShadow: 'none',
        '&:hover': {
            backgroundColor: 'inherit',
            boxShadow: 'none',
        },
    },
    gico: {
        color: '#98FB98',
        fontSize: '1.3em',
        alignItems: 'center',
    },
});

const Header = ({classes}) => (
        <AppBar position="fixed" className={classes.barcolor}>
            <Toolbar>
                <Grid container xl={12} className={classes.root} direction="row" >
                    <Grid container xs={4} sm={4} justify="flex-start" alignItems="center">
                        <Box component="span" m={1} >
                            <img className={classes.logo} src={logo} alt="" />
                        </Box>
                        <Hidden smDown>
                            <Typography variant="h4" >CleanApp</Typography>
                        </Hidden>
                    </Grid>
                    <Grid container xs={8} sm={8} justify="flex-end" alignItems="center">
                        <Button variant="contained" color='primary' 
                        className={classes.textbutton} startIcon={<FaSearch />} title="Procurar">
                            <Hidden smDown>
                                Procurar
                            </Hidden>
                        </Button>
                        <Button variant="contained" color='primary' 
                        className={classes.textbutton} startIcon={<FaPlusCircle className={classes.gico} />} 
                        title="Oferecer Trabalho" >
                            <Hidden smDown>
                                Oferecer Trabalho
                            </Hidden>  
                        </Button>
                        <Button variant="contained" color='primary' 
                        className={classes.textbutton} startIcon={<FaRegUserCircle />} 
                        title="Cadastrar-se" >
                            <Hidden smDown>
                                Cadastrar-se
                            </Hidden>  
                        </Button>
                        <Button variant="contained" color='primary' 
                        className={classes.textbutton} startIcon={<FaSignInAlt />} 
                        title="Entrar" >
                            <Hidden smDown>
                                Entrar
                            </Hidden>  
                        </Button>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
        
);

export default withStyles(styles)(Header);