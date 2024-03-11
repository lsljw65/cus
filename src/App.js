import './App.css';
// import React, {Component} from 'react';
import Customer from './components/Customer';

const customer={
  'name':'이종원',
  'birthday':'961222',
  'gender':"남성",
  'job':"대학생"
}

function App() {
  return (
    <Customer
      name={customer.name}
      birthday={customer.birthday}
      gender={customer.gender}
      job={customer.job}
    />
  );
}

export default App;
