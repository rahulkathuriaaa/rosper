// @ts-nocheck
import { useEffect, useState } from "react";
import { appwriteApi } from "@/appwrite/config";
import appwriteService from "@/appwrite/config";
import conf from "@/conf/config";
import { usePublicKey } from "@/store";
export function useChat(room: string) {
  const key = usePublicKey.getState().publicKey;
  const [nameID, setNameID] = useState<string>();
  const [messages, setMessages] = useState<any>();
  const [currMessage, setCurrMessage] = useState<string>();

  useEffect(() => {
    const result = room.replace(/%40/g, "@").split("-");
    const key = result[0];
    const currentUserKey = result[1];

    async function updateData() {
      console.log(key);
      console.log(result[1] + "-" + result[2]);

      // if (currentUserKey === result[2]) {
      //   const data = await appwriteService.getInfluencerData(key);
      //   setNameID(data.documents[0].name);
      //   console.log(data.documents[0].name);
      // } else if (currentUserKey === result[1]) {
      //   const data = await appwriteService.getBrandData(key);
      //   setNameID(data.documents[0].name);
      //   console.log(data.documents[0].name);
      // }

      const data = await appwriteService.getCurrentUser();
      console.log(data);
    }

    updateData();

    async function getMessages() {
      const prevMessages = await appwriteService.getMessages(
        result[1] + result[2]
      );
      setMessages(prevMessages.documents);
    }

    getMessages();
  }, [room]);

  useEffect(() => {
    const unsubscribe = appwriteApi.subscribe(
      `databases.${conf.appwriteDatabaseId}.collections.${conf.appwriteChatId}.documents`,
      (response) => {
        if (
          response.events.includes(
            "databases.*.collections.*.documents.*.create"
          )
        ) {
          setMessages((prev) => [...prev, response.payload]);
        }
      }
    );

    return () => {
      unsubscribe();
    };
  }, []);

  async function sendMessage(e: any) {
    e.preventDefault();
    const message = e.target.message.value;
    const name = nameID;
    const chatObj = {
      key: key,
      room: room.replace(/%40/g, "@"),
      messages: message,
    };
    setCurrMessage("");
    const res = await appwriteService.createChat(chatObj);
    console.log(res);
  }

  return {
    nameID,
    messages,
    currMessage,
    setCurrMessage,
    sendMessage,
  };
}
