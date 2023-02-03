const breakfast = document.getElementById("breakfast");
const lunch = document.getElementById("lunch");
const dinner = document.getElementById("dinner");
const all_btn = document.getElementById("option-all");
const breakfast_btn = document.getElementById("option-breakfast");
const lunch_btn = document.getElementById("option-lunch");
const dinner_btn = document.getElementById("option-dinner");
const menu_items = document.getElementsByClassName("menu-items");
const menu_item = document.getElementsByClassName("menu-item");

all_btn.onclick = function(){open_all_options()};
breakfast_btn.onclick = function(){open_breakFast_options()};
lunch_btn.onclick = function(){open_lunch_options()};
dinner_btn.onclick = function(){open_dinner_options()};

function open_all_options(){
    for(var i=0;i<menu_item.length;i++){
        menu_item[i].style.display = "flex";
    }
}


function open_breakFast_options(){
    for(var i=0;i<menu_item.length;i++){
        if(menu_item[i].id ==breakfast.id){
            menu_item[i].style.display = "flex";
        }
        if(menu_item[i].id !=breakfast.id){
            menu_item[i].style.display = "none";
        }
    }
}

function open_lunch_options(){
    for(var i=0;i<menu_item.length;i++){
        if(menu_item[i].id ==lunch.id){
            menu_item[i].style.display = "flex";
        }
        if(menu_item[i].id !=lunch.id){
            menu_item[i].style.display = "none";
        }
    }
}

function open_dinner_options(){
    for(var i=0;i<menu_item.length;i++){
        if(menu_item[i].id !=dinner.id){
            menu_item[i].style.display = "none";
        }
        if(menu_item[i].id ==dinner.id){
            menu_item[i].style.display = "flex";
        }
    }
}

window.addEventListener("resize", function(){
    if ((window.matchMedia("(min-width: 1437px)").matches) || (window.matchMedia("(width: 1437px)").matches)) {
        for(var i=0;i<menu_item.length;i++){
            menu_item[i].style.flexGrow = "0";
        }
    }
    else{
        for(var i=0;i<menu_item.length;i++){
            menu_item[i].style.flexGrow = "1";
        }
    }
})