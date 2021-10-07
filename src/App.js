import React, { useState } from 'react'
import './App.css'


function App()
{

  let [title, titleChange] = useState(['평양 냉면 추천' , '소고기 맛집', '돼지고기 맛집'])
  let [good, goodChange] = useState(0)
  let [modal, modalChange] = useState(false)

  const changeTitle = () =>
  {
    const newArray = [...title]
    newArray[0] = '피자 치킨 맛집'
    titleChange(newArray)
  }


  return(
    <div className="App">
      
      <div className="black-nav">
      <div>개발 블로그</div>
    </div>
    <div className="list">
      <h3>{ title[0] } <span onClick={()=> { goodChange(good + 1) }} >👍</span> { good } </h3>
      <p>10월 8일 발행</p>
      <hr/>
    </div>
    <div className="list">
      <h3>{ title[1] }</h3>
      <p>10월 8일 발행</p>
      <hr/>
    </div>
    <div className="list">
      <h3>{ title[2] }</h3>
      <p>10월 8일 발행</p>
      <hr/>
    </div>
    <div className="buttons">
    <button onClick={()=>{modalChange(!modal)}}>버튼</button>
    </div>
    {
      modal === true 
      ? <Modal></Modal> 
      : null
    }
  </div>
  )
}

const Modal = () =>
{
  return(
    <div className="modal">
    <h2>제목</h2>
    <p>날짜</p>
    <p>상세내용</p>
  </div>  
  )
}



export default App;
