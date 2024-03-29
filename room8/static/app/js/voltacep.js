$(document).ready(function () {
    var limpa_formulário_cep = function(logradouro, bairro, localidade, uf) {
        // Limpa valores do formulário de cep.
        logradouro.val("");
        bairro.val("");
        localidade.val("");
        uf.val("");
    }

    var completa_endereco = function(cep_atual, logradouro, bairro, localidade,uf) {
      //Quando o campo cep perde o foco.
      cep_atual.blur(function() {
          //Nova variável "cep" somente com dígitos.
          var cep = $(this).val().replace(/\D/g, '');
          //Verifica se campo cep possui valor informado.
          if (cep != "") {
              //Expressão regular para validar o CEP.
              var validacep = /^[0-9]{8}$/;
              //Valida o formato do CEP.
              if(validacep.test(cep)) {
                  //Preenche os campos com "..." enquanto consulta webservice.
                  logradouro.val("...");
                  bairro.val("...");
                  localidade.val("...");
                  uf.val("...");
                  //Consulta o webservice viacep.com.br/
                  $.getJSON("//viacep.com.br/ws/"+ cep +"/json/?callback=?", function(dados) {
                      if (!("erro" in dados)) {
                          //Atualiza os campos com os valores da consulta.
                          logradouro.val(dados.logradouro);
                          bairro.val(dados.bairro);
                          localidade.val(dados.localidade);
                          uf.val(dados.uf);
                      } //end if.
                      else {
                          //CEP pesquisado não foi encontrado.
                          limpa_formulário_cep(logradouro, bairro, localidade, uf);
                          alert("CEP não encontrado.");
                      }
                  });
              } //end if.
              else {
                  //cep é inválido.
                  limpa_formulário_cep(logradouro, bairro, localidade, uf);
                  alert("Formato de CEP inválido.");
              }
          } //end if.
          else {
              //cep sem valor, limpa formulário.
              limpa_formulário_cep(logradouro, bairro, localidade, uf);
          }
      });
    }
    completa_endereco($('#cadastroCep'), $('#cadastroLogradouro'), $('#cadastroBairro'), $('#cadastroCidade'), $('#cadastroEstado'));
});
