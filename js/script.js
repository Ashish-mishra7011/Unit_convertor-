let mm = document.getElementById('mm');
let cm = document.getElementById('cm');
let m = document.getElementById('m');
let dm = document.getElementById('dm');
let hm = document.getElementById('hm');
let km = document.getElementById('km');
let mg = document.getElementById('mg');
let g = document.getElementById('g');
let kg = document.getElementById('kg');
let pound = document.getElementById('pound');

mm.addEventListener('input', () => {
    cm.value = (mm.value) / 10;
    m.value = (mm.value) / 1000;
    dm.value = (mm.value) / 10000;
    hm.value = (mm.value) / 100000;
    km.value = (mm.value) / 1000000;
})

cm.addEventListener('input', () => {
    mm.value = (cm.value) * 10;
    m.value = (cm.value) / 100;
    dm.value = (cm.value) / 1000;
    hm.value = (cm.value) / 10000;
    km.value = (cm.value) / 100000;
})

m.addEventListener('input', () => {
    mm.value = (m.value) * 1000;
    cm.value = (m.value) * 100;
    dm.value = (m.value) / 10;
    hm.value = (m.value) / 100;
    km.value = (m.value) / 1000;
})

dm.addEventListener('input', () => {
    mm.value = (dm.value) * 100000;
    cm.value = (dm.value) * 10000;
    m.value = (dm.value) * 10;
    hm.value = (dm.value) / 10;
    km.value = (dm.value) / 100;
})

hm.addEventListener('input', () => {
    mm.value = (hm.value) * 100000;
    cm.value = (hm.value) * 10000;
    m.value = (hm.value) * 100;
    dm.value = (hm.value) * 10;
    km.value = (hm.value) / 10;
})

km.addEventListener('input', () => {
    mm.value = (km.value) * 1000000;
    cm.value = (km.value) * 100000;
    m.value = (km.value) * 1000;
    dm.value = (km.value) * 100;
    hm.value = (km.value) * 10;
})

mg.addEventListener('input', () => {
    g.value = (mg.value) / 1000;
    kg.value = (mg.value) / 1000000;
    let a = (mg.value) / 453600;
    pound.value = a.toFixed(6);
})

g.addEventListener('input', () => {
    mg.value = (g.value) * 1000;
    kg.value = (g.value) / 1000;
    let a = (g.value) / 453.6;
    pound.value = a.toFixed(6);
})

kg.addEventListener('input', () => {
    mg.value = (kg.value) * 1000000;
    g.value = (kg.value) * 1000;
    let a = (kg.value) * 2.20462;
    pound.value = a.toFixed(6);
})

pound.addEventListener('input', () => {
    let a = (pound.value) * 453600;
    mg.value = a.toFixed(6);
    let b = (pound.value) * 453.6;
    g.value = b.toFixed(6);
    let c = (pound.value) / 2.205;
    kg.value = c.toFixed(6);
})