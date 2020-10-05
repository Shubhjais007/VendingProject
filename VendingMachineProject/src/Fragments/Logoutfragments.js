import React, { Component } from 'react';
//firebase Authentication
import {firebaseAuth, firestore} from '../firebase';
import { Typography } from '@material-ui/core';


export class Logoutfragments extends Component {
    render() {
        return (
            <div>
                <Typography> Logout successfully!!</Typography>
            </div>
        )
    }
}

export default Logoutfragments
