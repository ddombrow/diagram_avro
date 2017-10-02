const levelup = require('levelup');
const rocksdb = require('rocksdb');
const { promisify } = require("util");
const shortid = require("shortid");

//const storage = rocksdb("./mydb.rcks");
const dbId = shortid.generate();
const db = levelup(`./data/diagram-graph-${dbId}.rcks`, { db: rocksdb });

const open = promisify(db.open);
const put = promisify(db.put);

async function tryIt() {
    //await open();
    //await put(shortid.generate(), "Dan");
    //await put(shortid.generate(), "Emily");
    const newId = shortid.generate();
    db.put(newId, "Dan", (err) => {
        if (err) { console.error("err:", err); }

        db.get(newId, (err, value)  => {
            console.log(value);
        })
    })
}

tryIt();