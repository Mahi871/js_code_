// maps
const map = new Map()
map.set('in' , 'india')
map.set('usa' , 'united state america')
map.set('fr', 'france')

console.log(map)

// for of loop

for (const [key, value] of map) {
    console.log(`${key} : ${value}`);
}

// for each loop

map.forEach((value, key) => {
    console.log(`${key} => ${value}`);
});

// for loop     
for (const key of map.keys()) {
    console.log(key);
}

for (const value of map.values()) {
    console.log(value);
}