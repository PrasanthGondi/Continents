/**import React from 'react';

import "./App.css"

import { useQuery } from '@apollo/client';

import { CONTINENT_DATA } from './App.query';

//import Display from "./display"

type Continent = {
  name:string;
  code:string;
  countries:[];
}

interface CodeProp{
  countryCode:string
}

const DropDown: React.FC<CodeProp> = (props)  => {
  const {countryCode} = props
  const { data, loading, error } = useQuery(CONTINENT_DATA, { variables: { code: {countryCode} } });

  const getLanguages = (languagesArray:[]):string => {
    let lanList:[] = []
    languagesArray.map((el)=>lanList.push(el["name"]))
    return(lanList.join(" "))
  }

  if (loading) return <div>Loading...</div>;
  if (error) return <div>There was an error</div>;
  else{
    const {continent}: { continent: Continent} = data
    //console.log(continent)
    const {name,code,countries} = continent
    //countries.map((n)=>console.log(n["languages"]))
  return (
    <div className="App container">
      <div className='container1'>
        <h1 className='heading'>Continent : {name}</h1>
        <h3 className='heading'>Code : {code}</h3>
        <h2 className='heading2'>Countries List</h2>
        <ul className='ul1'>{countries.map((evcoun)=><li className='d11' key={evcoun["name"]}>
        <ul className='ul2'>
            <li>Country : {evcoun["name"]}</li>
            <li>Currency : {evcoun["currency"]}</li>
            <li>Capital : {evcoun["capital"]}</li>
            <li>Languages : {getLanguages(evcoun["languages"])}</li>
        </ul>
    </li>)}</ul>
      </div>
    </div>
  );
  }

}

export default DropDown;**/

import "./DisplayComponent.css"

interface Props{
  name:string;
  code:string;
  countries:[]
}

const DisplayComponent = (props:Props) => {
  const {name,code,countries} = props
  console.log(name,code,"Hello")

  const getLanguages = (languagesArray:[]):string => {
    let lanList:[] = []
    languagesArray.map((el)=>lanList.push(el["name"]))
    return(lanList.join(" "))
  }

  return(<div className="App container">
  <div className='container1'>
    <h1 className='heading'>Continent : {name}</h1>
    <h3 className='heading'>Code : {code}</h3>
    <h2 className='heading2'>Countries List</h2>
    <ul className='ul1'>{countries.map((evcoun)=><li className='d11' key={evcoun["name"]}>
    <ul className='ul2'>
        <li>Country : {evcoun["name"]}</li>
        <li>Currency : {evcoun["currency"]}</li>
        <li>Capital : {evcoun["capital"]}</li>
        <li>Languages : {getLanguages(evcoun["languages"])}</li>
    </ul>
</li>)}</ul>
  </div>
</div>)
}

export default DisplayComponent