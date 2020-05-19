<?php


if (isset($_POST["name"]) && isset($_POST["email"]) && isset($_POST["message"])) {

    $result = array(
        'name' => $_POST["name"],
        'email' => $_POST["email"],
        'message' => $_POST["message"]
    );

    echo json_encode($result);
}

