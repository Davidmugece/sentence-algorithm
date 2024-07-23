function analyzeSentence(sentence) {
    let lengthCounter = 0;
    let wordCounter = 1; // Starts at 1 assuming the sentence has at least one word
    let vowelCounter = 0;
    const vowels = "aeiouAEIOU";

    for (let i = 0; i < sentence.length; i++) {
        const char = sentence[i];
        if (char === '.') {
            break;
        }
        lengthCounter++;
        if (vowels.includes(char)) {
            vowelCounter++;
        }
        if (char === ' ') {
            wordCounter++;
        }
    }

    return {
        length: lengthCounter,
        words: wordCounter,
        vowels: vowelCounter
    };
}

// Example 
const sentence = "This is a sample sentence.";
const result = analyzeSentence(sentence);
console.log(`Length: ${result.length}, Words: ${result.words}, Vowels: ${result.vowels}`);
