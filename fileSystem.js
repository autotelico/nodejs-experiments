const fs = require('fs');

fs.appendFile('coolfile.txt', 'Wassup ma homies', err => {
    if (err) throw new Error(err);
    console.log('Saved!!')
})

fs.open('coolfiles.txt', 'w', (err, file) => {
    if (err) throw err;
    console.log('Done');
})

fs.writeFile('coolfile.txt', 'YEAHHH a', err => {
    if (err) throw new Error(err)
})

fs.unlink('./coolfiles.txt', err => {
    if (err) {
        throw new Error(err)
    } 
})