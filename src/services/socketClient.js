import io from 'socket.io-client';
import config from 'config';

export default class socketAPI {
    socket;
    connect() {
        this.socket = io.connect(config.socketUrl)
        return new Promise((resolve, reject) => {
            this.socket.on('connected', (id) => {
                resolve(id)
            });
            this.socket.on('connect_error', (error) => reject(error));
        });
    }

    disconnect() {
        return new Promise((resolve) => {
            this.socket.disconnect(() => {
                this.socket = null;
                resolve();
            });
        });
    }

    emit(event, data){
        return new Promise((resolve, reject) => {
            if (!this.socket) return reject('No socket connection.');

            return this.socket.emit(event, data, (response) => {
                // Response is the optional callback that you can use with socket.io in every request. See 1 above.
                if (response.error) {
                    console.error(response.error);
                    return reject(response.error);
                }

                return resolve();
            });
        });
    }

    on(event, func){
        return new Promise((resolve, reject) => {
            if (!this.socket) return reject('No socket connection.');
            this.socket.on(event, func);
            resolve();
        });
    }
}