import Pusher from "pusher";

export const pusher = new Pusher({
  //CREATE ENV
  appId: "",
  key: "",
  secret: "",
  cluster: "us3",
  useTLS: true,
});

export default async function createHandler(req, res) {
  const { roomID, state } = req.body;

  const response = await pusher.trigger(`${roomID}`, "create-event", {
    board: state,
  });

  res.status(200).json({ message: "success" });
}
