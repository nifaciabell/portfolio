import { useEffect, useState } from "react";
import axios from "axios";
import { Form , Button} from "react-bootstrap";

function About() {
  // console.log(process.env.REACT_APP_CLIENTID)
  const CLIENT_ID = "5faae30233654875974f9949a8ccdab6"
  const REDIRECT_URI = "https://nifaciabellportfolio.netlify.app";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  const [token, setToken] = useState("");
  const [searchKey, setSearchKey] = useState("");
  const [artists, setArtists] = useState([]);

  const getToken = () => {
    let urlParams = new URLSearchParams(window.location.hash.replace("#", "?"));
    let token = urlParams.get("access_token");
    console.log(token)
    return token
  };

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");
    console.log(token)
    // token = getToken();

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }
console.log(token)
    setToken(token);
  }, []);

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  const searchArtists = async (e) => {
    e.preventDefault();
    console.log(token)
    const { data } = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        q: searchKey,
        type: "artist",
      },
    });

    setArtists(data.artists.items);
  };

  const renderArtists = () => {
    return artists.map((artist) => (
      <div key={artist.id}>
        {artist.images.length ? (
          <img width={"100%"} src={artist.images[0].url} alt="" />
        ) : (
          <div>No Image</div>
        )}
        {artist.name}
      </div>
    ));
  };

  return (
    <div className="App">
      <h1>About Me</h1>
      <p>
        Hey! My name is Nifacia Bell (pronounced ni-fay-sha) but most people
        call me Faye. I am a UX engineer a happy union of UX design and Software
        Engineering. I specialize in visual design or front-end development and
        user research. I wanted to specialize in design so that I can use my
        keen eye for the details that often go unnoticed such as the art behind
        colors, shapes, icons, typography and formatting that can completely
        transform the user’s visual experience. Along with my visual designs
        skills I utilize my technical skills to build apps and websites. With
        these two skills I have developed a well- rounded understanding of web
        design. I am still learning and growing every day but you can find
        examples of my recent work on the homepage of my website.
      </p>
      <input type="button" onClick="https://docs.google.com/document/d/1tUshEYrRS2QiLHwxukRorsTsGcPtLIzk/edit?usp=sharing&ouid=118079838531144138977&rtpof=true&sd=true';" value="Go to Resume" />
       {/* <Button>Check out my resume</Button> */}
      <br/>
      <h2>Hobbies & Interests</h2>
      <p>I love music, check out my Spotify API!</p>
      <br />
      <header className="App-header">
        <h1>Spotify Fav Playlists</h1>
        {!token ? (
          <a
            href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
          >
            Login to Spotify
          </a>
        ) : (
          <Button onClick={logout}>Logout</Button>
        )}

        {token ? (
          <Form onSubmit={searchArtists}>
            <input type="text" onChange={(e) => setSearchKey(e.target.value)} />
            <Button type={"submit"}>Search</Button>
          </Form>
        ) : (
          <h6>Please login</h6>
        )}

        {renderArtists()}
      </header>
    </div>
  );
}

export default About;
