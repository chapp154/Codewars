export const whoTookTheCarKey = (message) => {

    let result = [];
    message.forEach(binaryNo => result.push(String.fromCharCode(parseInt(binaryNo, 2))));

    return result.join("");
}