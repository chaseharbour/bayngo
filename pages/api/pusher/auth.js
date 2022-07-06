const Pusher = require("pusher");
const axios = require("axios");
const { v4: uuidv4 } = require("uuid");

export const pusher = new Pusher({
  //CREATE ENV
  app_id: process.env.PUSHER_APP_ID,
  key: process.env.PUSHER_KEY,
  secret: process.env.PUSHER_SECRET,
  cluster:"us3",
  useTLS: true,
});

export default function handler(req, res) {
  const { socket_id: socketId, channel_name: channelName } = req.body;

  const presenceData = {
    user_id: uuidv4(),
    user_info: { isCreator: true },
  };

  const auth = pusher.authorizeChannel(
    socketId,
    channelName,
    presenceData
  );

  // const trigger = await pusher.trigger(channelName, "create-event", {
  //   board: DEFAULT_STATE,
  // });

  // console.log(JSON.stringify(JSON.parse(response)));

  res.send(auth);
}
