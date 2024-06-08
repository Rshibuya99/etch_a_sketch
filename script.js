window.addEventListener("DOMContentLoaded", function() {
    // create DOM elements
    const BODY              = document.querySelector('body');
    const MAIN_CONTAINER    = document.querySelector('.container');
    const ROW_CONTAINER     = document.createElement("div");
    const BOX               = document.createElement("div");

    const SIZE_FORM         = document.createElement("form")
    const SIZE_LABEL        = document.createElement("label")
    const SIZE_INPUT        = document.createElement("input")
    const SIZE_BUTTON       = document.createElement("button");

    const N_BOX_GAP         = 4;

    // style DOM elements
    BODY.setAttribute("style",
    "display: flex; flex: auto; justify-content: center; align-items: center; flex-direction: column;")
    MAIN_CONTAINER.setAttribute("style",
    `display: flex; flex-direction: column; gap: ${N_BOX_GAP}px; padding: 45px 100px;`);
    ROW_CONTAINER.setAttribute("style",
    `display: flex; flex-direction: row; gap: ${N_BOX_GAP}px;`);
    BOX.setAttribute("style",
    "width: 25px; height: 25px; border: solid 1px black;");
    BOX.classList.add("hoverBox")

    SIZE_FORM.setAttribute("style",
    "display: flex; flex-direction: row; flex: auto; justify-content: space-evenly; align-items: flex-end; gap: 10px; margin-top: 30px;")
    SIZE_LABEL.textContent = "Input Size: "
    SIZE_BUTTON.textContent = "Confirm"
    SIZE_FORM.id = "size-form"
    SIZE_INPUT.id = "size-form-n"

    BODY.insertBefore(SIZE_FORM, BODY.children[0]);
    SIZE_FORM.appendChild(SIZE_LABEL)
    SIZE_LABEL.appendChild(SIZE_INPUT)
    SIZE_FORM.appendChild(SIZE_BUTTON)


    // initialize 16x16 board
    for (let i = 0; i < 16; i++) {
        ROW_CONTAINER.appendChild(BOX.cloneNode(true));
    }
    for (let i = 0; i < 16; i++) {
        MAIN_CONTAINER.appendChild(ROW_CONTAINER.cloneNode(true))
    }

    // attach hover effects
    MAIN_CONTAINER.addEventListener("mouseover", function(e){
        if (e.target.classList.contains("hoverBox")) {
            e.target.style.backgroundColor = "black";
        }
    })

    // alter number of boxes
    SIZE_FORM.addEventListener("submit", function() {
        console.log(SIZE_LABEL.textContent)
    })

    
})

