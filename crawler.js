"use strict";
var page = require('webpage').create();

page.onConsoleMessage = function(msg) {
    console.log(msg);
};

phantom.addCookie({
  'name': 'JSESSIONID',
  'value': '451CCB8B7C8AC78FF472106C38BED16C',
  'domain'   : 'www.cmc.pr.gov.br',
  'path'     : '/wspl/sistema',
});

//http://code.jquery.com/jquery-2.2.1.min.js

page.open("http://www.cmc.pr.gov.br/wspl/sistema/ProposicaoConsultaForm.do", function(status) {
    page.includeJs("http://code.jquery.com/jquery-2.2.1.min.js", function() {
        page.evaluate(function() {
            var especies = $("#tpr_classe option");
            console.log(especies);
        });
        phantom.exit()
    });
});