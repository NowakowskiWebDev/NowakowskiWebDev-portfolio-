const hamburger = document.querySelector('#hamburger');
const nav = document.querySelector('#navigation');
const fullName = document.querySelector('#fullName');
const navigationLinks = document.querySelectorAll('.navigation__link');


const handleCLick = () => {
    console.log('siema')
    hamburger.classList.toggle('hamburger--active');
    nav.classList.toggle('navigation--active');
    fullName.classList.toggle('header__full-name--active')
}

hamburger.addEventListener('click', handleCLick)

nav.addEventListener('click',
    navigationLinks.forEach(link => {
        link.addEventListener('click', handleCLick)
    })
)





























// Scroll function
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function () {
        console.log(smoothScroll)
        smoothScroll.scrollTo(this.getAttribute('href'), 1000);
    });
});




! function (i) {
    "use strict";
    var r = i.document,
        e = r.body,
        n = r.documentElement,
        o = i.requestAnimationFrame || i.mozRequestAnimationFrame || i.webkitRequestAnimationFrame || function (t) {
            i.setTimeout(t, 15)
        },
        c = "",
        s = 500,
        u = i,
        a = u.scrollTop || i.pageYOffset,
        f = 0,
        l = function (t, o, e, n) {
            return n < e ? o : t + (f - t) * ((l = e / n) < .5 ? 4 * l * l * l : (l - 1) * (2 * l - 2) * (2 * l - 2) + 1);
            var l
        },
        m = function () {
            var t = Date.now() - c;
            u === i ? i.scroll(0, l(a, f, t, s)) : u.scrollTop = l(a, f, t, s), t <= s && o(m)
        },
        t = function () {};
    t.prototype = {
        scrollTo: function (t, o, e) {
            var n, l;
            c = Date.now(), s = o || 500, a = (u = e || i).scrollTop || i.pageYOffset, l = {}, f = "number" == typeof (n = t) ? n : "string" == typeof n && !!(l = r.querySelector(n)) && l.getBoundingClientRect().top + i.pageYOffset, m()
        },
        scrollTop: function (t, o) {
            this.scrollTo(0, t, o)
        },
        scrollBottom: function (t, o) {
            this.scrollTo(Math.max.apply(null, [e.clientHeight, e.scrollHeight, n.scrollHeight, n.clientHeight]) - i.innerHeight, t, o)
        }
    }, i.smoothScroll = new t
}(window);