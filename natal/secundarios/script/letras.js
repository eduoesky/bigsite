if (window.innerWidth > 768) {

// a - maiúscula

function amaiusculo() {
    const amai = document.createElement("div");
    amai.classList.add("letraamai");
    document.querySelector(".fall").appendChild(amai); //

    //posição
    const startPositionX = Math.random() * window.innerWidth;
    const startPositionY = -100;
    amai.style.left = startPositionX + "px";
    amai.style.top = startPositionY + "px";

    //duração
    const animationDuration = Math.random() * 10 + 2;
    amai.style.animationDuration = animationDuration + "s";

    //tamanho
    const size = Math.random() * 32 + 16;
    amai.style.width = size + "px";
    amai.style.height = size + "px";

    //rotação
    const rotation = Math.random() * 360;
    amai.style.transform = `rotate(${rotation}deg)`;

    //reposição
    amai.addEventListener("animationiteration", () => {
        amai.style.left = Math.random() * window.innerWidth + "px";
        amai.style.top = -50 + "px";
    });
}

    //quantidade
    for (let i = 0; i < 3; i++) {
    amaiusculo();
}

// b - maiúscula

function bmaiusculo() {
    const bmai = document.createElement("div");
    bmai.classList.add("letrabmai");
    document.querySelector(".fall").appendChild(bmai); //

    //posição
    const startPositionX = Math.random() * window.innerWidth;
    const startPositionY = -100;
    bmai.style.left = startPositionX + "px";
    bmai.style.top = startPositionY + "px";

    //duração
    const animationDuration = Math.random() * 10 + 2;
    bmai.style.animationDuration = animationDuration + "s";

    //tamanho
    const size = Math.random() * 32 + 16;
    bmai.style.width = size + "px";
    bmai.style.height = size + "px";

    //rotação
    const rotation = Math.random() * 360;
    bmai.style.transform = `rotate(${rotation}deg)`;

    //reposição
    bmai.addEventListener("animationiteration", () => {
        amai.style.left = Math.random() * window.innerWidth + "px";
        amai.style.top = -50 + "px";
    });
}

    //quantidade
    for (let i = 0; i < 3; i++) {
    bmaiusculo();
}

// c - maiúscula

function cmaiusculo() {
    const cmai = document.createElement("div");
    cmai.classList.add("letracmai");
    document.querySelector(".fall").appendChild(cmai); //

    //posição
    const startPositionX = Math.random() * window.innerWidth;
    const startPositionY = -100;
    cmai.style.left = startPositionX + "px";
    cmai.style.top = startPositionY + "px";

    //duração
    const animationDuration = Math.random() * 10 + 2;
    cmai.style.animationDuration = animationDuration + "s";

    //tamanho
    const size = Math.random() * 32 + 16;
    cmai.style.width = size + "px";
    cmai.style.height = size + "px";

    //rotação
    const rotation = Math.random() * 360;
    cmai.style.transform = `rotate(${rotation}deg)`;

    //reposição
    cmai.addEventListener("animationiteration", () => {
        cmai.style.left = Math.random() * window.innerWidth + "px";
        cmai.style.top = -50 + "px";
    });
}

    //quantidade
    for (let i = 0; i < 3; i++) {
    cmaiusculo();
}

// Ç

function cedilhamaiusculo() {
    const ccmai = document.createElement("div");
    ccmai.classList.add("cedilhamai");
    document.querySelector(".fall").appendChild(ccmai); //

    //posição
    const startPositionX = Math.random() * window.innerWidth;
    const startPositionY = -100;
    ccmai.style.left = startPositionX + "px";
    ccmai.style.top = startPositionY + "px";

    //duração
    const animationDuration = Math.random() * 10 + 2;
    ccmai.style.animationDuration = animationDuration + "s";

    //tamanho
    const size = Math.random() * 32 + 16;
    ccmai.style.width = size + "px";
    ccmai.style.height = size + "px";

    //rotação
    const rotation = Math.random() * 360;
    ccmai.style.transform = `rotate(${rotation}deg)`;

    //reposição
    ccmai.addEventListener("animationiteration", () => {
        ccmai.style.left = Math.random() * window.innerWidth + "px";
        ccmai.style.top = -50 + "px";
    });
}

    //quantidade
    for (let i = 0; i < 3; i++) {
    cedilhamaiusculo();
}

// d - maiúscula

function dmaiusculo() {
    const dmai = document.createElement("div");
    dmai.classList.add("letradmai");
    document.querySelector(".fall").appendChild(dmai); //

    //posição
    const startPositionX = Math.random() * window.innerWidth;
    const startPositionY = -100;
    dmai.style.left = startPositionX + "px";
    dmai.style.top = startPositionY + "px";

    //duração
    const animationDuration = Math.random() * 10 + 2;
    dmai.style.animationDuration = animationDuration + "s";

    //tamanho
    const size = Math.random() * 32 + 16;
    dmai.style.width = size + "px";
    dmai.style.height = size + "px";

    //rotação
    const rotation = Math.random() * 360;
    dmai.style.transform = `rotate(${rotation}deg)`;

    //reposição
    dmai.addEventListener("animationiteration", () => {
        dmai.style.left = Math.random() * window.innerWidth + "px";
        dmai.style.top = -50 + "px";
    });
}

    //quantidade
    for (let i = 0; i < 3; i++) {
    dmaiusculo();
}

// e - maiúsculo


function emaiusculo() {
    const emai = document.createElement("div");
    emai.classList.add("letraemai");
    document.querySelector(".fall").appendChild(emai); //

    //posição
    const startPositionX = Math.random() * window.innerWidth;
    const startPositionY = -100;
    emai.style.left = startPositionX + "px";
    emai.style.top = startPositionY + "px";

    //duração
    const animationDuration = Math.random() * 10 + 2;
    emai.style.animationDuration = animationDuration + "s";

    //tamanho
    const size = Math.random() * 32 + 16;
    emai.style.width = size + "px";
    emai.style.height = size + "px";

    //rotação
    const rotation = Math.random() * 360;
    emai.style.transform = `rotate(${rotation}deg)`;

    //reposição
    emai.addEventListener("animationiteration", () => {
        emai.style.left = Math.random() * window.innerWidth + "px";
        emai.style.top = -50 + "px";
    });
}

    //quantidade
    for (let i = 0; i < 3; i++) {
    emaiusculo();
}

// f - maiúsculo 


function fmaiusculo() {
    const fmai = document.createElement("div");
    fmai.classList.add("letrafmai");
    document.querySelector(".fall").appendChild(fmai); //

    //posição
    const startPositionX = Math.random() * window.innerWidth;
    const startPositionY = -100;
    fmai.style.left = startPositionX + "px";
    fmai.style.top = startPositionY + "px";

    //duração
    const animationDuration = Math.random() * 10 + 2;
    fmai.style.animationDuration = animationDuration + "s";

    //tamanho
    const size = Math.random() * 32 + 16;
    fmai.style.width = size + "px";
    fmai.style.height = size + "px";

    //rotação
    const rotation = Math.random() * 360;
    fmai.style.transform = `rotate(${rotation}deg)`;

    //reposição
    fmai.addEventListener("animationiteration", () => {
        fmai.style.left = Math.random() * window.innerWidth + "px";
        fmai.style.top = -50 + "px";
    });
}

    //quantidade
    for (let i = 0; i < 3; i++) {
    fmaiusculo();
}

// g - maiúsculo


function gmaiusculo() {
    const gmai = document.createElement("div");
    gmai.classList.add("letragmai");
    document.querySelector(".fall").appendChild(gmai); //

    //posição
    const startPositionX = Math.random() * window.innerWidth;
    const startPositionY = -100;
    gmai.style.left = startPositionX + "px";
    gmai.style.top = startPositionY + "px";

    //duração
    const animationDuration = Math.random() * 10 + 2;
    gmai.style.animationDuration = animationDuration + "s";

    //tamanho
    const size = Math.random() * 32 + 16;
    gmai.style.width = size + "px";
    gmai.style.height = size + "px";

    //rotação
    const rotation = Math.random() * 360;
    gmai.style.transform = `rotate(${rotation}deg)`;

    //reposição
    gmai.addEventListener("animationiteration", () => {
        gmai.style.left = Math.random() * window.innerWidth + "px";
        gmai.style.top = -50 + "px";
    });
}

    //quantidade
    for (let i = 0; i < 3; i++) {
    gmaiusculo();
}

// h - maiúsculo


function hmaiusculo() {
    const hmai = document.createElement("div");
    hmai.classList.add("letrahmai");
    document.querySelector(".fall").appendChild(hmai); //

    //posição
    const startPositionX = Math.random() * window.innerWidth;
    const startPositionY = -100;
    hmai.style.left = startPositionX + "px";
    hmai.style.top = startPositionY + "px";

    //duração
    const animationDuration = Math.random() * 10 + 2;
    hmai.style.animationDuration = animationDuration + "s";

    //tamanho
    const size = Math.random() * 32 + 16;
    hmai.style.width = size + "px";
    hmai.style.height = size + "px";

    //rotação
    const rotation = Math.random() * 360;
    hmai.style.transform = `rotate(${rotation}deg)`;

    //reposição
    hmai.addEventListener("animationiteration", () => {
        hmai.style.left = Math.random() * window.innerWidth + "px";
        hmai.style.top = -50 + "px";
    });
}

    //quantidade
    for (let i = 0; i < 3; i++) {
    hmaiusculo();
}

// i - maiusculo

function imaiusculo() {
    const imai = document.createElement("div");
    imai.classList.add("letraimai");
    document.querySelector(".fall").appendChild(imai); //

    //posição
    const startPositionX = Math.random() * window.innerWidth;
    const startPositionY = -100;
    imai.style.left = startPositionX + "px";
    imai.style.top = startPositionY + "px";

    //duração
    const animationDuration = Math.random() * 10 + 2;
    imai.style.animationDuration = animationDuration + "s";

    //tamanho
    const size = Math.random() * 32 + 16;
    imai.style.width = size + "px";
    imai.style.height = size + "px";

    //rotação
    const rotation = Math.random() * 360;
    imai.style.transform = `rotate(${rotation}deg)`;

    //reposição
    imai.addEventListener("animationiteration", () => {
        imai.style.left = Math.random() * window.innerWidth + "px";
        imai.style.top = -50 + "px";
    });
}

//quantidade
for (let i = 0; i < 3; i++) {
    imaiusculo();
}

//j - maiúsculo

function jmaiusculo() {
    const jmai = document.createElement("div");
    jmai.classList.add("letrajmai");
    document.querySelector(".fall").appendChild(jmai); //

    //posição
    const startPositionX = Math.random() * window.innerWidth;
    const startPositionY = -100;
    jmai.style.left = startPositionX + "px";
    jmai.style.top = startPositionY + "px";

    //duração
    const animationDuration = Math.random() * 10 + 2;
    jmai.style.animationDuration = animationDuration + "s";

    //tamanho
    const size = Math.random() * 32 + 16;
    jmai.style.width = size + "px";
    jmai.style.height = size + "px";

    //rotação
    const rotation = Math.random() * 360;
    jmai.style.transform = `rotate(${rotation}deg)`;

    //reposição
    jmai.addEventListener("animationiteration", () => {
        jmai.style.left = Math.random() * window.innerWidth + "px";
        jmai.style.top = -50 + "px";
    });
}

//quantidade
for (let i = 0; i < 3; i++) {
    jmaiusculo();
}

// k - maiúsculo

function kmaiusculo() {
    const kmai = document.createElement("div");
    kmai.classList.add("letrakmai");
    document.querySelector(".fall").appendChild(kmai); //

    //posição
    const startPositionX = Math.random() * window.innerWidth;
    const startPositionY = -100;
    kmai.style.left = startPositionX + "px";
    kmai.style.top = startPositionY + "px";

    //duração
    const animationDuration = Math.random() * 10 + 2;
    kmai.style.animationDuration = animationDuration + "s";

    //tamanho
    const size = Math.random() * 32 + 16;
    kmai.style.width = size + "px";
    kmai.style.height = size + "px";

    //rotação
    const rotation = Math.random() * 360;
    kmai.style.transform = `rotate(${rotation}deg)`;

    //reposição
    kmai.addEventListener("animationiteration", () => {
        kmai.style.left = Math.random() * window.innerWidth + "px";
        kmai.style.top = -50 + "px";
    });
}

//quantidade
for (let i = 0; i < 3; i++) {
    kmaiusculo();
}

// l maiúsculo

function lmaiusculo() {
    const lmai = document.createElement("div");
    lmai.classList.add("letralmai");
    document.querySelector(".fall").appendChild(lmai); //

    //posição
    const startPositionX = Math.random() * window.innerWidth;
    const startPositionY = -100;
    lmai.style.left = startPositionX + "px";
    lmai.style.top = startPositionY + "px";

    //duração
    const animationDuration = Math.random() * 10 + 2;
    lmai.style.animationDuration = animationDuration + "s";

    //tamanho
    const size = Math.random() * 32 + 16;
    lmai.style.width = size + "px";
    lmai.style.height = size + "px";

    //rotação
    const rotation = Math.random() * 360;
    lmai.style.transform = `rotate(${rotation}deg)`;

    //reposição
    lmai.addEventListener("animationiteration", () => {
        lmai.style.left = Math.random() * window.innerWidth + "px";
        lmai.style.top = -50 + "px";
    });
}

//quantidade
for (let i = 0; i < 3; i++) {
    lmaiusculo();
}

// m - maiúsculo

function mmaiusculo() {
    const mmai = document.createElement("div");
    mmai.classList.add("lettrammai");
    document.querySelector(".fall").appendChild(mmai); //

    //posição
    const startPositionX = Math.random() * window.innerWidth;
    const startPositionY = -100;
    mmai.style.left = startPositionX + "px";
    mmai.style.top = startPositionY + "px";

    //duração
    const animationDuration = Math.random() * 10 + 2;
    mmai.style.animationDuration = animationDuration + "s";

    //tamanho
    const size = Math.random() * 32 + 16;
    mmai.style.width = size + "px";
    mmai.style.height = size + "px";

    //rotação
    const rotation = Math.random() * 360;
    mmai.style.transform = `rotate(${rotation}deg)`;

    //reposição
    mmai.addEventListener("animationiteration", () => {
        mmai.style.left = Math.random() * window.innerWidth + "px";
        mmai.style.top = -50 + "px";
    });
}

//quantidade
for (let i = 0; i < 3; i++) {
    mmaiusculo();
}

// n - maiúscula

function nmaiusculo() {
    const nmai = document.createElement("div");
    nmai.classList.add("letranmai");
    document.querySelector(".fall").appendChild(nmai); //

    //posição
    const startPositionX = Math.random() * window.innerWidth;
    const startPositionY = -100;
    nmai.style.left = startPositionX + "px";
    nmai.style.top = startPositionY + "px";

    //duração
    const animationDuration = Math.random() * 10 + 2;
    nmai.style.animationDuration = animationDuration + "s";

    //tamanho
    const size = Math.random() * 32 + 16;
    nmai.style.width = size + "px";
    nmai.style.height = size + "px";

    //rotação
    const rotation = Math.random() * 360;
    nmai.style.transform = `rotate(${rotation}deg)`;

    //reposição
    nmai.addEventListener("animationiteration", () => {
        nmai.style.left = Math.random() * window.innerWidth + "px";
        nmai.style.top = -50 + "px";
    });
}

//quantidade
for (let i = 0; i < 3; i++) {
    nmaiusculo();
}

// Ñ (espanhol, maiúsculo)

function nnmaiusculo() {
    const nnmai = document.createElement("div");
    nnmai.classList.add("letrannmai");
    document.querySelector(".fall").appendChild(nnmai); //

    //posição
    const startPositionX = Math.random() * window.innerWidth;
    const startPositionY = -100;
    nnmai.style.left = startPositionX + "px";
    nnmai.style.top = startPositionY + "px";

    //duração
    const animationDuration = Math.random() * 10 + 2;
    nnmai.style.animationDuration = animationDuration + "s";

    //tamanho
    const size = Math.random() * 32 + 16;
    nnmai.style.width = size + "px";
    nnmai.style.height = size + "px";

    //rotação
    const rotation = Math.random() * 360;
    nnmai.style.transform = `rotate(${rotation}deg)`;

    //reposição
    nnmai.addEventListener("animationiteration", () => {
        nnmai.style.left = Math.random() * window.innerWidth + "px";
        nnmai.style.top = -50 + "px";
    });
}

//quantidade
for (let i = 0; i < 3; i++) {
    nnmaiusculo();
}

// o

function omaiusculo() {
    const omai = document.createElement("div");
    omai.classList.add("letrao");
    document.querySelector(".fall").appendChild(omai); //

    //posição
    const startPositionX = Math.random() * window.innerWidth;
    const startPositionY = -100;
    omai.style.left = startPositionX + "px";
    omai.style.top = startPositionY + "px";

    //duração
    const animationDuration = Math.random() * 10 + 2;
    omai.style.animationDuration = animationDuration + "s";

    //tamanho
    const size = Math.random() * 32 + 16;
    omai.style.width = size + "px";
    omai.style.height = size + "px";

    //rotação
    const rotation = Math.random() * 360;
    omai.style.transform = `rotate(${rotation}deg)`;

    //reposição
    omai.addEventListener("animationiteration", () => {
        omai.style.left = Math.random() * window.innerWidth + "px";
        omai.style.top = -50 + "px";
    });
}

//quantidade
for (let i = 0; i < 3; i++) {
    omaiusculo();
}

// p

function pmaiusculo() {
    const pmai = document.createElement("div");
    pmai.classList.add("letrapmai");
    document.querySelector(".fall").appendChild(pmai); //

    //posição
    const startPositionX = Math.random() * window.innerWidth;
    const startPositionY = -100;
    pmai.style.left = startPositionX + "px";
    pmai.style.top = startPositionY + "px";

    //duração
    const animationDuration = Math.random() * 10 + 2;
    pmai.style.animationDuration = animationDuration + "s";

    //tamanho
    const size = Math.random() * 32 + 16;
    pmai.style.width = size + "px";
    pmai.style.height = size + "px";

    //rotação
    const rotation = Math.random() * 360;
    pmai.style.transform = `rotate(${rotation}deg)`;

    //reposição
    pmai.addEventListener("animationiteration", () => {
        pmai.style.left = Math.random() * window.innerWidth + "px";
        pmai.style.top = -50 + "px";
    });
}

//quantidade
for (let i = 0; i < 3; i++) {
    pmaiusculo();
}

// q

function qmaiusculo() {
    const qmai = document.createElement("div");
    qmai.classList.add("letraqmai");
    document.querySelector(".fall").appendChild(qmai);

    //posição
    const startPositionX = Math.random() * window.innerWidth;
    const startPositionY = -100;
    qmai.style.left = startPositionX + "px";
    qmai.style.top = startPositionY + "px";

    //duração
    const animationDuration = Math.random() * 10 + 2;
    qmai.style.animationDuration = animationDuration + "s";

    //tamanho
    const size = Math.random() * 32 + 16;
    qmai.style.width = size + "px";
    qmai.style.height = size + "px";

    //rotação
    const rotation = Math.random() * 360;
    qmai.style.transform = `rotate(${rotation}deg)`;

    //reposição
    qmai.addEventListener("animationiteration", () => {
        qmai.style.left = Math.random() * window.innerWidth + "px";
        qmai.style.top = -50 + "px";
    });
}

//quantidade
for (let i = 0; i < 3; i++) {
    qmaiusculo();
}

// r - maiúsculo

function rmaiusculo() {
    const rmai = document.createElement("div");
    rmai.classList.add("letrarmai");
    document.querySelector(".fall").appendChild(rmai); //

    //posição
    const startPositionX = Math.random() * window.innerWidth;
    const startPositionY = -100;
    rmai.style.left = startPositionX + "px";
    rmai.style.top = startPositionY + "px";

    //duração
    const animationDuration = Math.random() * 10 + 2;
    rmai.style.animationDuration = animationDuration + "s";

    //tamanho
    const size = Math.random() * 32 + 16;
    rmai.style.width = size + "px";
    rmai.style.height = size + "px";

    //rotação
    const rotation = Math.random() * 360;
    rmai.style.transform = `rotate(${rotation}deg)`;

    //reposição
    rmai.addEventListener("animationiteration", () => {
        rmai.style.left = Math.random() * window.innerWidth + "px";
        rmai.style.top = -50 + "px";
    });
}

//quantidade
for (let i = 0; i < 3; i++) {
    rmaiusculo();
}

// s - maiúsculo

function smaiusculo() {
    const smai = document.createElement("div");
    smai.classList.add("letrasmai");
    document.querySelector(".fall").appendChild(smai); //

    //posição
    const startPositionX = Math.random() * window.innerWidth;
    const startPositionY = -100;
    smai.style.left = startPositionX + "px";
    smai.style.top = startPositionY + "px";

    //duração
    const animationDuration = Math.random() * 10 + 2;
    smai.style.animationDuration = animationDuration + "s";

    //tamanho
    const size = Math.random() * 32 + 16;
    smai.style.width = size + "px";
    smai.style.height = size + "px";

    //rotação
    const rotation = Math.random() * 360;
    smai.style.transform = `rotate(${rotation}deg)`;

    //reposição
    smai.addEventListener("animationiteration", () => {
        smai.style.left = Math.random() * window.innerWidth + "px";
        smai.style.top = -50 + "px";
    });
}

//quantidade
for (let i = 0; i < 3; i++) {
    smaiusculo();
}

// t - maiúsculo

function tmaiusculo() {
    const tmai = document.createElement("div");
    tmai.classList.add("letratmai");
    document.querySelector(".fall").appendChild(tmai); //

    //posição
    const startPositionX = Math.random() * window.innerWidth;
    const startPositionY = -100;
    tmai.style.left = startPositionX + "px";
    tmai.style.top = startPositionY + "px";

    //duração
    const animationDuration = Math.random() * 10 + 2;
    tmai.style.animationDuration = animationDuration + "s";

    //tamanho
    const size = Math.random() * 32 + 16;
    tmai.style.width = size + "px";
    tmai.style.height = size + "px";

    //rotação
    const rotation = Math.random() * 360;
    tmai.style.transform = `rotate(${rotation}deg)`;

    //reposição
    tmai.addEventListener("animationiteration", () => {
        tmai.style.left = Math.random() * window.innerWidth + "px";
        tmai.style.top = -50 + "px";
    });
}

//quantidade
for (let i = 0; i < 3; i++) {
    tmaiusculo();
}

// u - maiúsculo

function umaiusculo() {
    const umai = document.createElement("div");
    umai.classList.add("letraumai");
    document.querySelector(".fall").appendChild(umai); //

    //posição
    const startPositionX = Math.random() * window.innerWidth;
    const startPositionY = -100;
    umai.style.left = startPositionX + "px";
    umai.style.top = startPositionY + "px";

    //duração
    const animationDuration = Math.random() * 10 + 2;
    umai.style.animationDuration = animationDuration + "s";

    //tamanho
    const size = Math.random() * 32 + 16;
    umai.style.width = size + "px";
    umai.style.height = size + "px";

    //rotação
    const rotation = Math.random() * 360;
    umai.style.transform = `rotate(${rotation}deg)`;

    //reposição
    umai.addEventListener("animationiteration", () => {
        umai.style.left = Math.random() * window.innerWidth + "px";
        umai.style.top = -50 + "px";
    });
}

// trema Ü

function trema() {
    const trema = document.createElement("div");
    trema.classList.add("trema");
    document.querySelector(".fall").appendChild(trema); //

    //posição
    const startPositionX = Math.random() * window.innerWidth;
    const startPositionY = -100;
    trema.style.left = startPositionX + "px";
    trema.style.top = startPositionY + "px";

    //duração
    const animationDuration = Math.random() * 10 + 2;
    trema.style.animationDuration = animationDuration + "s";

    //tamanho
    const size = Math.random() * 32 + 16;
    trema.style.width = size + "px";
    trema.style.height = size + "px";

    //rotação
    const rotation = Math.random() * 360;
    trema.style.transform = `rotate(${rotation}deg)`;

    //reposição
    trema.addEventListener("animationiteration", () => {
        trema.style.left = Math.random() * window.innerWidth + "px";
        trema.style.top = -50 + "px";
    });
}

//quantidade
for (let i = 0; i < 6; i++) {
    trema();
}

// v - maiúsculo

function vmaiusculo() {
    const vmai = document.createElement("div");
    vmai.classList.add("letravmai");
    document.querySelector(".fall").appendChild(vmai); //

    //posição
    const startPositionX = Math.random() * window.innerWidth;
    const startPositionY = -100;
    vmai.style.left = startPositionX + "px";
    vmai.style.top = startPositionY + "px";

    //duração
    const animationDuration = Math.random() * 10 + 2;
    vmai.style.animationDuration = animationDuration + "s";

    //tamanho
    const size = Math.random() * 32 + 16;
    vmai.style.width = size + "px";
    vmai.style.height = size + "px";

    //rotação
    const rotation = Math.random() * 360;
    vmai.style.transform = `rotate(${rotation}deg)`;

    //reposição
    vmai.addEventListener("animationiteration", () => {
        vmai.style.left = Math.random() * window.innerWidth + "px";
        vmai.style.top = -50 + "px";
    });
}

//quantidade
for (let i = 0; i < 3; i++) {
    vmaiusculo();
}

// x - maiúsculo 

function xmaiusculo() {
    const xmai = document.createElement("div");
    xmai.classList.add("letraxmai");
    document.querySelector(".fall").appendChild(xmai); //

    //posição
    const startPositionX = Math.random() * window.innerWidth;
    const startPositionY = -100;
    xmai.style.left = startPositionX + "px";
    xmai.style.top = startPositionY + "px";

    //duração
    const animationDuration = Math.random() * 10 + 2;
    xmai.style.animationDuration = animationDuration + "s";

    //tamanho
    const size = Math.random() * 32 + 16;
    xmai.style.width = size + "px";
    xmai.style.height = size + "px";

    //rotação
    const rotation = Math.random() * 360;
    xmai.style.transform = `rotate(${rotation}deg)`;

    //reposição
    xmai.addEventListener("animationiteration", () => {
        xmai.style.left = Math.random() * window.innerWidth + "px";
        xmai.style.top = -50 + "px";
    });
}

//quantidade
for (let i = 0; i < 3; i++) {
    xmaiusculo();
}

// y - maiúsculo

function ymaiusculo() {
    const ymai = document.createElement("div");
    ymai.classList.add("letraymai");
    document.querySelector(".fall").appendChild(ymai); //

    //posição
    const startPositionX = Math.random() * window.innerWidth;
    const startPositionY = -100;
    ymai.style.left = startPositionX + "px";
    ymai.style.top = startPositionY + "px";

    //duração
    const animationDuration = Math.random() * 10 + 2;
    ymai.style.animationDuration = animationDuration + "s";

    //tamanho
    const size = Math.random() * 32 + 16;
    ymai.style.width = size + "px";
    ymai.style.height = size + "px";

    //rotação
    const rotation = Math.random() * 360;
    ymai.style.transform = `rotate(${rotation}deg)`;

    //reposição
    ymai.addEventListener("animationiteration", () => {
        ymai.style.left = Math.random() * window.innerWidth + "px";
        ymai.style.top = -50 + "px";
    });
}

//quantidade
for (let i = 0; i < 3; i++) {
    ymaiusculo();
}

// z - maiúsculo

function zmaiusculo() {
    const zmai = document.createElement("div");
    zmai.classList.add("letrazmai");
    document.querySelector(".fall").appendChild(zmai); //

    //posição
    const startPositionX = Math.random() * window.innerWidth;
    const startPositionY = -100;
    zmai.style.left = startPositionX + "px";
    zmai.style.top = startPositionY + "px";

    //duração
    const animationDuration = Math.random() * 10 + 2;
    zmai.style.animationDuration = animationDuration + "s";

    //tamanho
    const size = Math.random() * 32 + 16;
    zmai.style.width = size + "px";
    zmai.style.height = size + "px";

    //rotação
    const rotation = Math.random() * 360;
    zmai.style.transform = `rotate(${rotation}deg)`;

    //reposição
    zmai.addEventListener("animationiteration", () => {
        zmai.style.left = Math.random() * window.innerWidth + "px";
        zmai.style.top = -50 + "px";
    });
}

//quantidade
for (let i = 0; i < 3; i++) {
    zmaiusculo();
}

/////// minúsculas

// a - minúsculo
function aminusculo() {
    const amin = document.createElement("div");
    amin.classList.add("letraamin");
    document.querySelector(".fall").appendChild(amin); //

    //posição
    const startPositionX = Math.random() * window.innerWidth;
    const startPositionY = -100;
    amin.style.left = startPositionX + "px";
    amin.style.top = startPositionY + "px";

    //duração
    const animationDuration = Math.random() * 10 + 2;
    amin.style.animationDuration = animationDuration + "s";

    //tamanho
    const size = Math.random() * 32 + 16;
    amin.style.width = size + "px";
    amin.style.height = size + "px";

    //rotação
    const rotation = Math.random() * 360;
    amin.style.transform = `rotate(${rotation}deg)`;

    //reposição
    amin.addEventListener("animationiteration", () => {
        amin.style.left = Math.random() * window.innerWidth + "px";
        amin.style.top = -50 + "px";
    });
}

    //quantidade
    for (let i = 0; i < 3; i++) {
    aminusculo();
}

// b - minúsculo
function bminusculo() {
    const bmin = document.createElement("div");
    bmin.classList.add("letrabmin");
    document.querySelector(".fall").appendChild(bmin); //

    //posição
    const startPositionX = Math.random() * window.innerWidth;
    const startPositionY = -100;
    bmin.style.left = startPositionX + "px";
    bmin.style.top = startPositionY + "px";

    //duração
    const animationDuration = Math.random() * 10 + 2;
    bmin.style.animationDuration = animationDuration + "s";

    //tamanho
    const size = Math.random() * 32 + 16;
    bmin.style.width = size + "px";
    bmin.style.height = size + "px";

    //rotação
    const rotation = Math.random() * 360;
    bmin.style.transform = `rotate(${rotation}deg)`;

    //reposição
    bmin.addEventListener("animationiteration", () => {
        bmin.style.left = Math.random() * window.innerWidth + "px";
        bmin.style.top = -50 + "px";
    });
}

//quantidade
for (let i = 0; i < 3; i++) {
    bminusculo();
}

// c - minúsculo
function cminusculo() {
    const cmin = document.createElement("div");
    cmin.classList.add("letracmin");
    document.querySelector(".fall").appendChild(cmin);

    //posição
    const startPositionX = Math.random() * window.innerWidth;
    const startPositionY = -100;
    cmin.style.left = startPositionX + "px";
    cmin.style.top = startPositionY + "px";

    //duração
    const animationDuration = Math.random() * 10 + 2;
    cmin.style.animationDuration = animationDuration + "s";

    //tamanho
    const size = Math.random() * 32 + 16;
    cmin.style.width = size + "px";
    cmin.style.height = size + "px";

    //rotação
    const rotation = Math.random() * 360;
    cmin.style.transform = `rotate(${rotation}deg)`;

    //reposição
    cmin.addEventListener("animationiteration", () => {
        cmin.style.left = Math.random() * window.innerWidth + "px";
        cmin.style.top = -50 + "px";
    });
}

//quantidade
for (let i = 0; i < 3; i++) {
    cminusculo();
}

// ç

function cedilhaminusculo() {
    const ccmin = document.createElement("div");
    ccmin.classList.add("cedilhamin");
    document.querySelector(".fall").appendChild(ccmin);

    //posição
    const startPositionX = Math.random() * window.innerWidth;
    const startPositionY = -100;
    ccmin.style.left = startPositionX + "px";
    ccmin.style.top = startPositionY + "px";

    //duração
    const animationDuration = Math.random() * 10 + 2;
    ccmin.style.animationDuration = animationDuration + "s";

    //tamanho
    const size = Math.random() * 32 + 16;
    ccmin.style.width = size + "px";
    ccmin.style.height = size + "px";

    //rotação
    const rotation = Math.random() * 360;
    ccmin.style.transform = `rotate(${rotation}deg)`;

    //reposição
    ccmin.addEventListener("animationiteration", () => {
        ccmin.style.left = Math.random() * window.innerWidth + "px";
        ccmin.style.top = -50 + "px";
    });
}

//quantidade
for (let i = 0; i < 3; i++) {
    cedilhaminusculo();
}

// d - minúsculo
function dminusculo() {
    const dmin = document.createElement("div");
    dmin.classList.add("letradmin");
    document.querySelector(".fall").appendChild(dmin); //

    //posição
    const startPositionX = Math.random() * window.innerWidth;
    const startPositionY = -100;
    dmin.style.left = startPositionX + "px";
    dmin.style.top = startPositionY + "px";

    //duração
    const animationDuration = Math.random() * 10 + 2;
    dmin.style.animationDuration = animationDuration + "s";

    //tamanho
    const size = Math.random() * 32 + 16;
    dmin.style.width = size + "px";
    dmin.style.height = size + "px";

    //rotação
    const rotation = Math.random() * 360;
    dmin.style.transform = `rotate(${rotation}deg)`;

    //reposição
    dmin.addEventListener("animationiteration", () => {
        dmin.style.left = Math.random() * window.innerWidth + "px";
        dmin.style.top = -50 + "px";
    });
}

//quantidade
for (let i = 0; i < 3; i++) {
    dminusculo();
}

// e - minúsculo
function eminusculo() {
    const emin = document.createElement("div");
    emin.classList.add("letraemin");
    document.querySelector(".fall").appendChild(emin); //

    //posição
    const startPositionX = Math.random() * window.innerWidth;
    const startPositionY = -100;
    emin.style.left = startPositionX + "px";
    emin.style.top = startPositionY + "px";

    //duração
    const animationDuration = Math.random() * 10 + 2;
    emin.style.animationDuration = animationDuration + "s";

    //tamanho
    const size = Math.random() * 32 + 16;
    emin.style.width = size + "px";
    emin.style.height = size + "px";

    //rotação
    const rotation = Math.random() * 360;
    emin.style.transform = `rotate(${rotation}deg)`;

    //reposição
    emin.addEventListener("animationiteration", () => {
        emin.style.left = Math.random() * window.innerWidth + "px";
        emin.style.top = -50 + "px";
    });
}

//quantidade
for (let i = 0; i < 3; i++) {
    eminusculo();
}

// f - minúsculo
function fminusculo() {
    const fmin = document.createElement("div");
    fmin.classList.add("letrafmin");
    document.querySelector(".fall").appendChild(fmin); //

    //posição
    const startPositionX = Math.random() * window.innerWidth;
    const startPositionY = -100;
    fmin.style.left = startPositionX + "px";
    fmin.style.top = startPositionY + "px";

    //duração
    const animationDuration = Math.random() * 10 + 2;
    fmin.style.animationDuration = animationDuration + "s";

    //tamanho
    const size = Math.random() * 32 + 16;
    fmin.style.width = size + "px";
    fmin.style.height = size + "px";

    //rotação
    const rotation = Math.random() * 360;
    fmin.style.transform = `rotate(${rotation}deg)`;

    //reposição
    fmin.addEventListener("animationiteration", () => {
        fmin.style.left = Math.random() * window.innerWidth + "px";
        fmin.style.top = -50 + "px";
    });
}

//quantidade
for (let i = 0; i < 3; i++) {
    fminusculo();
}

// g - minúsculo
function gminusculo() {
    const gmin = document.createElement("div");
    gmin.classList.add("letragmin");
    document.querySelector(".fall").appendChild(gmin); //

    //posição
    const startPositionX = Math.random() * window.innerWidth;
    const startPositionY = -100;
    gmin.style.left = startPositionX + "px";
    gmin.style.top = startPositionY + "px";

    //duração
    const animationDuration = Math.random() * 10 + 2;
    gmin.style.animationDuration = animationDuration + "s";

    //tamanho
    const size = Math.random() * 32 + 16;
    gmin.style.width = size + "px";
    gmin.style.height = size + "px";

    //rotação
    const rotation = Math.random() * 360;
    gmin.style.transform = `rotate(${rotation}deg)`;

    //reposição
    gmin.addEventListener("animationiteration", () => {
        gmin.style.left = Math.random() * window.innerWidth + "px";
        gmin.style.top = -50 + "px";
    });
}

//quantidade
for (let i = 0; i < 3; i++) {
    gminusculo();
}

// h - minúsculo
function hminusculo() {
    const hmin = document.createElement("div");
    hmin.classList.add("letrahmin");
    document.querySelector(".fall").appendChild(hmin); //

    //posição
    const startPositionX = Math.random() * window.innerWidth;
    const startPositionY = -100;
    hmin.style.left = startPositionX + "px";
    hmin.style.top = startPositionY + "px";

    //duração
    const animationDuration = Math.random() * 10 + 2;
    hmin.style.animationDuration = animationDuration + "s";

    //tamanho
    const size = Math.random() * 32 + 16;
    hmin.style.width = size + "px";
    hmin.style.height = size + "px";

    //rotação
    const rotation = Math.random() * 360;
    hmin.style.transform = `rotate(${rotation}deg)`;

    //reposição
    hmin.addEventListener("animationiteration", () => {
        hmin.style.left = Math.random() * window.innerWidth + "px";
        hmin.style.top = -50 + "px";
    });
}

//quantidade
for (let i = 0; i < 3; i++) {
    hminusculo();
}

// i - minúsculo
function iminusculo() {
    const imin = document.createElement("div");
    imin.classList.add("letraimin");
    document.querySelector(".fall").appendChild(imin); //

    //posição
    const startPositionX = Math.random() * window.innerWidth;
    const startPositionY = -100;
    imin.style.left = startPositionX + "px";
    imin.style.top = startPositionY + "px";

    //duração
    const animationDuration = Math.random() * 10 + 2;
    imin.style.animationDuration = animationDuration + "s";

    //tamanho
    const size = Math.random() * 32 + 16;
    imin.style.width = size + "px";
    imin.style.height = size + "px";

    //rotação
    const rotation = Math.random() * 360;
    imin.style.transform = `rotate(${rotation}deg)`;

    //reposição
    imin.addEventListener("animationiteration", () => {
        imin.style.left = Math.random() * window.innerWidth + "px";
        imin.style.top = -50 + "px";
    });
}

//quantidade
for (let i = 0; i < 3; i++) {
    iminusculo();
}

// j - minúsculo
function jminusculo() {
    const jmin = document.createElement("div");
    jmin.classList.add("letrajmin");
    document.querySelector(".fall").appendChild(jmin); //

    //posição
    const startPositionX = Math.random() * window.innerWidth;
    const startPositionY = -100;
    jmin.style.left = startPositionX + "px";
    jmin.style.top = startPositionY + "px";

    //duração
    const animationDuration = Math.random() * 10 + 2;
    jmin.style.animationDuration = animationDuration + "s";

    //tamanho
    const size = Math.random() * 32 + 16;
    jmin.style.width = size + "px";
    jmin.style.height = size + "px";

    //rotação
    const rotation = Math.random() * 360;
    jmin.style.transform = `rotate(${rotation}deg)`;

    //reposição
    jmin.addEventListener("animationiteration", () => {
        jmin.style.left = Math.random() * window.innerWidth + "px";
        jmin.style.top = -50 + "px";
    });
}

//quantidade
for (let i = 0; i < 3; i++) {
    jminusculo();
}

// k - minúsculo
function kminusculo() {
    const kmin = document.createElement("div");
    kmin.classList.add("letrakmin");
    document.querySelector(".fall").appendChild(kmin); //

    //posição
    const startPositionX = Math.random() * window.innerWidth;
    const startPositionY = -100;
    kmin.style.left = startPositionX + "px";
    kmin.style.top = startPositionY + "px";

    //duração
    const animationDuration = Math.random() * 10 + 2;
    kmin.style.animationDuration = animationDuration + "s";

    //tamanho
    const size = Math.random() * 32 + 16;
    kmin.style.width = size + "px";
    kmin.style.height = size + "px";

    //rotação
    const rotation = Math.random() * 360;
    kmin.style.transform = `rotate(${rotation}deg)`;

    //reposição
    kmin.addEventListener("animationiteration", () => {
        kmin.style.left = Math.random() * window.innerWidth + "px";
        kmin.style.top = -50 + "px";
    });
}

//quantidade
for (let i = 0; i < 3; i++) {
    kminusculo();
}

// l - minúsculo
function lminusculo() {
    const lmin = document.createElement("div");
    lmin.classList.add("letralmin");
    document.querySelector(".fall").appendChild(lmin); //

    //posição
    const startPositionX = Math.random() * window.innerWidth;
    const startPositionY = -100;
    lmin.style.left = startPositionX + "px";
    lmin.style.top = startPositionY + "px";

    //duração
    const animationDuration = Math.random() * 10 + 2;
    lmin.style.animationDuration = animationDuration + "s";

    //tamanho
    const size = Math.random() * 32 + 16;
    lmin.style.width = size + "px";
    lmin.style.height = size + "px";

    //rotação
    const rotation = Math.random() * 360;
    lmin.style.transform = `rotate(${rotation}deg)`;

    //reposição
    lmin.addEventListener("animationiteration", () => {
        lmin.style.left = Math.random() * window.innerWidth + "px";
        lmin.style.top = -50 + "px";
    });
}

//quantidade
for (let i = 0; i < 3; i++) {
    lminusculo();
}

// m - minúsculo
function mminusculo() {
    const mmin = document.createElement("div");
    mmin.classList.add("letrammin");
    document.querySelector(".fall").appendChild(mmin); //

    //posição
    const startPositionX = Math.random() * window.innerWidth;
    const startPositionY = -100;
    mmin.style.left = startPositionX + "px";
    mmin.style.top = startPositionY + "px";

    //duração
    const animationDuration = Math.random() * 10 + 2;
    mmin.style.animationDuration = animationDuration + "s";

    //tamanho
    const size = Math.random() * 32 + 16;
    mmin.style.width = size + "px";
    mmin.style.height = size + "px";

    //rotação
    const rotation = Math.random() * 360;
    mmin.style.transform = `rotate(${rotation}deg)`;

    //reposição
    mmin.addEventListener("animationiteration", () => {
        mmin.style.left = Math.random() * window.innerWidth + "px";
        mmin.style.top = -50 + "px";
    });
}

//quantidade
for (let i = 0; i < 3; i++) {
    mminusculo();
}

// n - minúsculo
function nminusculo() {
    const nmin = document.createElement("div");
    nmin.classList.add("letranmin");
    document.querySelector(".fall").appendChild(nmin); //

    //posição
    const startPositionX = Math.random() * window.innerWidth;
    const startPositionY = -100;
    nmin.style.left = startPositionX + "px";
    nmin.style.top = startPositionY + "px";

    //duração
    const animationDuration = Math.random() * 10 + 2;
    nmin.style.animationDuration = animationDuration + "s";

    //tamanho
    const size = Math.random() * 32 + 16;
    nmin.style.width = size + "px";
    nmin.style.height = size + "px";

    //rotação
    const rotation = Math.random() * 360;
    nmin.style.transform = `rotate(${rotation}deg)`;

    //reposição
    nmin.addEventListener("animationiteration", () => {
        nmin.style.left = Math.random() * window.innerWidth + "px";
        nmin.style.top = -50 + "px";
    });
}

//quantidade
for (let i = 0; i < 3; i++) {
    nminusculo();
}

// ñ (espanhol, minúsculo)

function nnminusculo() {
    const nnmin = document.createElement("div");
    nnmin.classList.add("letrannmin");
    document.querySelector(".fall").appendChild(nnmin); //

    //posição
    const startPositionX = Math.random() * window.innerWidth;
    const startPositionY = -100;
    nnmin.style.left = startPositionX + "px";
    nnmin.style.top = startPositionY + "px";

    //duração
    const animationDuration = Math.random() * 10 + 2;
    nnmin.style.animationDuration = animationDuration + "s";

    //tamanho
    const size = Math.random() * 32 + 16;
    nnmin.style.width = size + "px";
    nnmin.style.height = size + "px";

    //rotação
    const rotation = Math.random() * 360;
    nnmin.style.transform = `rotate(${rotation}deg)`;

    //reposição
    nnmin.addEventListener("animationiteration", () => {
        nnmin.style.left = Math.random() * window.innerWidth + "px";
        nnmin.style.top = -50 + "px";
    });
}

//quantidade
for (let i = 0; i < 3; i++) {
    nnminusculo();
}

// r - minúsculo
function rminusculo() {
    const rmin = document.createElement("div");
    rmin.classList.add("letrarmin");
    document.querySelector(".fall").appendChild(rmin); //

    //posição
    const startPositionX = Math.random() * window.innerWidth;
    const startPositionY = -100;
    rmin.style.left = startPositionX + "px";
    rmin.style.top = startPositionY + "px";

    //duração
    const animationDuration = Math.random() * 10 + 2;
    rmin.style.animationDuration = animationDuration + "s";

    //tamanho
    const size = Math.random() * 32 + 16;
    rmin.style.width = size + "px";
    rmin.style.height = size + "px";

    //rotação
    const rotation = Math.random() * 360;
    rmin.style.transform = `rotate(${rotation}deg)`;

    //reposição
    rmin.addEventListener("animationiteration", () => {
        rmin.style.left = Math.random() * window.innerWidth + "px";
        rmin.style.top = -50 + "px";
    });
}

//quantidade
for (let i = 0; i < 3; i++) {
    rminusculo();
}

// s - minúsculo
function sminusculo() {
    const smin = document.createElement("div");
    smin.classList.add("letrasmin");
    document.querySelector(".fall").appendChild(smin); //

    //posição
    const startPositionX = Math.random() * window.innerWidth;
    const startPositionY = -100;
    smin.style.left = startPositionX + "px";
    smin.style.top = startPositionY + "px";

    //duração
    const animationDuration = Math.random() * 10 + 2;
    smin.style.animationDuration = animationDuration + "s";

    //tamanho
    const size = Math.random() * 32 + 16;
    smin.style.width = size + "px";
    smin.style.height = size + "px";

    //rotação
    const rotation = Math.random() * 360;
    smin.style.transform = `rotate(${rotation}deg)`;

    //reposição
    smin.addEventListener("animationiteration", () => {
        smin.style.left = Math.random() * window.innerWidth + "px";
        smin.style.top = -50 + "px";
    });
}

//quantidade
for (let i = 0; i < 3; i++) {
    sminusculo();
}

// t - minúsculo
function tminusculo() {
    const tmin = document.createElement("div");
    tmin.classList.add("letratmin");
    document.querySelector(".fall").appendChild(tmin); //

    //posição
    const startPositionX = Math.random() * window.innerWidth;
    const startPositionY = -100;
    tmin.style.left = startPositionX + "px";
    tmin.style.top = startPositionY + "px";

    //duração
    const animationDuration = Math.random() * 10 + 2;
    tmin.style.animationDuration = animationDuration + "s";

    //tamanho
    const size = Math.random() * 32 + 16;
    tmin.style.width = size + "px";
    tmin.style.height = size + "px";

    //rotação
    const rotation = Math.random() * 360;
    tmin.style.transform = `rotate(${rotation}deg)`;

    //reposição
    tmin.addEventListener("animationiteration", () => {
        tmin.style.left = Math.random() * window.innerWidth + "px";
        tmin.style.top = -50 + "px";
    });
}

//quantidade
for (let i = 0; i < 3; i++) {
    tminusculo();
}

// v - minúsculo
function vminusculo() {
    const vmin = document.createElement("div");
    vmin.classList.add("letravmin");
    document.querySelector(".fall").appendChild(vmin); //

    //posição
    const startPositionX = Math.random() * window.innerWidth;
    const startPositionY = -100;
    vmin.style.left = startPositionX + "px";
    vmin.style.top = startPositionY + "px";

    //duração
    const animationDuration = Math.random() * 10 + 2;
    vmin.style.animationDuration = animationDuration + "s";

    //tamanho
    const size = Math.random() * 32 + 16;
    vmin.style.width = size + "px";
    vmin.style.height = size + "px";

    //rotação
    const rotation = Math.random() * 360;
    vmin.style.transform = `rotate(${rotation}deg)`;

    //reposição
    vmin.addEventListener("animationiteration", () => {
        vmin.style.left = Math.random() * window.innerWidth + "px";
        vmin.style.top = -50 + "px";
    });
}

//quantidade
for (let i = 0; i < 3; i++) {
    vminusculo();
}

// x - minúsculo
function xminusculo() {
    const xmin = document.createElement("div");
    xmin.classList.add("letraxmin");
    document.querySelector(".fall").appendChild(xmin); //

    //posição
    const startPositionX = Math.random() * window.innerWidth;
    const startPositionY = -100;
    xmin.style.left = startPositionX + "px";
    xmin.style.top = startPositionY + "px";

    //duração
    const animationDuration = Math.random() * 10 + 2;
    xmin.style.animationDuration = animationDuration + "s";

    //tamanho
    const size = Math.random() * 32 + 16;
    xmin.style.width = size + "px";
    xmin.style.height = size + "px";

    //rotação
    const rotation = Math.random() * 360;
    xmin.style.transform = `rotate(${rotation}deg)`;

    //reposição
    xmin.addEventListener("animationiteration", () => {
        xmin.style.left = Math.random() * window.innerWidth + "px";
        xmin.style.top = -50 + "px";
    });
}

//quantidade
for (let i = 0; i < 3; i++) {
    xminusculo();
}

// y - minúsculo
function yminusculo() {
    const ymin = document.createElement("div");
    ymin.classList.add("letraymin");
    document.querySelector(".fall").appendChild(ymin); //

    //posição
    const startPositionX = Math.random() * window.innerWidth;
    const startPositionY = -100;
    ymin.style.left = startPositionX + "px";
    ymin.style.top = startPositionY + "px";

    //duração
    const animationDuration = Math.random() * 10 + 2;
    ymin.style.animationDuration = animationDuration + "s";

    //tamanho
    const size = Math.random() * 32 + 16;
    ymin.style.width = size + "px";
    ymin.style.height = size + "px";

    //rotação
    const rotation = Math.random() * 360;
    ymin.style.transform = `rotate(${rotation}deg)`;

    //reposição
    ymin.addEventListener("animationiteration", () => {
        ymin.style.left = Math.random() * window.innerWidth + "px";
        ymin.style.top = -50 + "px";
    });
}

//quantidade
for (let i = 0; i < 3; i++) {
    yminusculo();
}

// z - minúsculo
function zminusculo() {
    const zmin = document.createElement("div");
    zmin.classList.add("letrazmin");
    document.querySelector(".fall").appendChild(zmin); //

    //posição
    const startPositionX = Math.random() * window.innerWidth;
    const startPositionY = -100;
    zmin.style.left = startPositionX + "px";
    zmin.style.top = startPositionY + "px";

    //duração
    const animationDuration = Math.random() * 10 + 2;
    zmin.style.animationDuration = animationDuration + "s";

    //tamanho
    const size = Math.random() * 32 + 16;
    zmin.style.width = size + "px";
    zmin.style.height = size + "px";

    //rotação
    const rotation = Math.random() * 360;
    zmin.style.transform = `rotate(${rotation}deg)`;

    //reposição
    zmin.addEventListener("animationiteration", () => {
        zmin.style.left = Math.random() * window.innerWidth + "px";
        zmin.style.top = -50 + "px";
    });
}

//quantidade
for (let i = 0; i < 3; i++) {
    zminusculo();
}

function letrarussaa() {
    const rssa = document.createElement("div");
    rssa.classList.add("russoa");
    document.querySelector(".fall").appendChild(rssa); //

    //posição
    const startPositionX = Math.random() * window.innerWidth;
    const startPositionY = -100;
    rssa.style.left = startPositionX + "px";
    rssa.style.top = startPositionY + "px";

    //duração
    const animationDuration = Math.random() * 10 + 2;
    rssa.style.animationDuration = animationDuration + "s";

    //tamanho
    const size = Math.random() * 32 + 16;
    rssa.style.width = size + "px";
    rssa.style.height = size + "px";

    //rotação
    const rotation = Math.random() * 360;
    rssa.style.transform = `rotate(${rotation}deg)`;

    //reposição
    rssa.addEventListener("animationiteration", () => {
        rssa.style.left = Math.random() * window.innerWidth + "px";
        rssa.style.top = -50 + "px";
    });
}

//quantidade
for (let i = 0; i < 3; i++) {
    letrarussaa();
}

function letrarussab() {
    const rssb = document.createElement("div");
    rssb.classList.add("russob");
    document.querySelector(".fall").appendChild(rssb); //

    //posição
    const startPositionX = Math.random() * window.innerWidth;
    const startPositionY = -100;
    rssb.style.left = startPositionX + "px";
    rssb.style.top = startPositionY + "px";

    //duração
    const animationDuration = Math.random() * 10 + 2;
    rssb.style.animationDuration = animationDuration + "s";

    //tamanho
    const size = Math.random() * 32 + 16;
    rssb.style.width = size + "px";
    rssb.style.height = size + "px";

    //rotação
    const rotation = Math.random() * 360;
    rssb.style.transform = `rotate(${rotation}deg)`;

    //reposição
    rssb.addEventListener("animationiteration", () => {
        rssb.style.left = Math.random() * window.innerWidth + "px";
        rssb.style.top = -50 + "px";
    });
}

//quantidade
for (let i = 0; i < 3; i++) {
    letrarussab();
}

function letrarussac() {
    const rssc = document.createElement("div");
    rssc.classList.add("russoc");
    document.querySelector(".fall").appendChild(rssc); //

    //posição
    const startPositionX = Math.random() * window.innerWidth;
    const startPositionY = -100;
    rssc.style.left = startPositionX + "px";
    rssc.style.top = startPositionY + "px";

    //duração
    const animationDuration = Math.random() * 10 + 2;
    rssc.style.animationDuration = animationDuration + "s";

    //tamanho
    const size = Math.random() * 32 + 16;
    rssc.style.width = size + "px";
    rssc.style.height = size + "px";

    //rotação
    const rotation = Math.random() * 360;
    rssc.style.transform = `rotate(${rotation}deg)`;

    //reposição
    rssc.addEventListener("animationiteration", () => {
        rssc.style.left = Math.random() * window.innerWidth + "px";
        rssc.style.top = -50 + "px";
    });
}

//quantidade
for (let i = 0; i < 3; i++) {
    letrarussac();
}

function letrarussad() {
    const rssd = document.createElement("div");
    rssd.classList.add("russod");
    document.querySelector(".fall").appendChild(rssd); //

    //posição
    const startPositionX = Math.random() * window.innerWidth;
    const startPositionY = -100;
    rssd.style.left = startPositionX + "px";
    rssd.style.top = startPositionY + "px";

    //duração
    const animationDuration = Math.random() * 10 + 2;
    rssd.style.animationDuration = animationDuration + "s";

    //tamanho
    const size = Math.random() * 32 + 16;
    rssd.style.width = size + "px";
    rssd.style.height = size + "px";

    //rotação
    const rotation = Math.random() * 360;
    rssd.style.transform = `rotate(${rotation}deg)`;

    //reposição
    rssd.addEventListener("animationiteration", () => {
        rssd.style.left = Math.random() * window.innerWidth + "px";
        rssd.style.top = -50 + "px";
    });
}

//quantidade
for (let i = 0; i < 3; i++) {
    letrarussad();
}

function letrarussae() {
    const rsse = document.createElement("div");
    rsse.classList.add("russoe");
    document.querySelector(".fall").appendChild(rsse); //

    //posição
    const startPositionX = Math.random() * window.innerWidth;
    const startPositionY = -100;
    rsse.style.left = startPositionX + "px";
    rsse.style.top = startPositionY + "px";

    //duração
    const animationDuration = Math.random() * 10 + 2;
    rsse.style.animationDuration = animationDuration + "s";

    //tamanho
    const size = Math.random() * 32 + 16;
    rsse.style.width = size + "px";
    rsse.style.height = size + "px";

    //rotação
    const rotation = Math.random() * 360;
    rsse.style.transform = `rotate(${rotation}deg)`;

    //reposição
    rsse.addEventListener("animationiteration", () => {
        rsse.style.left = Math.random() * window.innerWidth + "px";
        rsse.style.top = -50 + "px";
    });
}

//quantidade
for (let i = 0; i < 3; i++) {
    letrarussae();
}

function letrarussaf() {
    const rssf = document.createElement("div");
    rssf.classList.add("russof");
    document.querySelector(".fall").appendChild(rssf); //

    //posição
    const startPositionX = Math.random() * window.innerWidth;
    const startPositionY = -100;
    rssf.style.left = startPositionX + "px";
    rssf.style.top = startPositionY + "px";

    //duração
    const animationDuration = Math.random() * 10 + 2;
    rssf.style.animationDuration = animationDuration + "s";

    //tamanho
    const size = Math.random() * 32 + 16;
    rssf.style.width = size + "px";
    rssf.style.height = size + "px";

    //rotação
    const rotation = Math.random() * 360;
    rssf.style.transform = `rotate(${rotation}deg)`;

    //reposição
    rssf.addEventListener("animationiteration", () => {
        rssf.style.left = Math.random() * window.innerWidth + "px";
        rssf.style.top = -50 + "px";
    });
}

//quantidade
for (let i = 0; i < 3; i++) {
    letrarussaf();
}

function letrarussag() {
    const rssg = document.createElement("div");
    rssg.classList.add("russog");
    document.querySelector(".fall").appendChild(rssg); //

    //posição
    const startPositionX = Math.random() * window.innerWidth;
    const startPositionY = -100;
    rssg.style.left = startPositionX + "px";
    rssg.style.top = startPositionY + "px";

    //duração
    const animationDuration = Math.random() * 10 + 2;
    rssg.style.animationDuration = animationDuration + "s";

    //tamanho
    const size = Math.random() * 32 + 16;
    rssg.style.width = size + "px";
    rssg.style.height = size + "px";

    //rotação
    const rotation = Math.random() * 360;
    rssg.style.transform = `rotate(${rotation}deg)`;

    //reposição
    rssg.addEventListener("animationiteration", () => {
        rssg.style.left = Math.random() * window.innerWidth + "px";
        rssg.style.top = -50 + "px";
    });
}

//quantidade
for (let i = 0; i < 3; i++) {
    letrarussag();
}

function letrarussah() {
    const rssh = document.createElement("div");
    rssh.classList.add("russoh");
    document.querySelector(".fall").appendChild(rssh);

    // posição
    const startPositionX = Math.random() * window.innerWidth;
    const startPositionY = -100;
    rssh.style.left = startPositionX + "px";
    rssh.style.top = startPositionY + "px";

    // duração
    const animationDuration = Math.random() * 10 + 2;
    rssh.style.animationDuration = animationDuration + "s";

    // tamanho
    const size = Math.random() * 32 + 16;
    rssh.style.width = size + "px";
    rssh.style.height = size + "px";

    // rotação
    const rotation = Math.random() * 360;
    rssh.style.transform = `rotate(${rotation}deg)`;

    // reposição
    rssh.addEventListener("animationiteration", () => {
        rssh.style.left = Math.random() * window.innerWidth + "px";
        rssh.style.top = -50 + "px";
    });
}

// quantidade
for (let i = 0; i < 3; i++) {
    letrarussah();
}

function letrarussoi() {
    const rssi = document.createElement("div");
    rssi.classList.add("russoi");
    document.querySelector(".fall").appendChild(rssi);

    // posição
    const startPositionX = Math.random() * window.innerWidth;
    const startPositionY = -100;
    rssi.style.left = startPositionX + "px";
    rssi.style.top = startPositionY + "px";

    // duração
    const animationDuration = Math.random() * 10 + 2;
    rssi.style.animationDuration = animationDuration + "s";

    // tamanho
    const size = Math.random() * 32 + 16;
    rssi.style.width = size + "px";
    rssi.style.height = size + "px";

    // rotação
    const rotation = Math.random() * 360;
    rssi.style.transform = `rotate(${rotation}deg)`;

    // reposição
    rssi.addEventListener("animationiteration", () => {
        rssi.style.left = Math.random() * window.innerWidth + "px";
        rssi.style.top = -50 + "px";
    });
}

// quantidade
for (let i = 0; i < 3; i++) {
    letrarussoi();
}

////// JAPONESES / CHINESES

function letrajaponesaa() {
    const jpa = document.createElement("div");
    jpa.classList.add("japonesaa");
    document.querySelector(".fall").appendChild(jpa);

    // posição
    const startPositionX = Math.random() * window.innerWidth;
    const startPositionY = -100;
    jpa.style.left = startPositionX + "px";
    jpa.style.top = startPositionY + "px";

    // duração
    const animationDuration = Math.random() * 10 + 2;
    jpa.style.animationDuration = animationDuration + "s";

    // tamanho
    const size = Math.random() * 32 + 16;
    jpa.style.width = size + "px";
    jpa.style.height = size + "px";

    // rotação
    const rotation = Math.random() * 360;
    jpa.style.transform = `rotate(${rotation}deg)`;

    // reposição
    jpa.addEventListener("animationiteration", () => {
        jpa.style.left = Math.random() * window.innerWidth + "px";
        jpa.style.top = -50 + "px";
    });
}

// quantidade
for (let i = 0; i < 3; i++) {
    letrajaponesaa();
}

function letrajaponesab() {
    const jpb = document.createElement("div");
    jpb.classList.add("japonesab");
    document.querySelector(".fall").appendChild(jpb);

    // posição
    const startPositionX = Math.random() * window.innerWidth;
    const startPositionY = -100;
    jpb.style.left = startPositionX + "px";
    jpb.style.top = startPositionY + "px";

    // duração
    const animationDuration = Math.random() * 10 + 2;
    jpb.style.animationDuration = animationDuration + "s";

    // tamanho
    const size = Math.random() * 32 + 16;
    jpb.style.width = size + "px";
    jpb.style.height = size + "px";

    // rotação
    const rotation = Math.random() * 360;
    jpb.style.transform = `rotate(${rotation}deg)`;

    // reposição
    jpb.addEventListener("animationiteration", () => {
        jpb.style.left = Math.random() * window.innerWidth + "px";
        jpb.style.top = -50 + "px";
    });
}

// quantidade
for (let i = 0; i < 3; i++) {
    letrajaponesab();
}

function letrajaponesac() {
    const jpc = document.createElement("div");
    jpc.classList.add("japonesac");
    document.querySelector(".fall").appendChild(jpc);

    // posição
    const startPositionX = Math.random() * window.innerWidth;
    const startPositionY = -100;
    jpc.style.left = startPositionX + "px";
    jpc.style.top = startPositionY + "px";

    // duração
    const animationDuration = Math.random() * 10 + 2;
    jpc.style.animationDuration = animationDuration + "s";

    // tamanho
    const size = Math.random() * 32 + 16;
    jpc.style.width = size + "px";
    jpc.style.height = size + "px";

    // rotação
    const rotation = Math.random() * 360;
    jpc.style.transform = `rotate(${rotation}deg)`;

    // reposição
    jpc.addEventListener("animationiteration", () => {
        jpc.style.left = Math.random() * window.innerWidth + "px";
        jpc.style.top = -50 + "px";
    });
}

// quantidade
for (let i = 0; i < 3; i++) {
    letrajaponesac();
}

function letrajaponesad() {
    const jpd = document.createElement("div");
    jpd.classList.add("japonesad");
    document.querySelector(".fall").appendChild(jpd);

    // posição
    const startPositionX = Math.random() * window.innerWidth;
    const startPositionY = -100;
    jpd.style.left = startPositionX + "px";
    jpd.style.top = startPositionY + "px";

    // duração
    const animationDuration = Math.random() * 10 + 2;
    jpd.style.animationDuration = animationDuration + "s";

    // tamanho
    const size = Math.random() * 32 + 16;
    jpd.style.width = size + "px";
    jpd.style.height = size + "px";

    // rotação
    const rotation = Math.random() * 360;
    jpd.style.transform = `rotate(${rotation}deg)`;

    // reposição
    jpd.addEventListener("animationiteration", () => {
        jpd.style.left = Math.random() * window.innerWidth + "px";
        jpd.style.top = -50 + "px";
    });
}

// quantidade
for (let i = 0; i < 3; i++) {
    letrajaponesad();
}

function letrajaponesae() {
    const jpe = document.createElement("div");
    jpe.classList.add("japonesae");
    document.querySelector(".fall").appendChild(jpe);

    // posição
    const startPositionX = Math.random() * window.innerWidth;
    const startPositionY = -100;
    jpe.style.left = startPositionX + "px";
    jpe.style.top = startPositionY + "px";

    // duração
    const animationDuration = Math.random() * 10 + 2;
    jpe.style.animationDuration = animationDuration + "s";

    // tamanho
    const size = Math.random() * 32 + 16;
    jpe.style.width = size + "px";
    jpe.style.height = size + "px";

    // rotação
    const rotation = Math.random() * 360;
    jpe.style.transform = `rotate(${rotation}deg)`;

    // reposição
    jpe.addEventListener("animationiteration", () => {
        jpe.style.left = Math.random() * window.innerWidth + "px";
        jpe.style.top = -50 + "px";
    });
}

// quantidade
for (let i = 0; i < 3; i++) {
    letrajaponesae();
}

function letrajaponesaf() {
    const jpf = document.createElement("div");
    jpf.classList.add("japonesaf");
    document.querySelector(".fall").appendChild(jpf);

    // posição
    const startPositionX = Math.random() * window.innerWidth;
    const startPositionY = -100;
    jpf.style.left = startPositionX + "px";
    jpf.style.top = startPositionY + "px";

    // duração
    const animationDuration = Math.random() * 10 + 2;
    jpf.style.animationDuration = animationDuration + "s";

    // tamanho
    const size = Math.random() * 32 + 16;
    jpf.style.width = size + "px";
    jpf.style.height = size + "px";

    // rotação
    const rotation = Math.random() * 360;
    jpf.style.transform = `rotate(${rotation}deg)`;

    // reposição
    jpf.addEventListener("animationiteration", () => {
        jpf.style.left = Math.random() * window.innerWidth + "px";
        jpf.style.top = -50 + "px";
    });
}

// quantidade
for (let i = 0; i < 3; i++) {
    letrajaponesaf();
}

function letrajaponesag() {
    const jpg = document.createElement("div");
    jpg.classList.add("japonesag");
    document.querySelector(".fall").appendChild(jpg);

    // posição
    const startPositionX = Math.random() * window.innerWidth;
    const startPositionY = -100;
    jpg.style.left = startPositionX + "px";
    jpg.style.top = startPositionY + "px";

    // duração
    const animationDuration = Math.random() * 10 + 2;
    jpg.style.animationDuration = animationDuration + "s";

    // tamanho
    const size = Math.random() * 32 + 16;
    jpg.style.width = size + "px";
    jpg.style.height = size + "px";

    // rotação
    const rotation = Math.random() * 360;
    jpg.style.transform = `rotate(${rotation}deg)`;

    // reposição
    jpg.addEventListener("animationiteration", () => {
        jpg.style.left = Math.random() * window.innerWidth + "px";
        jpg.style.top = -50 + "px";
    });
}

// quantidade
for (let i = 0; i < 3; i++) {
    letrajaponesag();
}

///// POLONES

function lpolminusculo() {
    const lpolmin = document.createElement("div");
    lpolmin.classList.add("lpolmin");
    document.querySelector(".fall").appendChild(lpolmin); //

    //posição
    const startPositionX = Math.random() * window.innerWidth;
    const startPositionY = -100;
    lpolmin.style.left = startPositionX + "px";
    lpolmin.style.top = startPositionY + "px";

    //duração
    const animationDuration = Math.random() * 10 + 2;
    lpolmin.style.animationDuration = animationDuration + "s";

    //tamanho
    const size = Math.random() * 32 + 16;
    lpolmin.style.width = size + "px";
    lpolmin.style.height = size + "px";

    //rotação
    const rotation = Math.random() * 360;
    lpolmin.style.transform = `rotate(${rotation}deg)`;

    //reposição
    lpolmin.addEventListener("animationiteration", () => {
        lpolmin.style.left = Math.random() * window.innerWidth + "px";
        lpolmin.style.top = -50 + "px";
    });
}

//quantidade
for (let i = 0; i < 3; i++) {
    lpolminusculo();
}

function lpolmaiusculo() {
    const lpolmai = document.createElement("div");
    lpolmai.classList.add("lpolmai");
    document.querySelector(".fall").appendChild(lpolmai); //

    //posição
    const startPositionX = Math.random() * window.innerWidth;
    const startPositionY = -100;
    lpolmai.style.left = startPositionX + "px";
    lpolmai.style.top = startPositionY + "px";

    //duração
    const animationDuration = Math.random() * 10 + 2;
    lpolmai.style.animationDuration = animationDuration + "s";

    //tamanho
    const size = Math.random() * 32 + 16;
    lpolmai.style.width = size + "px";
    lpolmai.style.height = size + "px";

    //rotação
    const rotation = Math.random() * 360;
    lpolmai.style.transform = `rotate(${rotation}deg)`;

    //reposição
    lpolmai.addEventListener("animationiteration", () => {
        lpolmai.style.left = Math.random() * window.innerWidth + "px";
        lpolmai.style.top = -50 + "px";
    });
}

//quantidade
for (let i = 0; i < 3; i++) {
    lpolmaiusculo();
}

}