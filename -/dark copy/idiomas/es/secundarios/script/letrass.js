if (window.innerWidth < 768) {

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
    for (let i = 0; i < 1; i++) {
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
    for (let i = 0; i < 1; i++) {
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
    for (let i = 0; i < 1; i++) {
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
    for (let i = 0; i < 1; i++) {
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
    for (let i = 0; i < 1; i++) {
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
    for (let i = 0; i < 1; i++) {
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
    for (let i = 0; i < 1; i++) {
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
    for (let i = 0; i < 1; i++) {
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
    for (let i = 0; i < 1; i++) {
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
for (let i = 0; i < 1; i++) {
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
for (let i = 0; i < 1; i++) {
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
for (let i = 0; i < 1; i++) {
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
for (let i = 0; i < 1; i++) {
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
for (let i = 0; i < 1; i++) {
    mmaiusculo();
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
for (let i = 0; i < 1; i++) {
    trema();
}

/////// minúsculas

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
for (let i = 0; i < 1; i++) {
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
for (let i = 0; i < 1; i++) {
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
for (let i = 0; i < 1; i++) {
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
for (let i = 0; i < 1; i++) {
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
for (let i = 0; i < 1; i++) {
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
for (let i = 0; i < 1; i++) {
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
for (let i = 0; i < 1; i++) {
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
for (let i = 0; i < 1; i++) {
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
for (let i = 0; i < 1; i++) {
    zminusculo();
}
}