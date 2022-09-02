import React from "react";
import signup from "../assets/5130.png";
import './a.css'
export default function Signup() {
  return (
    <div className="signup">
      <div className="container">
        <div className="content">
          <h1 className="sub-title"> ROAD MAP?</h1>
          <h2 className="title">Those of you searching for a Roadmap...</h2>
          <h3 className="description">
           What are you doing with your life? We don’t do that lame shit here! We gave you utility, we gave you some memes, and now you want a road map. Grow up already! anyways.. we have huge plans for launching the MIGHTY MEME MAGAZINE, only exclusively availaible to the best of the best memers in the Memeland. Future drops will always have utility and will not entirely be meme based
We are already working on  artificial intelligence nft drops, more like curated pieces. 
We will be taking into account human emotions on nfts.<h3></h3> The fuck you waiting for then? go hop on our discord and start engaging with the homies asap! THIS IS A LIFE AND DEATH SITUATION!
          </h3>
        <a href="https://twitter.com/memeswillsavenf"  target="_blank"> <button  target="_blank" href="https://twitter.com/memeswillsavenf" onTouchEnd="window.location.href = 'https://twitter.com/memeswillsavenf" style={{fontSize:'25px',fontWeight:'bolder'}}>FOLLOW US ON TWITTER</button> </a>
         <a href="https://www.youtube.com/watch?v=O91DT1pR1ew"  target="_blank"> <button  target="_blank" href="https://www.youtube.com/watch?v=O91DT1pR1ew" onTouchEnd="window.location.href = 'https://www.youtube.com/watch?v=O91DT1pR1ew';" style={{fontSize:'25px',fontWeight:'bolder'}}>GET RICKROLLED</button></a>
        </div>
        <div className="image-container">
          <div className="image1" >
            <img src={signup} alt="home image" style={{width:'80%',height:'100%',marginBottom:'100px',marginTop:'360px'}} className="image65"/>
          </div>
          <div className="ellipse-container">
            <div className="ellipse pink"></div>
            <div className="ellipse orange"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
