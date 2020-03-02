function findWordLength(){
    let word = document.getElementById("user_input").value;
    console.log(word);
    let word_count = word .length;
    document.getElementById("word_length").innerHTML = word_count;
}

