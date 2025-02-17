exports.default = {
   names: ['Group Menu'],
   tags: ['listonline'],
   command: ['lo', 'listonline'],
   start: async (m, {
      conn,
      text,
      participants
   }) => {
      let mem = [];
case 'listonline': case 'liston': {
				if (!m.isGroup) return m.reply(mess.group)
				let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
				if (!store.presences || !store.presences[id]) return m.reply('Sedang Tidak ada yang online!')
				let online = [...Object.keys(store.presences[id]), botNumber]
				await m.reply('List Online:\n\n' + online.map(v => setv + ' @' + v.replace(/@.+/, '')).join`\n`, { mentions: online }).catch((e) => m.reply('Sedang Tidak Ada Yang Online..'))
			}
         showAds: true,
         mentions: mem
      })
   },
   group: true,
   admin: true
};
