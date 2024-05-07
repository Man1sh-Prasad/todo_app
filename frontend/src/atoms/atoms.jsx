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

export const updateStateAtom = atom({
    key: 'updateStateAtom',
    default: false,
})

export const emailAtom = atom({
    key: 'emailAtom',
    default: ""
})

export const usernameAtom = atom({
    key: 'usernameAtom',
    default: ""
})

export const passwordAtom = atom({
    key: 'passwordAtom',
    default: ""
})