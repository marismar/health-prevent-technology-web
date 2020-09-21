import React, { useEffect } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import MaterialTable, { Column } from 'material-table';

import api from '../../services/api';
import './styles.css';

interface Row {
  id: number;
  nome: string;
  idade: number;
  numero_telefone: number;
  endereco: string;
  cep: number;
  doenca: string;
  contato_emergencia: string;
  data_ultima_consulta: string;
  especialidade_medico: string;
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
      { title: 'Name', field: 'nome' },
      { title: 'Age', field: 'nome', type: 'numeric' },
      { title: 'Phone', field: 'numero_telefone' },
      { title: 'Address', field: 'endereco' },
      { title: 'Postal code', field: 'cep'},
      { title: 'Clinical condition', field: 'doenca'},
      { title: 'Status', field: 'status'}
    ],
    data: [
    ],
  });

  useEffect(() => {
    api.get('/clients/').then(response => {
        console.log(response.data);
        setState({
          columns: [
            { title: 'Name', field: 'nome' },
            { title: 'Age', field: 'idade', type: 'numeric' },
            { title: 'Phone', field: 'numero_telefone' },
            { title: 'Address', field: 'endereco' },
            { title: 'Postal code', field: 'cep'},
            { title: 'Clinical condition', field: 'doenca'},
            { title: 'Status', field: 'status'}
          ],
          data: response.data,
        })
    });
  },[]);

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