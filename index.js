
// {
//     let launchDate = new Date("Dec 6, 2023 01:00:00").getTime();
//     //
//     let timer = setInterval(tick, 1000);
//     //
//     function tick() {
//         //
//         let now = new Date().getTime();
//         //
//         let t = launchDate - now;
//         //
//         if (t > 0) {
//             //
//             let days = Math.floor(t / (1000 * 60 * 60 * 24));
//             //
//             if (days < 10) { days = "0" + days; }
//             //
//             let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//             //
//             if (hours < 10) { hours = "0" + hours; }
//             //
//             let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
//             //
//             if (mins < 10) { mins = "0" + mins; }
//             //
//             let secs = Math.floor((t % (1000 * 60)) / 1000);
//             if (secs < 10) { secs = "0" + secs; }

//             //
//             let time = `${days} : ${hours} : ${mins} : ${secs}`;

//             //
//             document.querySelector('.countdown').innerText = time;
//         }
//     }

// }

// // const buttonContent = document.getElementById('buttonContent')

// const sepatuNike = 2
// const sepatuAdidas = 2
// const sepatuCompass = 2
// const sepatuPuma = 2
// const sepatuVans = 2
// const sepatuAerostreet = 2
// const sepatuJordan = 2
// const sepatuEagle = 2
// function buttonContent() {

//     alert('Menunggu you pays')
// }


// const day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
// const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
// let tanggal = new Date().getDate()
// let tahun = new Date().getFullYear()
// let bulan = new Date().getMonth()
// let hari = new Date().getDay()
// let jam = new Date().getHours()
// let menit = new Date().getMinutes()
// let detik = new Date().getSeconds()


// function bulanBener() {
//     for (let j = 0; j < month.length; j++) {
//         if (j == bulan) {
//             return month[j]
//         }
//     }
// }

// for (let i = 0; i < day.length; i++) {
//     if (i == hari) {
//         console.info(`Hari ${day[i]} Tanggal ${tanggal} Bulan ${bulanBener()} Tahun ${tahun} Pukul ${jam}:${menit}:${detik} `)
//     }
// }


// // APP LOCAL STORAGE


// function onLogin() {

// }

// function onLogout() {
//     localStorage.clear();
//     location.reload();
// }

// let coba = "jajajajppp"
function button() {
    let text = "YAKIN INGIN MENGIRIM??";
    let username = document.getElementById('nama-pengisi');
    let password = document.getElementById('password-pengisi');
    let jawaban = document.getElementById('jawaban-pengisi');
    localStorage.setItem("username", username.value)
    localStorage.setItem("password", password.value)
    localStorage.setItem("jawaban", jawaban.getAttribute())
    // if (confirm(text) == true) {
    //     text = coba
       

    //     if (username.value == 'indirwan alvareno' && password.value == 'renopurnama') {
    //         localStorage.setItem("role", "admin");
    //     } else {
    //         localStorage.setItem("role", "basic");
    //     }
    // } else {
    //     text = "You canceled!";
    // }
    // document.getElementById("demo").innerHTML = text;
}

let user = "bapak ljiiiii"
localStorage.setItem("username", user.valueOf())
localStorage.setItem("srs", "mvknv")
