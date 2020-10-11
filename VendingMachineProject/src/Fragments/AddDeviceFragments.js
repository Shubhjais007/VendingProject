import React, { Component } from 'react';
import {Container, Box, Typography, TextField, Button, LinearProgress } from '@material-ui/core';
//import {firebaseAuth} from '../firebase';
import axios from 'axios';

export class AddDeviceFragments extends Component {
    constructor() {
      super()
    
      this.state = {
        merchantId:"",
        storeId:"",
        terminalId:"",
        userId:"",
        location:"",
        merchantId_error:null,
        storeId_error:null,
        terminalId_error:null,
        userId_error:null,
        location_error:null,
        show_progress: false,
        show_sucess: false,
      };
      
      this.handleChange = this.handleChange.bind()
      this.addDevice = this.addDevice.bind()

    };
   
    handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    addDevice = (e) => {
        let data_valid = true;
        
        this.setState({
            merchantId_error:null,
            storeId_error:null,
            terminalId_error:null,
            userId_error:null,
            location_error:null,
        })
        if(this.state.merchantId === ""){
            this.setState({
                merchantId_error:"Required!"
            })
            data_valid=false;
        }
        if(this.state.storeId === ""){
            this.setState({
                storeId_error:"Required!"
            })
            data_valid=false;
        }
        if(this.state.terminalId === ""){
            this.setState({
                terminalId_error:"Required!"
            })
            data_valid=false;
        }
        if(this.state.userId === ""){            
            this.setState({
                userId_error:"Required!"
            })
            data_valid=false;
        }
        if(this.state.location === ""){            
            this.setState({
                location_error:"Required!"
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
            console.log("Device Added !!")
            axios
            .post('/home/addDevice', {
                merchantId: this.state.merchantId ,
                storeId: this.state.storeId ,
                terminalId: this.state.terminalId ,
                userId: this.state.userId ,
                location: this.state.location 
            })
            .then(response => {
                this.setState({     
                    show_sucess: true
                })
                console.log('Device Added Sucessfully !!')
            })

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
                        Add New Device
                    </Typography>
                    <TextField name='merchantId' onChange={this.handleChange} error={this.state.merchantId_error != null} helperText={this.state.merchantId_error} label="Merchant ID" id="merchantId" type="text" fullWidth={true} size="small" margin="normal"/>
                    <TextField name='storeId'  onChange={this.handleChange}error={this.state.storeId_error != null} helperText={this.state.storeId_error} label="Store ID" id="storeId" type="text" fullWidth={true} size="small" margin="normal"/>                    
                    <TextField name='terminalId' onChange={this.handleChange} error={this.state.terminalId_error != null} helperText={this.state.terminalId_error} label="Terminal ID" id="terminalId" type="text" fullWidth={true} size="small" margin="normal"/>
                    <TextField name='userId' onChange={this.handleChange} error={this.state.userId_error != null} helperText={this.state.userId_error} label="User ID" id="userId" type="text" fullWidth={true} size="small" margin="normal"/>
                    <TextField name='location' onChange={this.handleChange} error={this.state.location_error != null} helperText={this.state.location_error} label="Location" id="location" type="text" fullWidth={true} size="small" margin="normal"/>
                    <br/>
                    <br/>
                    <Button variant="contained" onClick={this.addDevice} size="large" color="primary" margin="normal" fullWidth={true}>
                        Add Device
                    </Button>
                    <br/>
                    <br/>
                    {
                        this.state.show_sucess?
                        <Typography varient="h4" color="primary"> Device Added Sucessfully !! </Typography>
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

export default AddDeviceFragments
