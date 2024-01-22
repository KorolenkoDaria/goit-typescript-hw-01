import { concatenation } from "./concatenation";
const button = document.querySelector('button');
const input = document.querySelector('input');
if (button && input) {
    button.addEventListener("click", () => {
        concatenation(input.value, " hello!");
    });
}
let total = 100;
let userName = "Daria";
let isActive = false;
let number = [1, 2, 3,];
const userObj = {
    name: "Daria",
    age: 35,
    isLogined: false,
};
//# sourceMappingURL=index.js.map