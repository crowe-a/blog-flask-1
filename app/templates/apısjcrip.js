export async function fack2() {
    let response = await fetch('https://api.blockchain.com/v3/exchange/tickers/DOGE-USD');

    let json = await response.json();

    
    
    document.getElementById("dogos").innerHTML=json["last_trade_price"]
    console.log(json["last_trade_price"])
    }
export async function fack3() {
      let response = await fetch("https://api.blockchain.com/v3/exchange/tickers/ETH-USD");

        let json = await response.json();
        
        
    
        document.getElementById("eths").innerHTML = json["last_trade_price"];
        console.log(json["last_trade_price"])
        }
        
export async function fack1() {
    let response = await fetch("https://api.blockchain.com/v3/exchange/tickers/BTC-USD");    
    let json = await response.json();
    document.getElementById("turko").innerHTML = json["last_trade_price"];
    console.log(json["last_trade_price"])
          }          
          
setInterval(fack2,1000)
setInterval(fack3,1000)
setInterval(fack1,1000)



