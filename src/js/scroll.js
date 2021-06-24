function pageNavigator(tabs) {
    const checkPosition = window.scrollY + 175;
    for (let index = 0; index < tabs.length; index++) {
        const currentTab = document.getElementById(tabs[index].name);
        const nextTab = tabs[index+1] ? document.getElementById(tabs[index+1].name) : { offsetTop : document.getElementsByTagName("body")[0].offsetHeight};
        if(checkPosition > currentTab.offsetTop && checkPosition < nextTab.offsetTop){
            if(checkPosition < currentTab.offsetTop + 50){
                highlightTabName(tabs[index].name);
            }
        }
    }
}

function highlightTabName(name) {
    const linkName = name + "-link";
    if(document.getElementsByClassName("activeTab")[0]){
        document.getElementsByClassName("activeTab")[0].classList.remove("activeTab");
    }
    if(document.getElementById(linkName)){
        document.getElementById(linkName).classList.add("activeTab"); 
    }
}

const scroll = {
    pageNavigator,
    highlightTabName
}

export default scroll;