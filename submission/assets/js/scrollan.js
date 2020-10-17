(function () {

    var section = document.querySelectorAll(".section"); //get all class yang section
    var sections = {};
    var i = 0;

    Array.prototype.forEach.call(section, function (e) {
        sections[e.id] = e.offsetTop; //section adlah sma 
    });

    // event untuk scroll
    window.onscroll = function () {
        var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop; // cek posisi scroll
        for (i in sections) { // loop section class
            if (sections[i] <= scrollPosition) {  // kalo kurang dari posisi 
                document.querySelector('.active').setAttribute('class', ' ');
                document.querySelector('a[href*=' + i + ']').setAttribute('class', 'active'); // set class pada menu 
            }
        }
    };
})();
