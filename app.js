const fs = require('node:fs/promises')

async function writeStuff() {
    try {
        fs.writeFile('./README.md', 'All of my personal Node.js experiments go here.')
    } catch (error) {
        console.error(error)
    }
}

writeStuff()