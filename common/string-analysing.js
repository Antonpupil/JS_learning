const path = "/users/download/index.html"

const isHtml = path =>{
    const requiredEXt = ".html";

    const pathExt = path.slice(-5);

    return requiredEXt == pathExt

    /* if(requiredEXt == pathExt){
        return true;
    } else {
        return false;
    } */

}


console.log(isHtml(path))