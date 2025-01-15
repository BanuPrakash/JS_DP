const fs = require('fs');
//  SRP
class Journal {
    constructor() {
        this.entries = {};
    }

    addEntry(text) {
        let c = ++Journal.count;
        let entry = `${c}: ${text}`;
        this.entries[c] = entry;
        return c;
    }

    removeEntry(index) {
        delete this.entries[index];
    }

    toString() {
        return Object.values(this.entries).join('\n');
    }

}

Journal.count = 0;

class PersistenceManager {
    preprocess(journal) {
        //
    }
    saveToFile(journal, filename){
        fs.writeFileSync(filename, journal.toString());
    }
}

let persistenceManager = new PersistenceManager();
let j = new Journal();
j.addEntry('I did Yoga today.');
j.addEntry('I went for a walk!!!.');
console.log(j.toString());

persistenceManager.saveToFile(j, "./a.txt");
// j.save("./a.txt")