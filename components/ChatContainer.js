import React, { useState, useEffect } from "react";
import { Button, TextField } from "@mui/material";
import { useChatGpt } from "@/hook/useChatGpt";
import { addMessage } from "@/utils/chatHistory";
import { ChatHistoryFrame } from "./ChatHistoryFrame";

const promptId = "cldpqivpj394qz57r8ei0og5979";

const ChatContainer = () => {
  const [pendingMessage, setPendingMessage] = useState("");
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const {
    isLoading,
    history,
    isSuccess,
    isError
  } = useChatGpt(message, promptId);

  useEffect(() => {
    if (isSuccess && !isError) {
      setChatHistory((prev) => addMessage(prev || [], message, "user"));
      setMessage("");
    }
    if (isError) {
      console.error("Error fetching chat response.");
    }
  }, [isSuccess, isError]);

  return (
    <div style={{ padding: "1rem", fontFamily: "Arial", color: "#fff" }}>
      <h2>UltimateBot1 Console</h2>

      <ChatHistoryFrame
        chatHistory={chatHistory}
        isLoading={isLoading}
      />

      <div style={{ marginTop: "1rem" }}>
        <TextField
          label="Type your message"
          variant="outlined"
          fullWidth
          value={pendingMessage}
          onChange={(e) => setPendingMessage(e.target.value)}
          style={{ marginBottom: "1rem", backgroundColor: "#fff" }}
        />

        <Button
          variant="contained"
          style={{ backgroundColor: "black", color: "white" }}
          onClick={() => {
            setMessage(pendingMessage);
            setChatHistory((prev) =>
              addMessage(prev || [], pendingMessage, "user")
            );
            setPendingMessage("");
          }}
        >
          Send
        </Button>

        <Button
          variant="outlined"
          style={{ marginLeft: "1rem", borderColor: "black", color: "black" }}
          onClick={() => {
            setMessage("");
            setPendingMessage("");
            setChatHistory([]);
          }}
        >
          Clear
        </Button>
      </div>
    </div>
  );
};
export default ChatContainer;
