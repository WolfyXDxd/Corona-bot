const { Telegraf } = require('telegraf')

const bot = new Telegraf(process.env.BOT_token)
require('dotenv').config()

bot.start((ctx) => {
    ctx.reply('Bienvenido, soy el remplazo robotico del Pornguy si tienes alguna duda puedes usar el comando /help, estoy en constante desarrollo por lo cual se añadiran nuevos videos y funciones cada vez que se pueda.\n Supremo creador: @WolfyXD');
})

bot.help((ctx) => {
    ctx.reply('Hola! fui creado con el proposito de compartir imagenes subidas de tono, te dejo los comandos aca abajo:\n\nCOMANDOS GENERALES:\n\n/start - Te da la bienvenida e introduccion. \n/settings - Configura tu grupo.\n/Pages - Te enseña el funcionamiento de las paginas.\n\nComandos +18:\n/Categorias - Despliega el menu de categorias.\n/Packs - despliega el menu de packs.\n/a');
})

bot.settings((ctx) => {
    ctx.reply('Dehecho no hay nada por configurar, solo me añadieron este comando para que se viera mas profesional🤓');
})

bot.mention('Pornguyreplacebot', (ctx) => {
    ctx.reply('QUE QUIERES IMBECIL, USA /help PARA EL PORNO, NO ME ANDES MENCIONANDO');
})

bot.command(['Pages', 'pages'], (ctx) => {
    ctx.reply('Las paginas funcionan de manera bastante sencilla, para llegar a la siguiente pagina tenemos que usar el siguiente comando para videos:\n/(categoria sin el parentesis)_page(numero de pagina sin el parentesis)V - Ejemplo: /elles_page2V\n\nPara fotos:\n/(categoria sin el parentesis)_page(numero de pagina sin el parentesis)P - Ejemplo: /elles_page2P')
})

bot.command(['Packs', 'packs'], (ctx) => {
    ctx.reply('PACKS +18😈\n\n/EllesClub - Abreviaturas (/ellesclub,/Ellesclub,/elles,/Elles)\n\n/Lizbeth_Rodriguez - Abreviaturas (/lizbeth_rodriguez,/Lizbeth_rodriguez,/lizbeth,/Lizbeth)')
})

bot.command(['categorias', 'Categorias'], (ctx) => {
    ctx.reply('No disponible')
})

//File_ID
/*bot.on('message', (ctx) => {
    console.log(ctx.message.photo)
})*/


//comandos packs

//Lizbeth
bot.command(['Lizbeth_Rodriguez', 'lizbeth_rodriguez', 'Lizbeth_rodriguez', 'lizbeth', 'Lizbeth'], (ctx) => {
    ctx.replyWithPhoto('https://www.show.news/__export/1635392815070/sites/debate/img/2021/10/27/lizbeth-rodriguez_1.jpg_839202635.jpg', {caption: '🐴LIZBETH RODRIGUEZ🐴 \n\n🎥Actriz, Youtuber\n🇲🇽Nacionalidad: Mexicana\n✨ig: https://www.instagram.com/lizbethrodriguezoficial/?hl=es-la \n\n/LizbethPhotos\n/LizbethVideos'})
})

//LizbethVideos
bot.command(['LizbethVideos', 'lizbethvideos', 'Lizbethvideos', 'lizbethVideos', 'LizbethV', 'lizbethv', 'lizbethV', 'Lizbethv'], (ctx) => {
    ctx.replyWithVideo('BAACAgEAAxkBAAIDrGOy9o59QUJHQjffTbb_Dn3B6DdsAAI9AgAC3_VRRb2LPwYSS4jrLQQ')
    ctx.replyWithVideo('BAACAgEAAxkBAAIDrWOy9o5VxhpwU9ZKXy_M2khOMoZqAAI-AgAC3_VRRdo-n92A5NPoLQQ')
    ctx.replyWithVideo('BAACAgEAAxkBAAIDrmOy9o7Q6mntyHqZSYJ2aJ8shE0wAAI_AgAC3_VRRYgo5eqj2jjRLQQ')
    ctx.replyWithVideo('BAACAgEAAxkBAAIDr2Oy9o7I6fIdKZta-1T2y6pmZ2csAAJAAgAC3_VRRQ-_2zLlzOsXLQQ')
    ctx.replyWithVideo('BAACAgQAAxkBAAIDsGOy9o6UXRDibqN2G9sbBCxXENmpAAJvDgACqwtpUDJuDFWst7zMLQQ')
    ctx.replyWithVideo('BAACAgEAAxkBAAIDsWOy9o5Ex207H7iABXnKRIkCc-JSAAIfAwAC6vxZRaoUSwAB9c3hPS0E')
    function lizbeth_reply() { ctx.reply('Pagina1 para pasar de pagina usar /lizbeth_page(numero sin el parentesis)V\n\nEXPLICACION EN: /Pages') }
    setTimeout(lizbeth_reply, 1000)
})

bot.command('lizbeth_page2V', (ctx) => {
    ctx.replyWithVideo('BAACAgEAAxkBAAIDsmOy9o4hHLVhsrAnhF9hNcn4gRjWAAIjAwAC6vxZRfOWU6XSsEL4LQQ')
    ctx.replyWithVideo('BAACAgEAAxkBAAIDs2Oy9o5BzhFvsWBWuwPRVIVfeeUcAAIkAwAC6vxZRVKOwqzpZvrcLQQ')
    ctx.replyWithVideo('BAACAgEAAxkBAAIDtGOy9o4R3qxsDMEcCwXua5os6l9HAAL5AgACwA9ZRdzMT2Ei0X-KLQQ')
    ctx.replyWithVideo('BAACAgEAAxkBAAIDtWOy9o41rZcR7eU4q_u_XF1rt2sJAAI8AwAC6vxZRa3PkxEFpTKoLQQ')
    ctx.replyWithVideo('BAACAgEAAxkBAAIDtmOy9o6W5xmrIJ6p5oGmgwIEFQAB7AAC2wEAAkxyGUXGYBkaXgnioy0E')
    ctx.replyWithVideo('BAACAgEAAxkBAAIDt2Oy9o4aUx2ai8uP4rzKyKKPU5F3AAIuAwACEFaBRVJ13-TGsgIyLQQ')
})

bot.command('lizbeth_page3V', (ctx) => {
    ctx.replyWithVideo('BAACAgEAAxkBAAIDumOy9o4uWNlvfidfH1aHbH6E3_PwAAJmAgACum-IRVD8kttO2Qw6LQQ')
    ctx.replyWithVideo('BAACAgEAAxkBAAIDvGOy9o785MC9ExFdNZMFQIyFSE2DAALgAwAC7FuRRYDUPl3EnjI6LQQ')
    ctx.replyWithVideo('BAACAgEAAxkBAAIDvWOy9o5ToFpGrFH6HnssMU7t4NBsAAIfBAACqjyRRS_KIHIdd_VvLQQ')
    ctx.replyWithVideo('BAACAgEAAxkBAAIDvmOy9o4m8CveNLvjHU6aWE2Tr2DaAAIgBAACqjyRRXQvCB2m8rRaLQQ')
    ctx.replyWithVideo('BAACAgEAAxkBAAIDv2Oy9o7xPEBI42i9kSWSvAJ-FJjEAAKKAgACoTuRRa4dWBFOTxNKLQQ')
    ctx.replyWithVideo('BAACAgEAAxkBAAIDwGOy9o4ukraLUCP4l44zXBWJIFwzAAKLAgACoTuRRSxqXo9lx1TiLQQ')
})

bot.command('lizbeth_page4V', (ctx) => {
    ctx.replyWithVideo('BAACAgEAAxkBAAIDwWOy9o4RJVJ0CvTAkCJxPNW_9AgGAAKMAgACoTuRRfRkM6cktVTcLQQ')
    ctx.replyWithVideo('BAACAgEAAxkBAAIDwmOy9o6Gd4DjFvzAUN1vbmi9LCRKAAKNAgACoTuRRVwQbXO3FQOTLQQ')
    ctx.replyWithVideo('BAACAgEAAxkBAAIDw2Oy9o6kD_xjckZorl0l8yGjoxE7AAKKAgACoTuRRa4dWBFOTxNKLQQ')
    ctx.replyWithVideo('BAACAgEAAxkBAAIDxGOy9uVfraVAZxYIS5l64vhLUBFKAAL2AgAC4WPIRHJDngACWEz5LQQ')
    ctx.replyWithVideo('BAACAgEAAxkBAAIDxWOy9uXKJvQ-EZPmEz-WrO_ET-LUAAI9AwACy1ngREb3CzOS6lw4LQQ')
    ctx.replyWithVideo('BAACAgEAAxkBAAIDxmOy9uWjo38Tx3AcHT77b7EzyiKcAAI8AgAC3_VRReo8NwPcfsSdLQQ')
})

bot.command('lizbeth_page5V', (ctx) => {
    ctx.reply('Pagina no disponible')
})

//LizbethPhotos
bot.command(['LizbethPhotos', 'lizbethphotos', 'lizbethphotos', 'lizbethPhotos', 'LizbethP', 'lizbethp', 'lizbethP', 'Lizbethp'], (ctx) => {
    ctx.replyWithMediaGroup( 
        [
            {
                type: 'photo', media: 'AgACAgEAAxkBAAIED2Oy-rRw7rwOgnF_dXZrwneavpA3AAKJqjEboTuRRV8cfEkQdxHdAQADAgADcwADLQQ' 
            },
            {
                type: 'photo', media: 'AgACAgEAAxkBAAIEEGOy-rTtegABUtQwYEsqn0oOgLDe3QACiqoxG6E7kUXgNZnDa7n7AAEBAAMCAANzAAMtBA' 
            },
            {
                type: 'photo', media: 'AgACAgEAAxkBAAIEEWOy-rRVTa4cCHQJXAy0uk-3hIH_AAKLqjEboTuRRdeI69xeGHtZAQADAgADbQADLQQ' 
            },
            {
                type: 'photo', media: 'AgACAgEAAxkBAAIEEmOy-rToJ3SD_8lRZU6KAAGUuLCuaQACj6oxG6E7kUWk_Cj1S85IzAEAAwIAA3MAAy0E' 
            },
            {
                type: 'photo', media: 'AgACAgEAAxkBAAIEE2Oy-rTpjtEa9C_nb-M185VQTdFNAAKMqjEboTuRRQGQ-yMURR6jAQADAgADcwADLQQ' 
            },
            {
                type: 'photo', media: 'AgACAgEAAxkBAAIESmOzAAGJ2rxs11vvW7oTzEno99O3XgACj6oxG-r8WUUfzTiuCOtiKgEAAwIAA3MAAy0E' 
            },
            {
                type: 'photo', media: 'AgACAgEAAxkBAAIES2OzAAGJoCfBAAEDxuCTh7y08dbRKhQAApCqMRvq_FlF1PEscJs5w5wBAAMCAANzAAMtBA' 
            },
            {
                type: 'photo', media: 'AgACAgEAAxkBAAIETGOzAAGJt_pxSdmtcT5y4cTZURj8-wACiqsxGzvEcUXmMoLY5JMSPAEAAwIAA3MAAy0E' 
            },
            {
                type: 'photo', media: 'AgACAgEAAxkBAAIETWOzAAGJ_bst9T5XORvWw1QZ-hqf_gACi6sxGzvEcUXe5v36XbKbnQEAAwIAA3MAAy0E' 
            }
        ])
        
    function lizbeth_reply2() { ctx.reply('Pagina1 para pasar de pagina usar /lizbeth_page(numero sin el parentesis)P\n\nEXPLICACION EN: /Pages') }
    setTimeout(lizbeth_reply2,1000) //tenia errores asi que lo elimine pero puede servir en un futuro
    
})

bot.command('lizbeth_page2P', (ctx) => {
    ctx.replyWithMediaGroup( 
        [
            {
                type: 'photo', media: 'AgACAgEAAxkBAAIEUGOzAAGJ68EJU7vU0PFV5Wm49QOWAQACoqsxGzvEcUXx71zKCWpdxQEAAwIAA3MAAy0E' 
            },
            {
                type: 'photo', media: 'AgACAgEAAxkBAAIEUWOzAAGJtE5LzTD6xsLTR-pp8RgpWQAChKsxG6o8kUWpvKgr07pRDwEAAwIAA3MAAy0E' 
            },
            {
                type: 'photo', media: 'AgACAgEAAxkBAAIEUmOzAAGJMytd-z3gzM3PNl4iaV05ggAChasxG6o8kUVt-XSl2OARiwEAAwIAA3MAAy0E' 
            },
            {
                type: 'photo', media: 'AgACAgEAAxkBAAIEU2OzAAGJM0ACHC4EtrJik6slhYFOsgAChqsxG6o8kUWDhuzk7pi1BAEAAwIAA3MAAy0E' 
            },
            {
                type: 'photo', media: 'AgACAgEAAxkBAAIEVGOzAAGJKhTMXuneLTm18IfUWRTHTgACjaoxG6E7kUUZNYTH_bVnSgEAAwIAA3MAAy0E' 
            },
            {
                type: 'photo', media: 'AgACAgEAAxkBAAIEVWOzAAGJL2-9dmS2242iYqeZI9KnxQACjqoxG6E7kUUqDPAs-dWaiwEAAwIAA3MAAy0E' 
            },
            {
                type: 'photo', media: 'AgACAgEAAxkBAAIEVmOzAAGJuJmXumra3ZaVYFhrB1e7TAACkKoxG6E7kUUsk2xgQwY1QgEAAwIAA3MAAy0E' 
            },
            {
                type: 'photo', media: 'AgACAgEAAxkBAAIEV2OzAAGJ9NgtPT7_9-cJf_uU3JcAAf8AApOqMRuhO5FFa0MAAfRCundRAQADAgADcwADLQQ' 
            },
            {
                type: 'photo', media: 'AgACAgEAAxkBAAIEWGOzAAGJgdZQKPfBqjG8VFADK3N4KwAClaoxG6E7kUX0h-goaNfsQwEAAwIAA3MAAy0E' 
            },
            {
                type: 'photo', media: 'AgACAgEAAxkBAAIEWWOzAAGJ201_u4E4T2dHBNaY7076hwAClqoxG6E7kUUl9C-3kGiY7wEAAwIAA3MAAy0E' 
            }
        ])   
})

bot.command('lizbeth_page3P', (ctx) => {
    ctx.replyWithMediaGroup( 
        [
            {
                type: 'photo', media: 'AgACAgEAAxkBAAIEWmOzAAGJBjIf3a8wIOwJ-MIDJ1h0FQACl6oxG6E7kUWboB965aaxiQEAAwIAA3MAAy0E' 
            },
            {
                type: 'photo', media: 'AgACAgEAAxkBAAIEW2OzAAGJHwbwKjDwPbeRg4DgIwVMGgACmKoxG6E7kUW7aQcGnXROHAEAAwIAA3MAAy0E' 
            },
            {
                type: 'photo', media: 'AgACAgEAAxkBAAIEXGOzAAGJdrPX7AXGC3-WSH3HTx5whgACmaoxG6E7kUURxhWTNZDQvQEAAwIAA3MAAy0E' 
            },
            {
                type: 'photo', media: 'AgACAgEAAxkBAAIEXWOzAAGJuVv13sv_CH7-6_afUwABBMsAApqqMRuhO5FFnmfRy0RGlnMBAAMCAANzAAMtBA' 
            },
            {
                type: 'photo', media: 'AgACAgEAAxkBAAIEXmOzAAGJEQSDyF33cVmM5K6lSvsHQQACnKoxG6E7kUXQ86ZIEzjjvwEAAwIAA3MAAy0E' 
            },
            {
                type: 'photo', media: 'AgACAgEAAxkBAAIEX2OzAAGJ88Hzi-gE415uIMkJ6e-bnwACnaoxG6E7kUWXOOrIJMU8CQEAAwIAA3MAAy0E' 
            },
            /*{
                type: 'photo', media: '' 
            },
            {
                type: 'photo', media: '' 
            },
            {
                type: 'photo', media: '' 
            },
            {
                type: 'photo', media: '' 
            }*/
        ])   
})

bot.command('lizbet_page5P', (ctx) => {
    ctx.reply('Pagina no disponible')
})

//Elles
bot.command(['EllesClub', 'ellesclub', 'Ellesclub', 'elles', 'Elles'], (ctx) => {
    ctx.replyWithPhoto('https://i.redd.it/d0oxsarvpy091.jpg', {caption: '🎀ELLES CLUB🎀 \n\n🎥Actriz +18\n🇨🇿Nacionalidad: Chequia\n✨ig: https://www.instagram.com/heartsicx/?hl=es \n\n/EllesPhotos\n/EllesVideos'})  
})

//EllesVideos
bot.command(['EllesVideos', 'ellesvideos', 'Ellesvideos', 'ellesVideos', 'EllesV', 'ellesv', 'ellesV', 'Ellesv'], (ctx) => {
    ctx.replyWithVideo('BAACAgEAAxkBAAICrmOw3YXKNHoDKkK_T4LOcDCzmrY1AALGAgACwLV4RQn9mXlsJM4gLQQ')
    ctx.replyWithVideo('https://telegra.ph/file/7ac6565e3acd2baeda641.mp4')
    ctx.replyWithVideo('BAACAgEAAxkBAAIDAAFjsdnqc9EYbpGzLkFAa-NlvpC8XwACzQIAAsC1eEX0uVtyzSkCwC0E')
    ctx.replyWithVideo('BAACAgEAAxkBAAIDAWOx2eoY-HpH9AR5CBNaGiTfDItQAALOAgACwLV4RV7-0qFOxulJLQQ')
    ctx.replyWithVideo('BAACAgEAAxkBAAIDAmOx2eowMXsXmdCgPEvS35hL4DAKAALQAgACwLV4Raat_sb5YgFiLQQ')
    ctx.replyWithVideo('BAACAgEAAxkBAAIDA2Ox2ervkLhkwNP3_PlK3Ui1A4wsAALRAgACwLV4RUy3GH63r4q0LQQ')
    function elles_reply() { ctx.reply('Pagina1 para pasar de pagina usar /elles_page(numero sin el parentesis)V\n\nEXPLICACION EN: /Pages') }
    setTimeout(elles_reply, 1000)
})

bot.command('elles_page2V', (ctx) => {
    ctx.replyWithVideo('BAACAgEAAxkBAAIDBGOx2eqMONsQY59LXsqMsim2XjoxAALSAgACwLV4RXK8Sd04T5uILQQ')
    ctx.replyWithVideo('BAACAgEAAxkBAAIDBWOx2eo8ovhm1B8YHIfKd_wsr_qkAALTAgACwLV4RccvQjNPy1wQLQQ')
    ctx.replyWithVideo('BAACAgEAAxkBAAIDBmOx2eqwyzfr6kdtVNvg2_Qty8GDAALVAgACwLV4RevNMiJsTjqPLQQ')
    ctx.replyWithVideo('BAACAgEAAxkBAAIDB2Ox2ep1C7_MvTyIdTxSaBY2puwhAAIuAgACwLWARc_65GgrHPM5LQQ')
    ctx.replyWithVideo('BAACAgEAAxkBAAIDCGOx2eoVHLsu9bf4XLePAAF-fz32XQACLwIAAsC1gEXhU2c4TL-IEi0E')
    ctx.replyWithVideo('BAACAgEAAxkBAAIDCWOx2erA2M7JUg27v90a1g4e7EkzAAIwAgACwLWARTTPDz6oxsagLQQ')
})

bot.command('elles_page3V', (ctx) => {
    ctx.replyWithVideo('BAACAgEAAxkBAAIDLGOyKFBISiKDplQB9E1ta5A1faLNAAIxAgACwLWARel1_Bb-N4BgLQQ')
    ctx.replyWithVideo('BAACAgEAAxkBAAIDLGOyKFBISiKDplQB9E1ta5A1faLNAAIxAgACwLWARel1_Bb-N4BgLQQ')
    ctx.replyWithVideo('BAACAgEAAxkBAAIDLWOyKFBlmYIyb6SDqBZkKJUbmY6RAAIyAgACwLWARbkCQIE9zf6uLQQ')
    ctx.replyWithVideo('BAACAgEAAxkBAAIDLmOyKFBcFQO03GK6YnK5OOIxdZlLAALNAwACww35RbpnbCbiPhOILQQ')
    ctx.replyWithVideo('BAACAgEAAxkBAAIDL2OyKFC3iwyYT4xY82s0i7CCpgXSAALOAwACww35Rdg-Y6wjViAyLQQ')
    ctx.replyWithVideo('BAACAgEAAxkBAAIDMGOyKFDfa_uRJ9hz-kD0cBhDn3fAAALPAwACww35RYX7-9d28jPBLQQ')
})

bot.command('elles_page4V', (ctx) => {
    ctx.replyWithVideo('BAACAgEAAxkBAAIDTmOyKeHxLSpgxPszKTPBmJPQBBF1AAIRAwACFMdRR27owX2ycDKQLQQ')
    ctx.replyWithVideo('BAACAgEAAxkBAAIDUGOyKeEcTojOj9vTfceEdsn9IgJyAALKAQACezjBRRNSswNKKRDWLQQ')
    ctx.replyWithVideo('BAACAgEAAxkBAAIDUWOyKeGer6127dzNrZ8wqxTp4vOcAAJCAgAC1OioR6IMwKVOLaA5LQQ')
})

bot.command('elles_page5v', (ctx) => {
    ctx.reply('Pagina no disponible')
})

//EllesPhotos
bot.command(['EllesPhotos', 'ellesphotos', 'Ellesphotos', 'ellesPhotos', 'EllesP', 'ellesp', 'ellesP', 'Ellesp'], (ctx) => {
    ctx.replyWithMediaGroup( 
        [
            {
                type: 'photo', media: 'https://telegra.ph/file/c1c4fab781bc20f9a49a0.jpg' 
            },
            {
                type: 'photo', media: 'https://telegra.ph/file/eec1ec8d490c22a6a7628.jpg' 
            },
            {
                type: 'photo', media: 'https://telegra.ph/file/8220acad34bae94e4110f.jpg' 
            },
            {
                type: 'photo', media: 'https://telegra.ph/file/f13b94cc2a3c45cd41033.jpg' 
            },
            {
                type: 'photo', media: 'https://telegra.ph/file/c25026f9d8c15ecc7044c.jpg' 
            },
            {
                type: 'photo', media: 'https://telegra.ph/file/07b88df6a1d6c694d8ed5.jpg' 
            },
            {
                type: 'photo', media: 'https://telegra.ph/file/7f8dc423f49eea881fccc.jpg' 
            },
            {
                type: 'photo', media: 'https://telegra.ph/file/ff26547d441275078f3c8.jpg' 
            },
            {
                type: 'photo', media: 'https://telegra.ph/file/9899df3ad920cb566ea3a.jpg' 
            }
        ])
        
    function elles_reply2() { ctx.reply('Pagina1 para pasar de pagina usar /elles_page(numero sin el parentesis)P\n\nEXPLICACION EN: /Pages') }
    setTimeout(elles_reply2,1000) //tenia errores asi que lo elimine pero puede servir en un futuro
    
})

bot.command('elles_page2P', (ctx) => {
    ctx.replyWithMediaGroup( 
        [
            {
                type: 'photo', media: 'https://telegra.ph/file/335336f8bc9b310e160b1.jpg' 
            },
            {
                type: 'photo', media: 'https://telegra.ph/file/904eabcea339dc003c31c.jpg' 
            },
            {
                type: 'photo', media: 'https://telegra.ph/file/b10cc2a8fae10795726bf.jpg' 
            },
            {
                type: 'photo', media: 'https://telegra.ph/file/0d955015b97cf1560dd74.jpg' 
            },
            {
                type: 'photo', media: 'https://telegra.ph/file/ccc89a56c338f0d6cacb8.jpg' 
            },
            {
                type: 'photo', media: 'https://telegra.ph/file/ffdcbf9ae23c2db7900ac.jpg' 
            },
            {
                type: 'photo', media: 'https://telegra.ph/file/2bada1e75b6bac15baef6.jpg' 
            },
            {
                type: 'photo', media: 'https://telegra.ph/file/380e719630a7603f717ad.jpg' 
            },
            {
                type: 'photo', media: 'https://telegra.ph/file/adbea1848086ea09ce948.jpg' 
            },
            {
                type: 'photo', media: 'https://telegra.ph/file/e1c550496c941fe274cb1.jpg' 
            }
        ])   
})

bot.command('elles_page3P', (ctx) => {
    ctx.replyWithMediaGroup( 
        [
            {
                type: 'photo', media: 'https://telegra.ph/file/45e36efa3d8e41f032578.jpg' 
            },
            {
                type: 'photo', media: 'https://telegra.ph/file/d8e9ead060d029ed20590.jpg' 
            },
            {
                type: 'photo', media: 'https://telegra.ph/file/3603beb05eaa735f63863.jpg' 
            },
            {
                type: 'photo', media: 'https://telegra.ph/file/fc43092d9d35475839c54.jpg' 
            },
            {
                type: 'photo', media: 'https://telegra.ph/file/02b741810b425f48a0cb9.jpg' 
            },
            {
                type: 'photo', media: 'https://telegra.ph/file/b1e5ebb5e3400168ebf77.jpg' 
            },
            {
                type: 'photo', media: 'https://telegra.ph/file/ff8c4c773380f8cd9c05c.jpg' 
            },
            {
                type: 'photo', media: 'https://telegra.ph/file/ea0753462a861d20ebcf7.jpg' 
            },
            {
                type: 'photo', media: 'https://telegra.ph/file/932be7686cb3bce7c7a43.jpg' 
            },
            {
                type: 'photo', media: 'https://telegra.ph/file/ea8acfb8283f17b94904d.jpg' 
            }
        ])     
})

bot.command('elles_page4P', (ctx) => {
    ctx.reply('Pagina no disponible')
})

bot.launch()