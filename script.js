"use strict";

document.getElementById("btn").addEventListener("click",function(){
    var curr = document.getElementById("i1").value;
    var xmlhttp = new XMLHttpRequest();
    console.log(xmlhttp.readyState);
    console.log(xmlhttp.status)
    
    xmlhttp.onreadystatechange = function(){
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
   var res = JSON.parse(xmlhttp.responseText);
    
   if(res){
    var details ='';
    res.forEach(function(v,i){
        if(curr == v.id){
            var name = v.name;
            var sym = v.symbol;
            var imgtag = v.image;
            var price = v.current_price; 
            var marcap = v.market_cap;
            var high24 = v.high_24h;
            var low24 = v.low_24h;
            var  change = v.price_change_24h;

            details+=`
            <p>Name : ${name}</p>
             <p>Symbol : ${sym}</p>
            <img src="${imgtag}" alt="">
            <p>Price : ${price}</p>
             <p>Market Cap : ${marcap}</p>
              <p>Heighest in 24H : ${high24}</p>
               <p>Lowest in 24H: ${low24}</p>
                <p>Price Change in 24H : ${change}</p>
            `;
        }else{
            document.getElementById("coin").innerHTML = `<p>Enter correct coin name</p>`
        }
    });
    document.getElementById("coin").innerHTML = details;
   
    }else{
        document.getElementById("coin").innerHTML = `<p>Data not present</p>`
    }

    }else{
        document.getElementById("coin").innerHTML = `<p>Unable to fetch</p>`
    }

    }


    xmlhttp.open("GET","https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr",true);
    xmlhttp.send();
})