import React, { useEffect, useState } from "react";

export type ChatMessageType = {
    message: string
    photo: string
    userId: number
    userName: string
}

const ChatPage: React.FC = () => {
    return <div>
        <Chat />
    </div>
}


const Chat: React.FC = () => {

    const [wsChannel, setWsChannel] = useState<WebSocket | null>(null)
    let ws: WebSocket

    const closeHandler = () => {
        setTimeout(() => {
            createChannel()
        }, 3000)
    }

    
    function createChannel() {
        ws?.removeEventListener("close", closeHandler)
        ws?.close()

        ws = new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx")
        wsChannel?.addEventListener("close", closeHandler)
        setWsChannel(ws)
    }

    useEffect(() => {
        createChannel()

        return () => {
            ws?.removeEventListener("close", closeHandler)
            ws.close()
        }
    }, [])

    return <div>
        <Messages wsChannel={wsChannel} />
        <AddMessageForm wsChannel={wsChannel} />
    </div>
}

type wsChannelType = {
    wsChannel: WebSocket | null;
}

const Messages: React.FC<wsChannelType> = ({ wsChannel }) => {

    const [messages, setMessages] = useState<ChatMessageType[]>([])

    useEffect(() => {

        const messageHandler = (e: MessageEvent) => {
            let newMessages = JSON.parse(e.data)
            setMessages((prevMessages) => [...prevMessages, ...newMessages])
        }

        wsChannel?.addEventListener('message', messageHandler)

        return () => {
            wsChannel?.removeEventListener('message', messageHandler)
        }

    }, [wsChannel])

    return <div style={{ height: "400px", overflowY: 'auto' }}>
        {messages && messages.map((message, i) => <Message key={i} content={message} />)}
    </div>
}

type MessageType = {
    content: ChatMessageType
}

const Message: React.FC<MessageType> = ({ content }) => {
    return <div>
        <img src={content.photo} alt="" /> <b>{content.userName}</b>
        <br />
        {content.message}
        <hr />
    </div>
}

const AddMessageForm: React.FC<wsChannelType> = ({ wsChannel }) => {
    const [message, setMessage] = useState("")
    const [isReady, setIsReady] = useState<'pending' | 'ready'>("pending")

    useEffect(() => {

        const openHandler = () => {
            setIsReady('ready')
        }

        wsChannel?.addEventListener("open", openHandler)

        return () => {
            wsChannel?.removeEventListener('open', openHandler)
        }
    }, [wsChannel])

    const sendMessage = () => {
        if (!message) return

        wsChannel?.send(message)
        setMessage("")
    }

    return <div>
        <div>
            <textarea onChange={(e) => setMessage(e.currentTarget.value)} value={message}></textarea>
        </div>
        {/* <button disabled={wsChannel === null || isReady === 'pending'} onClick={sendMessage}>Send</button> */}
        <button onClick={sendMessage}>Send</button>
    </div>
}

export default ChatPage