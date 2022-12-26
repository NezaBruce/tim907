
// get elements by id

const popOutButton = document.getElementById("button")

const exitcontainer = document.getElementById("bg_container")
const bg_container = document.querySelector(".bg-popContainer")
// Add event listeners 


document.addEventListener("mouseout", exitmouse);



const cancelPop = document.getElementById("close");

cancelPop.addEventListener("click", CancelPopOut);

function CancelPopOut(e) {
    e.preventDefault(); 
    bg_container.style.display = "none";

}
function exitmouse(event) {       
    if (event.clientY < 50 ){
        document.removeEventListener("mouseout", exitmouse);


        //show pop out now

        exitcontainer.style.display = "flex"



        
        }
}