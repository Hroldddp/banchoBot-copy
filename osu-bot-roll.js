class banchoBot {
    constructor() {
        this.commands = {
            '!roll': this.rollCommand
        };
    }

    handleMessage(username, message) {
        const command = message.trim().toLowerCase();
        if (this.commands.hasOwnProperty(command)) {
            return this.commands[command](username);
        }
        return null;
    }

    rollCommand(username) {
        const roll = Math.floor(Math.random() * 101);
        return `${username} rolled ${roll}`;
    }
}

// Usage example:
const bot = new banchoBot();

// Simulating chat messages
console.log(bot.handleMessage('Hroldddp', '!roll'));
console.log(bot.handleMessage('BanchoBot', '!roll'));

