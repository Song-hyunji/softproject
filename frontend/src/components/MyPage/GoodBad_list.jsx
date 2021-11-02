import React, {useState, useEffect} from 'react';
import Mypage from "./MyPage";

import "../../css/mypage.css";
import axios from "axios";
import GoodBadPostings from "../../js/GoodBadPostings" ;

function GoodBad(){

    let email = localStorage.getItem('email');
    let token = localStorage.getItem('token');
    // const [goodList, setGoodList] = useState([]);
    // const [badList, setBadList] = useState([]);
    const [totalList, setTotalList] = useState([]);
    useEffect(()=>{
        axios.get(`/user/userpostinglike/withposting/${email}`,
        {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Token ${token}`
            }
        })
        .then((Response) => {
            setTotalList(Response.data);
            // Response.data.map((i)=> {
            //         if (i.like === 1) {
            //             if(!goodList.includes(i)){
            //                 console.log(goodList.includes(i));
            //                 setGoodList(goodList => [...goodList, i]);
            //             }
            //         } else if (i.like === -1) {
            //             if(!badList.includes(i)) {
            //                 setBadList(badList => [...badList, i]);
            //             }
            //         }
            //     }
            // )
        })
        .catch((Error) => {
            console.log(Error)
        })
    }, []);



    return(
        <div id = "goodBadList">

         <h1>좋아요</h1>
            {totalList.map((i)=>(
                i.like === 1?
                <div className="goodcard" id={i.post_id.id}>
                    <GoodBadPostings
                        id={i.post_id.id}
                        city={i.post_id.city}
                        company={i.post_id.company}
                        county={i.post_id.county}
                        pay={i.post_id.pay}
                        pay_type={i.post_id.pay_type}
                        sub_code={i.post_id.sub_code}
                        subtitle={i.post_id.subtitle}
                        url={i.post_id.url}
                    />
                </div>
                    : <div></div>
            ))
            }

            <br/>
        <h1>싫어요</h1>
            {totalList.map((i)=>(
                i.like === -1?
                <div className="badcard" id={i.post_id.id}>
                    <GoodBadPostings
                        id={i.post_id.id}
                        city={i.post_id.city}
                        company={i.post_id.company}
                        county={i.post_id.county}
                        pay={i.post_id.pay}
                        pay_type={i.post_id.pay_type}
                        sub_code={i.post_id.sub_code}
                        subtitle={i.post_id.subtitle}
                        url={i.post_id.url}
                    />
                </div>
                    :<div></div>
            ))
            }



        </div>

    )
}

export default GoodBad;