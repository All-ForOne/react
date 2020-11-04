import React, { useReducer, createContext, useContext, useRef } from 'react';

const initialItems = [
    {
        id: 202010300001,
        text: '월급',
        type: 'in',
        value: 10000000,
        category: 1
    },
    {
        id: 202010300002,
        text: '점심',
        type: 'out',
        value: 10000,
        category: 2
    },
    {
        id: 202010300003,
        text: '저녁',
        type: 'out',
        value: 10000,
        category: 2
    }
];

function itemReducer(state, action) {
    switch (action.type) {
        case 'CREATE':
            return state.concat(action.item);
        case 'REMOVE':
            return state.filter(item => item.id !== action.id);
        dafault:
            throw new Error(`Unhandled action type : ${action.type}`);
    }
}

const ItemStateContext = createContext();
const ItemDispatchContext = createContext();
const ItemNextIdContext = createContext();

export function ItemProvider({children}){
    const[state, dispatch] = useReducer(itemReducer, initialItems);
    const nextId = useRef(5);

    return (
        <ItemStateContext.Provider value={state}>
            <ItemDispatchContext.Provider value={dispatch}>
                <ItemNextIdContext.Provider value={nextId}>
                    {children}
                </ItemNextIdContext.Provider>
            </ItemDispatchContext.Provider>
        </ItemStateContext.Provider>
    );
}

export function useItemState(){
    const context = useContext(ItemStateContext);
    if(!context){
        throw new Error('Cannot find ItemProvider');
    }
    return context;
}

export function useItemDispatch(){
    const context = useContext(ItemDispatchContext);
    if(!context){
        throw new Error('Cannot find ItemProvider');
    }
    return context;
}

export function useItemNextId(){
    const context = useContext(ItemNextIdContext);
    if(!context){
        throw new Error('Cannot find ItemProvider');
    }
    return context;
}