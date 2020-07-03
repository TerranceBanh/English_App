// Have indicators of literal meaning and intended meaning and indicators to differentiate similarities
const answers = {
    numbers: [
        { ch: '零', pinyin: 'líng', en: 'zero', }, 
        { ch: '一', pinyin: 'yī', en: 'one',  }, 
        { ch: '二', pinyin: 'èr', en: 'two', }, 
        { ch: '三', pinyin: 'sān', en: 'three', }, 
        { ch: '四', pinyin: 'sì', en: 'four', }, 
        { ch: '五', pinyin: 'wǔ', en: 'five', }, 
        { ch: '六', pinyin: 'liù', en: 'six', }, 
        { ch: '七', pinyin: 'qī', en: 'seven', }, 
        { ch: '八', pinyin: 'bā', en: 'eight', }, 
        { ch: '九', pinyin: 'jiǔ', en: 'nine', }, 
        { ch: '十', pinyin: 'shí', en: 'ten', },
        { ch: '百', pinyin: 'bǎi', en: 'hundred', }, 
        { ch: '千', pinyin: 'qiān', en: 'thousand', }, 
        { ch: '万', pinyin: 'wàn', en: 'ten thousand', }, 
        { ch: '亿', pinyin: 'yì', en: 'billion', },
    ]
}

for (let prop in answers) {
    for (let i = 0, length = answers[prop].length; i < length; i++) {
        answers[prop][i].audio = `
            <button type="button" onclick="document.querySelector('[src=\\'./chinese/${answers[prop][i].en}.mp3\\']').play()">
                &#9654;
                <audio preload="none" src="./chinese/${answers[prop][i].en}.mp3"></audio>
            </button>
        `
    }
}

// INDICATE MALE AND FEMALE AND FORMAL AND POLITE






