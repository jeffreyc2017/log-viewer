type MsgCallback = (messages: string[]) => void;

class Displayer {
  private messages: string[] = [];
  private callbacks: MsgCallback[] = [];

  log(message: string) {
    this.messages.push(message);
    this.notify();
  }

  getMessages() {
    return this.messages;
  }

  subscribe(callback: MsgCallback) {
    this.callbacks.push(callback);
  }

  unsubscribe(callback: MsgCallback) {
    this.callbacks = this.callbacks.filter((cb) => cb !== callback);
  }

  private notify() {
    this.callbacks.forEach((callback) => callback(this.messages));
  }
}

const displayer = new Displayer();
export default displayer;
