function createStandings(arr) {
    let n = arr.length;
    let swapped;
    
    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i].points < arr[i + 1].points) {
                // Swap the elements
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }
        n--; // Reduce the range of comparison since the largest is already sorted
    } while (swapped);
    
    return arr;
}

export function splitStandings(teams) {
    let group1 = [];
    let group2 = [];
    teams.forEach((item) => {
        if(item.group === 1) {
            group1.push(item)
        } else {
            group2.push(item);
        }
    })
    group1 = createStandings(group1);
    group2 = createStandings(group2);
    return {group1, group2}
}