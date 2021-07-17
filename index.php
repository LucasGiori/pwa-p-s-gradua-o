<!DOCTYPE html>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vida de Programador</title>

    <link rel="stylesheet" type="text/css" href="css/style.css">
    <link rel="shortcut icon" href="imgs/icon-128.png">
    <link rel="apple-touch-icon" href="imgs/icon-apple.png">
    <link rel="manifest" href="manifest.json">
</head>
<body>
    <header>
        <img src="imgs/logo.png" alt="Vida de programador" title="Vida de programador">
    </header>
    <div id="alert">
        <p>Deseja adicionar este App na tela do seu dispositivo?</p>
        <button type="button" class="btn" id="btnAdd">Adicionar a tela</button>
        <button type="button" class="btn" id="btnClose">Fechar</button>
    </div>
    <main id="tirinhas"> 
    </main>
</body>
<script src="js/tirinhas.js"></script>
<script src="js/funcoes.js"></script>
<script>
    if('serviceWorker' in navigator) {
        
        navigator.serviceWorker.register(
            "serviceWorker.js",
            {
                scope: "/"
            },
        ).then((register) => {
            if ( register.installing )
                console.log('Instalado com sucesso')
            else if ( register.waiting )
                console.log('SW em espera')
            else if ( register.active )
                console.log('SW ativo')

			console.log('SW registrado no escopo: '+register.scope)
        }).catch((error) => {
            console.log(`Erro ao tentar registrar Service Worker! Erro: ${error}`)
        });
    }
</script>
</html>