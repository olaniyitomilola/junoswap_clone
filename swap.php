<div id="swap_text">
    <div id="swapheader">Swap</div>
    <div id="swap_p">Swap between your favorite assets on Juno</div>
</div>
<form id="swap_box" action="<?php echo $_SERVER['PHP_SELF']?>" method="post">
    <div id="firstcoin">
        <div id="coinselect">
            <div id="coininfo">
                <div>
                    <img id = "coinfo_img"src="<?php echo $coins['juno']['logo']?>" alt="">
                </div>
                <div id="nameandbalance">
                    <div id="coinname">
                        <?php echo $coins['juno']['name']?>
                    </div>
                    <div id="coinbalance">
                        0 available
                    </div>
                </div>
            </div>
            <img src="includes/resources/img/down-arrow.png" alt="">

        </div>
        <div id="swapvalue">
            <input type="number" placeholder="0" name="swapamount" >
          
        </div>
    </div>
    <div id="coinexchange">
        <div id="exchangeicon">
            <img src="includes/resources/img/up-down.png" alt="">
        </div>
        <div id= "coinconversion">

        </div>

        <div id="exchangevalue">
        
        </div>
    </div>
    <div id="secondcoin">
        <div id="tokenselect">

        </div>
        <div id="swappedvalue">
            <div id="slippage">

            </div>
            <div id="swapfee">

            </div>
            <div id="swapbtn">

            </div>
        </div>

    </div>
    <div id="swapcoin"></div>

</form>