<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        
        if (isset($_POST["login_submit"])) {
            $login_user = $_POST["login_user"];
            $login_password = $_POST["login_password"];
            
         
        }
        
        if (isset($_POST["signup_submit"])) {
            $signup_user = $_POST["signup_user"];
            $signup_password = $_POST["signup_password"];
            $confirm_password = $_POST["confirm_password"];

        }
    }
   ?>