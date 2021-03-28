// Write your solution here!

let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(a) {
    return cats.push(a);
}

function destructivelyPrependCat(a) {
    return cats.unshift(a);
}


function destructivelyRemoveLastCat() {
    return cats.pop();
}


function destructivelyRemoveFirstCat() {
    return cats.shift();
}

function appendCat(a) {
    return [...cats, a];
}

function prependCat(a) {
    return [a, ...cats];
}

function removeLastCat() {
   return cats.slice(0,-1); 
}

function removeFirstCat() {
    return cats.slice(1);
}