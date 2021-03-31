const left = document.querySelector("#left");
const right = document.querySelector("#right");
const itemsList = document.querySelector("#items");
const computedStyles = getComputedStyle(itemsList);

right.addEventListener('click', e => {
    e.preventDefault();
    let currentRight = parseInt(getComputedStyle.right);

    if (currentRight < 500) {

        itemsList.style.right = "${currentRight + 100}px";
    }
});
/* вместо getComputedStyle и ручного задания смещения */
/* let currentRight = 0;



right.addEventListener('click', e => {
    e.preventDefault();

    if (currentRight < 500) {

        currentRight += 100;
        itemsList.style.right = "${currentRight}px";
    }

}); */

left.addEventListener('click', e => {
    e.preventDefault();
    let currentRight = parseInt(getComputedStyle.right);

    if (currentRight > 0) {

        itemsList.style.right = "${currentRight - 100}px";
    }
});

