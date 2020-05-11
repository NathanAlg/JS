function repeatTest() {
    console.log("*****Exercice1*****")
    console.log(repeat("foo", 4));
}

function repeatTestTruncate() {
    console.log("\n*****Exercice2*****")
    console.log(truncate("unchanged text", 20)); // => unchanged text
    console.log(truncate("unchanged text", 14)); // => unchanged text
    console.log(truncate("truncated text", 10)); // => truncat...
}

function repeatTestIsPalindrome() {
    console.log("\n*****Exercice3*****")
    console.log(isPalindrome("bonjour")); // => false
    console.log(isPalindrome("toto")); // => false
    console.log(isPalindrome("kayak")); // => true
    console.log(isPalindrome("ressasser")); // => true
}

function repeatTestchange() {
    console.log("\n*****Exercice4*****")
    console.log(swapCase("HELLO")); // => hello
    console.log(swapCase("bye")); // => BYE
    console.log(swapCase("GooD NighT")); // => gOOd nIGHt
}