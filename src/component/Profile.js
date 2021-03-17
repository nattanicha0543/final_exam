import React, { useState, useEffect } from 'react'
import axios from 'axios'
const Profile = ({ id }) => {
    const [result, setResult] = useState([]) 
    const clientId = "knkx6tDpdUwiVTOq8XG6XnNlxkute8kpk0I6rEC1q0k" //aserkey ของอันสแปส
    const urlacc = "https://api.unsplash.com/search/users?page=1&query=" + id + "&client_id=" + clientId; //ตั้งตัวแปล รับไอดีที่พอบมา 

    useEffect(() => {
        axios.get(urlacc)  //ตัวเชื่อม api จากบรรทัดที่ 6
            .then((response) => {
                setResult(response.data.results);   //เก็บค่าไว้ที่ result
                console.log(response.data.results)
            })
       }, [id]); //คือค่าที่รับเข้ามา ให้มันทำซ้ำถ้ามีการเปลี่ยนแปลงจากไอดี

    return (
        <>
            <br />
            <div className="container" >
                {result.map((account) => (
                    <>
                        <div class="card" >
                            <div class="card-content">
                                <div class="media">
                                    <div class="media-left">
                                        <figure class="image is-128x128">
                                            <img class="is-rounded" src={account.profile_image.large} />
                                        </figure>
                                    </div>
                                    <div class="content" style={{ marginTop: "2%" }}>
                                        <label class="title ">{account.username}</label> &emsp;
                                        <span class="button is-small is-static is-rounded">message</span><p></p>
                                        <label class=""><b>{account.total_photos} Post</b></label> &emsp;
                                        <label class=""><b>12 m followers </b></label> &emsp;
                                        <label class=""><b> 30 following</b> </label><br />
                                        <label class=""><b> Portfolio  </b>{account.links.portfolio}</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ))}
                <hr />
            </div>
        </>
    )
}
export default Profile
