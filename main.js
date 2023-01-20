function decoderMorse(string) {

    string = prompt("Write your message")

    const morseCodeLetters = {
        "-----":"0",
        ".----":"1",
        "..---":"2",
        "...--":"3",
        "....-":"4",
        ".....":"5",
        "-....":"6",
        "--...":"7",
        "---..":"8",
        "----.":"9",
        ".-":"a",
        "-...":"b",
        "-.-.":"c",
        "-..":"d",
        ".":"e",
        "..-.":"f",
        "--.":"g",
        "....":"h",
        "..":"i",
        ".---":"j",
        "-.-":"k",
        ".-..":"l",
        "--":"m",
        "-.":"n",
        "---":"o",
        ".--.":"p",
        "--.-":"q",
        ".-.":"r",
        "...":"s",
        "-":"t",
        "..-":"u",
        "...-":"v",
        ".--":"w",
        "-..-":"x",
        "-.--":"y",
        "--..":"z",
        "/":" ",
        "-.-.--":"!",
        ".-.-.-":".",
        "--..--":","
    }

    const decoding = []

    string.split("   ").map(function (word) {
        word.split(" ").map(function (letter) {
            decoding.push(morseCodeLetters[letter])
        })
        decoding.push(" ")
    });

    let result = decoding.join("");
    // console.log(result);
    document.write(`<h1> ${result} </h1>`)

}

// .... .- .-.. .--. -·-·--  -.-.--     -- --- .-. ... .     -.-. --- -.. .     .. ...     -.. .-. .. ...- .. -. --.     -- .     -. ..- - ... -·-·--

decoderMorse()