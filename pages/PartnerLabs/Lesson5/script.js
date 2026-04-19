function updatePage() {
    let nameInput = document.getElementById("name").value;
    let messageInput = document.getElementById("message").value;
    var catGIF = document.getElementById("Cat");
    const allButtons = document.querySelectorAll("main .partnerlab-button");
    const allHeaders = document.querySelectorAll("main .header");

    if (nameInput === "") {
        document.getElementById("greeting").innerHTML = "Hello!";
    } else {
        document.getElementById("greeting").innerHTML = "Hello, " + nameInput + "!";
    }

    if (messageInput === "") {
        document.getElementById("welcome").innerHTML = "Welcome to our website.";
    } else {
    document.getElementById("welcome").innerHTML = messageInput;
    }

    // Default (White)
    if (document.getElementById("backgroundColor").value === "Default") {
        document.body.style.backgroundColor = "white";
        document.body.style.backgroundImage = "";

        catGIF.style.visibility = "hidden";
        document.getElementById("TextInputs").style.backgroundColor = "";
        allButtons.forEach(button => {
            button.style.backgroundColor = "";
        });
        allHeaders.forEach(header => {
            header.style.backgroundColor = "";
        });
    }

    // Apple
    if (document.getElementById("backgroundColor").value === "Apple") {
        document.body.style.backgroundColor = "#FEADA9";
        document.body.style.backgroundImage = "";

        catGIF.style.visibility = "visible";
        catGIF.src = "https://cdn.7tv.app/emote/01F2ZW4NY0000DSBG200DM9SG2/4x.webp";
        document.getElementById("TextInputs").style.backgroundColor = "#FD837C";
        allButtons.forEach(button => {
            button.style.backgroundColor = "#FD837C";
        });
        allHeaders.forEach(header => {
            header.style.backgroundColor = "#FD837C";
        });
    }

    // Peach
    if (document.getElementById("backgroundColor").value === "Peach") {
        document.body.style.backgroundColor = "#FFE2E2";
        document.body.style.backgroundImage = "";

        catGIF.style.visibility = "visible";
        catGIF.src = "https://cdn.7tv.app/emote/01H6JCC40R000FMZQ9NVXJ2M5P/4x.webp";
        document.getElementById("TextInputs").style.backgroundColor = "#FFB6B6";
        allButtons.forEach(button => {
            button.style.backgroundColor = "#FFB6B6";
        });
        allHeaders.forEach(header => {
            header.style.backgroundColor = "#FFB6B6";
        });
    }

    // Banana
    if (document.getElementById("backgroundColor").value === "Banana") {
        document.body.style.backgroundColor = "#FEF9C2";
        document.body.style.backgroundImage = "";

        catGIF.style.visibility = "visible";
        catGIF.src = "https://cdn.7tv.app/emote/01F90FGXMR000E8YHYQH076C1Z/4x.webp";
        document.getElementById("TextInputs").style.backgroundColor = "#FFDF20";
        allButtons.forEach(button => {
            button.style.backgroundColor = "#FFDF20";
        });
        allHeaders.forEach(header => {
            header.style.backgroundColor = "#FFDF20";
        });
    }

    // Lime
    if (document.getElementById("backgroundColor").value === "Lime") {
        document.body.style.backgroundColor = "#ECFCCA";
        document.body.style.backgroundImage = "";

        catGIF.style.visibility = "visible";
        catGIF.src = "https://cdn.7tv.app/emote/01HVS5JPNG00010B69FDA36YHM/4x.webp";
        document.getElementById("TextInputs").style.backgroundColor = "#BBF451";
        allButtons.forEach(button => {
            button.style.backgroundColor = "#BBF451";
        });
        allHeaders.forEach(header => {
            header.style.backgroundColor = "#BBF451";
        });
    }

    // Pumpkin
    if (document.getElementById("backgroundColor").value === "Pumpkin") {
        document.body.style.backgroundColor = "#FFD6A7";
        document.body.style.backgroundImage = "";

        catGIF.style.visibility = "visible";
        catGIF.src = "https://cdn.7tv.app/emote/01FHNPZ6000001HW666WR6HYT8/4x.webp";
        document.getElementById("TextInputs").style.backgroundColor = "#FFA500";
        allButtons.forEach(button => {
            button.style.backgroundColor = "#FFA500";
        });
        allHeaders.forEach(header => {
            header.style.backgroundColor = "#FFA500";
        });
    }

    // Mango
    if (document.getElementById("backgroundColor").value === "Mango") {
        document.body.style.backgroundImage = "linear-gradient(to bottom, #FFD6A7, #FF6467)";
        document.body.style.backgroundAttachment = "fixed";
        document.body.style.backgroundSize = "cover";

        catGIF.style.visibility = "visible";
        catGIF.src = "https://cdn.7tv.app/emote/01JX2XAH20DJQ9NVMHR70RR2XR/4x.webp";
        document.getElementById("TextInputs").style.backgroundColor = "#F7B291";
        allButtons.forEach(button => {
            button.style.backgroundColor = "#F7B291";
        });
        allHeaders.forEach(header => {
            header.style.backgroundColor = "#F7B291";
        });
    }
}

function addTask() {
    let taskInput = document.getElementById("todoInput").value;
    if (taskInput !== "") {
        let taskList = document.getElementById("todoList");
        let newTask = document.createElement("li");
        newTask.textContent = taskInput;
        taskList.appendChild(newTask);
        document.getElementById("todoInput").value = "";
    }
}
