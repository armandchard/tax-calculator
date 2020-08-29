import { TranchesPositions } from '../data/TranchesPositions';

export const addTextToImage = (imagePath, positions = [], texts = [], append) => {

    return new Promise((resolve, _reject) => {
        const canvas = document.getElementById("canvas");
        const context = canvas.getContext("2d");

        const img = new Image();
        img.src = imagePath;
        img.onload = () => {
            canvas.width = img.width
            canvas.height = img.height
            context.drawImage(img, 0, 0);
            context.lineWidth = 1;
            context.fillStyle = "#FFF";
            context.lineStyle = "#FFF";
            context.font = "bold 30px sans-serif";
            for (let i = 0; i < positions.length; i++) {
                context.fillText(texts[i] && texts[i] + append || '', positions[i].x, positions[i].y);
            }
            resolve(canvas.toDataURL("image/png", 1.0))
        };
    })
}

export const draw = (texts, append = '') => {
    return addTextToImage(require('../../images/ig.png'), TranchesPositions, texts, append)
}