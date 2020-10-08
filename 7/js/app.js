function setCookie(name, value, days) {
    var date = new Date();
    date.setDate(date.getDate() + days);
    document.cookie = name + '=' + escape(value) + '; expires=' + date.toUTCString();
    console.log('cookie ' + name + ' created');
}

function getCookie(cookieName) {
    var pattern = cookieName + '=(?<value>[0-9a-zA-Z\s]+);?';
    var regex = new RegExp(pattern);
    var result = document.cookie.match(regex);
    if (result) {
        return result.groups.value;
    }
}

function showCookieBanner(id) {
    if (!getCookie(id)) {
        document.getElementById(id).classList.add('active');
    }
}

function hideCookieBanner(id) {
    document.getElementById(id).classList.remove('active');
    setCookie(id, true, 5);
}

showCookieBanner('banner-1');
showCookieBanner('banner-2');
showCookieBanner('banner-3');