/* Boucle qui va chercher à diviser number(puis son reste) par des nombres 
premiers croissants jusqu'à ce qu'il reste 0 */

function largestPrimeFactor(number) {
    let lpf = 1
    for (let quotient = number, divider = 2; quotient > 1; divider++) {
        // D'abord check si divider est un nombre premier
        let divIsPrime = true
        for (let divCheck = 2; divCheck < divider; divCheck++) {
            if (divider % divCheck == 0) divIsPrime = false
            break
        }
        
        /* Si quotient est multiple du nombre premier, on place ce dernier dans
        la variable de sortie et on met notre reste à jour */
        if (divIsPrime == true && quotient % divider == 0) {
            lpf = divider
            while (quotient % divider == 0) {
                quotient = quotient / divider
            }
        } 
    }

    return lpf;
}