import React, { useState } from 'react';
 
const TableRow = ({ data }) => {
  return (
    <tr>
      {Object.keys(data).map((key) => (
        <td key={key}>{data[key]}</td>
      ))}
    </tr>
  );
};
 
const Table = ({ headers, data }) => {
  return (
    <table>
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <TableRow key={row.id} data={row} />
        ))}
      </tbody>
    </table>
  );
};
 
const App = () => {
  const [data, setData] = useState([
    { id: 1, nom: 'John Doe', edat: 32, ciutat: 'Nova York' },
    { id: 2, nom: 'Jane Doe', edat: 28, ciutat: 'San Francisco' },
    { id: 3, nom: 'Jim Smith', edat: 40, ciutat: 'Londres' },
  ]);
 
  const [sortBy, setSortBy] = useState('nom');
 
  const handleSort = (key) => {
    setSortBy(key);
    setData([...data].sort((a, b) => (a[key] > b[key] ? 1 : -1)));
  };
 
  const headers = ['Nom', 'Edat', 'Ciutat'];
 
  return (
    <div>
      <h1>Taula de dades dinàmiques</h1>
      <Table headers={headers} data={data} />
      <div>
        <button onClick={() => handleSort('nom')}>Ordena per nom.</button>
        <button onClick={() => handleSort('edat')}>Ordena per edat.</button>
        <button onClick={() => handleSort('ciutat')}>Ordena per ciutat.</button>
      </div>
    </div>
  );
};
 
export default App;