import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import SortIcon from '@mui/icons-material/Sort';

// Datos de ejemplo
const initialData = [
  { name: 'John Doe', age: 32, city: 'New York' },
  { name: 'Jane Doe', age: 27, city: 'London' },
  { name: 'Jim Smith', age: 40, city: 'Paris' },
];

function App() {
  const [people, setPeople] = useState(initialData);

  const sortData = (key) => {
    const sortedData = [...people].sort((a, b) => {
      if (a[key] < b[key]) {
        return -1;
      }
      if (a[key] > b[key]) {
        return 1;
      }
      return 0;
    });
    setPeople(sortedData);
  };

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">
              Name
              <IconButton onClick={() => sortData('name')}>
                <SortIcon />
              </IconButton>
            </TableCell>
            <TableCell align="center">
              Age
              <IconButton onClick={() => sortData('age')}>
                <SortIcon />
              </IconButton>
            </TableCell>
            <TableCell align="center">
              City
              <IconButton onClick={() => sortData('city')}>
                <SortIcon />
              </IconButton>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {people.map((person, index) => (
            <TableRow key={index}>
              <TableCell align="center">{person.name}</TableCell>
              <TableCell align="center">{person.age}</TableCell>
              <TableCell align="center">{person.city}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default App;
