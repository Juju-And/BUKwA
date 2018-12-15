const descriptions = [
    {
        letterName: 'а',
        description: "айст",
        pronunciation: "ˈajst",
        translation: "bocian",
        picture: require("../../assets/aist.png"),
        yOffset: -90
    },
    {
        letterName: "б",
        description: "бегемо́т",
        pronunciation: "[bʲɪɡʲɪmˈot] // barаn",
        translation: "hipopotam",
        picture: require("../../assets/begemot.png"),
        yOffset: -90
    },
    {
        letterName: "в",
        description: "волк",
        pronunciation: "[vˈolk] // wołk",
        translation: "wilk",
        picture: require("../../assets/wolk.png"),
        yOffset: -90
    },
    {
        letterName: "г",
        description: "гриб",
        pronunciation: "[ɡrʲˈip] // grib",
        translation: "grzyb",
        picture: require("../../assets/grib.png"),
        yOffset: -90
    },
    {
        letterName: "д",
        description: "диноза́вр",
        pronunciation: "[dʲɪnɐzˈavr] // dinozawr",
        translation: "dinozaur",
        picture: require("../../assets/dino.png"),
        yOffset: -145
    },
    // {
    //     letterName: "е",
    //     description: "xxx",
    //     pronunciation: "xxx",
    //     translation: "xxx",
    //     picture: require("../../assets/xxx"),
    //     yOffset: -90
    // },


];

// е, ё, ж, з, и, й, к, л, м, н, о, п, р, с, т, у, ф, х, ц, ч, ш, щ, ъ, ы, ь, э, ю, я

export default descriptions;

export const getDescription = (letter) => {
    return descriptions.find((description) => {
            console.log({letter, description}, description.letterName === letter)
            return description.letterName === letter;
        }
    )
}