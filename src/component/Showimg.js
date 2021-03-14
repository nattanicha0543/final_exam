import axios from 'axios'
import React, { useState, useEffect } from 'react'
const Showimg = ({ id }) => {
    const [img, setImg] = useState([])
    const clientId = "knkx6tDpdUwiVTOq8XG6XnNlxkute8kpk0I6rEC1q0k"
    const urlimg = "https://api.unsplash.com/users/" + id + "/photos?page=1&query=&client_id=" + clientId; //api

    console.log(id)  //เอาไอดีออกมาดู
    console.log(urlimg) //เอารูปออกมาดูว่ามากี่รูป
    useEffect(() => {
        axios.get(urlimg)
            .then((response) => {
                setImg(response.data); //เก็บค่าไว้ที่ setImg
                console.log(response.data) //เอาค่าออกมาดู
            })
    }, [id]);

    return (
        <>
            <div >
                <div class="row" style={{ marginLeft: "5%", marginRight: "5%" }}>
                    <div className="imag">

                        {img.map((pic) => (     //วนลูปรูปออกมา โดยใช้ตัวแปล pic
                            <>
                                <center><img className="boximg" src={pic.urls.raw} /></center>
                            </>
                         ))}
                    </div>
                </div>

            </div>
        </>
    )
}

export default Showimg
