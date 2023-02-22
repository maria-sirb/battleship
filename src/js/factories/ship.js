const { ShipLenghts } = require("../helpers");

let Ship = (shipType) => {
    let type = shipType;
    let length = ShipLenghts[type];
    let hits = Array(length).fill(false);

    let hit = function (position) {
        
        if(position >= 0 && position < length)
        {
            hits[position] = true;
        }
        return hits;
    }

    let isSunk = function(){

        if(hits.indexOf(false) >= 0)
            return false;
        else 
            return true;    
    }
    return {type, length, hits, hit, isSunk};
}
module.exports = Ship;