import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Header from './Header/Header';

export const CyberCtrlSysMesurement001 = () => {
  const navigate = useNavigate()
  const [titleName, setTitleName] = useState('');
  const [btnName, setBtnName] = useState('');
  const [nextPage, setNextPage] = useState('');
  // const [onClickFu, setOnclickFn] = useState('');

  //******************************************************
  //初回動作
  React.useEffect(() => {
    setTitleName("Measurement 001");
    setBtnName("to Home");
    setNextPage("/");
    // setOnclickFn(() => {navigate();});
  }, []);

  //******************************************************
  const clickFn = () =>{
    navigate("/")
  }

  //******************************************************
  return (
    <div>
      <Header 
        titleName={titleName} 
        btnName={btnName} 
        nextPage={nextPage}
        btnFn={clickFn}/>

    </div>
  )
}

export default CyberCtrlSysMesurement001
