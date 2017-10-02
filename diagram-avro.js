const marky = require('marky');
const avro = require('avsc');
const fs = require("fs");
const diagramAvroSchema = require("./avro-types/diagram");

marky.mark("schema-parse");
const diagramDocType = avro.Type.forSchema(diagramAvroSchema());
marky.stop("schema-parse");

const testDiagram1 = require("./diagram-impl.json");


marky.mark("schema-validate");
let isValid = diagramDocType.isValid(testDiagram1);
marky.stop("schema-validate");

console.log("schema validated:", marky.stop("schema-validate"));
console.log("valid: ", isValid);
console.log(diagramDocType.fingerprint().toString("base64"));

marky.mark("encode-avro");
const diagramBin = diagramDocType.toBuffer(testDiagram1);
marky.stop("encode-avro");

fs.writeFileSync("diagram1.avro", diagramBin);


const readBuffer = fs.readFileSync("diagram1.avro");
marky.mark("decode-avro");
const diagramRead = diagramDocType.fromBuffer(readBuffer);
marky.stop("decode-avro");
//console.log(diagramRead);

console.log("\ntimer name    \t-\tduration (ms)\n------------------------------------------")
marky.getEntries().map(e => {
	console.log(`${e.name}\t-\t${Math.round(e.duration)}`);
});