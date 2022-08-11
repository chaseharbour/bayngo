import Ably from "ably/promises";

export default function handler(req, res) {
  const { roomID } = req.body.data;
  const realtime = new Ably.Realtime(process.env.ABLY_SERVER_API_KEY);

  const channel = realtime.channels.get(`play:${roomID}`);

  const activeUsers = channel.presence.get((err, members) => {
    if (err) console.error(err);
    console.log(members[0]?.clientId);
  });

  console.log(activeUsers);

  res.status(200).json("Success");
}
