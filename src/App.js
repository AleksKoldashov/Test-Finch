import { useState } from 'react';
import './App.css';
import wizard from './img/wizard.svg'
import Result from './components/Result';

const dataButton = [
  {id:1, BagColr:'white', }, {id:2, BagColr:'white', }, {id:3, BagColr:'white', },
  {id:4, BagColr:'white', }, {id:5, BagColr:'white', }, {id:6, BagColr:'white', },
  {id:7, BagColr:'white', }, {id:8, BagColr:'white', }, {id:9, BagColr:'white', },
  {id:10, BagColr:'white', }, {id:11, BagColr:'white', }, {id:12, BagColr:'white', },
  {id:13, BagColr:'white', }, {id:14, BagColr:'white', }, {id:15, BagColr:'white', },
  {id:16, BagColr:'white', }, {id:17, BagColr:'white', }, {id:18, BagColr:'white', },
  {id:19, BagColr:'white', },
]

const dataButton2=[
  {id:1, BagColr:'white', }, {id:2, BagColr:'white', }, 
]
function App() {

  const[bigArr, setbigArr] = useState([])
  const[litlArr, setLitlArr] = useState([])
  const[aque, setAque] = useState('rgba(255, 210, 5, 1)')
  const [result, setResult] = useState([])
  const [result2, setResult2] = useState([])

console.log('result',result);
console.log('result2',result2);
const Random=()=>{

  const RandomNumber2=()=>{
    const random = [] 
    for(let i = 0; i<1;i++){
        let rnd = Math.floor(Math.random()*(2))
        random.push(rnd)  
    }
      const result = []
      for(let i =0; i<bigArr.length;i++){
        for(let k =0; k<random.length; k++){
          if(random[k]===bigArr[i]){
              result.push(bigArr[i])
          }
      }
      }
    setResult2(result)
    } 
    RandomNumber2()
  const RandomNumber=()=>{
  const random = [] 
  for(let i = 0; i<2;i++){
      let rnd = Math.floor(Math.random()*(19))
      random.push(rnd+1)  
  }
    const result = []
    for(let i =0; i<bigArr.length;i++){
      for(let k =0; k<random.length; k++){
        if(random[k]===bigArr[i]){
            result.push(bigArr[i])
        }
    }
    }
  setResult(result)
  }
  RandomNumber()
}



const addNum2=(str)=>{

  const res=dataButton2.find((item)=>item.id===str.id);
  
  if(litlArr.length<1){
    let x = 0
    for(let i=0;i<litlArr.length;i++){
        x=litlArr[i]
    }
    console.log('x2',x);
    if(str.id!==x){
      console.log('work2');
      setLitlArr([...litlArr, str.id]);  
      setAque(res.BagColr=aque) 
    } 
  }else{
    alert('уже много цифр2');
  }
   return bigArr
  }
const addNum=(str)=>{

const res=dataButton.find((item)=>item.id===str.id);

if(bigArr.length<9){
  let x = 0
  for(let i=0;i<bigArr.length;i++){
      x=bigArr[i]
  }
  console.log('x',x);
  if(str.id!==x){
    console.log('work');
    setbigArr([...bigArr, str.id]);  
    setAque(res.BagColr=aque) 
  } 
}else{
  alert('уже много цифр');
}
 return bigArr
}

console.log(bigArr);

  return (
   <div className="App">
  <div className='game'>
    <div className='tabel'>
      <div className='header'>
        <h3>Билет 1</h3>
        <button><img alt='wizard' src={wizard}/></button>
      </div>
      <div className='desc1'>
        <h3>Поле 1</h3>
        <h4 style={{marginLeft:'10px'}}>Отметьте 8 чисел.</h4>
      </div>
      <div className='field1'>
        {dataButton.map((item)=><button className='btn' style={{backgroundColor: item.BagColr}} onClick={()=>{addNum(item)}}>{item.id}</button>)}
      </div>
      <div className='desc1'>
      <h3>Поле 2</h3>
        <h4 style={{marginLeft:'10px'}}>Отметьте 8 чисел.</h4>
      </div>
      <div className='field2'>
        {dataButton2.map((item)=><button className='btn' style={{backgroundColor: item.BagColr}} onClick={()=>{addNum2(item)}}>{item.id}</button>)}
      </div>
      <button className='rand_btn' onClick={()=>{Random()}}>Показать результат</button>
    </div>
  </div>
  <div className='result'>
    <div className='tabel'>
      <Result result={result} result2={result2}/>
    </div>
  </div>
   </div>
  );
}

export default App;


