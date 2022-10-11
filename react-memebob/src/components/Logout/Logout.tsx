import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import { useAuth, AuthCheck } from 'reactfire';
import 'firebase/auth';
import { Input } from '../SharedComponents/Input';
import { Container, Button, makeStyles, Typography, Snackbar } from '@material-ui/core';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { Navbar } from '../Navbar';

interface LogoutProps {
    history: RouteComponentProps["history"];
    location: RouteComponentProps["location"];
    match: RouteComponentProps["match"];
}

export const Logout = withRouter((props: LogoutProps) => {

    const auth = useAuth();
    const { history } = props;


    const signOut = async () => {
        await auth.signOut();
        setTimeout( () => {history.push('/')}, 3000);
    }

    useEffect(() => {
        signOut();
    });

  return (
    <>
    <Navbar />
    <div>Logged out. Returning to Home page in 3 seconds...</div>
    </>
  )
});
