<?php include 'includes/header.php' ?>
    <div class="menu-panel">
        <div id="app-logo-part">
            <div id="logo_and_text">
                <img src="includes/resources/img/raw.png" alt="">
                <div id="logotext">
                    <div id="logotext_top">Beta</div>
                    <div id="logotext_bottom">Junoswap</div>
                </div>
            </div>
        </div>
        <div id="menu-part">
            <button id="connector">Connect Keplr</button>
            <div id="menu_nav">
                <div id="navlink" class="active">
                    <div id= "nav_logo"><img src="includes/resources/img/hashtag.png"></div>
                    <div id="nav_text">Swap</div>
                </div>
                <div id="navlink">
                    <div id= "nav_logo"><img src="includes/resources/img/up-arrow.png"></div>
                    <div id="nav_text">Transfer</div>
                </div>
                <div id="navlink">
                    <div id= "nav_logo"><img src="includes/resources/img/bullseye.png"></div>
                    <div id="nav_text">Liquidity</div>
                </div>
            </div>
        </div>
        <div id="foot-part">
            <div id="siteversion">Junoswap.v1.mlb.test.01</div>
            <div id="lightcontrol">
                <div id="controltext">
                    <img src="includes/resources/img/switch.png" alt="">
                    <div>Dark mode</div>
                </div>
                <img id="lightswitch"src="includes/resources/img/light.png" alt="">
            </div>
            <hr id="hr_line">
            <a href="#" class="feedgov" id="feedback">
                <div id="feedgov_left">
                    <img src="includes/resources/img/feedback.png" alt="">
                    <div id ="feedgov_text">Provide feedback</div>
                </div>
                <img id = "arrow45"src="includes/resources/img/45-degrees.png" alt="">
            </a>
            <a href="#" class="feedgov" id="governance">
                <div id="feedgov_left">
                    <img src="includes/resources/img/government.png" alt="">
                    <div id ="feedgov_text">Governance</div>
                </div>
                <img id = "arrow45"src="includes/resources/img/45-degrees.png" alt="">
            </a>

            <div id="socials">
                <a href="#"id="socialitem">
                    <img src="includes/resources/img/discord-white.png" alt="">
                </a>
                <a href="#"id="socialitem">
                    <img src="includes/resources/img/twitter-white.png" alt="">
                </a>
                <a href="#"id="socialitem">
                    <img src="includes/resources/img/github-white.png" alt="">
                </a>
            </div>
            </div>
        </div>
    </div>
    <div class="operations-panel">
       <?php
       $directory = 'swap.php';
       include $directory;
       ?>
    </div>
    <div class="footpanel">
        <div id="betanote">
            <img src="includes/resources/img/triangle.png" alt="">
            <div>This is a beta version</div>
        </div>
        <div id="otherbetanote">
            This website is currently in beta. please provide feedback
        </div>
        <a href="#" id="report">
            <div id="reporttext">Report an issue</div>
            <img id = "arrow45"src="includes/resources/img/45-degrees.png" alt="">
        </a>
    </div>

<?php include 'includes/footer.php' ?>
