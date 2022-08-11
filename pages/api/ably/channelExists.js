import axios from "axios";

export default async function handler(req, res) {
  try {
    const { roomID } = req.body;
    //Unsure if implementation is scalable
    //Ably API may only return small amount of active channels
    const response = await axios.get(
      `https://rest.ably.io/channels?key=${process.env.ABLY_SERVER_API_KEY}`
    );

    const checkAllChannels = (item) => item.name.includes(roomID);
    const isChannelActive = response.data.some(checkAllChannels);

    res.status(200).json(isChannelActive);
  } catch (err) {
    console.error(err);
    res.status(404).json("Something went wrong...");
  }
}
