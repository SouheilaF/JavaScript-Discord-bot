require('dotenv').config();

const {
    Client,
    IntentsBitField,
    EmbedBuilder
} = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

client.on('clientReady', async (c) => {
    console.log(`✅ Mrs ${c.user.tag}, myself, is ready for a new adventure ~!`);

    await require('./register-commands.js')(c);
    await require('./send-messages.js')(c);
});


// =============================
// MESSAGE COMMANDS
// =============================
client.on('messageCreate', (message) => {

    if (message.author.bot) return;

    if (message.content === '!help') {

        const embedhelp = new EmbedBuilder()
            .setTitle('Someone asked for help !')
            .setDescription(`I'm here for both fun and managing system.`)
            .setColor('Fuchsia');

        message.channel.send({ embeds: [embedhelp] });
    }

    if (message.content.toLowerCase() === '!ping') {
        message.reply('WHA- Pong !!');
    }
});


// =============================
// INTERACTIONS
// =============================
client.on('interactionCreate', async (interaction) => {

    // =============================
    // BUTTONS (ROLES)
    // =============================
    if (interaction.isButton()) {

    try {

        await interaction.deferReply({ ephemeral: true });

        const member = interaction.member;
        const role = interaction.guild.roles.cache.get(interaction.customId);

        if (!role) {
            return interaction.editReply(`The role wasn't found. Try again or contact the staff for more informations !`);
        }

        // =========================
        // 🎨 COLOR ROLES
        // =========================
        const colorRoles = [
            '1507091812261564547',
            '1507093761409290340',
            '1507091948148756613',
            '1507089186740502750',
            '1507092059889209615',
            '1507091208197898390',
            '1507092549980917851',
            '1507439430972215306',
        ];
        // =========================
        //  UNIT ROLES
        // =========================
    const unitRoles = [
        '1507423197035888692',
        '1507423199510401135',
        '1507423203260239993',
        '1507423205093277717',
        '1507423207219658985',
        '1507423208939458690',
        ];
        
        // =========================
        // 🧑‍🤝‍🧑 PRONOUN ROLES
        // =========================
        const pronounRoles = [
            '1507455517163782154',
            '1507455513791824133',
            '1507455524210348233',
            '1507455527435899081',
        ];
        // =========================
        // TIERING ROLES
        // =========================
        const tieringRoles = [
        '1507479014778998815',
        '1507479012182589690',
        '1507479007418122461',
    ];

        const allManagedRoles = [...colorRoles, ...pronounRoles, ...unitRoles, ...tieringRoles];
        // =========================
        // REMOVE ONLY SAME CATEGORY LOGIC
        // =========================

        // si bouton appartient à color roles
        if (colorRoles.includes(role.id)) {

            for (const id of colorRoles) {
                if (member.roles.cache.has(id)) {
                    await member.roles.remove(id);
                }}}
        // si bouton appartient à pronouns
        if (pronounRoles.includes(role.id)) {
            for (const id of pronounRoles) {
                if (member.roles.cache.has(id)) {
                    await member.roles.remove(id);
                }}}
        // si bouton appartient à unit
        if (unitRoles.includes(role.id)) {
            for (const id of unitRoles) {
                if (member.roles.cache.has(role.id)) {
                    await member.roles.remove(role.id);
                    return interaction.editReply(
            		`Your role **${role.name}** has been removed !`
        			);
                }}}
        // si le bouton appartient à tiering
        if (tieringRoles.includes(role.id)) {
            for (const id of tieringRoles) {
                if (member.roles.cache.has(role.id)) {
                    await member.roles.remove(role.id);
                    return interaction.editReply(
            		`Your role **${role.name}** has been removed !`
        			);
                }}}
        // add new role
        await member.roles.add(role);

        return interaction.editReply(
            `✨ You now have: **${role.name}**`
        );

    } catch (error) {
        console.log(error);
        if (!interaction.replied) {
            interaction.reply({
                content: '❌ Error while processing role.',
                ephemeral: true
            });
        }}
    return;
}
    // =============================
    // SLASH COMMANDS
    // =============================
    if (!interaction.isChatInputCommand()) return;
    if (interaction.commandName === 'ping') {
        return interaction.reply('WHA-?! Pong !!');
    }

    if (interaction.commandName === 'about-me') {
        return interaction.reply('About me...');
    }

    //////////////////////
    ///////////// GAAAMES /////////////////
    // =============================
    // TRUTH OR DARE
    // =============================
    if (interaction.commandName === 'truth-or-dare') {

        const truths = [
        `What was your most recent lie?`,
        `Who was your first crush?`,
        `If you could be invisible for a day, what's the first thing you would do ?`,
        `What is your biggest fear?`,
        `What is your most embarrassing moment?`,
        `What is your last internet research ?`,
        `If you could pick one superpower, which one would it be and why ?`,
        `What is the longest you've gone without showering ?`,
        `What is the most expensive thing you've stollen ?`,
        `What is the dumbest thing you've ever purchased ?`,
        `What is the biggest lie you've ever said?`,
        `What was your first impression of each persons you're playing with?`,
    ];
    const dares = [
        `Send the last picture you've taken !`,
        `Change your status to what the next person wants.`,
        `Switch names with someone for two turns.`,
        `Send the dumbest picture that you have on your phone`,
        `Talk only in uppercase for 5 minutes.`,
        `Change your nickname with the choice of the group for 10 minutes.`,
        `Send a funny emoji combo.`,
        `Talk backwards for 5 minutes.`,
        `Only talk with emojis for the next five minutes.`,
        `Only talk with Gifs for the next five minutes.`,
        `Only talk with Pictures for the next five minutes.`,
        `Send a DM that the group tells you to, to the first person of any of your social media.`,
    ];
        const choice = interaction.options.getString('choice');

        if (choice === 'truth') {
            const random = truths[Math.floor(Math.random() * truths.length)];
            return interaction.reply(`🟣 Truth: ${random}`);
        }

        if (choice === 'dare') {
            const random = dares[Math.floor(Math.random() * dares.length)];
            return interaction.reply(`🔴 Dare: ${random}`);
        }
    }
});

client.login(process.env.TOKEN);















