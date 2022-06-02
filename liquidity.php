<div id="liquidityblock">
    <div id="liquiditytext">
        <div id="liquidityheader">
            Liquidity
        </div>
        <div id="liquiditypara">
            Provide liquidity to the market and receive swap fees from each trade
        </div>
    </div>
    <div id="liquidityassets">
        <?php for($i=1;$i<count($coin);$i++){

         ?>
            <div id="liquiditybond">
                <div id="liquiditybondtop">
                    <div id="bondimages">
                        <img src="includes/resources/img/juno.svg" alt="juno">
                        <img src="<?php echo $coin[$i]['logo'] ?>" alt="">
                    </div>
                    <div id="bondnames">
                        <div>JUNO</div>
                        <div id="thedot"><img src="includes/resources/img/dot.png" alt=""></div>
                        <div><?php echo $coin[$i]['name'] ?></div>

                    </div>

                </div>
                <div id="liquiditybondbottom">
                    <div id="liquiditybondbottomheader">
                        Total liquidity
                    </div>
                    <div id="liquiditybottomvalue">
                        $0.00
                    </div>
                    <div id="liquiditybottomaprandbond">
                        <div id="userbond">
                            <div id="userbondtext">
                                Bonded
                            </div>
                            <div id="userbondvalue">
                                --
                            </div>
                        </div>
                        <div id="apr">
                            <div id="aprtext">
                                APR
                            </div>
                            <div id="aprvalue">
                                0%
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         <?php }?>
    </div>
</div>