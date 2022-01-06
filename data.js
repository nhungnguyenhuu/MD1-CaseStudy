function saveData(name,data) {
    localStorage.setItem(name,data);
}

function loadData(name) {
    if(localStorage.hasOwnProperty(name)){
        let dataJson = localStorage.getItem(name);
        return dataJson;
    }else {
        return 0;
    }

}