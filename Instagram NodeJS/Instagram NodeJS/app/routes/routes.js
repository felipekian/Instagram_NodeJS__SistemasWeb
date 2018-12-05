module.exports = function(application){
	
	/* rota para o tela de login */
	application.get('/', function(req, res){
		application.app.controllers.index.index(application, req, res);
	});


	/* rota para tela de cadastro */
	application.get('/cadastro', function(req, res){
		application.app.controllers.cadastro.cadastro(application, req, res);
	});


	/* rota para a pagina principal */
	application.get('/home', function(req, res){
		application.app.controllers.home.home(application, req, res);
	});

	
	/* rota para a pagina feed pessoal */
	application.get('/feed', function(req, res){
		application.app.controllers.feed.feed(application, req, res);
	});
	
	
}