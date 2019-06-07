(function(win, doc) {
	'use strict';
	/*
	No HTML:
	- Crie um formulário com um input de texto que receberá um CEP e um botão
	de submit;
	- Crie uma estrutura HTML para receber informações de endereço:
	"Logradouro, Bairro, Estado, Cidade e CEP." Essas informações serão
	preenchidas com os dados da requisição feita no JS.
	- Crie uma área que receberá mensagens com o status da requisição:
	"Carregando, sucesso ou erro."

	No JS:
	- O CEP pode ser entrado pelo usuário com qualquer tipo de caractere, mas
	deve ser limpo e enviado somente os números para a requisição abaixo;
	- Ao submeter esse formulário, deve ser feito um request Ajax para a URL:
	"http://apps.widenet.com.br/busca-cep/api-de-consulta", onde [CEP] será o CEP passado
	no input criado no HTML;
	- Essa requisição trará dados de um CEP em JSON. Preencha campos na tela
	com os dados recebidos.
	- Enquanto os dados são buscados, na área de mensagens de status, deve mostrar
	a mensagem: "Buscando informações para o CEP [CEP]..."
	- Se não houver dados para o CEP entrado, mostrar a mensagem:
	"Não encontramos o endereço para o CEP [CEP]."
	- Se houver endereço para o CEP digitado, mostre a mensagem:
	"Endereço referente ao CEP [CEP]:"
	- Utilize a lib DOM criada anteriormente para facilitar a manipulação e
	adicionar as informações em tela.
	*/

	var $input = doc.querySelector('[data-js="input"]');
	var $submit = doc.querySelector('[data-js="button"]');
	var $message = doc.querySelector('[data-js="message"]');
	var $logradouro = doc.querySelector('[data-js="logradouro"]');
	var $bairro = doc.querySelector('[data-js="bairro"]');
	var $cidade = doc.querySelector('[data-js="cidade"]');
	var $estado = doc.querySelector('[data-js="estado"]');
	var $cep = doc.querySelector('[data-js="cep"]');

	var inputValue;
	var response;
	
	var ajax = new XMLHttpRequest();

	$submit.addEventListener('click', submitClick, false);
	ajax.addEventListener('readystatechange', function() {
		if (isRequest()) {
			try{
				response = JSON.parse(ajax.responseText);
				if (response.message) {
					clearFields();
					$message.textContent = getMessage('error');
				} else {
					setFields();
					$message.textContent = getMessage('ok');
				}
			} catch (err) {
				$message.textContent = getMessage('error');
			}
		}
	});

	function isRequest() {
		return ajax.readyState === 4 && ajax.status === 200;
	}

	function getCep() {
		ajax.open('get', `http://apps.widenet.com.br/busca-cep/api/cep/${inputValue}.json`);
		ajax.send();
	}
	
	function cleanInput(str) {
		return str.replace(/\D+/g, '');
	}

	function submitClick(ev) {
		ev.preventDefault();
		inputValue = cleanInput($input.value);
		getCep();
		$message.textContent = getMessage('loading');
	}

	function getMessage(type) {
		return {
			'loading': `Buscando informações para o CEP ${inputValue}...`,
			'ok': `Endereço referente ao CEP ${inputValue}:`,
			'error': `Não encontramos o endereço para o CEP ${inputValue}.`,
		}[type];
	}

	function setFields() {
		$logradouro.textContent = response.address;
		$bairro.textContent = response.district;
		$cidade.textContent = response.city;
		$estado.textContent = response.state;
		$cep.textContent = response.code;
	}

	function clearFields() {
		$logradouro.textContent = '-';
		$bairro.textContent = '-';
		$cidade.textContent = '-';
		$estado.textContent = '-';
		$cep.textContent = '-';
	}
})(window, document);
