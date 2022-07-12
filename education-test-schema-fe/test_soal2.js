// 2. Kami mempunyai masalah pada validasi huruf dan angka, perusahaan kami membutuhkan validasi untuk pengecekan apakah inputan ini sesuai dengan keinginan kami

// var input1 = "hallo jesika24 selamat datang!"
// var input2 = "hallo anggun selamat datang!"
// var input3 = "hallo ** selamat datang!"
// var input4 = "hallo Mariage889120! selamat datang!"

//     validasi yang di inginkan:

//     - Jika inputan mengandung angka maka harus mengeluarkan output : Sistem kami menolak untuk inputan berisi angka 167283
//     - Jika inputan tidak mengandung angka maka harus mengeluarkan output : Sistem memeriksa data anda valid dengan ketentuan kami dengan inputan hallo justin selamat datang!

//     contoh :

//     var input1 = "hallo mina23 selamat datang!"
//     expektasi output : Sistem kami menolak untuk inputan berisi angka 23

//     var input2 = "hallo amir selamat datang!"
//     expektasi output: Sistem memeriksa data anda valid dengan ketentuan kami dengan inputan hallo amir selamat datang!

// Jawab:
var input1 = "hallo jesika24 selamat datang!";
var input2 = "hallo anggun selamat datang!";
var input3 = "hallo ** selamat datang!";
var input4 = "hallo Mariage889120! selamat datang!";

const checkedInput = {
  owner: "asep sahrudin",
  allLetter: function (inputtxt) {
    var letters = /\d+/;
    if (letters.test(inputtxt)) {
      console.log(
        "Sistem kami menolak untuk inputan berisi angka" +
          " " +
          inputtxt.replace(/[^0-9]/g, "")
      );
    } else {
      console.log(
        " expektasi output: Sistem memeriksa data anda valid dengan ketentuan kami dengan inputan" +
          " " +
          inputtxt
      );
    }
  },
};

checkedInput.allLetter(input1);
checkedInput.allLetter(input2);
checkedInput.allLetter(input3);
checkedInput.allLetter(input4);
