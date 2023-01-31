//for-in will get you the object and prototypes' properties
// for-of will get you only the objects' properties
// hence coded slightly different

// Task 1
var dairy = [`cheese`,
    `sour cream`,
    `milk`,
    `yogurt`,
    `ice cream`,
    `milkshake`]

function logDairy() {
    for (things of dairy) {
        console.log(things);
    }
}
logDairy()

console.log(`------------------------------------------`)
// Task 2
const animal = {
    canJump: true
};

const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;

function birdCan() {
    for (prop of Object.keys(bird)) {
        console.log(prop, `:`, bird[prop])
    }
}
birdCan()

console.log(`------------------------------------------`)
// Task 3
// using the same Animal prototype and bird object
function animalCan() {
    for (prop in bird) {
        console.log(prop, `:`, bird[prop])
    }
}
animalCan()