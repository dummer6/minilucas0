module.exports = async (bot,msg) =>{
    const channel   = msg.channel;
    const FetchMsg  = await channel.fetchMessages(100000);
    await channel.bulkDelete(FetchMsg );
    msg.reply("Vapo Vapo!!!");
}