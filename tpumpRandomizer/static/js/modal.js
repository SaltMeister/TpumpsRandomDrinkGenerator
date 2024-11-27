// let x = {
//     flavors: [],
//     isMilk: false,
//     tea: "green",
//     sugar: "100",
//     ice: "100"
// }


function CreateModal(generatedData) {
    const bodyRef = document.getElementById("body");
    // Create Box and background

    const containerRef = document.createElement("div");
    const backgroundRef = document.createElement("div");

    containerRef.classList.add("modal-container");
    
    containerRef.id = "modal";
    
    backgroundRef.classList.add("modal-background");
    backgroundRef.id = "modal-background";


    const sugarText = generatedData.sugarSetting.split(" ")[1] + '%';
    const iceText = generatedData.iceSetting.split(" ")[1] + '%';
    // Create Inner HTML
    const innerhtml = `
        <div class="modal-flavor-settings" id="modal-flavor-settings">

        </div>

        <div class="modal-sub-settings">
            <p class="title2"><strong>Sugar:</strong> ${sugarText}</p>
            <p class="title2"><strong>Ice:</strong> ${iceText}</p>
            <p class="title2"><strong>Tea:</strong> ${generatedData.teaSetting}</p>
            <p class="title2"><strong>Milk Setting:</strong> ${generatedData.milkSetting}</p>
            <p class="title2"><strong>Blend Setting:</strong> ${generatedData.blendSetting}</p>
        </div>
        <div class="modal-button pressable" onclick="CloseModal()">
            <p class="title2">Close</p>
        </div>
    `

    containerRef.innerHTML = innerhtml;

    bodyRef.appendChild(backgroundRef);
    bodyRef.appendChild(containerRef);

    const boxRef = document.getElementById("modal-flavor-settings");

    // Add Flavor Text to modal
    for (const flavor of generatedData.flavors) {
        window.scrollTo({ top: 0, behavior: 'smooth' });

        const element = document.createElement("p")
        element.innerText = flavor;
        element.classList.add("title1");

        boxRef.appendChild(element);
    }

    
}


function CloseModal() {
    console.log("Closing Modal");
    document.getElementById("modal").remove();
    document.getElementById("modal-background").remove();
}
