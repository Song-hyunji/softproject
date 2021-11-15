import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
import MbtiArea from "./MbtiArea";
import "../../css/RcmSelect.css";
import "../../css/input_mbti.css"

import {useDispatch, useSelector} from "react-redux";
import {changeArea, changeMbti} from "../../store/modules/area_modules";
import axios from "axios";

function Mbtircm(){

    const dispatch = useDispatch();  //변경사항을 스토어에 반영하기 위해 dispatch 만들어줌

    const {ch_areasi} = useSelector(state=>state.area_modules); //스토어에 있는 값 가져옴
    const {ch_areagu} = useSelector(state=>state.area_modules);
    const {ch_mbti} = useSelector(state=>state.area_modules);

    let areasi = "지역을 선택해주세요";
    let areagu = '';
    //let mbti = "MBTI를 선택해주세요";

    const MBTIMeta = [
    "INFP","INFJ","INTP","INTJ",
    "ISFP","ISFJ","ISTP","ISTJ",
    "ENFP","ENFJ","ENTP","ENTJ",
    "ESFP","ESFJ","ESTP","ESTJ",
    ];

    const MBTIAREA = [
    "서울","경기","인천","강원","대전","세종",
    "충남","충북","부산","울산","경남","경북",
    "대구","광주","전남","전북","제주","전국",
    ];

    const [mbtiArr, setMbtiArr] = useState(Array(16).fill(false));
    const [areaguArr, setAreaguArr] = useState(Array(18).fill(false));

    useEffect(()=>{ //사용자가 가입한 mbti로 초기화
            MBTIMeta.map((m, i)=>
                m === ch_mbti ?
                    setMbtiArr(
                    mbtiArr.map((mbtiA, idx)=>
                        i===idx ? true : false))
                    : ''
            )
    },[])

    const onChangeMbti = (ch_mbti, index) => {
        dispatch(changeMbti(ch_mbti));
        setMbtiArr(
            mbtiArr.map((m, i)=>
                i===index ? true : false)
        )
    }

    const onChangeArea = (ch_areasi, ch_areagu, index) => {
        dispatch(changeArea(ch_areasi, ch_areagu));
        setAreaguArr(
            areaguArr.map((a, i)=>
                i===index ? true : false)
        )
    }

    const onRcmClick = () =>{
        console.log()
    }

    return (
        <div className ="mb_ti-container">
            <div className="mbtiTitle">MBTI로 아르바이트 추천받기</div>
            <div className = "con">
            <div align="center">   {/*mbti 선택*/}
                <div id="selMbti_inner">
                    <div id="tb-mbti">
                     {MBTIMeta.map((mbti, index) =>
                         <div className={`mbti_Select${mbtiArr[index]?' checked' : ''}`} onClick={()=>onChangeMbti(mbti, index)} name={"mbtichk"} value={mbti}>{mbti}</div>
                     )
                    }
                    </div>
                </div>
            </div>
            </div>

            <div className="areaSelectDiv">
            <div className="area" id = "inner" align="center">  {/*지역 선택*/}
                <div id="td-areasi">
                <table >
                    <tr>
                    {MBTIAREA.map((area, index) =>
                        (<td className ={`areasiTable${areaguArr[index]?' select':''}`}>
                            <label><input type="radio" className="areasiSelect" name={"areasi"} value={area}
                                onChange={()=>onChangeArea(area,'', index)}/> <span>{area}</span> </label></td> ))
                    }
                    </tr>
                     </table>
                </div>
                        <MbtiArea area_si={ch_areasi}/>
                </div></div>

                {ch_areagu !== '' ?
                 <div className="selectedArea">
                     <span className="selectedAreaFont">{ch_areasi} {ch_areagu}</span>
                 </div>
                    :''}

                <Link to={{
                    pathname: "/mbti_result",
                    state:{
                    check:"1",}

                }}>
                    <button className="button_primary"  onClick={onRcmClick}> 추천받기</button>
                </Link>

    </div>
    );

}
export default Mbtircm;