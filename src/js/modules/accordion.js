import Helpers from './helpers';
import ScrollSmooth from './scroll-smooth';

const Accordion = {
    vars: {
        openClass: 'open-js',
        trigger: '[data-accordion="trigger"]',
        target: '[data-accordion="target"]'
    },
    initAccordion: (accordionContainers, scroll) => {
        // Go through each accordion's container
        for (let i = 0; i < accordionContainers.length; i++) {

            // Trigger - button user has to click to open/close accordion's block
            let accordionTrigger = accordionContainers[i].querySelectorAll(Accordion.vars.trigger)[0];

            if (accordionTrigger) {
                accordionTrigger.addEventListener('click', (e) => {

                    // If trigger is inside link we have to stop default action
                    e.stopPropagation();
                    e.preventDefault();

                    // Find accordions block to open/close
                    let accordionBlock = accordionContainers[i].querySelectorAll(Accordion.vars.target)[0];

                    if (accordionBlock) {
                        // Close if it's opened
                        if (accordionBlock.classList.contains(Accordion.vars.openClass)) {
                            Helpers.closeBlock(accordionBlock, Accordion.vars.openClass);
                        // Open if it's closed
                        } else {

                            // Close opened accordion's block
                            for (let j = 0; j < accordionContainers.length; j++) {
                                if (accordionTrigger) {
                                    let accordionBlockOpened = accordionContainers[j].querySelectorAll(Accordion.vars.target)[0];

                                    Helpers.closeBlock(accordionBlockOpened, Accordion.vars.openClass);
                                }
                            }

                            // open active accordion's block
                            Helpers.openBlock(accordionBlock, Accordion.vars.openClass);

                            // Scroll to active accordion's block
                            if (scroll) ScrollSmooth.initScroll(accordionBlock.closest('li'), 1);
                        }
                    }
                });
            }
        }
    }
};

export default Accordion;

