import React from 'react'
// import { useNavigate } from 'react-router-dom';

// export const Header = ({titleName, btnName, nextPage, btnFn, onClickFu, props}) => {
export const Header = (Props) => {
    // const navigate = useNavigate();
    // const btnLabel = "test"

    return (
        <div style={{background: "lightblue"}}>
            <br/>
            <label>{Props.titleName}</label>
            <br/>
            <br/>
            <button
                id='bntMesurement001'
                onClick={()=>{
                    console.log(`click to ${Props.btnName}`);
                    Props.btnFn();
                }}>
                {Props.btnName}
            </button>
            <br/>
            <br/>
        </div>
    )
}

export default Header