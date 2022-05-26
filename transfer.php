
<div id="transferblock">

    <div id="transfertext">
        <div id="transfertextheader">
            IBC Transfer
        </div>
        <div id="transfertextpara">
            Easily and quickly initiate payments across IBC
        </div>
    </div>
    <div id="userassets">
        <div id="userassetsheader">
            My assets
        </div>
        <div id="theassets">
            Connect your wallet to see your tokens
        </div>
    </div>
    <div id="othertokens">

        <div id="othertokenheader">
            Other tokens
        </div>
        <div id="thetokens">
            <?php for($i = 0;$i<count($coin);$i++){
            ?>
            <div id="thecoins">
                <div id="assetinformation">
                    <div id='asset_logo'>
                        <img id="assetlogo" src="<?php echo $coin[$i]['logo'] ?>" alt="">
                    </div>
                    <div id="assetname">
                        <?php echo $coin[$i]['name']?>
                    </div> 
                </div>
                <div id="depositlink">
                    <div>Deposit</div>
                    <img src="includes/resources/img/arrow-down.png" alt="">
                </div>
                
                
            </div>
            <?php }?>
        </div>
        
    </div>
    <div id="assetfooter">
        <div>More tokens available soon</div>
    </div>
    

</div>

