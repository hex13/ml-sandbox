export function useAverage(dots) {
    const sum = dots.reduce((acc, dot) => acc + dot.y, 0);
    return {
        predict: () => sum / dots.length,
        title: 'average',
    }

}