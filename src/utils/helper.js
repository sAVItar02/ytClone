export const generateRandomImage = () => {
    return `https://randomuser.me/api/portraits/lego/${Math.floor(Math.random() * 7)}.jpg`;
}

export const generateRandomName = () => {
    let names = ["Abbán", "Abdastartos", "Acacius", "Lykos", "Madhava", "Mærwine", "Theodulus", "Porcia", "Féchín", "Flavius", "Hildegard", "Hjǫrdís", "Cleopatra", "Cornelius", "Cynemær"];
    return names[Math.floor(Math.random() * 14)];
}

export const generateRandomText = () => {
    let randomSentences = [
        "Spark silent mysterious wild breeze curious roam whisper dream nature.",
        "Peace distant roam serene delight spark dream embrace solitude.",
        "Solitude whisper explore horizon majestic mysterious soft dream tranquil dance.",
        "Dance solitude adventure delight horizon ancient gleaming explore peace.",
        "Adventure dance mysterious horizon ancient solitude embrace silent roam.",
        "Solitude golden ancient roam dance silent serene wander dream luminous.",
        "Soft tranquil journey ancient wander dream silent curious embrace distant.",
        "Breeze solitude dance whisper gleaming horizon vast adventure embrace.",
        "Majestic ancient delight tranquil dance golden embrace spark wander.",
        "Dream luminous adventure whisper gleaming mysterious soft silent horizon.",
        "Adventure spark breeze wild horizon majestic wander delight peace.",
        "Journey adventure nature peace gleaming tranquil explore wander delight.",
        "Majestic luminous wonder vast roam tranquil dance embrace golden.",
        "Distant luminous soft dream adventure ancient spark breeze wild.",
        "Majestic breeze spark curious nature delight peace vast whisper."
    ];
    
    return randomSentences[Math.floor(Math.random() * 14)];
}