const sum = (x, y) => {
    if(y === undefined) {
        return (z) => {
            return x + z;
        }
    }

    return x + y;
};

console.log(sum(2,3)); // Outputs 5
console.log(sum(2)(3)); // Outputs 5

module.exports = sum;

