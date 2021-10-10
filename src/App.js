import React, { useState } from 'react'
import './App.css'


function App()
{

  let [titleSet, titleChange] = useState(['평양 냉면 추천' , '소고기 맛집', '돼지고기 맛집'])
  let [goodSet, goodChange] = useState([0,0,0])
  let [modal, modalChange] = useState(false)
  let [inputSet , inputChange] = useState('')
  let [clickTitle, clickTitleChange] = useState(0)

  let [inputData, inputDataChange] = useState('')
  const changeInput = (i) =>
  {
    const newArray = [...goodSet]
    newArray[i]++
    goodChange(newArray)
  }

 {/* 반복문 함수를 만들어 사용하는 경우 */}

  // const htmlTitle = () =>
  // {
  //   const Array = [];
  //   for (let i = 0; i < 3; i++) 
  //   {
  //     Array.push(<div>안녕</div>)
  //   }
  //   return Array
  // }

  return(
    <div className="App">
      <div className="black-nav">
      <div>개발 blog</div>
    </div>

    {/* 반복문  map을 사용할 것 */}

    {
      titleSet.map((value, i)=>
      {
        return(
          <div className="list" key='{i}'>
          <h3 onClick={()=>{clickTitleChange(i)}}>{ value } </h3>
          <span onClick={()=> {changeInput(i) }} >👍</span> { goodSet[i] } 
          <p>10월 8일 발행</p>
          <hr/>
        </div>
        )  
      })
    }


    <div className='inputBox'>
      <input placeholder="입력해주세요" onChange={(e)=>{inputDataChange(e.target.value)} }></input>

      <button onClick={()=>{
      const titleNewArray = [...titleSet] 
      titleNewArray.unshift(inputData)
      titleChange(titleNewArray)
      }}>저장</button>
    </div>

    <div className="buttons">
    <button onClick={()=>{modalChange(!modal)}}>열고닫기</button>
    </div>

    {/* 조건문  삼항연산자로 사용할 것 */}
    {
      modal === true 
      ? <Modal titleSet={titleSet} clickTitle ={clickTitle}></Modal> 
      : null
    }
  </div>
  )
}

const Modal = (props) =>
{
  return(
    <div className="modal">
    <h2>{props.titleSet[props.clickTitle]}</h2>
    <p>날짜</p>
    <p>제목</p>
    <p>상세내용</p>
  </div>  
  )
}



export default App;
