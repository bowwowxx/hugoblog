
if (typeof _wau !== "undefined") {
    var WAU_ren = WAU_ren || [];
    if (document.readyState != "loading") {
        WAU_la()
    } else {
        document.addEventListener("DOMContentLoaded", function(a) {
            WAU_la()
        })
    }
}

function WAU_small(b, d) {
    if (typeof d === "undefined") {
        d = -1;
        if (document.readyState == "loading") {
            document.addEventListener("DOMContentLoaded", function(e) {
                WAU_small(b, -1)
            });
            return
        }
    }
    var a = "";
    if (document.title) {
        a = encodeURIComponent(document.title.substr(0, 80).replace(/(\?=)|(\/)/g, ""))
    }
    var c = document.getElementsByTagName("script")[0];
    (function() {
        var g = 0;
        if (window.performance && window.performance.timing.domContentLoadedEventStart) {
            g = (window.performance.timing.domContentLoadedEventStart - window.performance.timing.navigationStart) / 1000
        }
        var f = encodeURIComponent(document.referrer);
        var e = document.createElement("script");
        e.async = "async";
        e.type = "text/javascript";
        e.src = "https://whos.amung.us/pingjs/?k=" + b + "&t=" + a + "&c=s&y=" + f + "&a=" + d + "&d=" + g + "&v=22&r=" + Math.ceil(Math.random() * 9999);
        c.parentNode.insertBefore(e, c)
    })()
}

function WAU_r_s(c, key, async_index) {
    if (typeof async_index === "undefined") {
        async_index = -1
    }
    var raw_im_data = "data:image/gif;base64,R0lGODlhUAAXAMQAAM1iTdBuWMQ4MsdHOt+ch/js5+/Qw+vCs/Pe1dR6Y+OolNuQespVQ9eFbsAnLX9/fzAwL////zU1NQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAABQABcAAAX/ICSOZGmeaKqu7Bi9L3IcBWzfeK7vfI+LMAPAQXQEEBGJcslsOp/QqFQaAUYMAiIjMnAIDMmpeEweVyGRQtcxIByy7Fd5Ti+fIwTiABYoKsJ1gYJMd30OeIhDRoCDjXR3igAEEQAChgCMjppihUULL3CLm6OcQHlEEQ0JEX6ZpK9Ld2qofZRxrrCvd1dZrA4AlWC5w7FWEQgJRQ4JSMTOuzAFMzU+1dbX1i3a29zdJhIwSkk24OGAOOU56eJyYw8S73ax7bGE54y45fP1YvFzYXIy4btH6Mm4feKYPIi3kCE8eAuXRHRy8OA6duzQkUuYMSMghyAfhnzYpF1FKPjsNPEDyI8jyXchYSqB2ZBiPYs2W+rjyNIlOIkzX4oU6s9gwB4lN4ZzaW5pmIkxhUIs6uzRsBAAOw==";
    var raw_im_meta = "({'0':[0,-15,5,8], '1':[-5,-15,3,8], '2':[-8,-15,5,8], '3':[-13,-15,5,8], '4':[-18,-15,5,8], '5':[-23,-15,5,8], '6':[-28,-15,5,8],'7':[-33,-15,5,8], '8':[-38,-15,5,8], '9':[-43,-15,5,8], ',':[-48,-15,2,8], 'o':[-50,-15,24,8]})";
    var meta = eval(raw_im_meta);
    if (WAU_legacy_b()) {
        raw_im_data = "https://widgets.amung.us/widtemplates/smalloutline.gif"
    }
    c += "o";
    c = c.split("");
    var img = document.createElement("img");
    img.onload = function() {
        var wid = document.createElement("div");
        wid.style.position = "relative";
        wid.style.display = "inline-block";
        wid.style.backgroundImage = "url(" + raw_im_data + ")";
        wid.style.width = "80px";
        wid.style.height = "15px";
        wid.style.padding = "0";
        wid.style.margin = "0";
        wid.style.overflow = "hidden";
        wid.style.cursor = "pointer";
        wid.style.direction = "ltr";
        wid.title = "Click to see what's popular on this site!";
        var x_pos = 20;
        if (c.length > 6 && c[0] != "1") {
            x_pos = 16
        } else {
            if (c.length > 6 && c[0] == "1") {
                x_pos = 17
            }
        }
        for (var i = 0; i < c.length; i++) {
            var char_meta = meta[c[i]];
            var character = document.createElement("div");
            character.style.backgroundImage = "url(" + raw_im_data + ")";
            character.style.backgroundRepeat = "no-repeat";
            character.style.backgroundAttachment = "scroll";
            character.style.backgroundPosition = char_meta[0] + "px " + char_meta[1] + "px";
            character.style.position = "absolute";
            character.style.width = char_meta[2] + "px";
            character.style.height = char_meta[3] + "px";
            character.style.top = "4px";
            character.style.left = x_pos + "px";
            character.style.lineHeight = char_meta[3] + "px";
            character.style.overflow = "hidden";
            character.style.padding = "0";
            character.style.margin = "0";
            wid.appendChild(character);
            x_pos += char_meta[2] + 1
        }
        wid.onclick = function() {
            top.location = "https://whos.amung.us/stats/" + key + "/"
        };
        if (async_index >= 0) {
            var scr = document.getElementById("_wau" + _wau[async_index][2]);
            scr.parentNode.insertBefore(wid, scr.nextSibling)
        } else {
            WAU_insert(wid, "amung.us/small.js")
        }
    };
    img.src = raw_im_data;
    if (typeof WAU_cps_d == "undefined") {
        WAU_cps(key)
    }
}

function WAU_cps(a) {
    window.Tynt = window.Tynt || [];
    if (typeof _wau_opt != "object" || (typeof _wau_opt == "object" && !("fbase" in _wau_opt))) {
        if (document.location.protocol == "http:") {
            Tynt.push("w!" + a);
            (function() {
                var c = document.getElementsByTagName("script")[0];
                var b = document.createElement("script");
                b.async = "async";
                b.type = "text/javascript";
                b.src = "https://cdn.tynt.com/tc.js";
                c.parentNode.insertBefore(b, c)
            })()
        }
    }
}

function WAU_insert(c, d) {
    var a = document.getElementsByTagName("script");
    for (var b = 0; b < a.length; b++) {
        if (a[b].src.indexOf(d) > 0) {
            a[b].parentNode.insertBefore(c, a[b].nextSibling)
        }
    }
}

function WAU_legacy_b() {
    if (navigator.appVersion.indexOf("MSIE") != -1 && parseFloat(navigator.appVersion.split("MSIE")[1]) < 8) {
        return true
    }
    return false
}

function WAU_la() {
    for (var a = 0; a < _wau.length; a++) {
        if (typeof WAU_ren[a] === "undefined" || WAU_ren[a] === false) {
            WAU_ren[a] = true;
            if (typeof window["WAU_" + _wau[a][0]] === "function") {
                if (_wau[a][0] == "map") {
                    window.WAU_map(_wau[a][1], _wau[a][3], _wau[a][4], _wau[a][5], _wau[a][6], a)
                } else {
                    if (typeof _wau[a][3] !== "undefined") {
                        window["WAU_" + _wau[a][0]](_wau[a][1], _wau[a][3], a)
                    } else {
                        window["WAU_" + _wau[a][0]](_wau[a][1], a)
                    }
                }
            }
        }
    }
}(function() {
    if (typeof _wau_opt != "object" || (typeof _wau_opt == "object" && !("fbase" in _wau_opt))) {
        if (window.location.protocol != "https:") {
            var b = document.createElement("script");
            b.src = "//t.dtscout.com/i/?l=" + encodeURIComponent(window.location.href) + "&j=" + encodeURIComponent(document.referrer);
            b.async = "async";
            b.type = "text/javascript";
            var a = document.getElementsByTagName("script")[0];
            a.parentNode.insertBefore(b, a)
        }
    }
})();
