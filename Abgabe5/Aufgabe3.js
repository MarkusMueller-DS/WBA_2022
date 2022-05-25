console.log("Berechnung Binomialkoeffizient verschachtelt:");

function binomkoeff(n, k) {
    if (k > n) {
        throw new Error ("k darf nicht größer sein als n");
    }
    function factorialize(num) {
        if (num < 0) 
            return -1;
        else if (num == 0) 
            return 1;
        else {
            return (num * factorialize(num - 1));
        }
    }
    return factorialize(n) / (factorialize(k) * factorialize(n - k));
}
