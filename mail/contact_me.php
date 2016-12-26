<?php
// Check for empty fields
if(empty($_POST['name'])  		||
   empty($_POST['email']) 		||
   empty($_POST['univ']) 		||
   empty($_POST['fac']) 		||
   empty($_POST['dep']) 		||
   empty($_POST['message'])	||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
	echo "No arguments Provided!";
	return false;
   }

$name = $_POST['name'];
$email_address = $_POST['email'];
$univ = $_POST['univ'];
$fac = $_POST['fac'];
$dep = $_POST['dep'];
$message = $_POST['message'];

// Create the email and send the message
$to = 'bikke015@gmail.com'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Website Contact Form:  $name";
$email_body = "You have received a new message from your website contact form.\n\n".
"Here are the details:\n\nName: $name\n\n
                          Email: $email_address\n\n
                          Univ: $univ\n\n
                          Fac: $fac\n\n
                          Dep: $dep\n\n
                          Message:\n$message";
// $headers = "From: noreply@narabikke.com\n";  This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers = "From: Contact@narabikke.com\n";
$headers .= "Reply-To: $email_address";
mail($to,$email_subject,$email_body,$headers);
return true;
?>
