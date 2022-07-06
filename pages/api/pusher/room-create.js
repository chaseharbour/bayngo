import Pusher from "pusher";

export const pusher = new Pusher({
  //CREATE ENV
  app_id: process.env.PUSHER_APP_ID,
  key: process.env.PUSHER_KEY,
  secret: process.env.PUSHER_SECRET,
  cluster: "us3",
  useTLS: true,
});

export default async function createHandler(req, res) {
  const { roomID, state } = req.body;

  const response = await pusher.trigger(`presence-${roomID}`, "create-event", {
    board: state,
  }).catch(e => console.error(e));


  res.status(200).json({ message: "success" });
}
