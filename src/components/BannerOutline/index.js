import React from "react";
import { withStyles } from '@material-ui/core/styles';

import {
    Grid,
    Button,
    CardMedia,
    Typography } from '@material-ui/core';

import photo from './photo.jpg';

const styles = () => ({
    root: {
        flexGrow: 1,
        padding: 30,
        display: 'flex',
    },
    bannerbutton:{
        background: '#009ACD',
        '&:hover': {
            backgroundColor: '#00B2EE',
        },
        borderRadius: 30,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: 'none',
        textTransform: 'capitalize',
        fontWeight: 'bold',
        fontSize: '1rem',
    },
    box: {
        fontSize: '1.4rem',
        color: '#009ACD',
        paddingBottom: '0.5rem',
        fontWeight: 'bold',
    },
    box2: {
        color: '#666',
        paddingBottom: '0.5rem',
        fontWeight: 'bold',
    },
    cardtext:{
        display: 'flex',
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        '@media (min-width:700px)': {
            justifyContent: 'flex-start',
            alignItems: 'center',
        },
        
    },
    cardphoto: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 20,
        '@media (min-width:700px)': {
            justifyContent: 'flex-end',
            alignItems: 'center',
        },
    },
    photo: {
        width: '20rem',
        minHeight: '15rem',
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
        borderRadius: 6,
        '@media (min-width:700px)': {
            width: '30rem',
            minHeight: '20rem',
        },

    },

});

const BannerOutline = ({classes}) => (
    <Grid container className={classes.root} justify="center" alignItems="center" direction="row">
        <Grid item xs={12} sm={6} className={classes.cardphoto} >
            <CardMedia image={photo} className={classes.photo} />
        </Grid>
        <Grid item xs={12} sm={6} className={classes.cardtext} direction="column">
            <Typography className={classes.box} variant='h4'>Quer mais tempo livre?</Typography>
            <Typography className={classes.box2} variant='body2' >Ofereça um trabalho e encontre um parceiro para realizá-lo.</Typography>   
            <Button variant="contained" color="primary" className={classes.bannerbutton} >
                Oferecer Trabalho
            </Button> 
        </Grid>        
    </Grid>
    
    
);

export default withStyles(styles)(BannerOutline);