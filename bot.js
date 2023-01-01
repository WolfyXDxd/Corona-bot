const { Telegraf } = require('telegraf')

const bot = new Telegraf('5973501334:AAHJiIOOF_j47Z7O8iOeC_-X7xTsMtqbgaE')

bot.start((ctx) => {
    ctx.reply('Bienvenido, soy el remplazo robotico del Pornguy si tienes alguna duda puedes usar el comando /help, estoy en constante desarrollo por lo cual se añadiran nuevos videos y funciones cada vez que se pueda.\n Supremo creador: @WolfyXD');
})

bot.help((ctx) => {
    ctx.reply('Hola! fui creado con el proposito de compartir imagenes subidas de tono, te dejo los comandos aca abajo:\n\nCOMANDOS GENERALES:\n\n/start - Te da la bienvenida e introduccion \n/settings - Configura tu grupo \n\nComandos +18:\n/EllesClub - Abreviaturas (/ellesclub,/Ellesclub,/elles,/Elles)\n/a\n/a');
})

bot.settings((ctx) => {
    ctx.reply('Dehecho no hay nada por configurar, solo me añadieron este comando para que se viera mas profesional🤓');
})

bot.mention('Pornguyreplacebot', (ctx) => {
    ctx.reply('QUE QUIERES IMBECIL, USA /help PARA EL PORNO, NO ME ANDES MENCIONANDO');
})

//file_id
bot.on('message', (ctx) => {
    console.log(ctx.message.video)
})


//comandos packs

//Elles
bot.command(['EllesClub', 'ellesclub', 'Ellesclub', 'elles', 'Elles'], (ctx) => {
    ctx.replyWithPhoto('https://i.redd.it/d0oxsarvpy091.jpg', {caption: '🎀ELLES CLUB🎀 \n\n🎥Actriz +18\n🇨🇿Nacionalidad: Chequia\n✨ig: https://www.instagram.com/heartsicx/?hl=es \n\n/EllesPhotos\n/EllesVideos'})  
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
        
    /*function elles_pag2() {ctx.reply('Siguiente pagina: /elles_page2P')}
    setTimeout(elles_pag2,100*/ //tenia errores asi que lo elimine pero puede servir en un futuro
    ctx.reply('Pagina1 para pasar de pagina usar /elles_page(numero sin el parentesis)P')
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

//Elles videos
bot.command(['EllesVideos', 'ellesvideos', 'Ellesvideos', 'ellesVideos', 'EllesV', 'ellesv', 'ellesV', 'Ellesv'], (ctx) => {
    ctx.replyWithMediaGroup( 
        [
            {
                type: 'video', media: 'https://telegra.ph/file/dadf56d40987d59643c29.mp4' 
            },
            {
                type: 'video', media: 'https://telegra.ph/file/7ac6565e3acd2baeda641.mp4' 
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
        
    /*function elles_pag2() {ctx.reply('Siguiente pagina: /elles_page2P')}
    setTimeout(elles_pag2,100*/ //tenia errores asi que lo elimine pero puede servir en un futuro
    ctx.reply('Pagina1 para pasar de pagina usar /elles_page(numero sin el parentesis)V')
})


bot.launch()