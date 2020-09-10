var arg = Number(prompt('Type a number'));

const isPrime = function (arg) {
    for (var i = 2; i < arg; i += 1) {
        if (arg % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(arg));
document.write(isPrime(arg));

// for(let i = 3; i < arg; 1+=2 ){} formel for at springe over at gange med lige tal over 2 unødvendigt, og derved udregne resultatet hurtigere.

//let x = 6 * i - 1 og let y = 6 * i - 1 finder også frem til primtal.