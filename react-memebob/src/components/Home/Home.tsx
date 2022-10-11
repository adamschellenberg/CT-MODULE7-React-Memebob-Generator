import React, { Suspense } from 'react';
import { makeStyles } from '@material-ui/core';
import { Navbar } from '../../components/Navbar';
import { AuthCheck } from 'reactfire';

interface Props {
    title: string;
}

const useStyles = makeStyles({
    background: {
        backgroundColor: '#FFF280',
        width: '100%',
        height: '100%',
        backgroundPosition: 'center',
        position: 'absolute',
        zIndex: -1,
    },
    main_text: {
        textAlign: 'center',
        position: 'relative',
        top: '40%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    },
    button_text: {
        color: 'white',
        textDecoration: 'none',
    },
    title_text: {
        color: '#7D4D1A',
    }
})

export const Home = ( props: Props) => {

    const classes = useStyles();

  return (
    <>
        <Navbar />
        <div className={`${classes.background}`}>
            <div className={classes.main_text}>
                <h1 className={classes.title_text}>{ props.title }</h1>
                <Suspense fallback={'loading...'}>
                    <AuthCheck fallback={
                        <div>Are you ready, kids?<br />
                        I can't hear you!<br />
                        Oooohhhhh<br />
                        Who generates memes for the whole world to see?<br />
                        Memebob website!<br />
                        Full of SB templates, to be captioned by thee?<br />
                        Memebob website!<br />
                        If spongey and squidy and patrick you wish<br />
                        Then sign up or sign in to gain access to this!<br />
                        Memebob website!<br />
                        Memebob website!<br />
                        Memebob website!<br />
                        Memebob website!</div>
                    }>
                        <div>I'm ready, I'm ready, I'm ready, I'm ready (to make some memes!)</div>
                    </AuthCheck>
                </Suspense>
            </div>
        </div>
    </>
  )
}
