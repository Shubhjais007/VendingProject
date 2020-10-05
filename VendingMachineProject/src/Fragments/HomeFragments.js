import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import MaterialTable from 'material-table';
import { AddBox, ArrowDownward } from "@material-ui/icons";
import { forwardRef } from 'react';
//import {Box, Container} from '@material-ui/core';
//import Switch from '@material-ui/core/Switch';

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



export class HomeFragments extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      columns: [ //INDEX	Date and Time	Merchant ID	Store ID	Terminal ID	Transaction ID	Amount	Payment Status	Vend Status	Balance
        //date time	Merchant ID	Store ID	Terminal ID	Transaction ID	Amount	Payment Status	Vend Status	error	cancel by user	balance
        { title: 'Date & Time', field: 'date_time' },
        { title: 'Merchant ID', field: 'merchantId' },
        { title: 'Store ID', field: 'storeId' },
        { title: 'Terminal ID', field: 'terminalId'},
        { title: 'Transaction ID', field: 'transactionId'},
        { title: 'Amount', field: 'amount' },
        { title: 'Payment Status', field: 'paymentStatus'},
        { title: 'Vendor Status', field: 'vendorStatus' },
        { title: 'Error', field: 'error' },
        { title: 'User Cancelled', field: 'userCancel'},
        { title: 'Balance', field: 'balance'}, 
      ],
      merchantData: [],
    };
  };
  
  //axios.get(EMPLOYEE_API_BASE_URL)
  componentDidMount(){
    axios.get('/home/merchant').then((res) => {
        this.setState({ merchantData: res.data});
    });
  }

  render() {
    return (
      //<Container>
        //<Box display='flex' overflow='auto'>
          <MaterialTable
            title="Merchant Detailed Info."
            columns={this.state.columns}
            data={this.state.merchantData}
            icons={tableIcons}  
            options={{
              columnsButton: true,        
              exportAllData: false,
              exportButton: true,
              search: true,
              searchFieldAlignment: 'left',
              pageSize: 20,
              pageSizeOptions: [20, 50, 100],
              sorting: true,
            }}      
          />
        //</Box>
      //</Container>           
    )
  }
}

export default HomeFragments;
