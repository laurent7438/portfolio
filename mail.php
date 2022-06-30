<?php
var_dump($_POST);

$to      = '1491laurent@gmail.com';
$subject = 'le sujet';
$message = 'Bonjour !';
$headers = 'From: webmaster@example.com' . "\r\n" .
'Reply-To: webmaster@example.com' . "\r\n" .
'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);
if (mail($to, $subject, $message, $headers)){
    echo "bien joué";
};
?>