import Ably from "ably/promises";

export default function handler(req, res) {
  const { roomID, boardState } = req.body.data;
  const realtime = new Ably.Realtime(process.env.ABLY_SERVER_API_KEY);
  console.log(roomID);
  console.log(boardState);

  const channel = realtime.channels.attach(`play:${roomID}`);

  console.log(channel);

  res.status(200).json("Success");
}
