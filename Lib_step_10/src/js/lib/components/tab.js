import $ from '../core';

$.prototype.tab = function() {
    for (let i = 0; i < this.length; i++) {
        $(this[i]).on('click', () => {
            $(this[i])
                .addClass('tab-item--active')
                .siblings()
                .removeClass('tab-item--active')
                .closest('.tab')
                .find('.tab-content')
                .removeClass('tab-content--active')
                .eq($(this[i]).index())
                .addClass('tab-content--active');
        });
    }
};

$('[data-tabpanel] .tab-item').tab();