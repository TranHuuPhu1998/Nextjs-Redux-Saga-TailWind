const start = {
    draggableId : 'task-1',
    type : 'TYPE',
    reason : 'DROP',
    source : {
        droppableId : 'column-1',
        index : 0,
    },
    destination : null
};

const update = {
    ...start ,
    destination : {
        droppable : 'column-1',
        index : 1,
    },
};

const result = {
    ...update,
    reason : 'DROP',
};

learn link : https://egghead.io/lessons/react-create-reorderable-horizontal-lists-with-react-beautiful-dnd-direction-prop

video 11;