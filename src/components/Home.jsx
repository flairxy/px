import React from "react";
import home from "../assets/4895.png";
import './a.css';
export default function Home({mint, totalMinted, isProcesing}) {
  return (
    <div className="home">
      <div className="container"  >
        <div className="content">
          <h1 className="sub-title">Memes Will Save NFTs</h1>
          <h2 className="title">Say no to the crumbling bear market</h2>
          <h3 className="description">
          As the crypto market pulverizes, 7777 memes make an oath to revive the dead NFT market and make you laugh tf out. Fuck rug pulls, MEME MAGAZINE COMING!
#MemeIT
          </h3>
          <h2 className="title">Say yes to the FIRST EVER NFT MEME MAGAZINE</h2>
      

          <h3 className="title">MINTED: <span style={{ color: "#ff3998" }}>{totalMinted}</span>/7777 </h3>
          <button disabled={isProcesing} onClick={mint} style={{fontSize:'18px',fontWeight:'bolder', zIndex:1000}}> {isProcesing ? 'Procesing...' : ' MEME IT'}</button>
        </div>
        <div className="image-container" >
          <div className="image1" >
            <img src={home} alt="home image" style={{width:'80%',marginBottom:'100px',height:'100%'}} id="image2"/>
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
