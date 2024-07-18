const fs = require("fs");

const writableStream = fs.createWriteStream("./WriteableStream/output2.txt");

//Fungsi ini menerima satu argumen yakni alamat berkas untuk menyimpan hasil data yang dituliskan.
// Berkas output akan dibuat secara otomatis jika tidak ada, namun bila berkas tersebut sudah ada,
// maka data sebelumnya akan tertimpa!

writableStream.write("Ini merupakan baris pertama!\n");
writableStream.write("Ini merupakan baris kedua!\n");
// writableStream.end();
writableStream.end("Akhir dari writable stream!");
