const Pusher = require("pusher");
const axios = require("axios");
const { v4: uuidv4 } = require("uuid");

export const pusher = new Pusher({
  //CREATE ENV
  appId: "",
  key: "",
  secret: "",
  cluster: "us3",
  useTLS: true,
});

export default async function handler(req, res) {
  const { roomID, socket_id, name, isCreator } = req.body;

  const presenceData = {
    user_id: uuidv4(),
    user_info: { name, isCreator },
  };

  const response = await pusher.authorizeChannel(
    socket_id,
    roomID,
    presenceData
  );

  const trigger = await pusher.trigger(`${roomID}`, "create-event", {
    board: state,
  });

  console.log(response);

  res.status(200).send(response, trigger);
}
