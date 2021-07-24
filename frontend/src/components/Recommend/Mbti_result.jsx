import React, { useState, useEffect} from 'react';
import {useLocation} from "react-router-dom"

function Mbtiresult() {
    const data = useLocation();
    console.log(data);
    return(

        <div>
        <h1>당신이 선택한 MBTI : {data.state.mbti}</h1>
        <h1>당신이 선택한 지역 '시' : {data.state.area_si}</h1>
        </div>
    )
}
export default Mbtiresult;