module.exports = function toReadable(number) {
    const numWords = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];

    const tensWords = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    function convert1To999(num) {
        if (num < 20) {
            return numWords[num];
        } else if (num < 100) {
            return (
                tensWords[Math.floor(num / 10)] +
                (num % 10 !== 0 ? " " + numWords[num % 10] : "")
            );
        } else {
            if (num % 100 === 0) {
                return numWords[Math.floor(num / 100)] + " hundred";
            } else {
                return (
                    numWords[Math.floor(num / 100)] +
                    " hundred " +
                    convert1To999(num % 100)
                );
            }
        }
    }

    if (number === 0) {
        return "zero";
    } else if (number < 0 || number > 999999) {
        throw new Error("Number out of range (0 to 999999)");
    } else {
        if (number < 1000) {
            return convert1To999(number);
        } else {
            const thousands = Math.floor(number / 1000);
            const remainder = number % 1000;
            if (remainder === 0) {
                return convert1To999(thousands) + " thousand";
            } else {
                return (
                    convert1To999(thousands) +
                    " thousand " +
                    convert1To999(remainder)
                );
            }
        }
    }
};
