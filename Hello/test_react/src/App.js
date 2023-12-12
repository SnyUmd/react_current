import logo from './logo.svg';
import './App.css';
import axios from 'axios'

function App() {
  return (
    <div className="">
      <div className="row justify-content-center mt-5">
        <div className="col-md-4 col-4">
          <label htmlFor="zipCode" className="form-label">郵便番号</label>
          <input type="text" className="form-control" onChange={handleChange} />
        </div>
      </div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-4 col-4">
          <label htmlFor="prefecture" className="form-label">都道府県</label>
          <input type="text" className="form-control" />
        </div>
      </div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-4 col-4">
          <label htmlFor="city" className="form-label">市町村</label>
          <input type="text" className="form-control" />
        </div>
      </div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-4 col-4">
          <label htmlFor="town" className="form-label">町名</label>
          <input type="text" className="form-control" />
        </div>
      </div>
    </div>
  );
}

const handleChange = async (e) => {
  const res = await axios.get('https://api.zipaddress.net/?zipcode=' + e.target.value);
  // const res = await axios.get('https://api.zipaddress.net/?zipcode=8150032');
  console.log(res);
}

export default App;
