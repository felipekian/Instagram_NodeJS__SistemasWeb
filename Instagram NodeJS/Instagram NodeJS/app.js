/* importar as configurações do servidor */
var app = require('./config/server');

let porta = 2000;

/* parametrizar a porta de escuta */
app.listen(porta, function(){
	console.log('Front-End rodando na porta '+porta);
})