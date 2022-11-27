    window.onload = function () {
    const modal = document.querySelector('#modal');
    const modal2 = document.querySelector('#aboutus-modal');
    /* const modal3 = document.querySelector('#eventlist-modal');
     */
    const openModal = document.querySelectorAll('.index-btn-open');
    const closeModal = document.querySelector('.index-btn-close');
    
    const openModal2 = document.querySelector('.contact-btn-submit');
    const closeModal2 = document.querySelector('.contact-btn-close');
    
    /* const openModal3 = document.querySelectorAll('.eventlist-btn-open');
    const closeModal3 = document.querySelector('.eventlist-btn-close'); */
    
    
    for (let i = 0; i < openModal.length; i++) {
        openModal[i].onclick = function () {
            modal.showModal();
    }
    
    closeModal.addEventListener('click', () => {
        modal.close();
    })};
    
    openModal2.addEventListener('click', () => {
        modal2.showModal();
        })
    
    closeModal2.addEventListener('click', () => {
        modal2.close();
        })
    
    /* for (let i = 0; i < openModal3.length; i++) {
        openModal3[i].onclick = function () {
            modal3.showModal();
        }
    
    closeModal3.addEventListener('click', () => {
        modal3.close();
    })}; */
    
    }
    /* openModal.forEach(function (btn) {  
        btn.addEventListener('click', function () {
            modal.classList.add('index-modal-open', 'contact-btn-submit)'
        }); */
    
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
    
    /* let setUpButtons = function(mod) {
        for (let i = 0; i < mod.length; i++) {
            mod[i].onclick = function () {
            modal.showModal();
            }
        }
        
    } */