const itemList = ['coffee', 'noodles', 'bread'];

function sliceString(string) {
}

sliceString('I love noodles, coffee, and bread.');

let string = ''
itemList.map(item => {
    if (itemList[itemList.length - 1] === item) {
        string += 'and ' + item
    } else {
        string += item + ', ';
    }
    console.log(string);
});