let lastId = 0;

export const createDots = () => {
    const dots = [];
    for (let i = -10; i < 10; i++) {
        const y = i * 5;
        dots.push({
            x: i * 30 + ~~(Math.random() * 50),
            y: y + ~~(Math.random() * 50),
            id: createId(),
        })
    }
    return dots;
}

export const createId = () => ++lastId;