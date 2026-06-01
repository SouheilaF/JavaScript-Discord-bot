const {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    EmbedBuilder
} = require('discord.js');

module.exports = async (client) => {

    // =========================
    // 🎨 COLORS ROLES
    // =========================
    const colorRoles = [
        { id: '1507091812261564547', label: '❤️Supernova' },
        { id: '1507093761409290340', label: '🧡Comet' },
        { id: '1507091948148756613', label: '💛Star' },
        { id: '1507089186740502750', label: '🩷Cosmic aurora' },
        { id: '1507092059889209615', label: '💜Nebula' },
        { id: '1507091208197898390', label: '💙Galaxy' },
        { id: '1507092549980917851', label: '💚Aurora borealis' },
        { id: '1507439430972215306', label: '🖤Black hole' },
    ];

    // =========================
    // 🧑‍🤝‍🧑 PRONOUNS ROLES
    // =========================
    const pronounRoles = [
        { id: '1507455517163782154', label: 'He / Him' },
        { id: '1507455513791824133', label: 'She / Her' },
        { id: '1507455524210348233', label: 'They / Them' },
        { id: '1507455527435899081', label: 'Any' },
    ];

    // =========================
    // 🎶 UNIT ROLES
    // =========================
    const unitRoles = [
        { id: '1507423197035888692', label: '🎶 Visual Singer '},
        { id: '1507423199510401135', label: '🌌 Leoneed '},
        { id: '1507423203260239993', label: '🍀 More More Jump'},
        { id: '1507423205093277717', label: '🫟 Vivid Bad Squad'},
        { id: '1507423207219658985', label: '👑 Wonderland x Showtime'},
        { id: '1507423208939458690', label: '💜 Nightcord at 25:00'},
    ];

    // =========================
    // 📅 TIERING ROLES
    // =========================
    const tieringRoles = [
        { id: '1507479014778998815', label: '📅 Schedule ^^'},
        { id: '1507479012182589690', label: '🧍 Standby ~'},
        { id: '1507479007418122461', label: '🔔Emergency !!!'},
    ];

    try {

        const channel = await client.channels.fetch('1499387359316279306');
        if (!channel) return;

        // =========================================================
        // 🎨 COLORS EMBED
        // =========================================================
        const colorRow1 = new ActionRowBuilder();
        const colorRow2 = new ActionRowBuilder();

        colorRoles.forEach((role, index) => {

            const button = new ButtonBuilder()
                .setCustomId(role.id)
                .setLabel(role.label)
                .setStyle(ButtonStyle.Secondary);

            if (index < 4) colorRow1.addComponents(button);
            else colorRow2.addComponents(button);
        });

        const colorEmbed = new EmbedBuilder()
            .setTitle('⊹₊˚‧︵‿₊୨🎨 Color Roles୧₊‿︵‧˚₊⊹')
            .setDescription('Pick your color name... You can claim it by interacting with the buttons below ~♪ !')
            .setColor(0x9B59B6);

        await channel.send({
            embeds: [colorEmbed],
            components: [colorRow1, colorRow2],
        });

        // separator
        await channel.send({
            embeds: [
                new EmbedBuilder()
                    .setDescription('⊱⋆⊰')
                    .setColor(0xF2F2F2)
            ]
        });

        // =========================================================
        // 🎶 UNIT EMBED
        // =========================================================
        const unitRow1 = new ActionRowBuilder();
        const unitRow2 = new ActionRowBuilder();

        unitRoles.forEach((role, index) => {

            const button = new ButtonBuilder()
                .setCustomId(role.id)
                .setLabel(role.label)
                .setStyle(ButtonStyle.Secondary);

            if (index < 3) unitRow1.addComponents(button);
            else unitRow2.addComponents(button);
        });

        const unitEmbed = new EmbedBuilder()
            .setTitle('⊹₊˚‧︵‿₊୨🎶 Oshi Units୧₊‿︵‧˚₊⊹')
            .setDescription('Choose your favorite unit !')
            .setColor(0x9B59B6);

        await channel.send({
            embeds: [unitEmbed],
            components: [unitRow1, unitRow2],
        });

        // separator
        await channel.send({
            embeds: [
                new EmbedBuilder()
                    .setDescription('⊱⋆⊰')
                    .setColor(0xF2F2F2)
            ]
        });

        // =========================================================
        // 🧑‍🤝‍🧑 PRONOUN EMBED
        // =========================================================
        const pronounRow = new ActionRowBuilder();

        pronounRoles.forEach((role) => {

            pronounRow.addComponents(
                new ButtonBuilder()
                    .setCustomId(role.id)
                    .setLabel(role.label)
                    .setStyle(ButtonStyle.Secondary)
            );
        });

        const pronounEmbed = new EmbedBuilder()
            .setTitle('⊹₊˚‧︵‿₊୨🧑‍🤝‍🧑 Pronouns୧₊‿︵‧˚₊⊹')
            .setDescription(`Now now, time to see know you'd like to be referred as !`)
            .setColor(0x9B59B6);

        await channel.send({
            embeds: [pronounEmbed],
            components: [pronounRow],
        });

        // separator
        await channel.send({
            embeds: [
                new EmbedBuilder()
                    .setDescription('⊱⋆⊰')
                    .setColor(0xF2F2F2)
            ]
        });

        // =========================================================
        // 📅 TIERING EMBED
        // =========================================================
        const tieringRow = new ActionRowBuilder();

        tieringRoles.forEach((role) => {

            tieringRow.addComponents(
                new ButtonBuilder()
                    .setCustomId(role.id)
                    .setLabel(role.label)
                    .setStyle(ButtonStyle.Secondary)
            );
        });

        const tieringEmbed = new EmbedBuilder()
            .setTitle('⊹₊˚‧︵‿₊୨📅 Tiering Roles୧₊‿︵‧˚₊⊹')
            .setDescription('Which role(s) are you gonna pick to help ?')
            .setColor(0x98FA9C);

        await channel.send({
            embeds: [tieringEmbed],
            components: [tieringRow],
        });

        console.log('✅ messages sent (embed version)');

    } catch (error) {
        console.log(error);
    }
};