const level = require("level");
const bytewise = require("bytewise");
const shortid = require("shortid");
const cuid = require("cuid");
const defaults = require("levelup-defaults");
const type = require("component-type");

class DocumentEngine {
    constructor() {
       const dbId = shortid.generate();
       this._storage = level(`./data/diagram-${dbId}.ldb`);
       this._db = defaults(this._storage, {
            keyEncoding: bytewise,
            valueEncoding: "json"
        });

        this.id = dbId;
        this.path = this._storage.location;
    }

    create(initial) {
        this.put([], Object.assign(initial, { "_id": cuid() }));
    }

    load(id) {
        
    }

    async put(path, obj, opts) {
        const batch = opts && opts.batch || this._db.batch();
        await this._write(batch, path, obj)
        if (opts && opts.batch) { return true }
        else {
            await batch.write();
        }
        return true;
    }

    async get(path) {

    }

    async batch(ops) {
        if (!Array.isArray(ops)) {
            return false;
        }
        const batch = this._db.batch();
        await Promise.all(ops.map(op => {
            if (op.type == "put") { 
                return this.put(op.path, op.data, { batch: batch });
            }
            else if (op.type = "del") {
                return this.del(op.path, { batch: batch });
            }
        }));
        batch.write();
    }

    async _write(batch, key, obj) {
        switch(type(obj)) {
            case "object":
              const keys = Object.keys(obj);
              keys.forEach((k) => {
                this._write(batch, key.concat(k), obj[k]);
              });
              break;
            case "array":
              this._write(batch, key, arrToObj(obj), fn);
              break;
            default:
              batch.put(key, obj);
              break;
          }
    }
}

async function doIt() {
    try {
        const diagram = new DocumentEngine();
        console.log(`doc created: ${diagram.path}`);
        await diagram.create({
            floor_elements: {
                
            }
        });
    }
    catch(e) {
        console.error(e);
    }
}

doIt();

