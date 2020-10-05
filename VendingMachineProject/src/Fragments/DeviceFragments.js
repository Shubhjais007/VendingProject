import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import MaterialTable from 'material-table';
import { AddBox, ArrowDownward } from "@material-ui/icons";
import { forwardRef } from 'react';
import Switch from '@material-ui/core/Switch';

import axios from 'axios';

//import AddBox from '@material-ui/icons/AddBox';
//import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';


const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };



export class DeviceFragments extends Component {
  constructor(props) {
    super(props)
    const handleChange =(rowData) => {
      console.log(JSON.parse(localStorage.getItem('selectedRow')));
      console.log(rowData.target.checked);
    };
    this.state = {
      columns: [ //Merchant ID	Store ID	Terminal ID
        { title: 'Merchant ID', field: 'merchantId' },
        { title: 'Store ID', field: 'storeId' },
        { title: 'Terminal ID', field: 'terminalId'},
        { title: 'User ID', field: 'userId'},
        { title: 'Location', field: 'location'},
        { title: 'Status', field: 'status', type: 'boolean', render: rowData => <Switch checked={rowData.active} onChange = {(active) => handleChange(active)}/>},        
      ],
      deviceData : [],
      user : JSON.parse(localStorage.getItem('user')),  
    };
  };
  
  //axios.get(EMPLOYEE_API_BASE_URL)
  componentDidMount(){
    console.log("Welcome to Device section");
    const UserVal = JSON.parse(localStorage.getItem('user'));
    //this.setState({ user: UserVal});
    console.log(this.state.user);
    console.log(this.state.user.email);
    console.log(UserVal);
    console.log(UserVal.email);
    if(this.state.user.first_name !== "Admin"){
      axios.post('/home/userDevice', {email : this.state.user.email}).then((res) => {
        this.setState({ deviceData: res.data});
      });
    }
    else{
      axios.get('/home/device').then((res) => {
        this.setState({ deviceData: res.data});
      });
    }    
  }
      // console.log("Welcome to user Profile");  
      //   const User =JSON.parse(localStorage.getItem('user'));
      //   console.log("Checking for Token");
      //   if(User){
      //     // User is signed in.        
      //     setuserLogIn(true);
      //     console.log("Server Auth");
      //     console.log(userLogIn);
      //   } else {
      //     // User is signed out.
      //     setuserLogIn(false);
      //   }

  render() {
    return (
      <MaterialTable
      title="Device Detailed Info."
      columns={this.state.columns}
      data={this.state.deviceData}
      icons={tableIcons}     
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              this.setState((prevState) => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
      options={{
        columnsButton: true,        
        exportAllData: false,
        exportButton: true,
        pageSize: 20,
        pageSizeOptions: [20, 50, 100],
        sorting: true,
      }}
      onRowClick={(event, rowData) => localStorage.setItem('selectedRow', JSON.stringify(rowData))}  
    />
    )
  }
}

export default DeviceFragments;
