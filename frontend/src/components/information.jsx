import React, {useState, useEffect} from 'react';
import Alba_rating from "./UserPage/Alba_rating";

import "../css/information.css";

function Information() {


    return(
        <div className="information-con">
            <div className="information-con">
                <div className="point_box">
                    <div className="inner_box">
                        <font1>알바그램</font1><font>이란?</font><p></p>
                        <font>"추천 분야에서 다루어 지지 않은</font>  <fontcolor>아르바이트 직종</fontcolor><font>을</font> <p></p>
                        <fontcolor>사용자의 성향</fontcolor><font>에 따라 추천해주는 플랫폼이다."</font><p></p>
                        <font>개인에게만 포커스가 맞춰져 추천의 폭이 좁은 일반적인 추천시스템과는 달리<p></p>
                        새로운 추천 척도로 현재 20,30대에게 인기가 많은 MBTI(성격 유형 검사)를 제시해<p></p>
                            사용자들에게 흥미유발과 동시에 추천의 폭을 확장시켰다.</font>
                    </div>
                </div>
            </div>
            <div>
                <h1>알바그램 개발자 정보</h1>
                <div className="information-grid">

                    <div className ="item">
                        송현지<p></p>
                        mbti :
                    </div>
                    <div className ="item">
                        이연의<p></p>
                        mbti :
                    </div>
                    <div className ="item">
                        육다빈<p></p>
                        mbti :
                    </div>
                    <div className ="item">
                        김민지<p></p>
                        mbti : ENFP
                    </div>

                </div>
            </div>

        </div>
    );


}
export default Information;