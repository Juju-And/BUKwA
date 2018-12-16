const descriptions = [
    {
        letterName: 'а',
        latLetterName: 'a',
        description: "айст",
        pronunciation: "ˈajst",
        translation: "bocian",
        picture: require("../../assets/letterInfoPics/aist.png"),
        yOffset: -90
    },
    {
        letterName: "б",
        latLetterName: 'b',
        description: "бегемо́т",
        pronunciation: "[bʲɪɡʲɪmˈot] // barаn",
        translation: "hipopotam",
        picture: require("../../assets/letterInfoPics/begemot.png"),
        yOffset: -90
    },
    {
        letterName: "в",
        latLetterName: 'w',
        description: "волк",
        pronunciation: "[vˈolk] // wołk",
        translation: "wilk",
        picture: require("../../assets/letterInfoPics/wolk.png"),
        yOffset: -90
    },
    {
        letterName: "г",
        latLetterName: 'g',
        description: "гриб",
        pronunciation: "[ɡrʲˈip] // grib",
        translation: "grzyb",
        picture: require("../../assets/letterInfoPics/grib.png"),
        yOffset: -90
    },
    {
        letterName: "д",
        latLetterName: 'd',
        description: "диноза́вр",
        pronunciation: "[dʲɪnɐzˈavr] // dinozawr",
        translation: "dinozaur",
        picture: require("../../assets/letterInfoPics/dino.png"),
        yOffset: -145
    },
    {
        letterName: "е",
        latLetterName: 'je',
        description: "еда",
        pronunciation: "jeda",
        translation: "jedzenie",
        picture: require("../../assets/letterInfoPics/eda.png"),
        yOffset: -90
    },
    {
        letterName: "ё",
        latLetterName: 'jo',
        description: "ёлка",
        pronunciation: "jołka",
        translation: "choinka",
        picture: require("../../assets/letterInfoPics/elka.png"),
        yOffset: -90
    },
    {
        letterName: "ж",
        latLetterName: 'ż',
        description: "жираф",
        pronunciation: "żiraf",
        translation: "żyrafa",
        picture: require("../../assets/letterInfoPics/giraf.png"),
        yOffset: -90
    },
    {
        letterName: "з",
        latLetterName: 'z',
        description: "заяц",
        pronunciation: "zajac",
        translation: "zając",
        picture: require("../../assets/letterInfoPics/zajac.png"),
        yOffset: -145
    },
    {
        letterName: "и",
        latLetterName: 'i',
        description: "игрушки",
        pronunciation: "igruszki",
        translation: "zabawki",
        picture: require("../../assets/letterInfoPics/igrushki.png"),
        yOffset: -90
    },
    {
        letterName: "й",
        latLetterName: 'j',
        description: "йогурт",
        pronunciation: "iogurt",
        translation: "jogurt",
        picture: require("../../assets/letterInfoPics/yogurt.png"),
        yOffset: -90
    },
    {
        letterName: "к",
        latLetterName: 'k',
        description: "кошка",
        pronunciation: "koszka",
        translation: "kot",
        picture: require("../../assets/letterInfoPics/koshka.png"),
        yOffset: -90
    },
    {
        letterName: "л",
        latLetterName: 'l',
        description: "лягушка",
        pronunciation: "liaguszka",
        translation: "żaba",
        picture: require("../../assets/letterInfoPics/zaba.png"),
        yOffset: -90
    },
    {
        letterName: "м",
        latLetterName: 'm',
        description: "мишка",
        pronunciation: "miszka",
        translation: "misio",
        picture: require("../../assets/letterInfoPics/mishka.png"),
        yOffset: -90
    },
    {
        letterName: "н",
        latLetterName: 'n',
        description: "носорог",
        pronunciation: "nosorog",
        translation: "nosorożec",
        picture: require("../../assets/letterInfoPics/nosorog.png"),
        yOffset: -90
    },
    {
        letterName: "о",
        latLetterName: 'o',
        description: "осёл",
        pronunciation: "osjoł",
        translation: "osioł",
        picture: require("../../assets/letterInfoPics/oslik.png"),
        yOffset: -90
    },
    {
        letterName: "п",
        latLetterName: 'p',
        description: "петух",
        pronunciation: "pietuch",
        translation: "kogut",
        picture: require("../../assets/letterInfoPics/petuh02.png"),
        yOffset: -90
    },
    {
        letterName: "р",
        latLetterName: 'r',
        description: "ромашка",
        pronunciation: "romaszka",
        translation: "rumianek",
        picture: require("../../assets/letterInfoPics/romashka.png"),
        yOffset: -145
    },
    {
        letterName: "с",
        latLetterName: 's',
        description: "собака",
        pronunciation: "sobaka",
        translation: "pies",
        picture: require("../../assets/letterInfoPics/sobaka.png"),
        yOffset: -90
    },
    {
        letterName: "т",
        latLetterName: 't',
        description: "тыква",
        pronunciation: "tykwa",
        translation: "dynia",
        picture: require("../../assets/letterInfoPics/tykwa.png"),
        yOffset: -90
    },
    {
        letterName: "у",
        latLetterName: 'u',
        description: "улитка",
        pronunciation: "ulitka",
        translation: "ślimak",
        picture: require("../../assets/letterInfoPics/ulitka.png"),
        yOffset: -145
    },
    {
        letterName: "ф",
        latLetterName: 'f',
        description: "фея",
        pronunciation: "feja",
        translation: "wróżka",
        picture: require("../../assets/letterInfoPics/feya.png"),
        yOffset: -145
    },
    {
        letterName: "х",
        latLetterName: 'ch',
        description: "хомяк",
        pronunciation: "homjak",
        translation: "chomik",
        picture: require("../../assets/letterInfoPics/khomyak.png"),
        yOffset: -90
    },
    {
        letterName: "ц",
        latLetterName: 'c',
        description: "цыплёнок",
        pronunciation: "xxx",
        translation: "kurczaczek",
        picture: require("../../assets/letterInfoPics/cyplonok.png"),
        yOffset: -145
    },
    {
        letterName: "ч",
        latLetterName: 'cz',
        description: "черепаха",
        pronunciation: "czerepacha",
        translation: "żółw",
        picture: require("../../assets/letterInfoPics/cerepakha.png"),
        yOffset: -90
    },
    {
        letterName: "ш",
        latLetterName: 'sz',
        description: "шар",
        pronunciation: "szar",
        translation: "kula",
        picture: require("../../assets/letterInfoPics/shar.png"),
        yOffset: -90
    },
    {
        letterName: "щ",
        latLetterName: 'szcz',
        description: "щенок",
        pronunciation: "szczenok",
        translation: "szczeniaczek",
        picture: require("../../assets/letterInfoPics/sobaka.png"),
        yOffset: -145
    },
    {
        letterName: "ъ",
        latLetterName: '-znak graficzny-',
        description: "твёрдый знак",
        pronunciation: "-",
        translation: "twardy znak",
        picture: require("../../assets/letterInfoPics/twerdy.png"),
        yOffset: -90
    },
    {
        letterName: "ы",
        latLetterName: 'y',
        description: "мЫшь, рЫбЫ, куклЫ, сЫр",
        pronunciation: "mysz, ryby, kukły, syr",
        translation: "litera у",
        picture: require("../../assets/letterInfoPics/y.jpg"),
        yOffset: -90
    },
    {
        letterName: "ь",
        latLetterName: '-znak graficzny-',
        description: "мягкий знак",
        pronunciation: "xxx",
        translation: "miękki znak - znak graficzny",
        picture: require("../../assets/letterInfoPics/miahky.png"),
        yOffset: -90
    },
    {
        letterName: "э",
        latLetterName: 'e',
        description: "эскаватор",
        pronunciation: "eskawator",
        translation: "koparka",
        picture: require("../../assets/letterInfoPics/kopara.png"),
        yOffset: -90
    },
    {
        letterName: "ю",
        latLetterName: 'ju',
        description: "ю́бка",
        pronunciation: "jˈʉpkə // jubka",
        translation: "spódnica",
        picture: require("../../assets/letterInfoPics/ubka.png"),
        yOffset: -90
    },
    {
        letterName: "я",
        latLetterName: 'ja',
        description: "я́блоко",
        pronunciation: "jˈæbləkə // jabloko",
        translation: "jabłko",
        picture: require("../../assets/letterInfoPics/apple.png"),
        yOffset: -90
    },
];



export default descriptions;

export const getDescription = (letter) => {
    return descriptions.find((description) => {
            return description.letterName === letter;
        }
    )
};