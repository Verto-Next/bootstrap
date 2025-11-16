<?php
header('Content-Type: application/json');

// Enable error reporting for debugging (remove in production)
error_reporting(E_ALL);
ini_set('display_errors', 1);

// CORS headers if needed
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    
    // Get form data
    $name = isset($_POST['Name']) ? strip_tags(trim($_POST['Name'])) : '';
    $email = isset($_POST['Email']) ? filter_var(trim($_POST['Email']), FILTER_SANITIZE_EMAIL) : '';
    $phone = isset($_POST['Phone']) ? strip_tags(trim($_POST['Phone'])) : '';
    $company = isset($_POST['Company']) ? strip_tags(trim($_POST['Company'])) : '';
    $message = isset($_POST['Message']) ? strip_tags(trim($_POST['Message'])) : '';
    
    // Validate required fields
    if (empty($name) || empty($email) || empty($message)) {
        echo json_encode([
            'success' => false,
            'message' => 'Please fill in all required fields (Name, Email, Message).'
        ]);
        exit;
    }
    
    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode([
            'success' => false,
            'message' => 'Please enter a valid email address.'
        ]);
        exit;
    }
    
    // Load SMTP Configuration
    $config = require_once 'email-config.php';
    
    $smtp_host = $config['smtp_host'];
    $smtp_port = $config['smtp_port'];
    $smtp_username = $config['smtp_username'];
    $smtp_password = $config['smtp_password'];
    
    // Email recipient
    $to_email = $config['to_email'];
    $to_name = $config['to_name'];
    
    // Email subject
    $subject = 'New Contact Form Submission from ' . $name;
    
    // Email body
    $email_body = "
    <html>
    <head>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #0d6efd; color: white; padding: 20px; text-align: center; }
            .content { background-color: #f8f9fa; padding: 20px; margin-top: 20px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #0d6efd; }
            .value { margin-top: 5px; }
        </style>
    </head>
    <body>
        <div class='container'>
            <div class='header'>
                <h2>New Contact Form Submission</h2>
            </div>
            <div class='content'>
                <div class='field'>
                    <div class='label'>Name:</div>
                    <div class='value'>{$name}</div>
                </div>
                <div class='field'>
                    <div class='label'>Email:</div>
                    <div class='value'>{$email}</div>
                </div>
                " . (!empty($phone) ? "
                <div class='field'>
                    <div class='label'>Phone:</div>
                    <div class='value'>{$phone}</div>
                </div>
                " : "") . "
                " . (!empty($company) ? "
                <div class='field'>
                    <div class='label'>Company:</div>
                    <div class='value'>{$company}</div>
                </div>
                " : "") . "
                <div class='field'>
                    <div class='label'>Message:</div>
                    <div class='value'>" . nl2br($message) . "</div>
                </div>
            </div>
        </div>
    </body>
    </html>
    ";
    
    // Use PHPMailer if available, otherwise use mail() function
    if (class_exists('PHPMailer\PHPMailer\PHPMailer')) {
        // Using PHPMailer (recommended)
        require_once 'PHPMailer/PHPMailer.php';
        require_once 'PHPMailer/SMTP.php';
        require_once 'PHPMailer/Exception.php';
        
        $mail = new PHPMailer\PHPMailer\PHPMailer(true);
        
        try {
            // Server settings
            $mail->isSMTP();
            $mail->Host = $smtp_host;
            $mail->SMTPAuth = true;
            $mail->Username = $smtp_username;
            $mail->Password = $smtp_password;
            $mail->SMTPSecure = PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_SMTPS;
            $mail->Port = $smtp_port;
            $mail->CharSet = 'UTF-8';
            
            // Recipients
            $mail->setFrom($smtp_username, 'Verto Next Contact Form');
            $mail->addAddress($to_email, $to_name);
            $mail->addReplyTo($email, $name);
            
            // Content
            $mail->isHTML(true);
            $mail->Subject = $subject;
            $mail->Body = $email_body;
            $mail->AltBody = strip_tags(str_replace('<br>', "\n", $email_body));
            
            $mail->send();
            
            echo json_encode([
                'success' => true,
                'message' => 'Thank you! Your message has been sent successfully. We will get back to you soon.'
            ]);
            
        } catch (Exception $e) {
            echo json_encode([
                'success' => false,
                'message' => 'Sorry, there was an error sending your message. Please try again later.',
                'error' => $mail->ErrorInfo
            ]);
        }
        
    } else {
        // Fallback to mail() function with custom headers
        $headers = "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
        $headers .= "From: Verto Next Contact Form <{$smtp_username}>" . "\r\n";
        $headers .= "Reply-To: {$email}" . "\r\n";
        
        if (mail($to_email, $subject, $email_body, $headers)) {
            echo json_encode([
                'success' => true,
                'message' => 'Thank you! Your message has been sent successfully. We will get back to you soon.'
            ]);
        } else {
            echo json_encode([
                'success' => false,
                'message' => 'Sorry, there was an error sending your message. Please try again later.'
            ]);
        }
    }
    
} else {
    echo json_encode([
        'success' => false,
        'message' => 'Invalid request method.'
    ]);
}
?>
