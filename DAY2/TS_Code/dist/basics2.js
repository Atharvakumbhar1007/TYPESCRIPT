"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
    //internally enum treats these are numbers:
    //Upis 0, Down is 1......Right is 3
})(Direction || (Direction = {}));
;
var Status;
(function (Status) {
    Status[Status["Pending"] = 1] = "Pending";
    Status[Status["Approved"] = 2] = "Approved";
    Status[Status["Rejected"] = 3] = "Rejected";
})(Status || (Status = {}));
//Provide any custom value need if you want the default 0,1,2.....
let transactionStatus;
transactionStatus = Status.Approved;
//instead of memorizing actual numbers, you can assign them to emnuns
//to get suggestion from editors as well as making them easy to
//remember.Enum is your own datatype
console.log(Direction.Up, Direction.Right, transactionStatus);
var AllowedColors;
(function (AllowedColors) {
    AllowedColors["Red"] = "RED";
    AllowedColors["Blue"] = "BLUE";
    AllowedColors["Yellow"] = "YELLOW";
})(AllowedColors || (AllowedColors = {}));
const teeColor = AllowedColors.Red;
console.log(teeColor);
//union type
let id;
//ID can be string or number
//void means does not return anything
function displayId(id) {
    if (typeof id === "string") {
        console.log("String: ", id.toUpperCase());
    }
    else {
        console.log("Number ", id.toFixed(2));
    }
}
id = "abcde123";
displayId(id);
id = 1234.2;
displayId(id);
//# sourceMappingURL=basics2.js.map