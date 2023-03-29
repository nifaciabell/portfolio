// import HeadShot from './HeadShot.png';


function About() {


  const clientId ="260becc4f2cc462baf323ce887f06d30"
  const redirectUri ="http://localhost:3000"
  const authEndpoint = "https://accounts.spotify.com/authorize"
  const responseType ="token"
  

  return (
    <div className="App">
    <h1>About Me</h1>
    {/* <img src={HeadShot} /> */}

    <p>Talented, creative college educated UX Designer and Software Engineer with coding and technical expertise. An avid researcher with a keen eye to detail. Ability to work well with others and independently when performing, designing an end-to-end experience providing a well-developed product. A natural born leader with exceptional communication skills and a can-do attitude. Able to manage multiple priorities while maintaining a calm demeanor when addressing technical solutions.</p>
    <br/>
    <button>Check out my Resume</button>

<br/>
    <a href ={`${authEndpoint} ? client_id=${clientId} & redirect_uri=${redirectUri} & response_type= ${responseType}`}> Login to Spotify to check out my favorite playlist</a>

    </div>
  );
}

export default About;