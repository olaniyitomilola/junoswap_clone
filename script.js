var x = document.getElementById("connector");
var coinchange = document.getElementById("tradeswap");
var firstCoin = document.getElementById('firstcoin').innerHTML;
var secondCoin = document.getElementById('secondcoin').innerHTML;

coinchange.addEventListener("click", coinSwap);




//swap the elements in the first coin to the second
function coinSwap (){
    console.log('clicked');
    //console.log(firstCoin);
    //console.log(secondCoin);
    var source = coinchange.getAttribute('src');
    var temp = null;
        
    console.log(source);
     if(source == 'includes/resources/img/up-down.png'){
        coinchange.src = 'includes/resources/img/down-up.png';
        temp = firstCoin;
        document.getElementById('firstcoin').innerHTML = document.getElementById('secondcoin').innerHTML;
        document.getElementById('secondcoin').innerHTML = temp;
        
        } else{
            coinchange.src = 'includes/resources/img/up-down.png';
            temp = firstCoin;
            document.getElementById('secondcoin').innerHTML = document.getElementById('firstcoin').innerHTML;
            document.getElementById('firstcoin').innerHTML = temp;
        }
};