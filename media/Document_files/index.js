    window.onload = function () {
const modal = document.querySelector('#modal');
const openModal = document.querySelectorAll('.index-btn-open');
const closeModal = document.querySelector('.index-btn-close');

for (let i = 0; i < openModal.length; i++) {
    openModal[i].onclick = function () {
        modal.showModal();
    }

closeModal.addEventListener('click', () => {
    modal.close();
})}



const contactSubmit = document.getElementById("contact-btn");
contactSubmit.addEventListener('click', () => {
    alert("Thank you for your message!");

})};



/* const expandButton = document.getElementById("show-more-btn");

expandButton.onclick = function () {

        const description = document.getElementById("description");

        if (description.classList.contains("expanded")) {
            description.classList.remove("expanded")
            expandButton.innerText = "Show more";

        } else {
            description.classList.add("expanded");
            expandButton.innerText = "Show less";
        }
    }
 */



/* const indexBox = document.getElementsById("indexBox");
console.log(indexBox.textContent);
console.log(indexBox.innerText); */

   /*  const buttons = document.getElementsByClassName("index-btn-open");

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function () {
            document.getElementById("modal").classList.add("open");
        }
    }

    const closeInfoButton = document.getElementById("index-btn-close");

    if (closeInfoButton) {
        closeInfoButton.onclick = function () {
            document.getElementById("modal").classList.remove("open");
        }
    }
*/
