<?php

for ($i = 1; $i < 250; $i++) {
    if ($i % 3 == 0 && $i % 5 == 0) {
        var_dump($i . " | FizzBuzz");
        continue;
    }
    if ($i % 3 == 0) {
        var_dump($i . " | Fizz");
        continue;
    }
    if ($i % 5 === 0) {
        var_dump($i . " | Buzz");
        continue;
    }
    var_dump($i);
}