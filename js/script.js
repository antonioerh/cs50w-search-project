function imageSearch() {
    event.preventDefault()

    // Store user's input
    let input = document.getElementById("floatingInput").value;

    // Redirect user to URL
    let url = "https://www.google.com/search?tbm=isch&q=" + input;
    window.location.href = url;
}
function advancedSearch() {
    event.preventDefault()

    // Store user's input
    let all = document.getElementById("all").value;
    let dis = document.getElementById("dis").value;
    let any = document.getElementById("any").value;
    let none = document.getElementById("none").value;

    // Split each input into individual words
    let allWords = all.split(" ");
    let disWords = dis.split(" ");
    let anyWords = any.split(" ");
    let noneWords = none.split(" ");

    // Initialize Google advanced search query parameters
    let allInput = "as_q="
    let disInput = "as_epq="
    let anyInput = "as_oq="
    let noneInput = "as_eq="

    // Populate query for "All these words"
    for (let i = 0; i < allWords.length; i++) {
        if (allInput == "as_q=") {
            allInput += allWords[i];
        }
        else {
            allInput += "+" + allWords[i];
        }
    }

    // Populate query for "This exact word or phrase"
    for (let i = 0; i < disWords.length; i++) {
        if (disInput == "as_epq=") {
            disInput += disWords[i];
        }
        else {
            disInput += "+" + disWords[i];
        }
    }

    // Populate query for "Any of these words"
    for (let i = 0; i < anyWords.length; i++) {
        if (anyInput == "as_oq=") {
            anyInput += anyWords[i];
        }
        else {
            anyInput += "+" + anyWords[i];
        }
    }
    
    // Populate query for "None of these words"
    for (let i = 0; i < noneWords.length; i++) {
        if (noneInput == "as_eq=") {
            noneInput += "-" + noneWords[i];
        }
        else {
            noneInput += "+" + "-" + noneWords[i];
        }
    }

    // Redirect user to URL
    let url = "https://www.google.com/search?" + allInput + "&" + disInput + "&" + anyInput + "&" + noneInput;
    window.location.href = url;
}

/* function advancedSearch() {
    event.preventDefault()

    let all = document.getElementById("all").value;
    let dis = document.getElementById("dis").value;
    let any = document.getElementById("any").value;
    let none = document.getElementById("none").value;
    let pageContent = page.content;
    let url = "https://www.google.com/search?"

    let allWords = all.split(" ");
    let disWords = all.split(" ");
    let anyWords = any.split(" ");
    let noneWords = none.split(" ");

    let allInput = "as_q="
    let disInput = "as_epq="
    let anyInput = "as_oq="

    for (let i = 0; i < allWords.length; i++) {
        if (!pageContent.includes(allWords[i])) {
            return false;
        }
        else if (allInput == "as_q=") {
            allInput += allWords[i];
        }
        else {
            allInput += "+" + allWords[i];
        }
    }

    if (!pageContent.includes(dis)) {
        return false;
    }
    

    for (let i = 0; i < anyWords.length; i++) {
        if (pageContent.includes(anyWords[i])) {
            if (anyInput == "as_oq=") {
                anyInput += anyWords[i];
            }
            else {
                anyInput += "+" + anyWords[i];
            }
        }
    }

    for (let i = 0; i < noneWords.length; i++) {
        if (pageContent.includes(noneWords[i])) {
            return false;
        }

    }
}
*/