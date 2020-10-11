import React, { Component } from 'react';
import {Container, Box, Typography, TextField, Button, LinearProgress } from '@material-ui/core';
import {firebaseAuth} from '../firebase';
import axios from 'axios';

export class UserFragments extends Component {
    constructor() {
      super()
    
      this.state = {
        firstName:"",
        lastName:"",
        user:"",
        password:"",
        cnfPassword:"",
        userRegister:"",
        firstName_error:null,
        lastName_error:null,
        user_error:null,
        password_error:null,
        cnfPassword_error:null,
        show_progress: false,
        show_sucess: false,
      };
      
      this.handleChange = this.handleChange.bind()
      this.register = this.register.bind()

    };
   
    handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    register = (e) => {
        let data_valid = true;
        
        this.setState({
            firstName_error:null,
            lastName_error: null,
            user_error:null,
            password_error:null,
            cnfPassword_error:null,
        })
        if(this.state.firstName === ""){
            this.setState({
                firstName_error:"Required!"
            })
            data_valid=false;
        }
        if(this.state.lastName === ""){
            this.setState({
                lastName_error:"Required!"
            })
            data_valid=false;
        }
        if(this.state.user === ""){
            this.setState({
                user_error:"Required!"
            })
            data_valid=false;
        }
        if(this.state.password === ""){            
            this.setState({
                password_error:"Required!"
            })
            data_valid=false;
        }
        if(this.state.cnfPassword === ""){            
            this.setState({
                cnfPassword_error:"Required!"
            })
            data_valid=false;
        }
        if(this.state.password !== this.state.cnfPassword){            
            this.setState({
                cnfPassword_error:"Password Not Matched!!"
            })
            data_valid=false;
        }
        if(data_valid){
            this.setState({                
                show_progress: true
            })
        }
        if(data_valid){
            e.preventDefault()

            // const newUser = {
            // first_name: this.state.first_name,
            // last_name: this.state.last_name,
            // user: this.state.user,
            // password: this.state.password
            // }

            const email = this.state.user + '@embatronix.com';
            const password = this.state.password;
            console.log(email);
            console.log(password);
            firebaseAuth.createUserWithEmailAndPassword(email,password) 
            .then(res => {
                console.log(res)
                this.setState({              
                    show_progress: false
                });
                axios
                .post('/user/register', {
                    first_name: this.state.firstName,
                    last_name: this.state.lastName,
                    email: this.state.user,
                    password: this.state.password
                })
                .then(response => {
                    this.setState({                
                        //userRegister: 'User Registered Sucessfully !!',
                        show_sucess: true
                    })
                    console.log('Registered')
                })
            })
            .catch(err => {
                console.error(err)
                if (err.code === 'auth/weak-password') {
                    this.setState({   
                        password_error:"Too Weak Password !!",
                        cnfPassword_error:"Too Weak Password !!",           
                        show_progress: false
                    });                    
                }
                else if (err.code === 'auth/email-already-in-use') {
                    this.setState({   
                        user_error:"UserId already exists !!",          
                        show_progress: false
                    });                    
                }
                else if (err.code === 'auth/network-request-failed') {
                    this.setState({   
                        cnfPassword_error:"Network Error !!",           
                        show_progress: false
                    });                    
                }
            })
            
            // axios
            // .post('/user/register', {
            //     first_name: this.state.firstName,
            //     last_name: this.state.lastName,
            //     email: this.state.user,
            //     password: this.state.password
            // })
            // .then(response => {
            //     this.setState({                
            //         //userRegister: 'User Registered Sucessfully !!',
            //         show_sucess: true
            //     })
            //     console.log('Registered')
            // })

            this.setState({                
                show_progress: false
            })
        }
        this.setState({
            update:true
        }) 
    }


    render() {
        return (
            <Container maxWidth="xs">
                <Box bgcolor="#fafafa" boxShadow="3" borderRadius="12px" align='center' p='24px' mt="30px">                    
                    <Typography varient="h5" color="textSecondary">
                        Add User
                    </Typography>
                    <TextField name='firstName' onChange={this.handleChange} error={this.state.firstName_error != null} helperText={this.state.firstName_error} label="First Name" id="standard-size-small first-name" type="text" fullWidth={true} size="small" margin="normal"/>
                    <TextField name='lastName'  onChange={this.handleChange}error={this.state.lastName_error != null} helperText={this.state.lastName_error} label="Last Name" id="standard-size-small last-name" type="text" fullWidth={true} size="small" margin="normal"/>                    
                    <TextField name='user' onChange={this.handleChange} error={this.state.user_error != null} helperText={this.state.user_error} label="User Id" id="standard-size-small user-id" type="text" fullWidth={true} size="small" margin="normal"/>
                    <TextField name='password' onChange={this.handleChange} error={this.state.password_error != null} helperText={this.state.password_error} label="Password" id="standard-size-small password" type="password" fullWidth={true} size="small" margin="normal"/>
                    <TextField name='cnfPassword' onChange={this.handleChange} error={this.state.cnfPassword_error != null} helperText={this.state.cnfPassword_error} label="Confirm Password" id="standard-size-small cnf-password" type="password" fullWidth={true} size="small" margin="normal"/>
                    <br/>
                    <br/>
                    <Button variant="contained" onClick={this.register} size="large" color="primary" margin="normal" fullWidth={true}>
                        Add User
                    </Button>
                    <br/>
                    <br/>
                    {
                        this.state.show_sucess?
                        <Typography varient="h4" color="primary"> User Added Sucessfully !! </Typography>
                        :null
                    }
                    {
                        this.state.show_progress?
                        <LinearProgress color="primary" />
                        :null
                    }
                                        
                </Box>
            </Container>
        )
    }
}

export default UserFragments
