// 1-savol: Qoldiqni topish
alert(5 % 2);

// 2-savol: Random son 1 dan 10 gacha
alert(Math.floor(Math.random() * 10) + 1);

// 3-savol: 12.510 ni butun songa aylantirish
alert(Math.floor(12.510));

// 4-savol: "MARS IT SCHOOL" dagi harflar soni
let soz = "MARS IT SCHOOL";
let uzunlik = soz.replace(/ /g, "").length;
alert(uzunlik);

// 5-savol: "MARS IT SCHOOL" ni 10 marta chiqarish
for (let i = 0; i < 10; i++) {
  console.log("MARS IT SCHOOL");
}

// 6-savol: Arraydan ism chiqarish (masalan: ali)
let harflar = ["a", "b", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];
let ism = harflar[0] + harflar[11] + harflar[8]; // a + l + i
console.log(ism);

// 7-savol: If/Else bilan yosh tekshirish
let yosh = +prompt("Yoshingizni kiriting:");
if (yosh > 18) {
  console.log("Siz balog'at yoshiga yetgansiz");
} else if (yosh === 18) {
  console.log("Balog'at yoshi muborak!");
} else {
  console.log("Siz balog'at yoshiga yetmagansiz");
}

// 8-savol: Ismni teskari chiqarish
let ismTeskari = prompt("Ismingizni kiriting:");
let teskari = ismTeskari.split("").reverse().join("");
console.log(teskari);

// 9-savol: DOM ga chiqarish
let domIsm = prompt("Ismingiz:");
let domYosh = prompt("Yoshingiz:");
let h1 = document.createElement("h1");
h1.textContent = `Ism: ${domIsm}, Yosh: ${domYosh}`;
h1.style.color = "green";
h1.style.fontSize = "30px";
h1.style.fontFamily = "sans-serif";
document.body.appendChild(h1);

// 10-savol: Juft sonlarni chiqarish
let sonlar = [1,2,3,4,5,6,7,8,9,10];
for (let i = 0; i < sonlar.length; i++) {
  if (sonlar[i] % 2 === 0) {
    console.log(sonlar[i]);
  }
}
