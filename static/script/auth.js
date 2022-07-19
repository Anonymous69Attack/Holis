let state = 0;

let texts = [
    {
        "title": "Crimson",
        "button": "Войти",
        "switch": "Нету аккаунта? Зарегистрировать"
    },
    {
        "title": "Crimson",
        "button": "Зарегистрировать",
        "switch": "Есть аккаунт? Войти"
    }
]

function setState(s) {
    s = s ? 1 : 0;
    state = s;
    let text = texts[s];

    document.querySelector("#form").classList.add("run-animation");
    document.querySelector("#title").textContent = text["title"];
    document.querySelector("#button").querySelector("span").textContent = text["button"];
    document.querySelector("#switch").textContent = text["switch"];
    document.querySelector("#switch").onclick = function () { setState(!s) };
    document.querySelector("#error").style.display = "none";

    setTimeout(() => {
        document.querySelector("#form").classList.remove("run-animation");
    }, 500);
}

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

window.onload = () => {
    let error = urlParams.get('error');

    if (error) {
        document.querySelector("#error").textContent = error;
        document.querySelector("#error").style.display = "block";
    }
}

function setCookie(name, value, options = {}) {

    options = {
        //path: '/',
        ...options
    };

    if (options.expires instanceof Date) {
        options.expires = options.expires.toUTCString();
    }

    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

    for (let optionKey in options) {
        updatedCookie += "; " + optionKey;
        let optionValue = options[optionKey];
        if (optionValue !== true) {
            updatedCookie += "=" + optionValue;
        }
    }

    document.cookie = updatedCookie;
}


async function auth() {
    let login = document.querySelector("#login").value;
    let password = document.querySelector("#password").value;
    console.log(state);
    if (state == 0) {
        const response = await fetch(`/api/log?username=${login}&password=${password}`);
        const json = await response.json();

        if (json.error) {
            window.location = "?error=Неправильный логин или пароль !";
        } else {
            setCookie('token', json.token, {secure: true, 'max-age': 86400 * 30 * 12});
            window.location = "/me";
        }
    }
    else
    {
        

            document.querySelector("#error").style.background = "#82fb6c";
            document.querySelector("#error").style.color = "#111111";
            document.querySelector("#error").style.display = "block";
            document.querySelector("#error").textContent = "Успешно !";

            setTimeout(() => {
                window.location = "/me?first=1";
            }, 1000);
    }
}
