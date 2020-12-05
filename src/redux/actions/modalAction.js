const FACTORY_NAME = 'FACTORY_NAME';

export const setFactoryName = (payload) =>({
    type : FACTORY_NAME,
    payload,
});

const DESIGN_NAME = 'DESIGN_NAME';

export const setDesignName = (payload) =>({
    type : DESIGN_NAME,
    payload,
});

const QUANTITY = 'QUANTITY';

export const setQuantity = (payload) =>({
    type : QUANTITY,
    payload,
});

const FILE_NAME = 'FILE_NAME';

export const setFileName = (payload) =>({
    type : FILE_NAME,
    payload,
});

const NEXT_CLICKED = 'NEXT_CLICKED';

export const setNext = () =>({
    type : NEXT_CLICKED,
});

const BACK_CLICKED = 'BACK_CLICKED';

export const setBack = () =>({
    type : BACK_CLICKED,
});

const ASSIGN_FACTORY = 'ASSIGN_FACTORY';

export const assignFactory = () =>({
    type : ASSIGN_FACTORY,
});
