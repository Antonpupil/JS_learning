const left = document.querySelector("#left");
const right = document.querySelector("#right");
const itemsList = document.querySelector("#items");
const computedStyles = window.getComputedStyle(itemsList);
const item = document.querySelectorAll(".item");

const minRight = 0;
const itemWidth = getComputedStyle(item[0]).width;
const step = parseInt(itemWidth);
const preShownItems = 300 / step;
const maxRight = (item.length - preShownItems) * step;

const currentRight = 0;

itemsList.style.right = currentRight;

right.addEventListener('click', e => {
    e.preventDefault();

    if (currentRight < maxRight) {

        currentRight += step;

        itemsList.style.right = "${currentRight}px";
    }

});
left.addEventListener('click', e => {
    e.preventDefault();

    if (currentRight > minRight) {

        currentRight -= step;
        itemsList.style.right = "${currentRight}px";
    }
});
