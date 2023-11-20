window.onload = function () {
    initPascal(10);
}

var initPascal = function (n) {

    var pascaldiv = document.getElementById('pascal');

    for (var sor = 0; sor <= n; sor++) {

        var ujsordiv = document.createElement('div');
        ujsordiv.classList.add('sor');
        pascaldiv.appendChild(ujsordiv);

        for (var oszlop = 0; oszlop <= sor; oszlop++) {

            var ujelemdiv = document.createElement('div');
            ujelemdiv.classList.add('elem');
            ujelemdiv.innerText = pascal(sor, oszlop);
            ujsordiv.appendChild(ujelemdiv);

        }
    }
}

var factor = function (n) {
    x=1
    for (var i = 1; i <= n; i++) {
        x = x * i
    }
    return x;
}
var pascal = function (n, k) {
    x = factor(n) / (factor(k) * (factor(n - k)))
    return x;
}