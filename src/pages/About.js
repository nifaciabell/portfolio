import { useEffect, useState } from "react"
import axios from "axios"


function About() {


  const clientId ="260becc4f2cc462baf323ce887f06d30"
  const redirectUri ="http://localhost:3000"
  const authEndpoint = "https://accounts.spotify.com/authorize"
  const responseType ="token"



  const [token, setToken] = useState("")
  const [searchKey, setSearchKey]= useState("")
  const [artists, setArtists] = useState([])

  useEffect (() => {
    const hash = window.location.hash
    let token = window.localStorage.getItem("token")

    if (!token && hash ) {
      token = hash.substring(1).split("&").find(elem=>elem.startsWith("access_token").split("=")[1])

      window.location.hash=""
      window.localStorage.setItem("token", token)
      

    }
setToken(token)


  },[])

  
  const searchArtists = async (e) => {
    e.preventDefault()
    const {data} = await axios.get("https://api.spotify.com/v1/search", {
        headers: {
            Authorization: `Bearer ${token}`
        },
        params: {
            q: searchKey,
            type: "artist"
        }
    })

    setArtists(data.artists.items)
}

const renderArtists = () => {
    return artists.map(artist => (
        <div key={artist.id}>
            {artist.images.length ? <img width={"100%"} src={artist.images[0].url} alt=""/> : <div>No Image</div>}
            {artist.name}
        </div>
    ))
}

  return (
    <div className="App">
    <h1>About Me</h1>
    
    <p>Talented, creative college educated UX Designer and Software Engineer with coding and technical expertise. An avid researcher with a keen eye to detail. Ability to work well with others and independently when performing, designing an end-to-end experience providing a well-developed product. A natural born leader with exceptional communication skills and a can-do attitude. Able to manage multiple priorities while maintaining a calm demeanor when addressing technical solutions.</p>
    <br/>
    <button>Check out my Resume</button>

<br/>
    <a href ={`${authEndpoint} ? client_id=${clientId} & redirect_uri=${redirectUri} & response_type= ${responseType}`}> Login to Spotify to check out my favorite playlist</a>

    {token ?
                    <form onSubmit={searchArtists}>
                        <input type="text" onChange={e => setSearchKey(e.target.value)}/>
                        <button type={"submit"}>Search</button>
                    </form>

                    : <h2>Please login</h2>
                }

                {renderArtists()}

    </div>
  );
}

export default About;