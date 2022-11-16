import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Select } from 'antd';
const { Option } = Select;

const App = () => {
  const [searchValue, setSearchValue] = useState('');

  const onSearch = (value) => {};

  const onChange = (value, option) => {
    setSearchValue(option.children);
  };

  const onFocus = () => {};

  return (
    <Select
      showSearch
      style={{
        width: 200,
      }}
      placeholder="Search to Select"
      optionFilterProp="children"
      filterOption={(input, option) => option.children.includes(input)}
      onSearch={onSearch}
      searchValue={searchValue}
      onChange={onChange}
      onFocus={onFocus}
    >
      <Option value="1">Not Identified</Option>
      <Option value="2">Closed</Option>
      <Option value="3">Communicated</Option>
      <Option value="4">Identified</Option>
      <Option value="5">Resolved</Option>
      <Option value="6">Cancelled</Option>
    </Select>
  );
};

export default App;
