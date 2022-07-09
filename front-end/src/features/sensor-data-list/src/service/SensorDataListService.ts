import { eventChannel } from "@redux-saga/core";

export const SensorDataListService = {
    * fetchSensorData(sensorType: string): Generator<any, any, any> {
        let isError = false;
        return yield fetch(`http://localhost:8000/api/${sensorType}`, {
			method: 'GET',
		})
			.then(response => {
				isError = response.status !== 200;
				return response;
			})
			.then(response => response.json())
			.then(result => {
				if (isError) {
					throw new Error(result.error);
				}
				return result;
			});
    },

    * getSensorDataFromDatabase(query: any): Generator<any, any, any> {
        let isError = false;
        return yield fetch(`http://localhost:8000/api/sensors`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				"Access-Control-Allow-Origin": "http://localhost:3000",
				"Access-Control-Allow-Methods": "POST, GET, OPTIONS",
				"Access-Control-Allow-Headers": "*"
			},
			body: JSON.stringify(query)
		})
			.then(response => {
				isError = response.status !== 200;
				return response;
			})
			.then(response => response.json())
			.then(result => {
				if (isError) {
					throw new Error(result.error);
				}
				return result;
			});
   },

   * getGPSCoordinates(): Generator<any, any, any> {
        let isError = false;
        return yield fetch(`http://144.126.208.108:8000/gps`, {
			method: 'GET',
		})
			.then(response => {
				isError = response.status !== 200;
				return response;
			})
			.then(response => response.json())
			.then(result => {
				if (isError) {
					throw new Error(result.error);
				}
				return JSON.parse(result);
			});
   },

    * getGPSCoordinatePath(): Generator<any, any, any> {
        let isError = false;
        return yield fetch(`http://144.126.208.108:8000/gps_log`, {
			method: 'GET',
		})
        .then(response => {
            isError = response.status !== 200;
            return response;
        })
        .then(response => response.json())
        .then(result => {
            if (isError) {
                throw new Error(result.error);
            }
            return JSON.parse(result).coordinates;
        });
    },

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
                    return emitter(data);
                }
            }

            return () => {
                console.log("disconnecting websocket...")
            }
        })
    }

}