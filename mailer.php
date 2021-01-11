<?php
    if (filter_has_var(INPUT_POST, 'submit')) {
        $name = strip_tags(trim($_POST["name"]));
        $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
        $message = trim($_POST["message"]);

        //Validation
        if (!empty($name) && !empty($email) && !empty($message)) {
            // $toEmail = '';
            // $subject = 'Contact form from '.$name;
            // $body = '<h2>Contact form</h2>
            // <h4>Name</h4><p>'.$name.'</p>
            // <h4>Email</h4><p>'.$email.'</p>
            // <h4>Message</h4><p>'.$message.'</p>
            // ';

            // $headers ="MIME-Version: 1.0"."\r\n";
            // $headers .="Content-Type:text/html;charset=UTF-8"."\r\n";
            // $headers .="From: ".$name. "<".$email.">". "\r\n";

            // if (mail($toEmail,$subject,$body,$headers)) {
                header("Location:http://localhost/Omnifood/index.php?success=1#form");
            // } else {
                // header("Location:http://localhost/Omnifood/index.php?success=-1#form");
            //     exit;
            // }

        } else {
            header("Location:http://localhost/Omnifood/index.php?success=-1#form");
            exit;
        }
    }
    // // Get the form fields, removes html tags and whitespace.
    // $name = strip_tags(trim($_POST["name"]));
    // $name = str_replace(array("\r","\n"),array(" "," "),$name);
    // $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    // $message = trim($_POST["message"]);

    // // Check the data.
    // if (empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    //     header("Location:http://localhost/Omnifood/index.php?success=-1#form");
    //     exit;
    // }

    // // Set the recipient email address. Update this to YOUR desired email address.
    // $recipient = "curiousnigger@protonmail.com";

    // // Set the email subject.
    // $subject = "New contact from $name";

    // // Build the email content.
    // $email_content = "Name: $name\n";
    // $email_content .= "Email: $email\n\n";
    // $email_content .= "Message:\n$message\n";

    // // Build the email headers.
    // $email_headers = "From: $name <$email>";

    // // Send the email.
    // mail($recipient, $subject, $email_content, $email_headers);
    
    // // Redirect to the index.html page with success code
    // header("Location: http://localhost/Omnifood/index.php?success=1#form");

?>