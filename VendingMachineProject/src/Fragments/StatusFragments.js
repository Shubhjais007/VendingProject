import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import MaterialTable from 'material-table';
import { AddBox, ArrowDownward } from "@material-ui/icons";
import { forwardRef } from 'react';
//import Switch from '@material-ui/core/Switch';

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



export class StatusFragments extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      columns: [ //Store ID	Terminal ID  Status      
        { title: 'Store ID', field: 'storeId' },
        { title: 'Terminal ID', field: 'terminalId'},
        { title: 'Status', field: 'status' },   
      ],
      data: [
        { storeId: 'MS2002081308369250000597', terminalId: 'MST2002081308554920000355', status: 'Active'},
        { storeId: 'MS2002081249316790000793', terminalId: 'MST2002081249484690000025', status: 'Active'},
        { storeId: 'MS2002081235205510000780', terminalId: 'MST2002081244043080000723', status: 'Active'},
        { storeId: 'MS2002081247442710000251', terminalId: 'MST2002081248031180000745', status: 'Active'},
        { storeId: 'MS2002081247442710000251', terminalId: 'MST2002081248031180000745', status: 'InActive'},
        { storeId: 'MS2002081249316790000793', terminalId: 'MST2002081248031180000745', status: 'Active'},
        { storeId: 'MS2002081308369250000597', terminalId: 'MST2002081249484690000025', status: 'Active'},
        { storeId: 'MS2002081235205510000780', terminalId: 'MST2002081308554920000355', status: 'InActive'},
        { storeId: 'MS2002081308369250000597', terminalId: 'MST2002081308554920000355', status: 'Active'},
        { storeId: 'MS2002081249316790000793', terminalId: 'MST2002081249484690000025', status: 'Active'},
        { storeId: 'MS2002081235205510000780', terminalId: 'MST2002081244043080000723', status: 'Active'},
        { storeId: 'MS2002081247442710000251', terminalId: 'MST2002081248031180000745', status: 'Active'},
        { storeId: 'MS2002081247442710000251', terminalId: 'MST2002081248031180000745', status: 'InActive'},
        { storeId: 'MS2002081249316790000793', terminalId: 'MST2002081248031180000745', status: 'Active'},
        { storeId: 'MS2002081308369250000597', terminalId: 'MST2002081249484690000025', status: 'Active'},
        { storeId: 'MS2002081235205510000780', terminalId: 'MST2002081308554920000355', status: 'InActive'},
        { storeId: 'MS2002081308369250000597', terminalId: 'MST2002081308554920000355', status: 'Active'},
        { storeId: 'MS2002081249316790000793', terminalId: 'MST2002081249484690000025', status: 'Active'},
        { storeId: 'MS2002081235205510000780', terminalId: 'MST2002081244043080000723', status: 'Active'},
        { storeId: 'MS2002081247442710000251', terminalId: 'MST2002081248031180000745', status: 'Active'},
        { storeId: 'MS2002081247442710000251', terminalId: 'MST2002081248031180000745', status: 'InActive'},
        { storeId: 'MS2002081249316790000793', terminalId: 'MST2002081248031180000745', status: 'Active'},
        { storeId: 'MS2002081308369250000597', terminalId: 'MST2002081249484690000025', status: 'Active'},
        { storeId: 'MS2002081235205510000780', terminalId: 'MST2002081308554920000355', status: 'InActive'},
        { storeId: 'MS2002081308369250000597', terminalId: 'MST2002081308554920000355', status: 'Active'},
        { storeId: 'MS2002081249316790000793', terminalId: 'MST2002081249484690000025', status: 'Active'},
        { storeId: 'MS2002081235205510000780', terminalId: 'MST2002081244043080000723', status: 'Active'},
        { storeId: 'MS2002081247442710000251', terminalId: 'MST2002081248031180000745', status: 'Active'},
        { storeId: 'MS2002081247442710000251', terminalId: 'MST2002081248031180000745', status: 'InActive'},
        { storeId: 'MS2002081249316790000793', terminalId: 'MST2002081248031180000745', status: 'Active'},
        { storeId: 'MS2002081308369250000597', terminalId: 'MST2002081249484690000025', status: 'Active'},
        { storeId: 'MS2002081235205510000780', terminalId: 'MST2002081308554920000355', status: 'InActive'},
        { storeId: 'MS2002081308369250000597', terminalId: 'MST2002081308554920000355', status: 'Active'},
        { storeId: 'MS2002081249316790000793', terminalId: 'MST2002081249484690000025', status: 'Active'},
        { storeId: 'MS2002081235205510000780', terminalId: 'MST2002081244043080000723', status: 'Active'},
        { storeId: 'MS2002081247442710000251', terminalId: 'MST2002081248031180000745', status: 'Active'},
        { storeId: 'MS2002081247442710000251', terminalId: 'MST2002081248031180000745', status: 'InActive'},
        { storeId: 'MS2002081249316790000793', terminalId: 'MST2002081248031180000745', status: 'Active'},
        { storeId: 'MS2002081308369250000597', terminalId: 'MST2002081249484690000025', status: 'Active'},
        { storeId: 'MS2002081235205510000780', terminalId: 'MST2002081308554920000355', status: 'InActive'},
        { storeId: 'MS2002081308369250000597', terminalId: 'MST2002081308554920000355', status: 'Active'},
        { storeId: 'MS2002081249316790000793', terminalId: 'MST2002081249484690000025', status: 'Active'},
        { storeId: 'MS2002081235205510000780', terminalId: 'MST2002081244043080000723', status: 'Active'},
        { storeId: 'MS2002081247442710000251', terminalId: 'MST2002081248031180000745', status: 'Active'},
        { storeId: 'MS2002081247442710000251', terminalId: 'MST2002081248031180000745', status: 'InActive'},
        { storeId: 'MS2002081249316790000793', terminalId: 'MST2002081248031180000745', status: 'Active'},
        { storeId: 'MS2002081308369250000597', terminalId: 'MST2002081249484690000025', status: 'Active'},
        { storeId: 'MS2002081235205510000780', terminalId: 'MST2002081308554920000355', status: 'InActive'},
        { storeId: 'MS2002081308369250000597', terminalId: 'MST2002081308554920000355', status: 'Active'},
        { storeId: 'MS2002081249316790000793', terminalId: 'MST2002081249484690000025', status: 'Active'},
        { storeId: 'MS2002081235205510000780', terminalId: 'MST2002081244043080000723', status: 'Active'},
        { storeId: 'MS2002081247442710000251', terminalId: 'MST2002081248031180000745', status: 'Active'},
        { storeId: 'MS2002081247442710000251', terminalId: 'MST2002081248031180000745', status: 'InActive'},
        { storeId: 'MS2002081249316790000793', terminalId: 'MST2002081248031180000745', status: 'Active'},
        { storeId: 'MS2002081308369250000597', terminalId: 'MST2002081249484690000025', status: 'Active'},
        { storeId: 'MS2002081235205510000780', terminalId: 'MST2002081308554920000355', status: 'InActive'},
        { storeId: 'MS2002081308369250000597', terminalId: 'MST2002081308554920000355', status: 'Active'},
        { storeId: 'MS2002081249316790000793', terminalId: 'MST2002081249484690000025', status: 'Active'},
        { storeId: 'MS2002081235205510000780', terminalId: 'MST2002081244043080000723', status: 'Active'},
        { storeId: 'MS2002081247442710000251', terminalId: 'MST2002081248031180000745', status: 'Active'},
        { storeId: 'MS2002081247442710000251', terminalId: 'MST2002081248031180000745', status: 'InActive'},
        { storeId: 'MS2002081249316790000793', terminalId: 'MST2002081248031180000745', status: 'Active'},
        { storeId: 'MS2002081308369250000597', terminalId: 'MST2002081249484690000025', status: 'Active'},
        { storeId: 'MS2002081235205510000780', terminalId: 'MST2002081308554920000355', status: 'InActive'},
        { storeId: 'MS2002081308369250000597', terminalId: 'MST2002081308554920000355', status: 'Active'},
        { storeId: 'MS2002081249316790000793', terminalId: 'MST2002081249484690000025', status: 'Active'},
        { storeId: 'MS2002081235205510000780', terminalId: 'MST2002081244043080000723', status: 'Active'},
        { storeId: 'MS2002081247442710000251', terminalId: 'MST2002081248031180000745', status: 'Active'},
        { storeId: 'MS2002081247442710000251', terminalId: 'MST2002081248031180000745', status: 'InActive'},
        { storeId: 'MS2002081249316790000793', terminalId: 'MST2002081248031180000745', status: 'Active'},
        { storeId: 'MS2002081308369250000597', terminalId: 'MST2002081249484690000025', status: 'Active'},
        { storeId: 'MS2002081235205510000780', terminalId: 'MST2002081308554920000355', status: 'InActive'},
        { storeId: 'MS2002081308369250000597', terminalId: 'MST2002081308554920000355', status: 'Active'},
        { storeId: 'MS2002081249316790000793', terminalId: 'MST2002081249484690000025', status: 'Active'},
        { storeId: 'MS2002081235205510000780', terminalId: 'MST2002081244043080000723', status: 'Active'},
        { storeId: 'MS2002081247442710000251', terminalId: 'MST2002081248031180000745', status: 'Active'},
        { storeId: 'MS2002081247442710000251', terminalId: 'MST2002081248031180000745', status: 'InActive'},
        { storeId: 'MS2002081249316790000793', terminalId: 'MST2002081248031180000745', status: 'Active'},
        { storeId: 'MS2002081308369250000597', terminalId: 'MST2002081249484690000025', status: 'Active'},
        { storeId: 'MS2002081235205510000780', terminalId: 'MST2002081308554920000355', status: 'InActive'},
        { storeId: 'MS2002081308369250000597', terminalId: 'MST2002081308554920000355', status: 'Active'},
        { storeId: 'MS2002081249316790000793', terminalId: 'MST2002081249484690000025', status: 'Active'},
        { storeId: 'MS2002081235205510000780', terminalId: 'MST2002081244043080000723', status: 'Active'},
        { storeId: 'MS2002081247442710000251', terminalId: 'MST2002081248031180000745', status: 'Active'},
        { storeId: 'MS2002081247442710000251', terminalId: 'MST2002081248031180000745', status: 'InActive'},
        { storeId: 'MS2002081249316790000793', terminalId: 'MST2002081248031180000745', status: 'Active'},
        { storeId: 'MS2002081308369250000597', terminalId: 'MST2002081249484690000025', status: 'Active'},
        { storeId: 'MS2002081235205510000780', terminalId: 'MST2002081308554920000355', status: 'InActive'},
        { storeId: 'MS2002081308369250000597', terminalId: 'MST2002081308554920000355', status: 'Active'},
        { storeId: 'MS2002081249316790000793', terminalId: 'MST2002081249484690000025', status: 'Active'},
        { storeId: 'MS2002081235205510000780', terminalId: 'MST2002081244043080000723', status: 'Active'},
        { storeId: 'MS2002081247442710000251', terminalId: 'MST2002081248031180000745', status: 'Active'},
        { storeId: 'MS2002081247442710000251', terminalId: 'MST2002081248031180000745', status: 'InActive'},
        { storeId: 'MS2002081249316790000793', terminalId: 'MST2002081248031180000745', status: 'Active'},
        { storeId: 'MS2002081308369250000597', terminalId: 'MST2002081249484690000025', status: 'Active'},
        { storeId: 'MS2002081235205510000780', terminalId: 'MST2002081308554920000355', status: 'InActive'},
        { storeId: 'MS2002081308369250000597', terminalId: 'MST2002081308554920000355', status: 'Active'},
        { storeId: 'MS2002081249316790000793', terminalId: 'MST2002081249484690000025', status: 'Active'},
        { storeId: 'MS2002081235205510000780', terminalId: 'MST2002081244043080000723', status: 'Active'},
        { storeId: 'MS2002081247442710000251', terminalId: 'MST2002081248031180000745', status: 'Active'},
        { storeId: 'MS2002081247442710000251', terminalId: 'MST2002081248031180000745', status: 'InActive'},
        { storeId: 'MS2002081249316790000793', terminalId: 'MST2002081248031180000745', status: 'Active'},
        { storeId: 'MS2002081308369250000597', terminalId: 'MST2002081249484690000025', status: 'Active'},
        { storeId: 'MS2002081235205510000780', terminalId: 'MST2002081308554920000355', status: 'InActive'},
      ],
    };
  };
  

  render() {
    return (
      <MaterialTable
      title="Vendor Status Info."
      columns={this.state.columns}
      data={this.state.data}
      icons={tableIcons}
      options={{
        columnsButton: true,
        //doubleHorizontalScroll: true,
        exportAllData: false,
        exportButton: true,
        pageSize: 20,
        pageSizeOptions: [20, 50, 100],
        sorting: true,
      }}      
    />
    )
  }
}

export default StatusFragments;
