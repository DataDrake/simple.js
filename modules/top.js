/*
 MIT License
 Copyright 2017 Bryan T. Meyers
 */
window.onload = function () {
    u('a[simple-top]').first().style = "display: none;";
};
window.onscroll = function() {
    if (window.scrollY >= 50 ){
        u('a[simple-top]').first().style = "display: '';";
    } else {
        u('a[simple-top]').first().style = "display: none;";
    }
};
u('a[simple-top]').on('click', function() {
    u('body').scroll()
});
