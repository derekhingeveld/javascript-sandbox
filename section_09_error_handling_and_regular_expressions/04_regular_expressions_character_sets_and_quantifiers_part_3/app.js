let re;
// Literal Characters
re = /hello/; 
re = /hello/i; 

// Metacharacter Symbols
re = /^h/i;         // Must start with
re = /d$/i;         // Must end with
re = /^hello$/i;    // Must begin and end with
re = /h.llo/i;      // Matches any ONE character
re = /h*llo/i;      // Matches any character 0 or more times
re = /gre?a?y/i;    // Optional character
re = /gre?a?y\?/i;  // Escape character


// Brackets [] - Character Sets
re = /gr[ae]y/i;       // Must be an a or e
re = /[GF]ray/i;       // Must be G or F
re = /[^GF]ray/i;      // Match anything except G or F
re = /[A-Z]ray/i;      // Match any uppercase letter
re = /[a-z]ray/i;      // Match any lowercase letter
re = /[A-Za-z]ray/i;   // Match any letter
re = /[0-9]ray/;       // Match any digit

// Braces {} - Quantifiers
re = /Hel{2}o/i;       // Must occur exactly {n} amount of times
re = /Hel{2,4}o/i;       // Must occur between {n, m} amount of times
re = /Hel{2,}o/i;       // Must occur at least {n} times

// Parentheses () - Grouping
re = /(^[0-9]x){3}$/;



// String to match
const str = '3x3x3x3x';

// Log Results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if(re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} does NOT match ${re.source}`);
  }
}

reTest(re, str);