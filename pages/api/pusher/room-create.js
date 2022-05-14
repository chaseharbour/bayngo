import Pusher from "pusher";

export const pusher = new Pusher({
  appId: "1408748",
  key: "038f0aceaa38432312b6",
  secret: "5c72e3c1b8559183e0fa",
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
