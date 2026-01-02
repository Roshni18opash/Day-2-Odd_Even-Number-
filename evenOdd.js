
function checkNumber() {
    let input = Number(document.getElementById("demo").value);
    let result = document.getElementById("result");

    if (input % 2 === 0) {
        result.innerHTML = `<span class="num">${input}</span> is Even Number!`;
    } else {
        result.innerHTML =`<span class="num">${input}</span> is Odd Number!`;
    }
}
