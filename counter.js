//setting initial value of counter
let count = 0;

//getting counter and buttons html
let value = document.querySelector(".box2");
let btns = document.querySelectorAll(".btn");
//Adding eventListner for counting
btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const styles = e.currentTarget.classList;
        if (styles.contains("increase")) {
            count++;
        } else if (styles.contains("decrease")) {
            count--;
        } else {
            count = 0;
        }
        if (count > 0) {
            value.style.color = "green";
        } if (count < 0) {
            value.style.color = "red";
        } if (count === 0) {
            value.style.color = "black";
        }
        value.textContent = count;
    });
});
