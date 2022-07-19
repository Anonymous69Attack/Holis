let me; // die
let reload = () => {window.location = window.location};

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

let hideNotify = () => {
    document.querySelector("#notify").style.display = "none";
}

let showNotify = (title, message, duration) => {
    document.querySelector("#notify #title").textContent = title;
    document.querySelector("#notify #message").textContent = message;
    document.querySelector("#notify").style.display = "block";
    setTimeout(hideNotify, duration);
}

async function activatePromo() {
    let promo = document.querySelector("#inpkey").value;
    document.querySelector("#inpkey").value = "";
    if (!promo){
        return;
    }

    const response = await fetch(`/api/activate?user=${me.username}&key=${promo}`);
    const json = await response.json();

    if (json.error){
        if (json.error == 2){
            showNotify("Ошибка", "Этот ключ уже активирован !", 5000);
        }else{
            showNotify("Ошибка", "Неверный ключ !", 5000);
        } 
    }else{
        showNotify("Успешно", "Ключ активирован !", 2000);
        setTimeout(reload, 2000);
    }
}

window.onload = async () => {
    let token = getCookie("token");

        
    const response = await fetch(`/api/auth?token=${token}`);
    const json = await response.json();

    me = json;

    if (json.subtime > Math.floor(Date.now() / 1000)){
        document.querySelector("#time").textContent = "Подписка до " + format_time(json.subtime);
    }

    document.querySelector('#freecheck').checked = json.free;

    if (json.beta){
        document.querySelector('#betacheck').checked = true;
    }else{
        document.querySelector('#betacheck').checked = false;
    }
    

    document.querySelector("#user").textContent = json.username;
    document.querySelector("#inpparams").value = json.params;
}

function format_time(s) {
    const dtFormat = new Intl.DateTimeFormat('ru-RU', {
        timeStyle: 'short',
    });

    const date = new Date(s * 1e3);
    const date_string = date.toLocaleDateString("ru-RU");
    
    return date_string + " " + dtFormat.format(date);
}

async function resetHwid() {
    const response = await fetch(`/api/resethwid?token=${me.token}`);
    const json = await response.json();

    if (json.error){
        showNotify("Ошибка", "Сбросить HWID можно раз в 2 недели !", 5000);
    }else{
        showNotify("Успешно", "Войдите в лаунчер чтобы установить новый !", 5000);
    }
}

async function free_callback() {
    let is_free = document.querySelector('#freecheck').checked;
    let value = is_free ? 1 : 0;
    const response = await fetch(`/api/setfree?token=${me.token}&value=${value}`);
    const json = await response.json();

    if (json.error){
        showNotify("Ошибка", "У вас нету Pro подписки ! Купить ее можно в нашем телеграм боте. ", 5000);
        document.querySelector('#freecheck').checked = true;
    }else{
        if (value === 1){
            showNotify("Успешно", "Вы установили Free версию", 5000);
        }else{
            showNotify("Успешно", "Вы установили Pro версию", 5000);
        }
    }
}

async function beta_callback() {
    let is_beta = document.querySelector('#betacheck').checked;
    let value = is_beta ? 1 : 0;
    const response = await fetch(`/api/setbeta?token=${me.token}&value=${value}`);
    const json = await response.json();

    if (value === 1){
        showNotify("Успешно", "Вы выбрали Beta версию", 5000);
    }
    else{
        showNotify("Успешно", "Вы выбрали Stable версию", 5000);
    }
}

async function params_callback() {
    let params = document.querySelector('#inpparams').value;
    const response = await fetch(`/api/setparams?token=${me.token}&value=${params}`);
    const json = await response.json();

    if (json.error){
        showNotify("Ошибка", "Неизвестная ошибка: " + json.error, 5000);
    }else{
        showNotify("Успешно", "Параметры сохранены !", 5000);
    }
}

let openUrl = (url, blank=false) => {
    if (blank)
        window.open(url, '_blank');
    else
        window.location = url;
}
