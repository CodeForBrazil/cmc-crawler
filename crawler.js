"use strict";
var page = require('webpage').create();

page.onConsoleMessage = function(msg) {
    console.log(msg);
};

phantom.addCookie({
    'name': 'JSESSIONID',
    'value': 'A76698A50CD14491EFFFF97B6408D356',
    'domain': 'www.cmc.pr.gov.br',
    'path': '/wspl/'
});

page.open("http://www.cmc.pr.gov.br/wspl/sistema/ProposicaoConsultaForm.do", function(status) {
    //page.render('google_home.jpeg', {format: 'jpeg', quality: '100'});
    page.includeJs('https://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js', function() {
        page.evaluate(function() {
            $('#tpr_classe option').each(function(key, value) {
                console.log($(value).val());
            });
        });

        phantom.exit(0);
    });
});

// page.onError = function(msg, trace) {
//     var msgStack = ['ERROR: ' + msg];
//     if (trace && trace.length) {
//         msgStack.push('TRACE:');
//         trace.forEach(function(t) {
//             msgStack.push(' -> ' + t.file + ': ' + t.line + (t.function ? ' (in function "' + t.function+'")' : '));
//         });
//     }
//     console.error(msgStack.join('\n'));
// };
