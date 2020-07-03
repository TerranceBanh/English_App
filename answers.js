// Have indicators of literal meaning and intended meaning and indicators to differentiate similarities
const answers = {
    numbers: [
        { ch: '〇', en: 'zero', }, 
        { ch: '一', en: 'one',  }, 
        { ch: '二', en: 'two', }, 
        { ch: '三', en: 'three', }, 
        { ch: '四', en: 'four', }, 
        { ch: '五', en: 'five', }, 
        { ch: '六', en: 'six', }, 
        { ch: '七', en: 'seven', }, 
        { ch: '八', en: 'eight', }, 
        { ch: '九', en: 'nine', }, 
        { ch: '十', en: 'ten', }, 
        { ch: '十一', en: 'eleven', },
        { ch: '十二', en: 'twelve', },
        { ch: '十三', en: 'thirteen', },
        { ch: '十四', en: 'fourteen', },
        { ch: '十五', en: 'fifteen', },
        { ch: '十六', en: 'sixteen', },
        { ch: '十七', en: 'seventeen', },
        { ch: '十八', en: 'eighteen', },
        { ch: '十九', en: 'nineteen', },
        { ch: '二十', en: 'twenty', },
        { ch: '三十', en: 'thirty', },
        { ch: '四十', en: 'forty', },
        { ch: '五十', en: 'fifty', },
        { ch: '六十', en: 'sixty', },
        { ch: '七十', en: 'seventy', },
        { ch: '八十', en: 'eighty', },
        { ch: '九十', en: 'ninety', },
        { ch: '百', en: 'hundred', }, 
        { ch: '一百', en: 'one hundred', }, 
        { ch: '千', en: 'thousand', }, 
        { ch: '一千', en: 'one thousand', }, 
        { ch: '万/一万', en: 'ten thousand', }, 
        { ch: '十万', en: 'hundred thousand', }, 
        { ch: '一十万', en: 'one hundred thousand', }, 
        { ch: '百万', en: 'million', }, 
        { ch: '一百万', en: 'one million', }, 
        { ch: '千万/一千万', en: 'ten million', }, 
        { ch: '一千万', en: 'one million', }, 
        { ch: '亿', en: 'hundred million', },
        { ch: '一亿', en: 'one hundred million', },
        { ch: '十亿', en: 'billion', },
        { ch: '一十亿', en: 'one billion', },
        { ch: '百亿/一百亿', en: 'ten billion', },
        { ch: '千亿', en: 'hundred billion', },
        { ch: '一千亿', en: 'one hundred billion', },
        { ch: '兆', en: 'trillion', },
        { ch: '一兆', en: 'one trillion', },
        { ch: '十兆/一十兆', en: 'ten trillion', },
        { ch: '百兆', en: 'hundred trillion', },
        { ch: '一百兆', en: 'one hundred trillion', },
    ],
}

for (let prop in answers) {
    for (let i = 0, length = answers[prop].length; i < length; i++) {
        answers[prop][i].audio = `
            <button type="button" onclick="document.querySelector('[src=\\'./english/${(() => answers[prop][i].en.replace(/ /g, '_'))()}.mp3\\']').play()">
                &#9654;
                <audio preload="none" src="./english/${(() => answers[prop][i].en.replace(/ /g, '_'))()}.mp3"></audio>
            </button>
        `
    }
}

// INDICATE MALE AND FEMALE AND FORMAL AND POLITE






