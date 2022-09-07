import './App.css';
import { useState,useEffect } from "react"
import { customerList } from './customer'

const redSolid = {border:'solid' ,borderColor:'red'}

function Table({ props}) { 
  return (
    <div>
      <div>Table Number: {props.table} </div>
      Guests: <div style={{display:'flex' ,flexDirection:"column"}}>
      {props.customer.map(customer => { 
        return (
          <div style={customer.checked? redSolid:null} key={customer.key}>
            {customer.name}
          </div>
        )
      })}
      </div>
    </div>
  )
}






function App() {
  const [customers, setCustomers] = useState([])
  const [searchValue,setSearchValue ] = useState('')
  useEffect(() => { 
    setCustomers(customerList)
  }, [])
  const onChangeUpdate = (e) => { 
    setSearchValue(e.target.value)
  }
  const checkName = () => { 
    setSearchValue('')
    let updatedCustomerList = [...customers]
    for (let i = 0; i < updatedCustomerList.length; i++) { 
      let tableGuest = updatedCustomerList[i].customer
      for (let j = 0; j < tableGuest.length; j++) { 
        if (tableGuest[j].name === searchValue) {
          tableGuest[j].checked = true
          return setCustomers(updatedCustomerList)} 
      }
    }
    alert('You have entered a wrong name')
  }
  const removeName = () => { 
    setSearchValue('')
    let updatedCustomerList = [...customers]
    for (let i = 0; i < updatedCustomerList.length; i++) { 
      let tableGuest = updatedCustomerList[i].customer
      for (let j = 0; j < tableGuest.length; j++) { 
        if (tableGuest[j].name === searchValue) {
          tableGuest[j].checked = false
          return setCustomers(updatedCustomerList)} 
      }
    }
    alert('You have entered a wrong name')
  }
  return (
    <div className="App">
      <h3>
      Table
      </h3>
      <div style={{ margin:'30px'}}>
        <input
          value={searchValue}
          onChange={onChangeUpdate} />
        <button onClick={checkName}>Check</button>
        <button onClick={removeName}>UnChecked</button>
      </div>
      <div style={{display:'flex', justifyContent:'space-evenly'}}>
        {
          customers.map(table => { 
            return (
              <Table props={table} key={table.table}/>
              )
          })
        }
      </div>
    </div>
  );
}

export default App;