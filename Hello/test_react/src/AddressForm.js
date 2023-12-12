//https://okapy-blog.com/reports/address_form/1


import React from 'react'
import axios from 'axios'
// import usestate from 'usestate';
import { useState } from "react";


export const AddressForm = () => {
  // const [prefecture, setPrefecture] = usestate("");
  const [pref, setPref] = useState("");
  const [city, setCity] = useState("");
  const [town, setTown] = useState("");

  const handleChange = async (e) => {
    var input = document.getElementById("txb_code");
    if(input.value.length === 7){
      const res = await axios.get('https://api.zipaddress.net/?zipcode=' + e.target.value);
      console.log(res);
      if(res.data.code === 200) {
        setPref(res.data.data.pref);
        setCity(res.data.data.city);
        setTown(res.data.data.town);
      }
    }
  }

  return (
    <div className="">
      <div className="row justify-content-center mt-5">
        <div className="col-md-4 col-4">
          <label htmlFor="zipCode" className="form-label">郵便番号</label>
          <input type="text" id='txb_code' className="form-control" onChange={handleChange} />
        </div>
      </div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-4 col-4">
          <label htmlFor="prefecture" className="form-label">都道府県</label>
          <input type="text" className="form-control" disabled='true' value={pref} />
          {/* <input type="text" className="form-control" disabled="true" /> */}
        </div>
      </div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-4 col-4">
          <label htmlFor="city" className="form-label">市町村</label>
          <input type="text" className="form-control" disabled='true' value={city}/>
        </div>
      </div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-4 col-4">
          <label htmlFor="town" className="form-label">町名</label>
          <input type="text" className="form-control" disabled='true' value={town}/>
        </div>
      </div>
    </div>
  )
}



export default AddressForm;

