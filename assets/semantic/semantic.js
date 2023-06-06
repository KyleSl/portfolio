class Semantic {
    static elementTypes = ['dropdown', 'navbar', 'accordion', 'carousel'];
    constructor(type, element){
        this.type = type;
        this.element = element;
        this.parent = element.parentElement;
        this.siblings = this.parent.children;
        this.hierarchy = this.initiateHierarchy();
    }
    initiateHierarchy(){
        var hierarchyToReturn = [];

        addLayer(this.element.children[0]);

        function addLayer (elementOnLayer){
            var currEl = elementOnLayer;
            var currLayerArr = [];
            currLayerArr.push(currEl);
    
            while(currEl.nextElementSibling){
                if(currEl.children.length > 0){
                    addLayer(currEl.children[0]);
                }
                currEl = currEl.nextElementSibling;
                currLayerArr.push(currEl);
            }
            if(currEl.children.length > 0){
                addLayer(currEl.children[0]);
            }
            hierarchyToReturn.unshift(currLayerArr);
        }
        hierarchyToReturn.unshift([this.element]);

        return hierarchyToReturn;
    }
    previousSibling(){
        for(var i = 1; i < this.siblings.length; i++){
            if(this.siblings[i] === this.element){
                return this.siblings[i - 1];
            }
        }
        return null;
    }
    makeDropdown(){

    }
    makeNavbar(elementType){

    }
    makeAccordion(){

    }
    makeCarousel(){

    }
}