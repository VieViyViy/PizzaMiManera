<?php

// Allow requests from any origin
header("Access-Control-Allow-Origin: *");
// Allow the content type specified in the request
header("Access-Control-Allow-Headers: Content-Type");
// Allow POST requests
header("Access-Control-Allow-Methods: POST");


// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get the JSON data from the request body
    $jsonData = file_get_contents('php://input');

    // Decode JSON data to associative array
    $requestData = json_decode($jsonData, true);

    // Check if the receipt data is not empty
    if (!empty($requestData['receiptString'])) {
        // Create a unique filename based on the current timestamp
        $filename = 'receipt_' . time() . '.txt';

        // Open the file for writing
        $file = fopen($filename, 'w');

        // Check if the file was opened successfully
        if ($file) {
            // Write receipt string to the file
            fwrite($file, $requestData['receiptString']);

            // Close the file
            fclose($file);

            // Respond with success
            echo json_encode(['success' => true, 'filename' => $filename]);
        } else {
            // Respond with failure (unable to open file)
            echo json_encode(['success' => false, 'message' => 'Unable to open file for writing']);
        }
    } else {
        // Respond with failure (empty receipt data)
        echo json_encode(['success' => false, 'message' => 'Empty receipt data']);
    }
} else {
    // Respond with failure (invalid request method)
    echo json_encode(['success' => false, 'message' => 'Invalid request method']);
}
?>