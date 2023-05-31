class Socket {
    static socket;

    static emit(key, value) {
        this.socket.emit(key, value);
    }
}

module.exports = {
    Socket
}