/**
 * Simple function that prints and returns "helloworld"
 * @returns {string} "helloworld"
 */
function helloWorld() {
    const message = "helloworld";
    console.log(message);
    return message;
}

/**
 * Alternative function that just returns "helloworld" without printing
 * @returns {string} "helloworld"
 */
function getHelloWorld() {
    return "helloworld";
}

/**
 * Function that prints "helloworld" without returning anything
 */
function printHelloWorld() {
    console.log("helloworld");
}

// Export the functions so they can be used by other packages
module.exports = {
    helloWorld,
    getHelloWorld,
    printHelloWorld
};

// If this file is run directly, call the helloWorld function
if (require.main === module) {
    helloWorld();
} 