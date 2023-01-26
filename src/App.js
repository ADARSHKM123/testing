import './App.css';
import axios from 'axios'
import { useState } from 'react';
// import {Router, Route} from 'react-router';


function App() {

  const [country, setcountry] = useState('india');
  const [countryselect, setcountryselect] = useState('');
  const [CountryDta, setCountryDta] = useState([])

  const handleSubmit =(e)=>{
    e.preventDefault()
    setcountry(countryselect);
  }

  const handleChange =(e)=>{
   console.log(e.target.value);
   setcountryselect(e.target.value)
  }

  const collecting=async ()=>{
   await axios.get(`https://restcountries.com/v2/name/${country}`).then(res=>{
      console.log(res.data);
      setCountryDta(res.data)
    })
  }



  return (
  <>
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          Get Your country details:
          <select  onChange={handleChange}>
            <option value="india">India</option>
            <option value="spain">spain</option>
            <option value="usa">usa</option>
          </select>
        </label>
        <input className='btn' type="submit" />
      </form>
    </div>
    <div>
    <button className='mainbtn' onClick={collecting}>Get all data</button>
    </div>

<table>
  <thead>
    <tr>
    <th className='th'>Capital</th>
    <th className='th'>Population</th>
    <th className='th'>Region</th>
    </tr>
  </thead>
  {
    CountryDta.map((each,i)=>{
      return(
        <tbody key={i}>
        <td>{each.capital}</td>
        <td>{each.population}</td>
        <td>{each.region}</td>
      </tbody>
      )
    })
  }
</table>
    </>

  );
}

export default App;
