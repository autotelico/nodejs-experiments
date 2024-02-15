const fs = require('node:fs/promises')

async function writeStuff() {
    try {
        fs.writeFile('./test.txt', 'I love cookies')
    } catch (error) {
        console.error(error)
    }
}

writeStuff()