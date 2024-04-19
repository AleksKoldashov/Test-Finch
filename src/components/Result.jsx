

export default function Result({result, result2}) {
for(let i =0; i<result.length;i++){
    console.log(result[i]);
}
    return(
        <div>
          {result.length===2 && result2.length===0 ? <div>Ого, вы выиграли! Поздравляем! совпало 2/0</div>
          :
          result.length===2 && result2.length===1 ? <div>Ого, вы выиграли! Поздравляем! совпало 2/1</div>
          :
          result.length===1 && result2.length===1 ? <div>Ого, вы выиграли! Поздравляем! совпало 1/1</div>
          :
          result.length===0 && result2.length===1 ? <div>Ого, вы выиграли! Поздравляем! совпало 0/1</div>
          :
          <div>Крути.......</div>
    }
        </div>
    )
}