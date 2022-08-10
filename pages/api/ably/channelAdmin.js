import Ably from "ably/promises";

export default async function handler(req, res) {
  const { roomID } = req.body.data;
  const ably = new Ably.Realtime(process.env.ABLY_SERVER_API_KEY);

  const channel = ably.channels.get(`play:${roomID}`);

  const activeUsers = await channel.presence.get((err, members) => {
    if (err) console.error(err);
    console.log(members.map((m) => m));
  });

  console.log(activeUsers);

  res.status(200).json("Success");
}
