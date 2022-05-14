// import Pusher from "pusher";

// const pusher = new Pusher({
//   appId: "",
//   key: "",
//   secret: "",
//   cluster: "us3",
//   useTLS: true,
// });

export default function createRoom(req, res) {
  const randIDGen = (letterArr, numArr) => {
    let randID = "";

    for (let i = 0; i < 5; i++) {
      const randLetterIndex = Math.floor(Math.random() * letterArr.length);
      const randNumIndex = Math.floor(Math.random() * numArr.length);

      randID = randID.concat(letterArr[randLetterIndex]);
    }

    return randID.toUpperCase();
  };

  const letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  const randID = randIDGen(letters, numbers);

  res.status(200).json({ roomID: randID });
}
