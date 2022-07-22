<?php


 $to      = 'laurentweb@caramail.fr';
 $subject = 'le sujet';
 $message = 'Bonjour !';
 $headers = 'From: webmaster@example.com' . "\r\n" .
 'Reply-To: webmaster@example.com' . "\r\n" .
 'X-Mailer: PHP/' . phpversion();

 mail($to, $subject, $message, $headers);

 echo "hello";


?>



<!-- use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

require_once "phpmailer/Exception.php";
require_once "phpmailer/PHPMailer.php";
require_once "phpmailer/SMTP.php";

$mail = new PHPMailer(true);

try{
    // Configuration
    $mail->SMTPDebug = SMTP::DEBUG_SERVER;  // Je veux des infos de debug
    // On configure le SMTP
    $mail->isSMTP();
    $mail->Host = "localhost";
    $mail->Port = 1025;

    // Charset
    $mail->CharSet = "utf-8";

    // Destinataires
    $mail->addAddress("1491laurent@gmail.fr");
    // $mail->addCC("copie@site.fr");
    // $mail->addBCC("copiecachee@site.fr");

    // Expéditeur
    $mail->setFrom("no-reply@site.fr");

    // Contenu
    $mail->isHTML();

    $mail->Subject = "Sujet du message avec caractères accentués";
    $mail->Body = "Lorem ipsum dolor sit amet <p>consectetur adipisicing elit.</p> Ea repellendus porro 
    id obcaecati voluptates minima debitis placeat. Temporibus aperiam delectus eum sunt libero blanditiis, 
    // consequatur <strong>consequuntur</strong> labore repellat possimus porro.";

    $mail->AltBody = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea repellendus porro 
    id obcaecati voluptates minima debitis placeat. Temporibus aperiam delectus eum sunt libero blanditiis, 
    // consequatur consequuntur labore repellat possimus porro.";

    // On envoie
    $mail->send();
    echo "Message envoyé";
    
    

} catch(Exception $e){
    echo "Message non envoyé. Erreur: {$mail->ErrorInfo}";
} -->