import React, { useState } from 'react'
import './App.css'


function App()
{

  let [titleSet, titleChange] = useState(['평양 냉면 추천' , '소고기 맛집', '돼지고기 맛집'])
  let [goodSet, goodChange] = useState([0,0,0])
  let [inputSet , inputChange] = useState('')
  let [modal, modalChange] = useState(false)
  let [clickTitle, clickTitleChange] = useState(0)


  const changeInput = (i) =>
  {
    const newArray = [...goodSet]
    newArray[i]++
    goodChange(newArray)
  }

 {/* 반복문 함수를 만들어 사용하는 경우 */}

  const htmlTitle = () =>
  {
    const Array = [];
    for (let i = 0; i < 3; i++) 
    {
      Array.push(<div>안녕</div>)
    }
    return Array
  }

  return(
    <div className="App">
      <div className="black-nav">
      <div>개발 blog</div>
    </div>

    {/* 반복문  map을 사용할 것 */}

    {
      titleSet.map((value, Point)=>
      {
        return(
          <div className="list" key='{Point}'>
          <h3 onClick={()=>{clickTitleChange(Point)}}>{ value } </h3>
          <span onClick={()=> {changeInput(Point) }} >👍</span> { goodSet[Point] } 
          <p>10월 8일 발행</p>
            { htmlTitle() }
          <hr/>
        </div>
        )  
      })
    }

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
