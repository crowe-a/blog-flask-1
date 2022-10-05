

from datetime import datetime
import requests

x=None
y=datetime.now()

while True:
    response=requests.get("https://api.blockchain.com/v3/exchange/tickers/BTC-USD")

    atama1=response.json()#jsonla gelen veri dict şeklinde döner
    atama2=atama1["last_trade_price"]
    

    if x!=atama2:
        print(atama2)
        #print(type(atama1))
        print(datetime.now()-y)
        y=datetime.now()
    
        
        x=atama2
    
    


    
