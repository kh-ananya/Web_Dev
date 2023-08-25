import './App.css';
import NavBar from './NavBar';
import HomeCarSouel from './HomeCarSouel';
import ImgCard1 from './ImgCard1';
import imgdata from './imgdata';


const ncard = (val)=>
{
  return <ImgCard1 key={val.id} title = {val.title} imgsrc = {val.imgsrc} desc = {val.desc}/>
}

function App() {
  return ( 
    <div>
    <NavBar/>
    <HomeCarSouel/>
    <div className="row">
    {imgdata.map((val, index) => (                         // here imgdata is a func name.
      <div key={val.id} className="col-md-3">{ncard(val)}</div>
    ))}
  
    </div>
    </div>
  
  );
}

export default App;
