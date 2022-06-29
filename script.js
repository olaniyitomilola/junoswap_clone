var x = document.getElementById("connector");
var coinchange = document.getElementById("tradeswap");
coinchange.addEventListener("click", coinSwap);
var mode = document.getElementById
var title = document.querySelector('title');

title.textContent = 'JunoSwap | Swap';

//swap the elements in the first coin to the second
let firstCoin = document.getElementById('firstcoin');
let secondCoin = document.getElementById('secondcoin');


function coinSwap (){
  
   // var temp = null;
    let source = coinchange.getAttribute('src');

     if(source == 'includes/resources/img/up-down.png'){
            coinchange.src = 'includes/resources/img/down-up.png';
            let  temp = firstCoin.innerHTML;
            //firstCoin.innerHTML = document.getElementById('secondcoin').innerHTML;
            firstCoin.insertBefore(selectcoin,firstCoin.children[0]);
            firstCoin.insertBefore(coindropdown2,firstCoin.children[0]);
            secondCoin.insertBefore(coinselect,secondCoin.children[0]);
            secondCoin.insertBefore(coindropdown,secondCoin.children[0]);


            //temp = null;
            
        
        } else{
            coinchange.src = 'includes/resources/img/up-down.png';
            //let  temp = secondCoin.innerHTML;
            //secondCoin.innerHTML = document.getElementById('firstcoin').innerHTML;
            //firstCoin.innerHTML = temp;
            //temp = null;
            secondCoin.insertBefore(selectcoin,secondCoin.children[0]);
            secondCoin.insertBefore(coindropdown2,secondCoin.children[0]);
            firstCoin.insertBefore(coinselect,firstCoin.children[0]);
            firstCoin.insertBefore(coindropdown,firstCoin.children[0]);
        }
};


//lightmode and darkmode toggle

var toggleimage = document.getElementById('lightswitch');
var toggletext = document.getElementById('toggletext');
var controller = document.getElementById('controltext');

toggleimage.addEventListener('click',imageToggle);

function imageToggle(e){
    if(toggleimage.getAttribute('src')=='includes/resources/img/light.png'){
        toggleimage.src = 'includes/resources/img/dark.png';
        toggletext.textContent = 'Dark mode';
       // document.body.style.backgroundColor = 'black';
       // document.body.style.color = 'white';
    } else{
        toggleimage.src = 'includes/resources/img/light.png';
        toggletext.textContent = 'Light mode';
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
    }
}
//switch active class among navs

let activenav = document.querySelectorAll('#navlink');
let operations = document.querySelector('.operations-panel');
let activepanel = document.querySelectorAll('#opanel');

for(let x = 0; x<activenav.length; x++){
    //add eventlistener
    activenav[x].addEventListener('click',function(){
        let i = 0;

        //change all classname to empty onclick
        while(i<activenav.length){
            activenav[i++].className = '';
        }
        for(let i = 0; i<activepanel.length;i++){
            if(activepanel[i].className ==''){
                activepanel[i].className = 'hidepanel';
            }
        }
        activenav[x].className = 'active';
        activepanel[x].className = '';
        let ti = activenav[x].textContent.trim();
        //close menu tab on click
        menu.className = '';
        menubtn.className = '';
        title.textContent = 'Junoswap | ' + ti;
    })
    
}

//populate menu;
let menubtn = document.getElementById('dropdownMenu');
let menu = document.getElementById('menu-part');
let menupanel = document.querySelector('.menu-panel');
let container = document.querySelector('.container');
//check mediaquery
var screenSize = window.matchMedia("(max-width:600px)");

function screenssSize(x){
    
    if(x.matches){
        //menu button should remove the open classname, 
        //regardless of what the last toggle action before screenchange is
        menubtn.className = '';
        menu.className = '';
    } else{
        menu.className = " ";
        var menu_part = document.querySelector(".container #menu-part");
        //once you add an element to another parent, it gets removed
        //from the other parent. insertBefore works like a subtitute        
        var footpart = document.getElementById("foot-part");
        footpart.parentNode.insertBefore(menu_part,footpart);
       
    }
}
screenSize.addListener(screenssSize);



//instead of creating a new div here, I should display the menu part,
//remove if from menu panel and add as a sibling to menu panel
/*var undermenu = document.createElement('div');
undermenu.className = 'mobiledropdown';

undermenu.innerHTML = document.getElementById('menu-part').innerHTML;
operations.parentNode.insertBefore(undermenu,operations); */

menubtn.addEventListener('click',dropdown);
//document.querySelector('.openmenu').innerHTML = "X";
function dropdown(e){
menu.classList.toggle('openmenu');
menubtn.classList.toggle('open');
operations.parentNode.insertBefore(menu,operations);
 
}

//dropdown of coinlist on swap page

let swapvalue = document.getElementById('swapvalue');
let coinvalue = document.getElementById('coinvalue');
let coinselect = document.getElementById('coinselect');
let selectcoin = document.getElementById('selectcoin');


let coindropdown = document.getElementById('coinlist');
let coindropdown2 = document.getElementById('coinlist2');
let listclose = document.getElementById('listclose');
let listclose2 = document.getElementById('listclose2');

window.addEventListener('click',function(e){
   // console.log(e.target);
})

coinselect.addEventListener('click',dropIt);
listclose.addEventListener('click',closeit);
listclose2.addEventListener('click',closeit);


function dropIt (e){

    if(this==coinselect){
        this.style.display = 'none';
        coindropdown.style.display = 'block';
        swapvalue.style.display = 'none';
    }
    if(this==selectcoin){
        this.style.display = 'none';
        coindropdown2.style.display = 'block';
        coinvalue.style.display = 'none';

    }
}
function closeit(e){
    if(e.target == listclose){
        coindropdown.style.display = 'none';
        coinselect.style.display ='flex';
        swapvalue.style.display = 'block';
    }
    
    if(e.target == listclose2){

        coinvalue.style.display = 'flex';
        selectcoin.style.display = 'flex';
        coindropdown2.style.display = 'none';
    }

}
selectcoin.addEventListener('click',dropIt);


//close the dropdownlist when there is a click outside it

window.addEventListener('mouseup', function(e){

    if(e.target != coindropdown && e.target.parentNode !=coindropdown){
      //  closeit();
    }
}) 
let coinname = document.getElementById('coinname');
let coinimg = document.getElementById('coinfo_img');
//change the textcontent in firstcoin to select

let eachcoin = document.querySelectorAll('#coinlist #allcoins .eachcoin');
let eachcoin2 = document.querySelectorAll('#coinlist2 #allcoins .eachcoin');


for(let x = 0;x<eachcoin.length;x++){
    eachcoin[x].addEventListener("click",function(e){
        let i = 0;
        while (i<eachcoin.length){
            eachcoin[i++].id = '';
        }
        eachcoin[x].id = 'active';
        //set the element in coininfo
        coinimg.src = eachcoin[x].firstElementChild.firstElementChild.src;
        coinname.textContent = eachcoin[x].firstElementChild.lastElementChild.firstElementChild.textContent;
        //closeit();
        coindropdown.style.display = 'none';
        coinselect.style.display ='flex';
        swapvalue.style.display = 'block';
        let coinname2 = document.querySelector('#selectcoin #coininfo #nameandbalance #coinname');


        if(convert){
            exchangeValue(coinname2);

        }
     //   inputconverter;
        // console.log(coinname.textContent = eachcoin[x].children[1].firstElementChild.textContent);
    });     
}
let coininfo2 = document.querySelector('#selectcoin #coininfo');

for(let x = 0;x<eachcoin2.length;x++){
    eachcoin2[x].addEventListener("click",function(e){
        let i = 0;
        while (i<eachcoin2.length){
            eachcoin2[i++].id = '';
        }
        eachcoin2[x].id = 'active';
        convert();
       coininfo2.innerHTML = coinimg.parentElement.parentElement.innerHTML;
       let coinimg2 = document.querySelector('#selectcoin #coininfo #coinfo_img');
       let coinname2 = document.querySelector('#selectcoin #coininfo #nameandbalance #coinname');

       coinimg2.src = eachcoin2[x].firstElementChild.firstElementChild.src;
       coinname2.textContent = eachcoin2[x].firstElementChild.lastElementChild.firstElementChild.textContent;
       //the next two lines moved into this because I dont know how to go about the reading
       //of the text in coinname2 from the global. bna null e dey bring
       exchangeValue(coinname2);
     //  inputconverter();

       // closeit();
       coinvalue.style.display = 'flex';
       selectcoin.style.display = 'flex';
       coindropdown2.style.display = 'none';
        // console.log(coinname.textContent = eachcoin[x].children[1].firstElementChild.textContent);
    });     
} 

//now do conversion of input in the swap

let coinrate = {
    'osmo' : 0.72,
    'juno' : 2.22,
    'atom' : 5.94,
    'raw' : 0.02,
    'stars': 0.0187,
    'huahua': 0.000027,
    'btsg' : 0.011365,
    'xprt' : 0.90994,
    'cdmx': 0.185566,
    'akash' : 0.201856,
    'scrt':0.89943,
    'neta' : 39.61023,
    'rac' : 0.060601,
    'marble' : 3.454504,
    'hope': 5.624821,
    'dig' : 0.000234,
    'canlab': 0.022397,
    'bitcanna': 0.00532,
    'ngm': 0.680325,
    'comdex' : 0.8345,
    'eeur': 1,
    'usdc': 1

}
let converted;
var $firstcoinvalue = coinname.textContent.toLowerCase().trim();

//exchange value
function exchangeValue(coinname2){
    let twocoins = document.getElementById('coinconversion');
    var firstcoinvalue , secondcoinvalue;
    var $secondcoinvalue = coinname2.textContent.toLowerCase().trim();
    firstcoinvalue = coinrate[$firstcoinvalue];
    secondcoinvalue = coinrate[$secondcoinvalue];

    converted = firstcoinvalue/secondcoinvalue;
    var convert2dp = converted.toFixed(2);
    var cointexts = '1 ' + coinname.textContent + '= ' + convert2dp + ' '+ coinname2.textContent;
    
    twocoins.textContent = cointexts;
    
    inputconverter();

    
}

let conversion = document.getElementById('coinundex');
function inputconverter(e){
    if(conversion.style.display == 'block'){
        var estimate = 'Swap estimate = $' + (swapinput.value * coinrate[$firstcoinvalue]).toFixed(2);
        dollarvalue.textContent = estimate; 
        if(swapinput.value * converted > 0) {
            coinswapvalue.innerText =  (swapinput.value * converted).toFixed(2);

        } else{
            coinswapvalue.innerText = 0;
        }
    }
}
function convert(e){
    conversion.style.display = 'block';
}

let swapinput = document.getElementById('swapamount');
let coinswapvalue = document.getElementById('coinvalue');
let dollarvalue = document.getElementById('exchangevalue');

swapinput.addEventListener('keyup',inputconverter );
 




