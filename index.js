const { Telegraf } = require('telegraf')
require('dotenv').config()

if (process.env.BOT_TOKEN === undefined) {
  throw new Error('BOT_TOKEN must be provided!')
}

const bot = new Telegraf(process.env.BOT_TOKEN)

// бот реагирует на какую-либо команду

// или на заход внутрь бота
bot.start((ctx) => {
  ctx.reply('Привет, друзья (в частности - ' + ctx.message.from.first_name + '), я создан для того, чтобы речь в интернете стала более грамотной!')
  // ctx.reply('Слышишь ты, блять, ')
  // console.log(ctx.message.from.first_name)
})

const rules = [
'1. Тире между подлежащим и сказуемым — не ставится.',
'2. Помните о том, что в большинстве случаев связку «о том» можно исключить.',
'3. Если хочете использовать глагол, то спрягать его нужно правильно, а не как того захотит автор.',
'4. Страдательный залог обычно должен быть избегаем.',
'5. Не забывайте про букву «ё», иначе не различить: падеж и падеж, небо и небо, осел и осел, совершенный и совершенный, все и все.',
'6. Кто не чёкнутый и не из чящи вышол, правильно пишет гласные после шыпящих.',
'7. Блестните неповерхносным чуством языка при написании непроизносимых согласных.',
'8. Надо придти к пониманию, что пишется только «прийти».',
'9. Пообтершись в корридорах оффисов, в будующем мы станем сведующими и прийдём к тому, что в наших текстах будет учавствовать всё меньшее колличество лишних букв.',
'10. Мягкий знак в неопределённой форме глагола должен определятся по наличию его в вопросе к глаголу, что иногда забываеться.',
'11. Не ставьте два «не» подряд, если это не необходимо.',
'12. У слова «нет» нету форм изменения.',
'13. Без пол-литровки пол России не поймёт как пишутся сложные имена-существительные.',
'14. Заканчивать предложение местоимением — дурной стиль, не для этого оно.',
'15. Тех, кто заканчивает предложение предлогом, посылайте на. Не грубости ради, но порядка для.',
'16. Не сокращ.!',
'17. Проверяйте в тексте пропущенных и лишних слов в тексте.',
'18. Что касается незаконченных предложений.',
'19. Если неполные конструкции, — плохо.',
'20. Никакой самовлюблённый Банк, его Президент и Председатель Совета Директоров не пишутся с заглавной буквы.',
'21. Правило гласит, что «косвенная речь в кавычки не берётся».',
'22. Не стройте загадок из многоточия в конце исчерпывающего предложения...',
'23. Одного восклицательного знака вполне достаточно!!!',
'24. НИКОГДА !не выделяйте! слова. Человек, читающий текст с ВЫДЕЛЕНИЯМИ, чувствует, что его собственному пониманию смысла н е д о в е р я ю т.',
'25. Используйте параллельные конструкции не только для уточнения, но и прояснять.',
'26. Правиряйте по словарю напесание слов.',
'27. Числительные до 10-ти включительно лучше писать прописью.',
'28. Склонять числительные можно сто двадцать пятью способами, но только один из них правильный.',
'29. Задействуйте слова в предназначении, истинно отвечающем осмысленности.',
'30. Неделите не делимое и не соединяйте разно-родное, а кое что пишите через дефис.',
'31. Неуместная аналогия в тексте выглядит как шуба, заправленная в трусы.',
'32. Преувеличение в миллион раз хуже преуменьшения.',
'33. Не применяйте длинные слова там, где можно применить непродолжительнозвучащие.',
'34. Сюсюканье — фу, бяка. Оставьте его лялечкам, а не большим дяденькам.',
'35. Будьте более или менее конкретны.',
'36. Как учил Эмерсон: «Не цитируйте. Сообщайте собственные мысли».',
'37. Кому нужны риторические вопросы?',
'38. Слов порядок речи стиля не меняет?',
'39. Нечаянно возникший стих собьёт настрой читателей твоих.',
'40. Стих, где рифма на глаголах строится, самым первым на помойку просится.',
'41. По жизни усекай насчёт своего базара: хочешь неслабо выступить, — завязывай в натуре с жаргоном.',
'42. Уточнения в скобках (хоть и существенные) бывают (обычно) излишними.',
'43. Повторно повторять всё повторяющиеся однокоренные слова — это тавтология — лишнее излишество.',
'44. Если хочешь быть правильно понятым, не используй foreign language и варваризмы. Ферштейн?',
'45. Ради презентативности будь креативным промоутером исконно русских синонимов на топовые позиции рейтинга преференций.',
]

bot.command('rule', ctx => {
  const randomNumber = (arr) => Math.floor(Math.random() * arr.length)
  const rule = rules[randomNumber(rules)]
  console.log(ctx.message)
  ctx.reply(rule)
})


bot.command('after30', ctx => {
  if (ctx.message.chat.title !== 'Наша мудрость') return
  const after30 = [
'✅ 1. Не рассказывай никому о своём заработке. Если прижмут, назови максимально низкую цифру, но похожую на правду. Однажды я вежливо отказалась огласить, сколько я зарабатываю подруге своей мамы. Она обиделась на меня и не преминула сообщить об этом через мою мать. ',
'✅ 2. Не рассказывай маме то, что не должны знать другие члены семьи. Мама передаст другой дочери, дочь — своему мужу, муж — своей родне. Просто не рассказывай, Бога ради.',
'✅ 3. Не говори плохого о муже своей родне. Действительно, когда ты миришься с ним, твоя родня не всегда понимает, почему ты продолжаешь жить с ним после всего, что ты сама на него навалила в уши своей маме или сестре. ',
'✅ 4. Не спорь. Сначала выслушай, сделай вид, что задумалась о том, что услышала, ответь что согласна или что это имеет место быть. А сама забудь все, о чем спорил с тобой человек, едва за ним захлопнется дверь. Таким образом, я усмирила многих глупцов. Ибо спорить, о чем бы то ни было — дурацкая затея.',
'✅ 5. Не давай советов, даже если просят. Вот если просят послать на Х, всегда пожалуйста. Но добрые (вредные, мудрые, глупые, любые) советы держи в себе. А лучше не генерируй их. Вообще. ',
'✅ 6. Не хвастайся новыми покупками. Молча пользуйся и радуйся. ',
'✅ 7. Купив новую вещь, сразу надень (используй) ее. Долой отложенную жизнь. ',
'✅ 8. Не носи рваные носки (трусы, штаны, футболки). Сделай тряпку для стёкол (только не из трусов) или выкинь. Используй возможность купить новую вещь взамен дырявой. ',
'✅ 9. Не покупай слишком много вещей. Тряпки — это не показатель твоей вовлечённости в моду или любви к себе. Это — излишние траты. Купи базовые вещи, сочетай их между собой. Нам реально не нужно СТОЛЬКО одежды. ',
'✅ 10. Изучай себя. Чаще анализируй что ты делаешь, зачем ты это делаешь, нравится ли это тебе. Правда, сейчас эта привычка вгоняет меня в депрессивное состояние, но самоанализ — крайне важный процесс для любого индивидуума. ',
'✅ 11. Находи любой повод, чтобы порадоваться. С этим правилом дела обстоят хуже всего, но блики солнца на лице, наушники в ушах и прогулка по парку среди зелёных деревьев все ещё способны подарить маленькую радость, которую я накапливаю для будущих пасмурных дней.',
  ]


  const randomNumber = () => Math.floor(Math.random() * after30.length)
  ctx.reply(`Правила после 30:
    В своём возрасте я осознала и всячески стараюсь следовать следующему правилу:
    ${after30[randomNumber()]}`)
})


const obscene = [
  'архипиздрит',
  'басран',
  'бздение',
  'бздеть',
  'бздех',
  'бзднуть',
  'бздун',
  'бздунья',
  'бздюха',
  'бикса',
  'блежник',
  'блудилище',
  'бля',
  'блят',
  'блять',
  'блябу',
  'блябуду',
  'блядун',
  'блядунья',
  'блядь',
  'блядюга',
  'взьебка',
  'волосянка',
  'взьебывать',
  'взебывать',
  'выблядок',
  'выблядыш',
  'выебать',
  'выеть',
  'выпердеть',
  'высраться',
  'выссаться',
  'говенка',
  'говенный',
  'говешка',
  'говназия',
  'говнецо',
  'говно',
  'говноед',
  'говночист',
  'говнюк',
  'говнюха',
  'говнядина',
  'говняк',
  'говняный',
  'говнять',
  'гондон',
  'дермо',
  'долбоеб',
  'дрисня',
  'дрист',
  'дристать',
  'дристануть',
  'дристун',
  'дристуха',
  'дрочена',
  'дрочила',
  'дрочилка',
  'дрочить',
  'дрочка',
  'ебало',
  'ебальник',
  'ебануть',
  'ебаный',
  'ебарь',
  'ебатория',
  'ебать',
  'ебаться',
  'ебец',
  'ебливый',
  'ебля',
  'ебнуть',
  'ебнуться',
  'ебня',
  'ебун',
  'елда',
  'елдак',
  'елдачить',
  'заговнять',
  'задристать',
  'задрока',
  'заеба',
  'заебанец',
  'заебать',
  'заебаться',
  'заебываться',
  'заеть',
  'залупа',
  'залупаться',
  'залупить',
  'залупиться',
  'замудохаться',
  'засерун',
  'засеря',
  'засерать',
  'засирать',
  'засранец',
  'засрун',
  'захуячить',
  'злоебучий',
  'изговнять',
  'изговняться',
  'кляпыжиться',
  'курва',
  'курвенок',
  'курвин',
  'курвяжник',
  'курвяжница',
  'курвяжный',
  'манда',
  'мандавошка',
  'мандей',
  'мандеть',
  'мандища',
  'мандюк',
  'минет',
  'минетчик',
  'минетчица',
  'мокрохвостка',
  'мокрощелка',
  'мудак',
  'муде',
  'мудеть',
  'мудила',
  'мудистый',
  'мудня',
  'мудоеб',
  'мудозвон',
  'муйня',
  'набздеть',
  'наговнять',
  'надристать',
  'надрочить',
  'наебать',
  'наебнуться',
  'наебывать',
  'нассать',
  'нахезать',
  'нахуйник',
  'насцать',
  'обдристаться',
  'обдристаться',
  'обосранец',
  'обосрать',
  'обосцать',
  'обосцаться',
  'обсирать',
  'опизде',
  'отпиздячить',
  'отпороть',
  'отъеть',
  'охуевательский',
  'охуевать',
  'охуевающий',
  'охуеть',
  'охуительный',
  'охуячивать',
  'охуячить',
  'педрик',
  'пердеж',
  'пердение',
  'пердеть',
  'пердильник',
  'перднуть',
  'пердун',
  'пердунец',
  'пердунина',
  'пердунья',
  'пердуха',
  'пердь',
  'передок',
  'пернуть',
  'пидор',
  'пизда',
  'пиздануть',
  'пизденка',
  'пиздеть',
  'пиздить',
  'пиздища',
  'пиздобратия',
  'пиздоватый',
  'пиздорванец',
  'пиздорванка',
  'пиздострадатель',
  'пиздун',
  'пиздюга',
  'пиздюк',
  'пиздячить',
  'писять',
  'питишка',
  'плеха',
  'подговнять',
  'подъебнуться',
  'поебать',
  'поеть',
  'попысать',
  'посрать',
  'поставить',
  'поцоватый',
  'презерватив',
  'проблядь',
  'проебать',
  'промандеть',
  'промудеть',
  'пропиздеть',
  'пропиздячить',
  'пысать',
  'разъеба',
  'разъебай',
  'распиздай',
  'распиздеться',
  'распиздяй',
  'распроеть',
  'растыка',
  'сговнять',
  'секель',
  'серун',
  'серька',
  'сика',
  'сикать',
  'сикель',
  'сирать',
  'сирывать',
  'скурвиться',
  'скуреха',
  'скурея',
  'скуряга',
  'скуряжничать',
  'спиздить',
  'срака',
  'сраный',
  'сранье',
  'срать',
  'срун',
  'ссака',
  'ссаки',
  'ссать',
  'старпер',
  'струк',
  'суходрочка',
  'сцавинье',
  'сука',
  'сцака',
  'сцаки',
  'сцание',
  'сцать',
  'сциха',
  'сцуль',
  'сцыха',
  'сыкун',
  'титечка',
  'титечный',
  'титка',
  'титочка',
  'титька',
  'трипер',
  'триппер',
  'уеть',
  'усраться',
  'усцаться',
  'фик',
  'фуй',
  'хезать',
  'хер',
  'херня',
  'херовина',
  'херовый',
  'хитрожопый',
  'хлюха',
  'хуевина',
  'хуевый',
  'хуек',
  'хуепромышленник',
  'хуерик',
  'хуесос',
  'хуище',
  'хуй',
  'хуйня',
  'хуйрик',
  'хуякать',
  'хуякнуть',
  'целка',
  'шлюха'
]


bot.on('text', ctx => {
  if (ctx.message.from.username === 'Erick_Sevens') {
    console.log('snenees');
    console.log(ctx.message)
    ctx.reply('@Erick_Sevens с днем рождения! 💙')
  }
  if (ctx.message.chat.title = 'Чат со столицей Шоково') {
    obscene.forEach(mat => {
      if (ctx.message.from.username === 'Uberpon4iK' && ctx.message.text.includes(mat)) {
        const replyToDed = [
          'Умоляю тебя, дед, все кондеи мира не справятся с тобой, не душни.',
          'Прекращай, говорю же, Понч, так будет лучше для всех.',
          'Не убивай нас духотой, родной дедушка.',
          'Интересно, дед болеет за Челси или за наше удушение?',
          'Ох и неугомонный же наш дедуля.',
          'Мы поняли, бесполезно просить. Эх.',
        ]
        function ranromReply(min, max) {
          return Math.floor(Math.random() * (max - min) + min)
        }
        ctx.reply(replyToDed[ranromReply(0, replyToDed.length)])
      }

      if (ctx.message.text.includes(mat)) ctx.reply('В целом, без мата можно обойтись')
      })

    
  }


  
})

// для севенса
bot.on('voice', (ctx) => {
  if (ctx.message.from.username === 'Erick_Sevens') {
    ctx.reply('О-о-о, ' + ctx.message.from.first_name + ', войс! Так-так-так, что тут у нас...')
  }
  
  // ctx.reply('Слышишь ты, блять, ')
  // console.log(ctx.message.from.first_name)
})

// bot.on('voice', (ctx) => {
//   ctx.replyWithPhoto({
//     source: 'assets/images/23.jpg',
//   },
//   {
//     caption: 'Но когда записываешь войсы - уебан',
//   })
// })



// bot.on('text', (ctx) => {
// })
// bot.on('text', (ctx) => {

// })
// bot.on('text', (ctx) => {

//   }  
//   if (ctx.message.from.username === 'SCHOKKKK') {
//     ctx.reply('Шок -- мой лучший друг')
//   }

//   if (ctx.message.from.username === 'zom6ak10') {
//     ctx.reply('Сука ты, а не Эдик, Эдик')
//   }
//   if (ctx.message.from.username === 'artpan1302') {
//     ctx.reply('Создатель, пиздуй нахуй')
//   }
//   if (ctx.message.from.username === 'Polygonalny') {
//     ctx.reply('Полиналь, ты бомбишь')
//   }
//   if (ctx.message.from.username === 'iamtearin') {
//     ctx.reply('Кекунюшка, fuck me, пожалуйста')
//   }
//   if (ctx.message.text.includes('бан')) {
//     ctx.reply('Не надо никого банить, вы о чем?')
//   }

// })

// bot.on('photo', (ctx) => {
//   ctx.reply(`Спасибо тебе, дорогой мой драгоценнейший друг ${ctx.message.from.first_name}, что отправил картинку💙`)
// })

// запуск бота через бот ланч
bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
