var x = document.getElementById("connector");
var coinchange = document.getElementById("tradeswap");
coinchange.addEventListener("click", coinSwap);
var mode = document.getElementById
var title = document.querySelector('title');

title.textContent = 'JunoSwap | Swap';

//swap the elements in the first coin to the second
var firstCoin = document.getElementById('firstcoin').innerHTML;
var secondCoin = document.getElementById('secondcoin').innerHTML;

function coinSwap (){
    console.log('clicked');
    //console.log(firstCoin);
    //console.log(secondCoin);
    var source = coinchange.getAttribute('src');
    var temp = null;
        
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


//lightmode and darkmode toggle

var toggleimage = document.getElementById('lightswitch');
var toggletext = document.getElementById('toggletext');
var controller = document.getElementById('controltext');

toggleimage.addEventListener('click',imageToggle);

function imageToggle(e){
    console.log(e.target);
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
 /* let menuStyling =  undermenu.style;
  menuStyling.display = 'block';
  menuStyling.backgroundColor = 'rgba(0,0,0,0.05)'; */
}
