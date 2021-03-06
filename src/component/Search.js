import React, { useState } from 'react'
import axios from 'axios';
import Post from '../component/Post';
const Search = () => {
    const [photo, setPhoto] = useState([]);
    const [clientId, setClientId] = useState("knkx6tDpdUwiVTOq8XG6XnNlxkute8kpk0I6rEC1q0k")
    const [result, setResult] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(photo);
        const url = "https://api.unsplash.com/search/photos?page=1&query=" + photo + "&client_id=" + clientId;
        axios.get(url) //เป็นตัวเชื่อม api 
            .then((response) => {  //
                console.log(response); //ดึงค่าจาก api มาแล้วเก็บค่าไว้ใน respponse 
                setResult(response.data.results);
            })
    }
    return (
        <>

         {/* knkx6tDpdUwiVTOq8XG6XnNlxkute8kpk0I6rEC1q0k */}

            <div className="container">
                <br />
                <div className="my">
                    Pay respect to the master 
                </div><br /><br />
                <hr />
                <form onSubmit={handleSubmit}>
                    <div class="control" style={{ width: "50%", marginLeft: "25%" }}>
                        <input
                            onChange={(e) => setPhoto(e.target.value)}
                            class="input is-rounded is-hovered"
                            type="text"
                            placeholder="Searchhhh"
                        />
                    </div>
                </form>
            </div>
            <br />
            <Post id={result} />
        </>
    )
}

export default Search
