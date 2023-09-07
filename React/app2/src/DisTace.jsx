import React, { useState } from 'react'
import './DisTance.css'

const DisTace = () => { 
  const [Km,setKm] = useState('');
  const [Me,setMe] = useState('');
  const [Cm,setCm] = useState('');
  const [Mm,setMm] = useState('');

  const HandleKiloMetres = (e) =>
  {
      const value = e.target.value;
      setKm(value)
      setCm(ktocof(value))
      setMe(ktomof(value))
      setMm(ktommof(value))
  }
  const HandleMetres = (e) =>
  {
    const value = e.target.value;
      setMe(value)
      setCm(mtocof(value))
      setKm(mtokof(value))
      setMm(mtomof(value))
  }
  const HandleCentiMetres = (e)=>
  {
    const value = e.target.value;
    setCm(value)
    setMm(ctommof(value))
    setKm(ctokof(value))
    setMe(ctomof(value))
  }
  const HandleMiliMetres = (e) =>
  {
    const value = e.target.value;
    setMe(mmtomof(value))
    setCm(mmtocof(value))
    setKm(mmtokof(value))
    setMm(value)
  }
  const ktocof = (Km)=>
  {
         return(Km*100000)
         
  }
  const ktomof = (Km) =>
  {
    return(Km*1000)
    
  }
  const ktommof = (Km) =>
  {
    return(Km*1000000)
    
  }
  const mtokof = (Me) =>
  {
    return(Me/1000)
    
  }
  const mtocof = (Me) =>
  {
    return(Me*100)
    
  }
  const mtomof = (Me) =>
  {
    return(Me*1000)
    
  }
  const ctokof = (Cm) =>
  {
    return(Cm/100000)
  }
  const ctomof = (Cm) =>
  {
    return(Cm/100)
    
  }
  const ctommof = (Cm) =>
  {
    return(Cm*10)
    
  }
  const mmtokof = (Mm) =>
  {
    return(Mm/1000000)
    
  }
  const mmtocof = (Mm) =>
  {
    return(Mm/10)
    
  }
  const mmtomof = (Mm) =>
  {
    return(Mm/1000)
  }
  return (
    <div>
      <label>Distance Convertor :</label>
      <div className='box'> 
      <label>Choose In which you have the distance</label>
      <div> 
      <label>In Kilometres : </label>
      <input name='dis' value={Km} onClick={HandleKiloMetres} type='radio' placeholder='Km'/> 
      </div>
      <div>
      <label>In Metres : </label>
      <input name='dis' value={Me} onClick={HandleMetres} type='radio' placeholder='m'/> 
      </div>
      <div>
      <label>In Centimetres : </label>
      <input name='dis'value={Cm} onClick={HandleCentiMetres} type='radio' placeholder='cm'/> 
      </div>
      <div>
      <label>In Milimetres : </label>
      <input name='dis' value={Mm} onClick={HandleMiliMetres} type='radio' placeholder='mm'/>
      </div>
      <input type='text' placeholder='Enter the value'/>
      <label>Choose In which you want the distance</label>
      <div> 
      <label>In Kilometres : </label>
      <input name='val' value={Km} onClick={HandleKiloMetres} type='radio' placeholder='Km'/> 
      </div>
      <div>
      <label>In Metres : </label>
      <input name='val'value={Me} onClick={HandleMetres} type='radio' placeholder='m'/> 
      </div>
      <div>
      <label>In Centimetres : </label>
      <input name='val' value={Cm} onClick={HandleCentiMetres} type='radio' placeholder='cm'/> 
      </div>
      <div>
      <label>In Milimetres : </label>
      <input name='val' value={Mm} onChange={HandleMiliMetres} type='radio' placeholder='mm'/>
      </div>
      <input type='text' placeholder='Enter the value'/>
      </div>
      
    </div>
  )
}

export default DisTace
