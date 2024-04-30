import { atom } from "recoil";

export const clickedStateAtom = atom({
    key: 'clickedStateAtom',
    default: false,
})


export const todoTitleAtom = atom({
    key: "todoTitleAtom",
    default: ""
})

export const todoDescriptionAtom = atom({
    key: 'todoDescriptionAtom',
    default: ""
})

export const todoListAtom = atom({
    key: 'todoListAtom',
    default: [{}],
})