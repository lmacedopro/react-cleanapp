import React from "react";
import { withStyles,
         createMuiTheme, 
         responsiveFontSizes } from '@material-ui/core/styles';

import {
    Grid,
    Button,
    CardMedia,
    Typography } from '@material-ui/core';

//import './styles.css';
//import banner from "./banner.png";
import banner from "./banner2.jpg";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const styles = () => ({
    root: {
        width: '100%',
        marginBlockStart: '2rem',
        minHeight: '25rem',
        '@media (min-width:700px)': {
            minHeight: '35rem',
          },
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingBottom: '4rem',
        '& h1': {
            fontSize: '1.5rem',
            fontWeight: 'bold',
            textShadow: '0 0 3px #FFF',
            '@media (min-width:700px)': {
                fontSize: '2rem',
              },
            
        },
        '& h4': {
            fontWeight: 'bold',
            fontSize: '0.9rem',
            '@media (min-width:700px)': {
                fontSize: '1.2rem',
              },
        }
    },
    bannerbutton:{
        background: '#2E8B57',
        '&:hover': {
            backgroundColor: '#3CB371',
        },
        borderRadius: 30,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: 'none',
        textTransform: 'capitalize',
        fontWeight: 'bold',
        fontSize: '1.2rem',
    },
    box: {
        paddingBottom: '1rem',
        '@media (min-width:700px)': {
            paddingBottom: '1.8rem',
        },
        textAlign: 'center',
    }

});

const Banner = ({classes}) => (
    <CardMedia image={banner} className={classes.root} >
        <Grid container justify="center" alignItems="center" direction="column">
            <Typography className={classes.box} variant='h1'>Encontre algum trabalho e transforme lares!</Typography>   
            <Typography className={classes.box} variant='h4'>Entre para a comunidade, encontre bons trabalhos e conheça pessoas.</Typography> 
            <Button variant="contained" color="primary" className={classes.bannerbutton} >
                <Typography variant='h4'>Procurar Algum Trabalho</Typography>
            </Button>        
        </Grid>
    </CardMedia>
    
    
);

export default withStyles(styles)(Banner);