// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {


    var res = {};
    let var_h, var_q, var_d, var_n, var_p;
    let rem = currency;

    if (rem > 10000) {
        res.error = "You are rich, my friend! We don\'t have so much coins for exchange";


    }
    else {
        var_h = Math.floor(rem / 50);
        if (var_h > 0) {

            res.H = var_h;
            rem = rem - (var_h * 50);

        }


        var_q = Math.floor(rem / 25);
        if (var_q > 0) {
            res.Q = var_q;
            rem = rem - (var_q * 25)

        }

        var_d = Math.floor(rem / 10);
        if (var_d > 0) {
            res.D = var_d;
            rem = rem - (var_d * 10)

        }
        var_n = Math.floor(rem / 5);
        if (var_n > 0) {
            res.N = var_n;
            rem = rem - (var_n * 5)

        }
        var_p = Math.floor(rem / 1);
        if (var_p > 0) {
            res.P = var_p;
        }

        console.log("return=", res);


    }
    return res;
};
