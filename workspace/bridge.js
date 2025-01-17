//abstraction
class Message {
    constructor(messageSender) {
        this.messageSender = messageSender;
    }
    send(msg) {
        throw new Error("Abstract Message!!!");
    }
}

// Implmentator
class MessageSender {
    sendMessage(msg) {
        throw new Error("Abstract Message Sender!!!");
    }
}

class TextMessage extends Message {
    constructor(messageSender) {
        super(messageSender);
    }
    send(msg) {
        this.messageSender.sendMessage(msg);
    }
}

class EmailMessage extends Message {
    constructor(messageSender) {
        super(messageSender);
    }
    send(msg) {
        this.messageSender.sendMessage(msg);
    }
}

class TextMessageSender extends MessageSender {
    sendMessage(msg) {
        console.log(msg);
    }
}

class EmailMessageSender extends MessageSender {
    sendMessage(msg) {
        console.log(msg);
    }
}

let textMessageSender = new TextMessageSender();
let textMessage = new TextMessage(textMessageSender);
textMessage.send("TextMessageSender: Sending text message...");
let emailMessageSender = new EmailMessageSender();
let emailMessage = new TextMessage(emailMessageSender);
emailMessage.send("EmailMessageSender: Sending email message...");
