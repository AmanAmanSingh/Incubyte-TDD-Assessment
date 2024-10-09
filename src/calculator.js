function add(numbers) {
    if (numbers === "") return 0;

    const numArray = numbers.split(/[,\\n]/);
    const negatives = numArray.filter(num => num < 0);
    
    if (negatives.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
    }

    return numArray.reduce((acc, num) => acc + parseInt(num), 0);
}

module.exports = { add };