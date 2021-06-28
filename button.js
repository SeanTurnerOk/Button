function btnUpdate(element){
    if(element.innerHTML=="Login"){
        element.innerHTML="Logout";
    }
    else if(element.innerHTML=="Logout"){
        element.innerHTML="Login";
    }
    else{
        element.innerHTML="Error";
    }
}
function addDef(element){
    element.remove()
}