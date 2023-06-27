// https://www.codewars.com/kata/576757b1df89ecf5bd00073b

function towerBuilder(floors) {
    let tower = [];
    let spaces = 0;
    floors = 2 * floors - 1;
    while (floors > 0) {
        tower.unshift(" ".repeat(spaces) + "*".repeat(floors) + " ".repeat(spaces));
        spaces++;
        floors -= 2;
    }

    return tower;
}

//Best solution:
function towerBuilder(floors) {
    var tower = [];
    for (var i = 0; i < floors; i++) {
        tower.push(" ".repeat(floors - i - 1)
            + "*".repeat((i * 2)+ 1)
            + " ".repeat(floors - i - 1));
    }
    return tower;
}

//next best solution:
function towerBuilder(floors) {
    return Array.from({length: floors}, function(v, k) {
        const spaces = ' '.repeat(floors - k - 1);
        return spaces + '*'.repeat(k + k + 1) + spaces;
    });
}