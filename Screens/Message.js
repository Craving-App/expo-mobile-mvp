import React, { useState, useCallback, useEffect } from "react";

import { GiftedChat, InputToolbar } from "react-native-gifted-chat";

const Message = ({ navigation, route }) => {
  const { name, image } = route.params;
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: `Hello i am ${name}`,
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: image,
        },
      },
    ]);
  }, []);
  const [messages, setMessages] = useState([]);
  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);
  const customtInputToolbar = (props) => {
    return (
      <InputToolbar
        {...props}
        containerStyle={{
          backgroundColor: "white",

          borderTopColor: "#E8E8E8",
        }}
      />
    );
  };
  return (
    <GiftedChat
      messages={messages}
      placeholder="Message..."
      onSend={(messages) => onSend(messages)}
      alwaysShowSend
      renderInputToolbar={(props) => customtInputToolbar(props)}
      user={{
        _id: 1,
      }}
    />
  );
};

export default Message;
