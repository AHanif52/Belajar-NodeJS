const fs = require("fs");

const fileReadCallback = (error, data) => {
  if (error) {
    console.log("Gagal membaca berkas");
    return;
  }
  console.log(data);
};

const readableStream = fs.createReadStream(
  "./Writeablestream/stream/input.txt",
  {
    highWaterMark: 15,
    encoding: "utf8",
  }
);

const writableStream = fs.createWriteStream(
  "./Writeablestream/stream/output.txt"
);

readableStream.on("readable", () => {
  try {
    const data = readableStream.read();
    if (data) {
      writableStream.write(data + "\n");
    }
  } catch (error) {
    console.log(error);
  }
});

readableStream.on("end", () => {
  writableStream.end();
  const output = fs.readFile(
    "./Writeablestream/stream/output.txt",
    "UTF-8",
    fileReadCallback
  );
});
