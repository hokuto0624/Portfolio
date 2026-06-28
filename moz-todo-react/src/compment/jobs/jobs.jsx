import { useState } from 'react'
import './jobs.css'

function App() {
  /*この隙間にconstを定義 start*/

  const stdy =new Date("2026-04-01");
  const tody =new Date();
  const ditime =tody -stdy;
  const jobyears =ditime /(1000*60*60*24*365.25);
  const webst =new Date("2024-04-01");
  const webmoden =new Date("2024-09-01");
  const webdi =tody -webst;
  const webmodi =tody -webmoden;
  const webstyears =webdi /(1000*60*60*24*365.25);
  const webmoyears =webmodi /(1000*60*60*24*365.25);

  // スキル　年数
  const skill_slot =[
    {name:"HTML",year:webstyears},
    {name:"CSS",year:webstyears},
    {name:"javaScript",year:webstyears},
    {name:"PHP",year:webstyears},
    {name:"SQL",year:webmoyears},
    {name:"GA4",year:webmoyears},
    {name:"React",year:webmoyears},
    {name:"C",year:jobyears},
    {name:"java",year:jobyears},
  ]
  /*この隙間にconstを定義 end*/
  return (
    <>
      <h2>スキル</h2>
      <ul>{skill_slot.map((item,index)=>(
        <li key={index}>
          {item.name} {Math.floor(item.year)}年
        </li>
      ))}</ul>
    </>
  )
}

export default App
