function setupTabs(){
    document.querySelectorAll(".tab").forEach(button => {
      button.addEventListener("click", () => {
            const sideBar = button.parentElement;
            const tabsContainer = sideBar.parentElement;
            const tabNumber = button.dataset.forTab;
            const tabToActivate = tabsContainer.querySelector(`tabs-content[data-tab="${tabNumber}"]`);

            sideBar.querySelectorAll(".tabs-button").forEach(button =>{
                button.classList.remove("tabs-button--active");
            });

            sideBar.querySelectorAll(".tabs-content").forEach(tab =>{
                button.classList.remove("tabs-content--active");
            });

            button.classList.add("tabs-button--active");
            tabToActivate.classList.add("tabs-content--active");

      });

    });
}

document.addEventListener("DOMContentLoaded", () =>{
    setupTabs();
});

var tabButtons=document.querySelectorAll(".tabContainer .buttonContainer button");
var tabPanels=document.querySelectorAll(".tabContainer  .tabPanel");

function showPanel(panelIndex,colorCode) {
    tabButtons.forEach(function(node){
        node.style.backgroundColor="";
        node.style.color="";
    });
    tabButtons[panelIndex].style.backgroundColor=colorCode;
    tabButtons[panelIndex].style.color="white";
    tabPanels.forEach(function(node){
        node.style.display="none";
    });
    tabPanels[panelIndex].style.display="block";
    tabPanels[panelIndex].style.backgroundColor=colorCode;
}
showPanel(0,'#f44336');