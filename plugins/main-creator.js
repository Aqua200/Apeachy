let handler = async (m, { conn, usedPrefix, isOwner }) => {
    let vcard = `BEGIN:VCARD
VERSION:3.0
N:Aqua200;;;;
FN:Aqua200:)
TITLE:
TEL;TYPE=CELL;waid=573163952124:+573163952124
END:VCARD`;

    await conn.sendMessage(m.chat, { 
        contacts: { 
            displayName: 'Aqua200:)', 
            contacts: [{ vcard }] 
        }
    }, { quoted: m });
}

handler.command = ['owner', 'creator', 'creador', 'dueño'];

export default handler;
