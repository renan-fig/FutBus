<?php

# alterar a variavel abaixo colocando o seu email

$emailEmpresa = 'joaodorea300@gmail.com'
$nome = $_POST['nome'];
$cpf = $_POST['cpf'];
$time = $_POST['time'];
$localPartida = $_POST['localPartida'];
$estadio = $_POST['estadio'];
$email = $_POST['email'];
$destinatario = $email;
$assunto = 'FutBus';

 // monta o e-mail na variavel $body

$body = "Confirmação da Viagem com a FutBus" . "\n";
$body = $body . "FALE CONOSCO - TESTE COMPROVATIVO" . "\n";
$body = $body . "===================================" . "\n\n";
$body = $body . "Nome: " . $nome . "\n";
$body = $body . "Time: " . $time . "\n";
$body = $body . "Local de partida: " . $localPartida . "\n";
$body = $body . "Estádio: " . $estadio . "\n";
$body = $body . "Email: " . $email . "\n";
$body = $body . "===================================" . "\n";

// envia o email
mail($destinatario, $assunto , $body, "From: $emailEmpresa\r\n");




?>