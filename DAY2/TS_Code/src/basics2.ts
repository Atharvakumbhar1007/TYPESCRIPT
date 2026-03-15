//enum
enum Direction {
    Up, Down, Left, Right
    //internally enum treats these are numbers:
    //Upis 0, Down is 1......Right is 3
};
enum Status {
    Pending = 1,
    Approved = 2,
    Rejected = 3
}
//Provide any custom value need if you want the default 0,1,2.....
let transactionStatus: Status;
transactionStatus = Status.Approved;

//instead of memorizing actual numbers, you can assign them to emnuns
//to get suggestion from editors as well as making them easy to
//remember.Enum is your own datatype

console.log(Direction.Up, Direction.Right, transactionStatus);