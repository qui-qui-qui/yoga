window.addEventListener('DOMContentLoaded', function () {

    'use strict';
    let calc = require('./parts/calc.js'),
        form = require('./parts/form.js'),
        slider = require('./parts/slider.js'),
        modal = require('./parts/modal.js'),
        tabs = require('./parts/tabs.js'),
        timer = require('./parts/timer.js');

    calc();
    form();
    slider();
    tabs();
    timer();
    modal();
});
