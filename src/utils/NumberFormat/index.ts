//@ts-nocheck

import BigNumber from "bignumber.js";

export const numberFormat = (numberString: string) => {

    const numberBigNumber = new BigNumber(numberString) 

    if(numberBigNumber.comparedTo(new BigNumber('1e65')) == 1) {        
        return numberBigNumber.toExponential(2)
    }

    if( numberBigNumber.comparedTo(new BigNumber('1e63')) == 1 || numberBigNumber.comparedTo(new BigNumber('1e63')) == 0 ) {
        const resString = numberBigNumber.dividedBy(new BigNumber('1e63')).toFixed(2)
        const lastCh1 = resString.charAt(resString.length - 1);
        const lastCh2 = resString.charAt(resString.length - 2);
        if(lastCh1 == "0" && lastCh2 == "0") {
            return numberBigNumber.dividedBy(new BigNumber('1e63')).toFixed(0) + " *"    
        } else {
            return numberBigNumber.dividedBy(new BigNumber('1e63')).toFixed(2) + " *"     
        }
        // return numberBigNumber.dividedBy(new BigNumber('1e63')).toFixed(2) + " *"
    }

    if( numberBigNumber.comparedTo(new BigNumber('1e60')) == 1 || numberBigNumber.comparedTo(new BigNumber('1e60')) == 0 ) {
        const resString = numberBigNumber.dividedBy(new BigNumber('1e60')).toFixed(2)
        const lastCh1 = resString.charAt(resString.length - 1);
        const lastCh2 = resString.charAt(resString.length - 2);
        if(lastCh1 == "0" && lastCh2 == "0") {
            return numberBigNumber.dividedBy(new BigNumber('1e60')).toFixed(0) + " &"    
        } else {
            return numberBigNumber.dividedBy(new BigNumber('1e60')).toFixed(2) + " &"     
        }
        // return numberBigNumber.dividedBy(new BigNumber('1e60')).toFixed(2) + " &"
    }

    if( numberBigNumber.comparedTo(new BigNumber('1e57')) == 1 || numberBigNumber.comparedTo(new BigNumber('1e57')) == 0 ) {
        const resString = numberBigNumber.dividedBy(new BigNumber('1e57')).toFixed(2)
        const lastCh1 = resString.charAt(resString.length - 1);
        const lastCh2 = resString.charAt(resString.length - 2);
        if(lastCh1 == "0" && lastCh2 == "0") {
            return numberBigNumber.dividedBy(new BigNumber('1e57')).toFixed(0) + " ^"    
        } else {
            return numberBigNumber.dividedBy(new BigNumber('1e57')).toFixed(2) + " ^"     
        }
        // return numberBigNumber.dividedBy(new BigNumber('1e57')).toFixed(2) + " ^"
    }

    if( numberBigNumber.comparedTo(new BigNumber('1e54')) == 1 || numberBigNumber.comparedTo(new BigNumber('1e54')) == 0 ) {
        const resString = numberBigNumber.dividedBy(new BigNumber('1e54')).toFixed(2)
        const lastCh1 = resString.charAt(resString.length - 1);
        const lastCh2 = resString.charAt(resString.length - 2);
        if(lastCh1 == "0" && lastCh2 == "0") {
            return numberBigNumber.dividedBy(new BigNumber('1e54')).toFixed(0) + " %"    
        } else {
            return numberBigNumber.dividedBy(new BigNumber('1e54')).toFixed(2) + " %"     
        }
        // return numberBigNumber.dividedBy(new BigNumber('1e54')).toFixed(2) + " %"
    }

    if( numberBigNumber.comparedTo(new BigNumber('1e51')) == 1 || numberBigNumber.comparedTo(new BigNumber('1e51')) == 0 ) {
        const resString = numberBigNumber.dividedBy(new BigNumber('1e51')).toFixed(2)
        const lastCh1 = resString.charAt(resString.length - 1);
        const lastCh2 = resString.charAt(resString.length - 2);
        if(lastCh1 == "0" && lastCh2 == "0") {
            return numberBigNumber.dividedBy(new BigNumber('1e51')).toFixed(0) + " $"    
        } else {
            return numberBigNumber.dividedBy(new BigNumber('1e51')).toFixed(2) + " $"     
        }
        // return numberBigNumber.dividedBy(new BigNumber('1e51')).toFixed(2) + " $"
    }

    if( numberBigNumber.comparedTo(new BigNumber('1e48')) == 1 || numberBigNumber.comparedTo(new BigNumber('1e48')) == 0 ) {
        const resString = numberBigNumber.dividedBy(new BigNumber('1e48')).toFixed(2)
        const lastCh1 = resString.charAt(resString.length - 1);
        const lastCh2 = resString.charAt(resString.length - 2);
        if(lastCh1 == "0" && lastCh2 == "0") {
            return numberBigNumber.dividedBy(new BigNumber('1e48')).toFixed(0) + " #"    
        } else {
            return numberBigNumber.dividedBy(new BigNumber('1e48')).toFixed(2) + " #"     
        }
        // return numberBigNumber.dividedBy(new BigNumber('1e48')).toFixed(2) + " #"
    }

    if( numberBigNumber.comparedTo(new BigNumber('1e45')) == 1 || numberBigNumber.comparedTo(new BigNumber('1e45')) == 0 ) {
        const resString = numberBigNumber.dividedBy(new BigNumber('1e45')).toFixed(2)
        const lastCh1 = resString.charAt(resString.length - 1);
        const lastCh2 = resString.charAt(resString.length - 2);
        if(lastCh1 == "0" && lastCh2 == "0") {
            return numberBigNumber.dividedBy(new BigNumber('1e45')).toFixed(0) + " @"    
        } else {
            return numberBigNumber.dividedBy(new BigNumber('1e45')).toFixed(2) + " @"     
        }
        // return numberBigNumber.dividedBy(new BigNumber('1e45')).toFixed(2) + " @"
    }

    if( numberBigNumber.comparedTo(new BigNumber('1e42')) == 1 || numberBigNumber.comparedTo(new BigNumber('1e42')) == 0 ) {
        const resString = numberBigNumber.dividedBy(new BigNumber('1e42')).toFixed(2)
        const lastCh1 = resString.charAt(resString.length - 1);
        const lastCh2 = resString.charAt(resString.length - 2);
        if(lastCh1 == "0" && lastCh2 == "0") {
            return numberBigNumber.dividedBy(new BigNumber('1e42')).toFixed(0) + " !"    
        } else {
            return numberBigNumber.dividedBy(new BigNumber('1e42')).toFixed(2) + " !"     
        }
        // return numberBigNumber.dividedBy(new BigNumber('1e42')).toFixed(2) + " !"
    }

    if( numberBigNumber.comparedTo(new BigNumber('1e39')) == 1 || numberBigNumber.comparedTo(new BigNumber('1e39')) == 0 ) {
        const resString = numberBigNumber.dividedBy(new BigNumber('1e39')).toFixed(2)
        const lastCh1 = resString.charAt(resString.length - 1);
        const lastCh2 = resString.charAt(resString.length - 2);
        if(lastCh1 == "0" && lastCh2 == "0") {
            return numberBigNumber.dividedBy(new BigNumber('1e39')).toFixed(0) + " D"    
        } else {
            return numberBigNumber.dividedBy(new BigNumber('1e39')).toFixed(2) + " D"     
        }
        // return numberBigNumber.dividedBy(new BigNumber('1e39')).toFixed(2) + " D"
    }

    if( numberBigNumber.comparedTo(new BigNumber('1e36')) == 1 || numberBigNumber.comparedTo(new BigNumber('1e36')) == 0 ) {
        const resString = numberBigNumber.dividedBy(new BigNumber('1e36')).toFixed(2)
        const lastCh1 = resString.charAt(resString.length - 1);
        const lastCh2 = resString.charAt(resString.length - 2);
        if(lastCh1 == "0" && lastCh2 == "0") {
            return numberBigNumber.dividedBy(new BigNumber('1e36')).toFixed(0) + " U"    
        } else {
            return numberBigNumber.dividedBy(new BigNumber('1e36')).toFixed(2) + " U"     
        }
        // return numberBigNumber.dividedBy(new BigNumber('1e36')).toFixed(2) + "U"
    }

    if( numberBigNumber.comparedTo(new BigNumber('1e33')) == 1 || numberBigNumber.comparedTo(new BigNumber('1e33')) == 0 ) {
        const resString = numberBigNumber.dividedBy(new BigNumber('1e33')).toFixed(2)
        const lastCh1 = resString.charAt(resString.length - 1);
        const lastCh2 = resString.charAt(resString.length - 2);
        if(lastCh1 == "0" && lastCh2 == "0") {
            return numberBigNumber.dividedBy(new BigNumber('1e33')).toFixed(0) + " d"    
        } else {
            return numberBigNumber.dividedBy(new BigNumber('1e33')).toFixed(2) + " d"     
        }
        // return numberBigNumber.dividedBy(new BigNumber('1e33')).toFixed(2) + " d"
    }

    if( numberBigNumber.comparedTo(new BigNumber('1e30')) == 1 || numberBigNumber.comparedTo(new BigNumber('1e30')) == 0 ) {
        const resString = numberBigNumber.dividedBy(new BigNumber('1e30')).toFixed(2)
        const lastCh1 = resString.charAt(resString.length - 1);
        const lastCh2 = resString.charAt(resString.length - 2);
        if(lastCh1 == "0" && lastCh2 == "0") {
            return numberBigNumber.dividedBy(new BigNumber('1e30')).toFixed(0) + " N"    
        } else {
            return numberBigNumber.dividedBy(new BigNumber('1e30')).toFixed(2) + " N"     
        }
        // return numberBigNumber.dividedBy(new BigNumber('1e30')).toFixed(2) + " N"
    }

    if( numberBigNumber.comparedTo(new BigNumber('1e27')) == 1 || numberBigNumber.comparedTo(new BigNumber('1e27')) == 0 ) {
        const resString = numberBigNumber.dividedBy(new BigNumber('1e27')).toFixed(2)
        const lastCh1 = resString.charAt(resString.length - 1);
        const lastCh2 = resString.charAt(resString.length - 2);
        if(lastCh1 == "0" && lastCh2 == "0") {
            return numberBigNumber.dividedBy(new BigNumber('1e27')).toFixed(0) + " O"    
        } else {
            return numberBigNumber.dividedBy(new BigNumber('1e27')).toFixed(2) + " O"     
        }
        // return numberBigNumber.dividedBy(new BigNumber('1e27')).toFixed(2) + " O"
    }

    if( numberBigNumber.comparedTo(new BigNumber('1e24')) == 1 || numberBigNumber.comparedTo(new BigNumber('1e24')) == 0 ) {
        const resString = numberBigNumber.dividedBy(new BigNumber('1e24')).toFixed(2)
        const lastCh1 = resString.charAt(resString.length - 1);
        const lastCh2 = resString.charAt(resString.length - 2);
        if(lastCh1 == "0" && lastCh2 == "0") {
            return numberBigNumber.dividedBy(new BigNumber('1e24')).toFixed(0) + " S"    
        } else {
            return numberBigNumber.dividedBy(new BigNumber('1e24')).toFixed(2) + " S"     
        }
        // return numberBigNumber.dividedBy(new BigNumber('1e24')).toFixed(2) + " S"
    }

    if( numberBigNumber.comparedTo(new BigNumber('1e21')) == 1 || numberBigNumber.comparedTo(new BigNumber('1e21')) == 0 ) {
        const resString = numberBigNumber.dividedBy(new BigNumber('1e21')).toFixed(2)
        const lastCh1 = resString.charAt(resString.length - 1);
        const lastCh2 = resString.charAt(resString.length - 2);
        if(lastCh1 == "0" && lastCh2 == "0") {
            return numberBigNumber.dividedBy(new BigNumber('1e21')).toFixed(0) + " s"    
        } else {
            return numberBigNumber.dividedBy(new BigNumber('1e21')).toFixed(2) + " s"     
        }
        // return numberBigNumber.dividedBy(new BigNumber('1e21')).toFixed(2) + " s"
    }

    if( numberBigNumber.comparedTo(new BigNumber('1e18')) == 1 || numberBigNumber.comparedTo(new BigNumber('1e18')) == 0 ) {
        const resString = numberBigNumber.dividedBy(new BigNumber('1e18')).toFixed(2)
        const lastCh1 = resString.charAt(resString.length - 1);
        const lastCh2 = resString.charAt(resString.length - 2);
        if(lastCh1 == "0" && lastCh2 == "0") {
            return numberBigNumber.dividedBy(new BigNumber('1e18')).toFixed(0) + " Q"    
        } else {
            return numberBigNumber.dividedBy(new BigNumber('1e18')).toFixed(2) + " Q"     
        }
        // return numberBigNumber.dividedBy(new BigNumber('1e18')).toFixed(2) + " Q"
    }

    if( numberBigNumber.comparedTo(new BigNumber('1e15')) == 1 || numberBigNumber.comparedTo(new BigNumber('1e15')) == 0 ) {
        const resString = numberBigNumber.dividedBy(new BigNumber('1e15')).toFixed(2)
        const lastCh1 = resString.charAt(resString.length - 1);
        const lastCh2 = resString.charAt(resString.length - 2);
        if(lastCh1 == "0" && lastCh2 == "0") {
            return numberBigNumber.dividedBy(new BigNumber('1e15')).toFixed(0) + " q"    
        } else {
            return numberBigNumber.dividedBy(new BigNumber('1e15')).toFixed(2) + " q"     
        }
        // return numberBigNumber.dividedBy(new BigNumber('1e15')).toFixed(2) + " q"
    }

    if( numberBigNumber.comparedTo(new BigNumber('1e12')) == 1 || numberBigNumber.comparedTo(new BigNumber('1e12')) == 0 ) {
        const resString = numberBigNumber.dividedBy(new BigNumber('1e12')).toFixed(2)
        const lastCh1 = resString.charAt(resString.length - 1);
        const lastCh2 = resString.charAt(resString.length - 2);
        if(lastCh1 == "0" && lastCh2 == "0") {
            return numberBigNumber.dividedBy(new BigNumber('1e12')).toFixed(0) + " T"    
        } else {
            return numberBigNumber.dividedBy(new BigNumber('1e12')).toFixed(2) + " T"     
        }
        // return numberBigNumber.dividedBy(new BigNumber('1e12')).toFixed(2) + " T"
    }

    if( numberBigNumber.comparedTo(new BigNumber('1e9')) == 1 || numberBigNumber.comparedTo(new BigNumber('1e9')) == 0 ) {
        const resString = numberBigNumber.dividedBy(new BigNumber('1e9')).toFixed(2)
        const lastCh1 = resString.charAt(resString.length - 1);
        const lastCh2 = resString.charAt(resString.length - 2);
        if(lastCh1 == "0" && lastCh2 == "0") {
            return numberBigNumber.dividedBy(new BigNumber('1e9')).toFixed(0) + " B"    
        } else {
            return numberBigNumber.dividedBy(new BigNumber('1e9')).toFixed(2) + " B"     
        }
        // return numberBigNumber.dividedBy(new BigNumber('1e9')).toFixed(2) + " B"
    }

    if( numberBigNumber.comparedTo(new BigNumber('1e6')) == 1 || numberBigNumber.comparedTo(new BigNumber('1e6')) == 0 ) {
        const resString = numberBigNumber.dividedBy(new BigNumber('1e6')).toFixed(2)
        const lastCh1 = resString.charAt(resString.length - 1);
        const lastCh2 = resString.charAt(resString.length - 2);
        if(lastCh1 == "0" && lastCh2 == "0") {
            return numberBigNumber.dividedBy(new BigNumber('1e6')).toFixed(0) + " M"    
        } else {
            return numberBigNumber.dividedBy(new BigNumber('1e6')).toFixed(2) + " M"     
        }
        // return numberBigNumber.dividedBy(new BigNumber('1e6')).toFixed(2) + " M"
    }

    if( numberBigNumber.comparedTo(new BigNumber('1e3')) == 1 || numberBigNumber.comparedTo(new BigNumber('1e3')) == 0 ) {
        
        const resString = numberBigNumber.dividedBy(new BigNumber('1e3')).toFixed(2)
        const lastCh1 = resString.charAt(resString.length - 1);
        const lastCh2 = resString.charAt(resString.length - 2);
        if(lastCh1 == "0" && lastCh2 == "0") {
            return numberBigNumber.dividedBy(new BigNumber('1e3')).toFixed(0) + " K"    
        } else {
            return numberBigNumber.dividedBy(new BigNumber('1e3')).toFixed(2) + " K"     
        }
        // return numberBigNumber.dividedBy(new BigNumber('1e3')).toFixed(2) + " K"
    }

    return numberBigNumber.toString()
}