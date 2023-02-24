const { ShipLenghts } = require("../helpers");

let Ship = (shipType) => {
    let type = shipType;
    let length = ShipLenghts[type];
    //let hits = Array(length).fill(false);
    let hitNo = 0;

    let hit = function () {

        //if(position >= 0 && position < length)
        if(hitNo < length)
        {
           // hits[position] = true;
           hitNo++;
        }
        return hitNo;
    }

    let isSunk = function(){

        //if(hits.indexOf(false) >= 0)
        if(hitNo < length)
            return false;
        else 
            return true;    
    }
    let getHits = function(){
        return hitNo;
    }
    return {type, length, hitNo, hit, isSunk, getHits};
}
module.exports = Ship;