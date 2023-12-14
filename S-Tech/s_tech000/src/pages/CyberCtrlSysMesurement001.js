import React from 'react'
// import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Header from './Header/Header';
import axios from 'axios'
// import ActiveXObject from 'react'
// import XMLHttpRequest from 'react'

export const CyberCtrlSysMesurement001 = () => {


  //******************************************************
  // const navigate = useNavigate()
  const [titleName, setTitleName] = useState('')
  const [btnName, setBtnName] = useState('')
  const [nextPage, setNextPage] = useState('')
  // const [onClickFu, setOnclickFn] = useState('')
  //******************************************************
  const [resValue, setResValue] = useState('')

  //******************************************************
  //初回動作
  React.useEffect(() => {
    setTitleName("Measurement 001  ");
    setBtnName("to Home");
    setNextPage("/");
  }, []);



  //******************************************************
  //******************************************************

  //******************************************************
  const clickMeasurement001 = async() =>{
    const res = await axios.get('https://3b63-210-143-88-147.ngrok-free.app/read?item=access_num', {timeout: 10000});
    console.log(res.data);
  }

  //******************************************************
  const clickMeasurement001_3 = async() =>{
    const url = 'https://32bf-210-143-88-147.ngrok-free.app/read?item=all'
    // const ngrok = require("@ngrok/ngrok");
    // const response = await fetch("https://32bf-210-143-88-147.ngrok-free.app/read?item=all", {mode:'cors', headers: {Authentication: 'ngrok-skip-browser-warning','Access-Control-Allow-Origin': "http://localhost:3000/pages/CyberCtrlSysMesurement001" , 'Access-Control-Allow-Methods': 'GET'}})

    // fetch("https://api.zipaddress.net/?zipcode=8150032")
    // const response = await fetch("http://stc002.airport:8080/read?item=test", {mode: 'no-cors'})
    // const response = await fetch("http://stc002.airport:8080/read?item=all", {mode:'cors'})
    // const response = await fetch("https://32bf-210-143-88-147.ngrok-free.app/read?item=all", {mode:'cors', headers: {Authentication: 'ngrok-skip-browser-warning'}})
    // const response = await fetch("https://32bf-210-143-88-147.ngrok-free.app/read?item=all", {mode:'cors', headers: {Authentication: 'ngrok-skip-browser-warning', "Access-Control-Allow-Origin": "*"}})
    // const response = await fetch("https://32bf-210-143-88-147.ngrok-free.app/read?item=all", {mode:'cors', headers: {Authentication: 'ngrok-skip-browser-warning','Content-Type': 'multipart/form-data'}})
    // const response = await fetch("https://32bf-210-143-88-147.ngrok-free.app/read?item=all", {mode:'cors', headers: {Authentication: 'ngrok-skip-browser-warning','Content-Type': 'multipart/form-data'}})
    // const response = await fetch("https://3b63-210-143-88-147.ngrok-free.app/read?item=all", {mode:'cors', headers: {Authentication: 'User-Agent'}})
    // const response = await fetch("https://3b63-210-143-88-147.ngrok-free.app/read?item=all", {mode:'cors', headers: {Authentication: 'ngrok-skip-browser-warning'}})
    // const response = await fetch("https://32bf-210-143-88-147.ngrok-free.app/read?item=all", {mode:'cors', headers: {Authentication: 'ngrok-skip-browser-warning'}})
    // const response = await fetch("https://32bf-210-143-88-147.ngrok-free.app/read?item=all", {mode:'cors', headers: {Authentication: 'ngrok-skip-browser-warning','Content-Type': 'multipart/form-data', "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Content-Type" }})
    // const response = await fetch("https://www.google.co.jp/", {mode:'cors', credentials: 'include'})
    // const response = await fetch("https://api.zipaddress.net/?zipcode=8150032", {mode: 'no-cors'})
    // const response = await fetch("https://api.zipaddress.net/?zipcode=8150032")

    const response =
      await fetch(url, {
        mode:'cors', headers: {
          Authentication: 'ngrok-skip-browser-warning',
          'Access-Control-Allow-Origin': "http://localhost:3000/pages/CyberCtrlSysMesurement001" ,
          'Access-Control-Allow-Methods': 'GET',
          'Access-Control-Allow-Headers': ['X-Requested-With', 'Origin', 'X-XSRF-TOKEN', 'Content-Type', 'Accept'],
          'Access-Control-Allow-Credentials': 'true',
          authtoken_from_env: true,
          // "is-ngrok":"1", "country":"${.ngrok.geo.country_code}",
          request_header_remove: "referrer",

        }})


    const aaa = await response.text()
    console.log(aaa)
  }


  // const ngrok = require("@ngrok/ngrok");
  // (async function () {
  //   const listener = await ngrok.forward({
  //     addr: 8080,
  //     authtoken_from_env: true,
  //     request_header_add: ["is-ngrok:1", "country:${.ngrok.geo.country_code}"],
  //     request_header_remove: "referrer",
  //   });

  //   console.log(`Ingress established at: ${listener.url()}`);
  // })();

  //^******************************************************
  //^******************************************************


  //******************************************************
  return (
    <div className='a'>
      <div>
        <Header
          titleName={titleName}
          btnName={btnName}
          nextPage={nextPage}/>
      </div>
      <div>
        <button
          onClick={clickMeasurement001_3}>
          Measurement  stc001
        </button>
        <br/>
        <br/>
        <label>{resValue}</label>
      </div>
    </div>
  )
}


export default CyberCtrlSysMesurement001


