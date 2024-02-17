import { log } from 'node:console';
import url from 'node:url'

const myURL = new URL('https://nodejs.org:22/api/url.html#url_the_whatwg_url_api');
// console.log(myURL.origin);
// console.log(myURL.pathname);


// const URLOrigin = myURL.origin
// const URLpath = myURL.pathname
// const URLhash = myURL.hash

// const builtURL = URLOrigin + URLpath + URLhash

// console.log(builtURL);

myURL.pathname = 'coisinha'

myURL.searchParams.append('care', 'babycare')
myURL.port = '23'

console.log(['http', 'https'].includes(`${myURL.protocol.slice(0, myURL.protocol.length - 1)}`));
console.log(myURL.protocol);
