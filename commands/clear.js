module.exports = async (bot,msg) =>{
    const channel   = msg.channel;
    const FetchMsg  = await channel.fetchMessages();
    await channel.bulkDelete(FetchMsg);
    msg.reply("Vapo Vapo!!!");
}