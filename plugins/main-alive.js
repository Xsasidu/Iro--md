let handler = async (m, { conn, text, usedPrefix, command }) => {
  // Sound
  let name = m.pushName || conn.getName(m.sender)
  var vn = 'https://a.uguu.se/okidUgZv.mp3''
  let url = 'https://github.com/Xsasidu/Iro--md'
  let murl = 'https://Wa.me//94750728920?text=bot'
  let img = 'https://telegra.ph/file/fe00fd4637a3127b7908b.jpg'
  let con = {
    key: {
      fromMe: false,
      participant: `${m.sender.split`@`[0]}@s.whatsapp.net`,
      ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}),
    },
    message: {
      contactMessage: {
        displayName: `${name}`,
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
      },
    },
  }
  let doc = {
    audio: {
      url: vn,
    },
    mimetype: 'audio/mpeg',
    ptt: true,
    waveform: [100, 0, 100, 0, 100, 0, 100],
    fileName: 'Guru',

    contextInfo: {
      mentionedJid: [m.sender],
      externalAdReply: {
        title: 'බොට් වැඩ 🦸',
        body: 'Iro--md',
        thumbnailUrl: img,
        sourceUrl: 'https://chat.whatsapp.com/KDuVe2JAfv87O0B8lsvO7T',
        mediaType: 1,
        renderLargerThumbnail: true,
      },
    },
  }

  await conn.sendMessage(m.chat, doc, { quoted: con })
}

handler.help = ['alive']
handler.tags = ['main']
handler.command = /^(alive)$/i

export default handler
