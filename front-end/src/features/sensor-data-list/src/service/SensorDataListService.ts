import { eventChannel } from "@redux-saga/core";

export const SensorDataListService = {

    * getAllModels(): Generator<any, any, any> {
        let isError = false;

        return yield fetch(`http://localhost:8000/api/models`, {
            method: 'GET',
        })
            .then(response => {
                isError = response.status !== 200;
                return response;
            })
            .then(response => response.json()) 
            .then(json => {
                if (isError) {
                    throw new Error(json.error);
                }

                return json; 
            });
    },

    * websocketInitChannel() {

        return eventChannel( emitter => {
            const ws = new WebSocket("ws://127.0.0.1:8888/");

            ws.onopen = () => {
                console.log("...opening server");
            };

            // Handle message when data is sent to the websocket 
            ws.onmessage = (event) => {
                let data = null;
                try {
                    data = JSON.parse(event.data.toString());
                } catch (e) {
                    console.log(`Error parsing information`);
                }

                if (data) {
                    return emitter({data: data});
                }
            }

            return () => {
                console.log("disconnecting websocket...")
            }
        })
    }

}