import { useEffect, useState } from "react";

const WS_URL = "ws://localhost:8080";

export const useSocket = () => {
    const [socket, setSocket] = useState<WebSocket | null>(null);

    useEffect(() => {
        const socket = new WebSocket(WS_URL);

        socket.onopen = () => {
            console.log("Connected to WebSocket server");
        };

        socket.onclose = () => {
            console.log("Disconnected from WebSocket server");
        };

        setSocket(socket);

        return () => {
            socket.close();
        }
    }, []);

    return socket;
}