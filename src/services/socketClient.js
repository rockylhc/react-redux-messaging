import io from 'socket.io-client';
import config from 'config';

export default class socketAPI {
    socket;
    connect() {
        this.socket = io.connect(config.socketUrl)
        return new Promise((resolve, reject) => {
            this.socket.on('connected', (data) => resolve(data));
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
             this.socket.emit(event, data, (response) => {

                if (response.error) {
                    reject(response.error);
                }
                resolve(response);
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