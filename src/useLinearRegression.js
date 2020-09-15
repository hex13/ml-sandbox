export function useLinearRegression(dots) {
    const getCost = (dots, f) => {
        let errorSum = 0;
        dots.forEach(dot => {
            const error = f(dot.x) - dot.y;
            errorSum += error ** 2;
        });
        return errorSum / dots.length;
    };

    let m = 1;
    let b = 0;
    function f(x) {
        return m * x + b;
    }

    let minError;
    let bestM = 1;
    let bestB = 0;

    for (m = -20; m < 20; m += 0.2) {
        for (b = -500; b < 600; b += 2) {
            const error = getCost(dots, (x) => f(x));
            if (minError == undefined || error < minError) {
                minError = error;
                bestB = b;
                bestM = m;
            }
        }
    }
    b = bestB;
    m = bestM;

    return {
        predict: f,
        title: 'linear regression',
    }
};