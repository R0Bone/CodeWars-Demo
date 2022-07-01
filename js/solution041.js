//You get any card as an argument. Your task is to return the suit of this card (in lowercase).

//Our deck (is preloaded):

function defineSuit(card){
    let suit = card[card.length -1]

    if(suit === '♣'){
        return 'clubs'
    }else if(suit === '♦'){
        return 'diamonds'
    }else if(suit === '♥'){
        return 'hearts'
    }else{
        return 'spades'
    }
}

console.log(defineSuit('3♣'))//'clubs'