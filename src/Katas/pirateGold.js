export const amaroPlan = (pirateNum) => {
    const coins = pirateNum * 20;
    let shares = [];
    const rewarded = pirateNum % 2 == 0 ? pirateNum / 2 : pirateNum / 2 + .5;
    const cptCut = coins - rewarded + 1;

    for (let i = 0; i < pirateNum; i++) {
        i === 0 ? shares.push(cptCut) : 
        i % 2 == 0 ? shares.push(1) :
        shares.push(0);
    }

    return shares;
}



