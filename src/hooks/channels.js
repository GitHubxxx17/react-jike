import { getChannelAPI } from "@/apis/article";

const { useEffect, useState } = require("react");

export const useChannel = () => {
  const [channelList, setChannelList] = useState([]);
  useEffect(() => {
    async function fetchChannels() {
      const res = await getChannelAPI();
      setChannelList(res.data.channels);
    }
    fetchChannels();
  }, []);

  return {
    channelList,
  };
};
