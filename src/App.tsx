import React,{useState} from 'react';

import "./App.css"

import {Link} from "react-router-dom"
 
import { useQuery } from '@apollo/client';

import { CONTINENT_DATA } from './App.query';
//import { type } from 'os';

import DisplayComponent from "./DisplayComponent"

export type Continent = {
  name:string;
  code:string;
  countries:[];
}

const App: React.FC = ()  => {
  const [countryCode,changeCountryCode] = useState("AF")

  const { data, loading, error } = useQuery(CONTINENT_DATA, { variables: { code: `${countryCode}` } });

  const ChangeCode = (e: React.ChangeEvent<HTMLSelectElement>)=> {
    const newValue = e.target.value;
    changeCountryCode(newValue)
 }

  if (loading) return <div>Loading...</div>;
  if (error) return <div>There was an error</div>;
  else{
    const {continent}: { continent: Continent} = data
    //console.log("ContinetType",typeof(continent))
    //const {name,code,countries} = continent 
    //console.log(typeof(countries))
    //countries.map((n)=>console.log(n["languages"]))
  return (
    <div className='div1'>
      <Link to="/"><button className='HomeButtonN'>Home</button></Link>
      <div className='selectV'><select name="cont" onChange={ChangeCode} value={countryCode}>
        <option value="EU">Europe</option>
        <option value="AS">Asia</option>
        <option value="AN">Antarctica</option>
        <option value="NA">North America</option>
        <option value="OC">Oceania</option>
        <option value="SA">South America</option>
        <option value="AF">Africa</option>
      </select></div>
      <DisplayComponent {...continent} />
    </div>
  );
  }

}

export default App;