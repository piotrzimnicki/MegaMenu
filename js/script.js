class MegaMenu {
    constructor(menuWrapperId,eventType) {
        eventType ? this.eventType = eventType : this.eventType = 'click';
        this.menuWrapper = document.querySelector(`#${menuWrapperId}`);
        this.mainLiItems = Array.from(this.menuWrapper.querySelectorAll(`#${menuWrapperId} .menu-item.parent`));
        this.childLiItems = Array.from(this.menuWrapper.querySelectorAll(`#${menuWrapperId} .child-menu-item`));
        this.addEventListener(eventType);
    }

    addEventListener(eventType) {
        const mainLiItems = this.mainLiItems;
        const childLiItems = this.childLiItems;
        const menuWrapper = this.menuWrapper;

        function removeActive(arr) {
            arr.map(el => el.classList.remove('active'));
        }
        function siblings(elem) {
            let siblings = [];
            let sibling = elem.parentNode.firstChild;
            while (sibling) {
                if (sibling.nodeType === 1 && sibling !== elem) siblings.push(sibling);
                sibling = sibling.nextSibling;
            }
            return siblings;
        }

        this.mainLiItems.forEach(el => el.addEventListener(`${this.eventType}`,addActive));
        function addActive () {
            eventType === 'click' ? this.classList.toggle('active') : this.classList.add('active');
            const mainSib = siblings(this);
            removeActive(mainSib);
            removeActive(childLiItems);
            function bge () {
                removeActive(mainLiItems);
                removeActive(childLiItems);
                this.remove();
            }
            const background = menuWrapper.querySelector('.background');
            if(background) background.remove();
            if (this.classList.contains('active')){
                let dataTarget = this.dataset.target;
                let target = menuWrapper.querySelector(`#${dataTarget}`);
                if (target != null) {
                    target.classList.add('active');

                    const div = document.createElement('div');
                    div.classList.add('background');
                    div.addEventListener(`mouseenter`, bge);
                    menuWrapper.append(div);
                }
            }
        }
    }

}


const menu = new MegaMenu('main-nav-wrapper', 'mouseenter');