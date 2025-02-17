module.exports = {
   start: async (m, {
      conn,
      budy,
      User,
      Format
   }) => {
       //	// Waktu Sholat
		const jadwalSholat = {
			Subuh: '04:30',
			Dzuhur: '12:06',
			Ashar: '15:21',
			Maghrib: '18:08',
			Isya: '19:28'
		}
		if (!this.intervalSholat) this.intervalSholat = null;
		if (!this.waktusholat) this.waktusholat = {};
		if (this.intervalSholat) clearInterval(this.intervalSholat); 
		setTimeout(() => {
			this.intervalSholat = setInterval(async() => {
				const jamSholat = moment.tz('Asia/Jakarta').locale('id').format('HH:mm');
				for (const [sholat, waktu] of Object.entries(jadwalSholat)) {
					if (jamSholat === waktu && this.waktusholat[sholat] !== jamSholat) {
						this.waktusholat[sholat] = jamSholat
						for (const [idnya, settings] of Object.entries(db.groups)) {
							if (settings.waktusholat) {
								await naze.sendMessage(idnya, { text: `Waktu *${sholat}* telah tiba, ambilah air wudhu dan segeralah shalat🙂.\n\n*${waktu.slice(0, 5)}*\n_untuk wilayah Jakarta dan sekitarnya._` }, { ephemeralExpiration: m.expiration || 0 }).catch(e => {})
							}
						}
					}
				}
			}, 60000)
		}, time_end);
		
   }
};
