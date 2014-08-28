<?php
/**
 * configuration class
 */

class APP_Config{
    
    /** 
     * Private vars
     */  
    private static $email = 'example@example.com';
    private static $password = 'mypassword';
    
    /**
	 * Configuration constants
	 */
    const Endpoint = 'https://endpoint.example.com',
           ApiKey = '1234567'
           ;
	
	/**
	 * Public vars
	 */
    public static $prefixes = array(
        'sla'       => '(SLA)',
        'internal'  => '(internal)',
        'template'  => '(template)',
        'api'       => '(API)',
    );
    
    /**
     * Getter and setter for private vars
     */
    public static function getEmail(){
		return self::$email;
	}
	
    public static function getPassword(){
		return md5(self::$password);
	}

    public static function setPassword($string){
		self::$password = (string)$string;
	}
	
    /**
	 * Make this class private so we can't create instances
	 */      
    private function __construct() {} 

}//c

/**
 * Testing..
 */
/* 
ini_set('error_reporting', E_ALL);
ini_set('display_errors', 'On');  //On or Off
var_dump(APP_Config::$prefixes).'<hr>';
echo APP_Config::ApiKey.'<hr>';
echo APP_Config::getEmail().'<hr>';
echo APP_Config::getPassword().'<hr>';
echo APP_Config::setPassWord('newPass');
echo APP_Config::getPassword().'<hr>';
*/
