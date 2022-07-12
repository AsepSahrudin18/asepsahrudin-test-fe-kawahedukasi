// 3. buatlah program looping untuk menampilkan output di bawah

//    output 1:

//     *
//     **
//     ***
//     ****
//     *****
//     ******

//     output 2:

//             *
//            **
//           ***
//          ****
//         *****

// Jawaban:
const triangles = {
  type: "triangle_01",
  triangle_01: (value) => {
    let result = "";
    for (let i = 0; i < value; i++) {
      for (let j = 0; j <= i; j++) {
        result += "* ";
      }
      result += "\n\n";
    }
    return result;
  },
  type: "triangle_02",
  triangle_02: function (value) {
    let hasil = "";
    for (let i = value; i > 0; i--) {
      for (let j = 1; j <= value; j++) {
        if (j >= i) {
          hasil += " *";
        } else {
          hasil += "  ";
        }
      }
      hasil += "\n\n";
    }
    return hasil;
  },
};

console.log(triangles.triangle_01(6));
console.log(triangles.triangle_02(5));
