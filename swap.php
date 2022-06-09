<div id="swap_text">
    <div id="swapheader">Swap</div>
    <div id="swap_p">Swap between your favorite assets on Juno</div>
</div>
<form id="swap_box" action="<?php echo $_SERVER['PHP_SELF']?>" method="post">
    <div id="firstcoin">
        <div id="coinlist">
            <div id="searchbox">
                <img src="includes/resources/img/search.png" alt="search">
                <input name="coinname" type="text" placeholder="Search name or symbol">     
                <img id = 'listclose' src="includes/resources/img/close.png" alt="search">
            </div>
            <div id="allcoins">
                <?php for($i=0;$i<count($coin);$i++){ ?>
                <div class="eachcoin">
                    <div id="info">
                        <img src="<?php echo $coin[$i]['logo']?>" alt="">
                        <div id="name_">
                            <div id="name_big">
                                <?php echo $coin[$i]['name']?>
                            </div>
                            <div id="name_small">
                                <?php echo $coin[$i]['name']?>
                            </div>
                        </div>

                    </div>
                    <div id="balance">
                        <div id="amount">
                            0
                        </div>
                        <div id="amounttext">
                            available
                        </div>
                    </div>
                </div>
                <?php }?>
            </div>
            

        </div>
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
            <img id = "tradeswap" src="includes/resources/img/up-down.png" alt="">
        </div>
        <div id= "coinconversion">

        </div>

        <div id="exchangevalue">
        
        </div>
    </div>
    <div id="secondcoin">
        <div id="coinlist2">
            <div id="searchbox">
                <img src="includes/resources/img/search.png" alt="search">
                <input name="coinname" type="text" placeholder="Search name or symbol">     
                <img id = 'listclose2' src="includes/resources/img/close.png" alt="search">
            </div>
            <div id="allcoins">
                <?php for($i=0;$i<count($coin);$i++){ ?>
                <div class="eachcoin">
                    <div id="info">
                        <img src="<?php echo $coin[$i]['logo']?>" alt="">
                        <div id="name_">
                            <div id="name_big">
                                <?php echo $coin[$i]['name']?>
                            </div>
                            <div id="name_small">
                                <?php echo $coin[$i]['name']?>
                            </div>
                        </div>

                    </div>
                    <div id="balance">
                        <div id="amount">
                            0
                        </div>
                        <div id="amounttext">
                            available
                        </div>
                    </div>
                </div>
                <?php }?>
            </div>
            

        </div>
        <div id="selectcoin">
            <div id="coininfo">
                <div>Select a Token</div>
            </div>
            <img src="includes/resources/img/down-arrow.png" alt="">

        </div>
        <div id="coinvalue">
            0
        </div>

    </div>
    <div id="swapcoin">
        <div id="slipandfee">
            <div id="slippage">
                <div id="slipperce">
                    SLIPPAGE 1%
                </div>
                <img src="includes/resources/img/down-arrow.png" alt="">
            </div>
            <div id="swapfee">
                SWAP FEE(0.3%)
            </div>
        </div>

        <div id="swapbtn">
            Swap
        </div>
    </div>

</form>