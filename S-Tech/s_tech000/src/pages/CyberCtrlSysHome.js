import React from 'react'
// import { BrowserRouter, Routes, Route, useNavigate, Navigate } from "react-router-dom";
import Header from './Header/Header';
import { useState } from 'react';

export const CyberCtrlSysHome = () => {


  //******************************************************
  // const navigate = useNavigate()
  const [titleName, setTitleName] = useState('');
  const [btnName, setBtnName] = useState('');
  const [nextPage, setNextPage] = useState('');

  //******************************************************
  //初回動作
  React.useEffect(() => {
    setTitleName("S-Tech Home  ");
    setBtnName("to measurement 001");
    setNextPage("/pages/CyberCtrlSysMesurement001");
  }, []);

  //******************************************************
  return (
    <div>
      <Header
        titleName={titleName}
        btnName={btnName}
        nextPage={nextPage}/>
    </div>
  )
}

export default CyberCtrlSysHome
