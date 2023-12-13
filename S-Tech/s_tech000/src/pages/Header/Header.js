import React from 'react'
// import { useNavigate } from 'react-router-dom';

export const Header = ({titleName, btnName, nextPage, btnFn, onClickFu, statuses}) => {
    // const navigate = useNavigate();
    // const btnLabel = "test"

    return (
        <div style={{background: "lightblue"}}>
            <br/>
            <label>{titleName}</label>
            <br/>
            <br/>
            <button
                id='bntMesurement001'
                onClick={()=>{
                    console.log(`click to ${btnName}`);
                    btnFn();
                }}>
                {btnName}
            </button>
            <br/>
            <br/>
        </div>
    )
}

export default Header