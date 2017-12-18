//eslint-disable-next-line
const commando = require('discord.js-commando');
const oneLine = require('common-tags').oneLine;
const { RichEmbed } = require('discord.js');

module.exports = class MenuCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'menu',
      aliases: ['itemlist'],
      group: 'main',
      memberName: 'menu',
      description: 'Lists items you can order',
      details: oneLine `
        list of items you can order!
			`,
      examples: ['menu'],
      guarded: true
    })
  }

  async run(message) {
    const embed = new RichEmbed()
      .setAuthor('Menu', `${this.client.user.avatarURL}`)
      .setColor(0x0000FF)
      //eslint-disable-next-line no-useless-escape
      .setDescription(`Order by doing \`${message.guild.commandPrefix}order <group> <item number>\`. For example: \`${message.guild.commandPrefix}order smore 2\` to order slightly gooey s\'mores.`)
      .addField('**S\'mores**', '\n**1)** Golden brown s\'mores \n**2)** Slightly gooey s\'mores \n**3)** Very gooey s\'mores \n**4)** Charred s\'mores \n**5)** Radioactive s\'mores \n**6)** Chef\'s choice', true)
			.addField('**Drinks**', '\n**1)** Coffee \n**2)** Milk \n**3)** Soy milk \n**4)** Almond milk \n**5)** Water', true)
			.addField('**Pop-Tarts**', '\n**1)** *S\'mores \n**2)** Frosted Cherry \n**3)** Frosted Strawberry \n**4)** Hot Fudge Sundae \n**5)** Chocolate Chip Cookie Dough \n**6)** Brown Sugar Cinnamon \n**7)** Chocolate Fudge \n**8)** Cookies & Creme \n**9)** Chocolate Chip \n**10)** Chef\'s choice', false)
      .setFooter(`Requested by: ${message.author.username}`)
      .setTimestamp()
    await message.channel.send({
      embed
    })
  }
};
