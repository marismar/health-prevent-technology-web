import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import MaterialTable, { Column } from 'material-table';

import './styles.css';

interface Row {
  name: string;
  age: number;
  phone: number;
  address: string;
  postalCode: number;
  clinicalCondition: string;
  status: string;
}

interface TableState {
  columns: Array<Column<Row>>;
  data: Row[];
}

const theme = createMuiTheme({
  typography: {
    fontSize: 30,
    fontFamily: "Nunito"
  },
});

export default function PatientsList() {
  const [state, setState] = React.useState<TableState>({
    columns: [
      { title: 'Name', field: 'name' },
      { title: 'Age', field: 'age', type: 'numeric' },
      { title: 'Phone', field: 'phone' },
      { title: 'Address', field: 'address' },
      { title: 'Postal code', field: 'postalCode'},
      { title: 'Clinical condition', field: 'clinicalCondition'},
      { title: 'Status', field: 'status'}
    ],
    data: [
      {
        name: 'Marismar',
        age: 22,
        phone: 83996110327,
        address: 'Rua Aluísio Bezerra da Silva, 266',
        postalCode: 58046720,
        clinicalCondition: 'Diabetes',
        status: 'Ativa',
      }
    ],
  });

  return (
    <div id="patients-list">
      <ThemeProvider theme={theme}>
        <MaterialTable
          title="PATIENTS LIST"
          columns={state.columns}
          data={state.data}
          editable={{
            onRowAdd: (newData) =>
              new Promise((resolve) => {
                setTimeout(() => {
                  resolve();
                  setState((prevState) => {
                    const data = [...prevState.data];
                    data.push(newData);
                    return { ...prevState, data };
                  });
                }, 600);
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve) => {
                setTimeout(() => {
                  resolve();
                  if (oldData) {
                    setState((prevState) => {
                      const data = [...prevState.data];
                      data[data.indexOf(oldData)] = newData;
                      return { ...prevState, data };
                    });
                  }
                }, 600);
              }),
            onRowDelete: (oldData) =>
              new Promise((resolve) => {
                setTimeout(() => {
                  resolve();
                  setState((prevState) => {
                    const data = [...prevState.data];
                    data.splice(data.indexOf(oldData), 1);
                    return { ...prevState, data };
                  });
                }, 600);
              }),
          }}
        />
      </ThemeProvider>  
    </div>
  );
}
