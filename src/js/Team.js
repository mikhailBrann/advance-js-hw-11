export default class Team {
    constructor() {
        this.list = [];
    }

    addList(chapter) {
        this.list.push(chapter);
    }

    [Symbol.iterator]() {
        let currentIndex = 0;
        
        return {
            next: () => {
                return {
                    value: this.list[currentIndex++],
                    done: currentIndex > this.list.length
                };
            }
        };
    }

    *customGenerator() {
        for (let char of this.list) {
            yield char;
        }
    }
}