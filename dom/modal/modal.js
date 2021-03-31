const openBtn = document.querySelector("#openOverlay");
const body = document.body;
const successModal = createModal("The message has been sent");

openBtn.addEventListener = ("click", e => {
    body.appendChild(successModal);
})

function createModal(content){
    const overlayElement = document.createElement("div");
    overlayElement.className.add("overlay");

    overlayElement.addEventListener("click", e => {
        /* console.log(e.target); можно увидеть где произошел клик target указывает на блок с событием*/
        if (e.target == overlayElement) {
            closeElement.click();
        }
        /* if(!e.target.classList.contains("content")){
            closeElement.click();
        } если  у элемента с событием клик НЕТ класса content, то кликнуть на кнопку закрытия. Если content нет, то в if - true и тогда закрытие*/
    })

    const containerElement = document.createElement("div");
    containerElement.className.add("modal-container");

    const contentElement = document.createElement("div");
    contentElement.className.add("content");

    contentElement.innerHTML = content;/* "Hello <b>world<b>!" можно было вставить до использования внутри функции*/
    const closeElement = document.createElement("a");
    closeElement.className.add("close");
    closeElement.textContent = 'x';

    closeElement.href = "#";
    closeElement.addEventListener("click", e => {
        e.preventDefault();
        body.removeChild(overlayElement);
    })


    overlayElement.appendChild(containerElement);
    containerElement.appendChild(closeElement);
    containerElement.appendChild(contentElement);

    return overlayElement;/* body.appendChild(overlayElement); до применения в функции*/
}