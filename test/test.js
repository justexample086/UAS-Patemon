let hasil = document.getElementById('kolomHasil')
let nilai = ''

function tambahAngka(angka) {
  nilai += angka
  hasil.value = nilai
}

function tambahOperator(operator) {
  nilai += operator
  hasil.value = nilai
}

function hapus() {
  nilai = ''
  hasil.value = nilai
}

function calculate() {
  try {
    nilai = eval(nilai)
    hasil.value = nilai
  } catch (error) {
    hasil.value = 'Error'
  }
}

// Menambahkan event listener untuk setiap tombol angka dan operator
document
  .getElementById('btn1')
  .addEventListener('click', () => tambahAngka('1'))
document
  .getElementById('btn2')
  .addEventListener('click', () => tambahAngka('2'))
document
  .getElementById('btn3')
  .addEventListener('click', () => tambahAngka('3'))
document
  .getElementById('btn4')
  .addEventListener('click', () => tambahAngka('4'))
document
  .getElementById('btn5')
  .addEventListener('click', () => tambahAngka('5'))
document
  .getElementById('btn6')
  .addEventListener('click', () => tambahAngka('6'))
document
  .getElementById('btn7')
  .addEventListener('click', () => tambahAngka('7'))
document
  .getElementById('btn8')
  .addEventListener('click', () => tambahAngka('8'))
document
  .getElementById('btn9')
  .addEventListener('click', () => tambahAngka('9'))
document
  .getElementById('btn0')
  .addEventListener('click', () => tambahAngka('0'))

document
  .getElementById('btnTambah')
  .addEventListener('click', () => tambahOperator('+'))
document
  .getElementById('btnKurang')
  .addEventListener('click', () => tambahOperator('-'))
document
  .getElementById('btnKali')
  .addEventListener('click', () => tambahOperator('*'))
document
  .getElementById('btnBagi')
  .addEventListener('click', () => tambahOperator('/'))
document
  .getElementById('btnKoma')
  .addEventListener('click', () => tambahAngka('.'))
document
  .getElementById('btnSisaBagi')
  .addEventListener('click', () => tambahOperator('%'))

document.getElementById('btnHapus').addEventListener('click', hapus)
document.getElementById('btnSamaDengan').addEventListener('click', calculate)

// function hitung() {
//     var ambilAngka1 = parseFloat(document.getElementById('angka1').value)
//     var ambilAngka2 = parseFloat(document.getElementById('angka2').value)
//     var operator = document.getElementById('operator').value
//     var hasil

//     if (operator == 'tambah') {
//         hasil = angka1 + angka2
//     } else if (operator == 'kurang') {
//         hasil = angka1 - angka2
//     } else if (operator == 'kali') {
//         hasil = angka1 * angka2
//     } else if (operator == 'bagi') {
//         hasil = angka1 / angka2
//     }

//     document.getElementById('hasil').value = hasil
// }

// function validasi(){
//     var ambilNama = document.getElementById("nama").value;
//     var ambiEmail = document.getElementById("email").value;
//     var ambilPhone = document.getElementById("phone").value;
//     var ambiMes = document.getElementById("message").value;

//     if(ambilNama != "" && ambiEmail != "" && ambilPhone != "" && ambiMes != ""){
//         alert("Berhasil");
//         return true;

//     }else{
//         alert("Data tidak boleh Kosong");
//     }
// }

// function hitung() {
//     var ambilAngka1 = parseInt(document.getElementById('nilai1').value)
//     var ambilAngka2 = parseInt(document.getElementById('nilai2').value)
//     var hasil

//     hasil = ambilAngka1 + ambilAngka2
//     document.getElementById('hasil').value = hasil
// }
