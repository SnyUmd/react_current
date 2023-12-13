import React from 'react'
import { useNavigate } from 'react-router-dom';

// export const Header = ({titleName, btnName, nextPage, btnFn, onClickFu, props}) => {
export const Header = (props) => {
    //props********
    //titleName..
    //btnName....
    //nextPage...
    //btnFn......ボタンクリック時の動作関数
    const navi = useNavigate()

    return (
        <div style={{background: "lightblue"}}>
            <br/>
            <label>{props.titleName}</label>
            <button
                id='bntMesurement001'
                onClick={()=>{
                    console.log(`click to ${props.btnName}`);
                    // props.btnFn();
                    navi(props.nextPage)
                }}>
                {props.btnName}
            </button>
            <br/>
            <br/>
        </div>
    )
}

export default Header