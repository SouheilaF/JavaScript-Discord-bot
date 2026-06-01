const { REST, Routes } = require('discord.js');


module.exports = async (client) => {
    console.log('🚀 Registering slash commands...');
    
    /////////////////////////////////////////////////////////
// TOUTES LES COMMANDES SONT ECRITES ICI    
    //////////////////////////////////////////////////////////
    const commands = [
        {
            name: 'ping',
            description: 'Replies with pong !',
        },
        
        {
            name: 'about-me',
            description: 'What do you want to know about me...',
        },
        
        {
            name: 'truth-or-dare',
            description: 'Play Truth or Dare!',
            options: [{
                    name: 'choice',
                    description: 'Truth or Dare?',
                    type: 3, // STRING
                    required: true,
                    choices: [
                        {
                            name: 'Truth',
                            value: 'truth',
                        },
                        {
                            name: 'Dare',
                            value: 'dare',
                        },
                    ],
                	},],
        },
    ];

    
    const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);
    
    
//////////////////////////////
    /// METTRE EN ROUTE LES COMMANDES SLASH
/////////////////////////////
    
    try {
        // DELETE EVERY EXISTANT COMMANDS
        await rest.put(Routes.applicationCommands(client.user.id), { body: [] });
        console.log('🗑️  All existing commands deleted');
        
        // REGISTER NEW COMMANDS
        await rest.put(
            Routes.applicationCommands(client.user.id),
            { body: commands }
        );
        console.log('✅ Slash commands were registered successfully');
    } catch (error) {
        console.error('❌ There was an error:', error);
    }
};
