var img;
function generateIdCard(event) {
    event.preventDefault();
    let name = document.getElementById("inputNameId").value,
    colgName = document.getElementById("inputCollageName").value,
    location = document.getElementById("inputLocation").value;
    document.getElementById("nameid").innerHTML = name;
    document.getElementById("collageId").innerHTML = colgName;
    document.getElementById("locationId").innerHTML = location;
    document.getElementById("imageid").src= img;
    if(name && colgName && location &&img)
    document.getElementById("id-card-div").style.visibility="visible";
}
 function loadImage  (event) {
	img = URL.createObjectURL(event.target.files[0]);
};
