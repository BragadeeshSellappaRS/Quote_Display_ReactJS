import React, { useState } from 'react'
import './RandomQuote.css'
import reload_icon from '../Assets/refresh.png'
import share_icon from '../Assets/share.png'

const RandomQuotes = () => {

    let quotes = [];

    async function loadQuoates(){
        const response = await fetch("https://type.fit/api/quotes");
        quotes = await response.json();
    }


    const[quote,setQuote] = useState({
        text: "Try hard, try again, fail hard, fail again, fail better",
        author: "Bragadeesh Sellappa",
    });
    

        const random = () =>{
            const select = quotes[Math.floor(Math.random()*quotes.length)];
            setQuote(select);
        }

        loadQuoates();

  return (
    <div className='container'>
        <div className='box'>
        <div className="quote">
        <h2>QUOTE</h2>
            {quote.text}
        </div>
        <div className="line"></div>
        <div className="bottom">
            <br />
            <hr />
            <br />
        <div className="author">-{quote.author.split(',')[0]}</div>
        <div className="icons">
           
            <img src={reload_icon} alt="" onClick={()=>{random()}}/>
            <img src={share_icon} alt="" />
            </div>
        </div>
        </div>
      

    </div>
  )
}

export default RandomQuotes
