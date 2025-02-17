const toxic = ['kontol', 'anj', 'anjing', 'bngst', 'bgst', 'bangsat', 'memek', 'mmk', 'njir', 'najis', 'anjir', 'jing', 'njing', 'kntl', 'kontol', 'babi', 'monyet', 'mnyt', 'jembut', 'jmbt', 'lol', 'tolol', 'goblok', 'goblk', 'gblk', 'ngentot', 'ngntt', 'ngentt', 'ngen', 'kocak', 'kck', 'peju', 'jelek', 'jlk'];
const agree = ['lanjut', 'loli']
module.exports = {
   start: async (m, {
      conn,
      budy
   }) => {
      try {
         if ((!m.isGroup || db.chats[m.chat].antiToxic) && toxic.some(word => budy.toLowerCase().includes(word))) {
            if (agree.some(v => budy.toLowerCase().includes(v))) return
            if (m.fromMe || m.isBaileys) return
            conn.adReply(m.chat, `WOOOYYY, LU SEKALI LAGI KETIKANNYA KEK GITU GUA GABLOGIN LUHH!`, cover, m);
         }
      } catch (e) {
         return false
      }
   }
}
