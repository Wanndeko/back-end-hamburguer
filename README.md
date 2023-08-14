<h1>back-end-hamburguer</h1>

![Wanndeko-repo-status](https://img.shields.io/badge/Status-Finished-lightgrey?style=for-the-badge&logo=headspace&logoColor=green&color=lightgrey)
![Wanndeko-repo-license](https://img.shields.io/github/license/Luk4x/iManager-json-server?style=for-the-badge&logo=unlicense&logoColor=lightgrey)

<h2>Tecnologias utilizadas 🖥️</h2>
<ul>
  <li><a href=https://nodejs.org>Node.Js</a></li>
  <li><a href=https://www.npmjs.com/package/express>Express</a></li>
  <li><a href=https://www.npmjs.com/package/uuid/>uuid</a></li>
  <li><a href=https://www.npmjs.com/>Npm</a></li>
</ul>

<h2>Sobre 📃</h2>
<p> Esse projeto é uma api de cadastro de pedidos de hamburgueria, possui um crud completo,
recebendo o nome do cliente e o pedido. Serve de Base para a sua interface <a href=https://github.com/Wanndeko/front-burguer target="_blank">codeBurguer</a>.</p>

<h2>Rotas 📄</h2>
<p>get => /orders  traz todos os pedidos cadastrados nos array de pedidos.</p><br>

<p>post => /orders  recebe os dados name, order do body e adiciona um id unico para depois executar o push para a array de pedidos.</p><br>

<p>put => /orders/:id recebe os dados de name e order do body para a alteração, antes disso a rota chama um middleware que verifica o Id da ordem e caso ele não exista retorna uma mensagem de cliente não encontrado  com status 404. Se tudo ocorrer bem a alteração é feita.</p><br>

<p>delete => /orders/:id Com o Id enviado a rota é chamada, mas antes um middlware de verificação de Id é chamado e se tudo estiver correto a ordem é deletada </p><br>

