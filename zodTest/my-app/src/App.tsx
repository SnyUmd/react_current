import "./App.css";
import React, { useState } from "react";
import internal from "stream";
import { z } from "zod";

const age = z.number().min(1, "入力してください").max(200, "200文字以内で入力してください");
const url = z.string().url();

interface FormData {
  name: string;
  email: string;
  message: string;
  test: number;
}


const App: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "n",
    email: "e",
    message: "m",
    test: 1,
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    
<div className="App">
      
<h2>お問い合わせフォーム</h2>


<form onSubmit={handleSubmit}>
    <div>
        <label>
          Name:  
          <input
            type="text" 
            name="name" 
            pattern="[0-9]" 
            value={formData.name} 
            onChange={handleChange}
           />
        </label>
    </div>
    <div>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
    </div>
    
    <div>
        <label>
          Message:
          <textarea name="message" value={formData.message} onChange={handleChange} />
        </label>
    </div>
    <div>
        <button type="submit">Submit</button>
        </div>
      </form>

    </div>

  );
};

export default App;