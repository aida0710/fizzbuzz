console.time()
for (let i = 1; i < 250; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)){
        console.log("fizzbuzz | " + i);
        continue;
    }
    if ((i % 3 === 0)){
        console.log("fizz | " + i);
        continue
    }
    if ((i % 5 === 0)){
        console.log("buzz | " + i);
        continue
    }
    console.log(i)
}
console.timeEnd()