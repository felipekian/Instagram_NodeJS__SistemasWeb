module.exports.cadastro = function(application, req, res){
	res.render('cadastro/padrao', {validacao: {}, dadosForm:{}});
}

