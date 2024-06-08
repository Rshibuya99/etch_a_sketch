window.addEventListener("DOMContentLoaded", function() {
    // create DOM elements
    const BODY              = document.querySelector('body');
    const MAIN_CONTAINER    = document.querySelector('.container');
    const ROW_CONTAINER     = document.createElement("div");
    const BOX               = document.createElement("div");

    const SIZE_FORM         = document.createElement("form");
    const SIZE_LABEL        = document.createElement("label");
    const SIZE_INPUT        = document.createElement("input");
    const SIZE_BUTTON       = document.createElement("button");

    const MODE_SELECT         = document.createElement("select");
    const MODE_NORMAL        = document.createElement("option");
    const MODE_WILD        = document.createElement("option");

    const ORIGINAL_SIZE     = 16;
    let mode = "normal";

    // style DOM elements
    BODY.setAttribute("style",
    "display: flex; justify-content: center; align-items: center; flex-direction: column;")
    MAIN_CONTAINER.setAttribute("style",
    `display: flex; flex-direction: column; padding: 18px 100px; width: 700px; `);
    ROW_CONTAINER.setAttribute("style",
    `display: flex; flex-direction: row; justify-content: space-evenly;`);
    BOX.setAttribute("style",
    "width: 25px; aspect-ratio: 1/1; border: solid 1px grey; flex-grow: 1;");
    BOX.classList.add("hoverBox")

    SIZE_FORM.setAttribute("style",
    "display: flex; flex-direction: row; flex: auto; justify-content: space-evenly; align-items: center; gap: 10px; margin-top: 10px;")
    SIZE_LABEL.textContent = "Input Size: "
    SIZE_BUTTON.textContent = "Confirm"
    SIZE_FORM.id = "size-form"
    SIZE_INPUT.id = "size-form-n"
    SIZE_INPUT.type = "text"
    SIZE_INPUT.name = "input"
    SIZE_INPUT.placeholder = "1 - 100"
    SIZE_INPUT.autocomplete = "off"
    SIZE_BUTTON.type = "submit"

    MODE_NORMAL.value = "normal"
    MODE_NORMAL.textContent = "Normal"
    MODE_WILD.value = "wild"
    MODE_WILD.textContent = "Wild"
        
    // position DOM
    MODE_SELECT.appendChild(MODE_NORMAL)
    MODE_SELECT.appendChild(MODE_WILD)
    SIZE_LABEL.appendChild(SIZE_INPUT)
    SIZE_FORM.appendChild(SIZE_LABEL)
    SIZE_FORM.appendChild(MODE_SELECT)
    SIZE_FORM.appendChild(SIZE_BUTTON)
    BODY.insertBefore(SIZE_FORM, BODY.children[0]);


    SIZE_INPUT.addEventListener("focus", function() {
        SIZE_INPUT.placeholder = "";
    })


    // initialize 16x16 board
    createBoard(MAIN_CONTAINER, ROW_CONTAINER, BOX, ORIGINAL_SIZE);


    // attach hover effects
    MAIN_CONTAINER.addEventListener("mouseover", function(e){
        if (e.target.classList.contains("hoverBox")) {
            if (mode === "normal") {
                e.target.style.backgroundColor = "black";
            }
            else if (mode === "wild") {
                color = randomizeColor();
                e.target.style.backgroundColor = randomizeColor();
            }
        }
    })


    // alter number of boxes
    SIZE_FORM.addEventListener("submit", function(e) {
        e.preventDefault();

        let numberOfBoxes = evaluateValue(SIZE_INPUT.value, ORIGINAL_SIZE);
        createBoard(MAIN_CONTAINER, ROW_CONTAINER, BOX, numberOfBoxes);

        console.log(MODE_SELECT.value)
        if (MODE_SELECT.value === "wild") {
            mode = "wild";
        } else {
            mode = "normal";
        }

        SIZE_INPUT.value = '';
        SIZE_INPUT.blur();
    })
    
})


createBoard = function(main_container, row_container, box, box_size) {
    main_container.innerHTML = '';
    row_container.innerHTML = '';

    for (let i = 0; i < box_size; i++) {
        row_container.appendChild(box.cloneNode(true))
    }
    for (let i = 0; i < box_size; i++) {
        main_container.appendChild(row_container.cloneNode(true))
    }
}


evaluateValue = function(text, original_size) {
    let size = parseInt(text);
    if (isNaN(size)) {
        return original_size;
    }
    else if (size > 100 || size < 1) {
        return original_size;
    }
    else {
        return size
    }
}

randomizeColor = function() {
    red = Math.floor(Math.random() * 255)
    green = Math.floor(Math.random() * 255)
    blue = Math.floor(Math.random() * 255)

    return(`rgb(${red}, ${green}, ${blue})`)
}
