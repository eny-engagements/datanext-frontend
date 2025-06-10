import { useQuery } from "@tanstack/react-query";

import axios from "../api/axiosInstance";
import { CHATS_URL } from "../api/apiUrls";

const getMessages = async (threadId, databaseId) => {
  const url = `${CHATS_URL}/${threadId}/messages`;
  const config = { params: { databaseId } };

  const { data } = await axios.get(url, config);
  return data;
};

const useGetMessages = (threadId, databaseId) => {
  const {
    data,
    isLoading: refetching,
    refetch: refetchMessages,
  } = useQuery({
    queryFn: () => getMessages(threadId, databaseId),
    queryKey: ["messages", threadId, publicDatabaseId],
    enabled: !!threadId && !!databaseId,
  });

  return {
    fetchedMessages: data.messages,
    refetching,
    refetchMessages,
  };
};

export default useGetMessages;
