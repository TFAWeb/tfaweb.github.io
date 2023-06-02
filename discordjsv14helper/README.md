# discord.js-v14-helper
A powerful library that lets you to create Discord bots easily. Use the command below in your IDE's terminal or shell to install:

For npm packages manager:
```shell
npm i discord.js-v14-helper
```

For yarn packages manager:
```shell
yarn add discord.js-v14-helper
```

# discord.js URLs
The websites below are going to redirect you to the official discord.js's sites. If you need to get some data information, guide, types... etc, visit one of the sites below.

<ul>
    <li>discord.js main: <a href="https://discord.js.org/#/docs/discord.js/">Click here</a></li>
    <li>discord.js guide: <a href="https://discordjs.guide/">Click here</a></li>
    <li>discord.js API types: <a href="https://discord-api-types.dev/">Click here</a></li>
</ul>

# Support server
If there is any problem on the project or having some ideas to share, then join our <a href="https://discord.gg/bGNRZcnwWy">Discord server</a>.

<a href="https://discord.gg/bGNRZcnwWy">
    <img src="https://invidget.switchblade.xyz/bGNRZcnwWy">
</a>

# License
This package is protected by GPL-3.0 license. Any library that is similar to this package is going to be taken down, avoid from copying the entire source code and resharing it without giving credits to the developers.

# Example Discord bot
```js
const {
    Client
} = require('discord.js');
const {
    ApplicationCommandBuilder,
    ApplicationCommandsRegister,
	BetterConsoleLogger,
	Colors,
    CommandType,
	ClientIntents
} = require('discord.js-v14-helper');

const client = new Client({
    intents: ClientIntents
});

const token = "Your bot token";
const id = "Your bot ID";

client.once('ready', () => {
    new BetterConsoleLogger('Client is ready!')
        .setTextColor(Colors.Red)
        .showCurrentTime(true)
        .log(true);
});

client.on('interactionCreate', async (interaction) => {
    if (interaction.commandName === 'ping') {
        return interaction.reply({ content: 'Pong! '});
    };
});

const commands = [
    new ApplicationCommandBuilder()
        .setName('ping')
        .setDescription('Replies with Pong!')
        .setCommandType(CommandType.Chat_input)
        .setOptions([])
];

const register = new ApplicationCommandsRegister(token, id)
    .setApplicationCommands(commands)
    .setRestVersion(10);

(async () => {
    register.start();
})();

client.login(token);
```

# Developers
<ul>
    <li>T.F.A#7524: Creator of the package.</li>
</ul>

© 2022 - 2023 • T.F.A 7524 - Development, All rights reserved.