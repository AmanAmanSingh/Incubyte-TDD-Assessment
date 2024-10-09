function add(numbers) {
    if (!numbers) return 0;

    let delimiters = [',', '\n'];
    let numString = numbers;

    // Check if there is a custom delimiter section
    if (numbers.startsWith("//")) {
        const delimiterSection = numbers.match(/^\/\/(.+)\n/);
        if (delimiterSection) {
            // Extract delimiters inside square brackets
            const customDelimiters = delimiterSection[1].match(/\[([^\]]+)\]/g);
            if (customDelimiters) {
                // Remove brackets
                delimiters = customDelimiters.map(d => d.slice(1, -1)); 
            } else {
                // Single custom delimiter without square brackets
                delimiters = [delimiterSection[1]];
            }
            // Extract the number string after custom delimiter
            numString = numbers.split("\n")[1]; 
        }
    }

    // Create a dynamic regular expression for delimiters
    const delimiterRegex = new RegExp(`[${delimiters.join('')}]`);
    
    // Split the numbers string by delimiters and convert to an array of integers
    const numArray = numString.split(delimiterRegex).map(Number);

    // Throw error for negative numbers
    const negativeNumbers = numArray.filter(n => n < 0);
    if (negativeNumbers.length) {
        throw new Error(`Negative numbers not allowed: ${negativeNumbers.join(', ')}`);
    }

    // Ignore numbers greater than 1000
    const filteredNumbers = numArray.filter(n => n <= 1000);

    // Return the sum
    return filteredNumbers.reduce((sum, n) => sum + n, 0);
}


module.exports = { add };