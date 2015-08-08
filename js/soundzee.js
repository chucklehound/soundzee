document.addEventListener('DOMContentLoaded', function () {
    var buttons = document.querySelectorAll('button');

    for (var i = 0, max = buttons.length; i < max; i++) {
        buttons[i].addEventListener('click', addPressedClass);
    }

    function addPressedClass(e) {
        var btn = e.target;
        btn.classList.add('pressed');
        setTimeout(function () {
            btn.classList.remove('pressed');
        }, 400);
    }
}, false);
