<?php
class Coins{
    public $coinName;
    public $coinLogo;

    function set_coinName($coinName){
        $this->coinName = $coinName;
    }
    function set_coinLogo($coinName){
        $this->coinName = $coinName;
    }
    function get_coinName(){
        return $this->coinName;
    }
    function get_coinLogo(){
        return $this->coinLogo;
    }


}

?>