import React, { useState } from 'react';
import { DatePicker } from 'antd';

const App = () => {
  const [date, setDate] = useState(null);

  const handleChange = value => {
    setDate(value);
  };

  return (
    <div style={{ width: 400, margin: '100px auto' }}>
      <DatePicker onChange={handleChange} />
      <br />
      <br />
      Selected Date: {date ? date.format('YYYY-MM-DD') : 'None'}
    </div>
  );
};

export default App;