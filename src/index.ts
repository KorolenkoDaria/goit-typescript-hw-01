import { concatenation } from "./concatenation";

const button = document.querySelector('button');

const input = document.querySelector('input');

if (button && input) {
    button.addEventListener("click", () => {
        concatenation(input.value, " hello!")
    })
}


let total: number = 100;
let userName: string = "Daria";
let isActive: boolean = false;

let number: number[] = [1, 2, 3,];

type User = {
    name: string,
    age: number,
} | {
    name: string,
    age: number,
    isLogined: boolean,
}

const userObj: User = {
    name: "Daria",
    age: 35,
    isLogined: false,
}