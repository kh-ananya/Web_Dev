import React, { useState } from 'react'

const TemperAture = () => {  
    const [Celcius,SetCelcius] = useState('0');
    const [Farenheit,setFarenheit] = useState('32'); 
    const HandleCelcius = (e) =>
    {    const value = e.target.value;
        SetCelcius(value);
        setFarenheit(ctof(value));
    };
    const HandleFarenheit = (e) =>
    {
          const value = e.target.value;
          setFarenheit(value);
          SetCelcius(ftoc(value));
    }
    const ftoc =(Farenheit) =>
    {
        return (Farenheit -32) * 5/9;
    }
    const ctof = (Celcius) =>
    {
        return (Celcius *1.8 +32)
    }
  return (
    <div>
      <div>Temperature Convertor :</div>
      <div>
         <label>Celcius : </label>
         <input type='text' value={Celcius} placeholder='.C' onChange={HandleCelcius}/>
         </div>
         <div>
      <label>farenheit : </label>
         <input type='text' value={Farenheit} placeholder='F' onChange={HandleFarenheit} />
      </div>
    </div>
  )
}

export default TemperAture;