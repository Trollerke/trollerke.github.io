// script.js
document.addEventListener('DOMContentLoaded', function() {
    const usageSelect = document.getElementById('usage');
    const weightSlider = document.getElementById('weight');
    const weightValue = document.getElementById('weightValue');
    const productOptions = document.getElementById('productOptions');
    const daysSupply = document.getElementById('daysSupply');

    const data = [

        { usage: 'Alvás javítás', weight: 10, product: 'Cannada CBD - 2000 mg', days: 1176, firstweekdosage: 1, secondweekdosage: 1, thirdweekdosage: 2},
        { usage: 'Alvás javítás', weight: 20, product: 'Cannada CBD - 2000 mg', days: 588, firstweekdosage: 2, secondweekdosage: 3, thirdweekdosage: 4},
        { usage: 'Alvás javítás', weight: 30, product: 'Cannada CBD - 2000 mg', days: 392, firstweekdosage: 4, secondweekdosage: 5, thirdweekdosage: 6},
        { usage: 'Alvás javítás', weight: 40, product: 'Cannada CBD - 2000 mg', days: 294, firstweekdosage: 5, secondweekdosage: 6, thirdweekdosage: 8},
        { usage: 'Alvás javítás', weight: 50, product: 'Cannada CBD - 2000 mg', days: 235, firstweekdosage: 7, secondweekdosage: 8, thirdweekdosage: 10},
        { usage: 'Alvás javítás', weight: 60, product: 'Cannada CBD - 2000 mg', days: 196, firstweekdosage: 8, secondweekdosage: 10, thirdweekdosage: 12},
        { usage: 'Alvás javítás', weight: 70, product: 'Cannada CBD - 2000 mg', days: 168, firstweekdosage: 9, secondweekdosage: 11, thirdweekdosage: 14},
        { usage: 'Alvás javítás', weight: 80, product: 'Cannada CBD - 2000 mg', days: 147, firstweekdosage: 11, secondweekdosage: 13, thirdweekdosage: 16},
        { usage: 'Alvás javítás', weight: 90, product: 'Cannada CBD - 2000 mg', days: 130, firstweekdosage: 12, secondweekdosage: 15, thirdweekdosage: 18},
        { usage: 'Alvás javítás', weight: 100, product: 'Cannada CBD - 2000 mg', days: 117, firstweekdosage: 14, secondweekdosage: 17, thirdweekdosage: 20},
        { usage: 'Alvás javítás', weight: 110, product: 'Cannada CBD - 2000 mg', days: 106, firstweekdosage: 15, secondweekdosage: 18, thirdweekdosage: 22},
        { usage: 'Alvás javítás', weight: 120, product: 'Cannada CBD - 2000 mg', days: 98, firstweekdosage: 16, secondweekdosage: 20, thirdweekdosage: 24},
        { usage: 'Alvás javítás', weight: 130, product: 'Cannada CBD - 2000 mg', days: 90, firstweekdosage: 18, secondweekdosage: 22, thirdweekdosage: 26},
        { usage: 'Alvás javítás', weight: 140, product: 'Cannada CBD - 2000 mg', days: 84, firstweekdosage: 19, secondweekdosage: 23, thirdweekdosage: 28},
        { usage: 'Alvás javítás', weight: 150, product: 'Cannada CBD - 2000 mg', days: 78, firstweekdosage: 21, secondweekdosage: 25, thirdweekdosage: 30},
        { usage: 'Stresszoldás', weight: 10, product: 'Cannada CBD - 2000 mg', days: 588, firstweekdosage: 2, secondweekdosage: 3, thirdweekdosage: 4},
        { usage: 'Stresszoldás', weight: 20, product: 'Cannada CBD - 2000 mg', days: 294, firstweekdosage: 5, secondweekdosage: 6, thirdweekdosage: 8},
        { usage: 'Stresszoldás', weight: 30, product: 'Cannada CBD - 2000 mg', days: 196, firstweekdosage: 8, secondweekdosage: 10, thirdweekdosage: 12},
        { usage: 'Stresszoldás', weight: 40, product: 'Cannada CBD - 2000 mg', days: 147, firstweekdosage: 11, secondweekdosage: 13, thirdweekdosage: 16},
        { usage: 'Stresszoldás', weight: 50, product: 'Cannada CBD - 2000 mg', days: 117, firstweekdosage: 14, secondweekdosage: 17, thirdweekdosage: 20},
        { usage: 'Stresszoldás', weight: 60, product: 'Cannada CBD - 2000 mg', days: 98, firstweekdosage: 16, secondweekdosage: 20, thirdweekdosage: 24},
        { usage: 'Stresszoldás', weight: 70, product: 'Cannada CBD - 2000 mg', days: 84, firstweekdosage: 19, secondweekdosage: 23, thirdweekdosage: 28},
        { usage: 'Stresszoldás', weight: 80, product: 'Cannada CBD - 2000 mg', days: 73, firstweekdosage: 22, secondweekdosage: 27, thirdweekdosage: 32},
        { usage: 'Stresszoldás', weight: 90, product: 'Cannada CBD - 2000 mg', days: 65, firstweekdosage: 25, secondweekdosage: 30, thirdweekdosage: 36},
        { usage: 'Stresszoldás', weight: 100, product: 'Cannada CBD - 2000 mg', days: 58, firstweekdosage: 28, secondweekdosage: 34, thirdweekdosage: 40},
        { usage: 'Stresszoldás', weight: 110, product: 'Cannada CBD - 2000 mg', days: 53, firstweekdosage: 30, secondweekdosage: 37, thirdweekdosage: 44},
        { usage: 'Stresszoldás', weight: 120, product: 'Cannada CBD - 2000 mg', days: 49, firstweekdosage: 33, secondweekdosage: 40, thirdweekdosage: 48},
        { usage: 'Stresszoldás', weight: 130, product: 'Cannada CBD - 2000 mg', days: 45, firstweekdosage: 36, secondweekdosage: 44, thirdweekdosage: 52},
        { usage: 'Stresszoldás', weight: 140, product: 'Cannada CBD - 2000 mg', days: 42, firstweekdosage: 39, secondweekdosage: 47, thirdweekdosage: 56},
        { usage: 'Stresszoldás', weight: 150, product: 'Cannada CBD - 2000 mg', days: 39, firstweekdosage: 42, secondweekdosage: 51, thirdweekdosage: 60},
        { usage: 'Fájdalomcsillapítás', weight: 10, product: 'Cannada CBD - 2000 mg', days: 392, firstweekdosage: 4, secondweekdosage: 5, thirdweekdosage: 6},
        { usage: 'Fájdalomcsillapítás', weight: 20, product: 'Cannada CBD - 2000 mg', days: 196, firstweekdosage: 8, secondweekdosage: 10, thirdweekdosage: 12},
        { usage: 'Fájdalomcsillapítás', weight: 30, product: 'Cannada CBD - 2000 mg', days: 130, firstweekdosage: 12, secondweekdosage: 15, thirdweekdosage: 18},
        { usage: 'Fájdalomcsillapítás', weight: 40, product: 'Cannada CBD - 2000 mg', days: 98, firstweekdosage: 16, secondweekdosage: 20, thirdweekdosage: 24},
        { usage: 'Fájdalomcsillapítás', weight: 50, product: 'Cannada CBD - 2000 mg', days: 78, firstweekdosage: 21, secondweekdosage: 25, thirdweekdosage: 30},
        { usage: 'Fájdalomcsillapítás', weight: 60, product: 'Cannada CBD - 2000 mg', days: 65, firstweekdosage: 25, secondweekdosage: 30, thirdweekdosage: 36},
        { usage: 'Fájdalomcsillapítás', weight: 70, product: 'Cannada CBD - 2000 mg', days: 56, firstweekdosage: 29, secondweekdosage: 35, thirdweekdosage: 42},
        { usage: 'Fájdalomcsillapítás', weight: 80, product: 'Cannada CBD - 2000 mg', days: 49, firstweekdosage: 33, secondweekdosage: 40, thirdweekdosage: 48},
        { usage: 'Fájdalomcsillapítás', weight: 90, product: 'Cannada CBD - 2000 mg', days: 43, firstweekdosage: 37, secondweekdosage: 45, thirdweekdosage: 54},
        { usage: 'Fájdalomcsillapítás', weight: 100, product: 'Cannada CBD - 2000 mg', days: 39, firstweekdosage: 42, secondweekdosage: 51, thirdweekdosage: 60},
        { usage: 'Fájdalomcsillapítás', weight: 110, product: 'Cannada CBD - 2000 mg', days: 35, firstweekdosage: 46, secondweekdosage: 56, thirdweekdosage: 66},
        { usage: 'Fájdalomcsillapítás', weight: 120, product: 'Cannada CBD - 2000 mg', days: 32, firstweekdosage: 50, secondweekdosage: 61, thirdweekdosage: 72},
        { usage: 'Fájdalomcsillapítás', weight: 130, product: 'Cannada CBD - 2000 mg', days: 30, firstweekdosage: 54, secondweekdosage: 66, thirdweekdosage: 78},
        { usage: 'Fájdalomcsillapítás', weight: 140, product: 'Cannada CBD - 2000 mg', days: 28, firstweekdosage: 58, secondweekdosage: 71, thirdweekdosage: 84},
        { usage: 'Fájdalomcsillapítás', weight: 150, product: 'Cannada CBD - 2000 mg', days: 26, firstweekdosage: 63, secondweekdosage: 76, thirdweekdosage: 90},
        { usage: 'Rák terápia támogatás - Orvosi utasításra', weight: 10, product: 'Cannada CBD - 2000 mg', days: 117, firstweekdosage: 14, secondweekdosage: 17, thirdweekdosage: 20},
        { usage: 'Rák terápia támogatás - Orvosi utasításra', weight: 20, product: 'Cannada CBD - 2000 mg', days: 58, firstweekdosage: 28, secondweekdosage: 34, thirdweekdosage: 40},
        { usage: 'Rák terápia támogatás - Orvosi utasításra', weight: 30, product: 'Cannada CBD - 2000 mg', days: 39, firstweekdosage: 42, secondweekdosage: 51, thirdweekdosage: 60},
        { usage: 'Rák terápia támogatás - Orvosi utasításra', weight: 40, product: 'Cannada CBD - 2000 mg', days: 29, firstweekdosage: 56, secondweekdosage: 68, thirdweekdosage: 80},
        { usage: 'Rák terápia támogatás - Orvosi utasításra', weight: 50, product: 'Cannada CBD - 2000 mg', days: 23, firstweekdosage: 70, secondweekdosage: 85, thirdweekdosage: 100},
        { usage: 'Rák terápia támogatás - Orvosi utasításra', weight: 60, product: 'Cannada CBD - 2000 mg', days: 19, firstweekdosage: 84, secondweekdosage: 102, thirdweekdosage: 120},
        { usage: 'Rák terápia támogatás - Orvosi utasításra', weight: 70, product: 'Cannada CBD - 2000 mg', days: 16, firstweekdosage: 98, secondweekdosage: 119, thirdweekdosage: 140},
        { usage: 'Rák terápia támogatás - Orvosi utasításra', weight: 80, product: 'Cannada CBD - 2000 mg', days: 14, firstweekdosage: 112, secondweekdosage: 136, thirdweekdosage: 160},
        { usage: 'Rák terápia támogatás - Orvosi utasításra', weight: 90, product: 'Cannada CBD - 2000 mg', days: 13, firstweekdosage: 126, secondweekdosage: 153, thirdweekdosage: 180},
        { usage: 'Rák terápia támogatás - Orvosi utasításra', weight: 100, product: 'Cannada CBD - 2000 mg', days: 11, firstweekdosage: 140, secondweekdosage: 170, thirdweekdosage: 200},
        { usage: 'Rák terápia támogatás - Orvosi utasításra', weight: 110, product: 'Cannada CBD - 2000 mg', days: 10, firstweekdosage: 154, secondweekdosage: 187, thirdweekdosage: 220},
        { usage: 'Rák terápia támogatás - Orvosi utasításra', weight: 120, product: 'Cannada CBD - 2000 mg', days: 9, firstweekdosage: 168, secondweekdosage: 204, thirdweekdosage: 240},
        { usage: 'Rák terápia támogatás - Orvosi utasításra', weight: 130, product: 'Cannada CBD - 2000 mg', days: 9, firstweekdosage: 182, secondweekdosage: 221, thirdweekdosage: 260},
        { usage: 'Rák terápia támogatás - Orvosi utasításra', weight: 140, product: 'Cannada CBD - 2000 mg', days: 8, firstweekdosage: 196, secondweekdosage: 238, thirdweekdosage: 280},
        { usage: 'Rák terápia támogatás - Orvosi utasításra', weight: 150, product: 'Cannada CBD - 2000 mg', days: 7, firstweekdosage: 210, secondweekdosage: 255, thirdweekdosage: 300},
        { usage: 'Autizmus/ADHD - Orvosi utasításra', weight: 10, product: 'Cannada CBD - 2000 mg', days: 235, firstweekdosage: 7, secondweekdosage: 8, thirdweekdosage: 10},
        { usage: 'Autizmus/ADHD - Orvosi utasításra', weight: 20, product: 'Cannada CBD - 2000 mg', days: 117, firstweekdosage: 14, secondweekdosage: 17, thirdweekdosage: 20},
        { usage: 'Autizmus/ADHD - Orvosi utasításra', weight: 30, product: 'Cannada CBD - 2000 mg', days: 78, firstweekdosage: 21, secondweekdosage: 25, thirdweekdosage: 30},
        { usage: 'Autizmus/ADHD - Orvosi utasításra', weight: 40, product: 'Cannada CBD - 2000 mg', days: 58, firstweekdosage: 28, secondweekdosage: 34, thirdweekdosage: 40},
        { usage: 'Autizmus/ADHD - Orvosi utasításra', weight: 50, product: 'Cannada CBD - 2000 mg', days: 47, firstweekdosage: 35, secondweekdosage: 42, thirdweekdosage: 50},
        { usage: 'Autizmus/ADHD - Orvosi utasításra', weight: 60, product: 'Cannada CBD - 2000 mg', days: 39, firstweekdosage: 42, secondweekdosage: 51, thirdweekdosage: 60},
        { usage: 'Autizmus/ADHD - Orvosi utasításra', weight: 70, product: 'Cannada CBD - 2000 mg', days: 33, firstweekdosage: 49, secondweekdosage: 59, thirdweekdosage: 70},
        { usage: 'Autizmus/ADHD - Orvosi utasításra', weight: 80, product: 'Cannada CBD - 2000 mg', days: 29, firstweekdosage: 56, secondweekdosage: 68, thirdweekdosage: 80},
        { usage: 'Autizmus/ADHD - Orvosi utasításra', weight: 90, product: 'Cannada CBD - 2000 mg', days: 26, firstweekdosage: 63, secondweekdosage: 76, thirdweekdosage: 90},
        { usage: 'Autizmus/ADHD - Orvosi utasításra', weight: 100, product: 'Cannada CBD - 2000 mg', days: 23, firstweekdosage: 70, secondweekdosage: 85, thirdweekdosage: 100},
        { usage: 'Autizmus/ADHD - Orvosi utasításra', weight: 110, product: 'Cannada CBD - 2000 mg', days: 21, firstweekdosage: 77, secondweekdosage: 93, thirdweekdosage: 110},
        { usage: 'Autizmus/ADHD - Orvosi utasításra', weight: 120, product: 'Cannada CBD - 2000 mg', days: 19, firstweekdosage: 84, secondweekdosage: 102, thirdweekdosage: 120},
        { usage: 'Autizmus/ADHD - Orvosi utasításra', weight: 130, product: 'Cannada CBD - 2000 mg', days: 18, firstweekdosage: 91, secondweekdosage: 110, thirdweekdosage: 130},
        { usage: 'Autizmus/ADHD - Orvosi utasításra', weight: 140, product: 'Cannada CBD - 2000 mg', days: 16, firstweekdosage: 98, secondweekdosage: 119, thirdweekdosage: 140},
        { usage: 'Autizmus/ADHD - Orvosi utasításra', weight: 150, product: 'Cannada CBD - 2000 mg', days: 15, firstweekdosage: 105, secondweekdosage: 127, thirdweekdosage: 150},
        { usage: 'Epilepszia - Orvosi utasításra', weight: 10, product: 'Cannada CBD - 2000 mg', days: 11, firstweekdosage: 140, secondweekdosage: 170, thirdweekdosage: 200},
        { usage: 'Epilepszia - Orvosi utasításra', weight: 20, product: 'Cannada CBD - 2000 mg', days: 5, firstweekdosage: 280, secondweekdosage: 340, thirdweekdosage: 400},
        { usage: 'Epilepszia - Orvosi utasításra', weight: 30, product: 'Cannada CBD - 2000 mg', days: 3, firstweekdosage: 420, secondweekdosage: 510, thirdweekdosage: 600},
        { usage: 'Epilepszia - Orvosi utasításra', weight: 40, product: 'Cannada CBD - 2000 mg', days: 2, firstweekdosage: 560, secondweekdosage: 680, thirdweekdosage: 800},
        { usage: 'Epilepszia - Orvosi utasításra', weight: 50, product: 'Cannada CBD - 2000 mg', days: 2, firstweekdosage: 700, secondweekdosage: 850, thirdweekdosage: 1000},
        { usage: 'Epilepszia - Orvosi utasításra', weight: 60, product: 'Cannada CBD - 2000 mg', days: 1, firstweekdosage: 840, secondweekdosage: 1020, thirdweekdosage: 1200},
        { usage: 'Epilepszia - Orvosi utasításra', weight: 70, product: 'Cannada CBD - 2000 mg', days: 1, firstweekdosage: 980, secondweekdosage: 1190, thirdweekdosage: 1400},
        { usage: 'Epilepszia - Orvosi utasításra', weight: 80, product: 'Cannada CBD - 2000 mg', days: 1, firstweekdosage: 1120, secondweekdosage: 1360, thirdweekdosage: 1600},
        { usage: 'Epilepszia - Orvosi utasításra', weight: 90, product: 'Cannada CBD - 2000 mg', days: 1, firstweekdosage: 1260, secondweekdosage: 1530, thirdweekdosage: 1800},
        { usage: 'Epilepszia - Orvosi utasításra', weight: 100, product: 'Cannada CBD - 2000 mg', days: 1, firstweekdosage: 1400, secondweekdosage: 1700, thirdweekdosage: 2000},
        { usage: 'Epilepszia - Orvosi utasításra', weight: 110, product: 'Cannada CBD - 2000 mg', days: 1, firstweekdosage: 1540, secondweekdosage: 1870, thirdweekdosage: 2200},
        { usage: 'Epilepszia - Orvosi utasításra', weight: 120, product: 'Cannada CBD - 2000 mg', days: 0, firstweekdosage: 1680, secondweekdosage: 2040, thirdweekdosage: 2400},
        { usage: 'Epilepszia - Orvosi utasításra', weight: 130, product: 'Cannada CBD - 2000 mg', days: 0, firstweekdosage: 1820, secondweekdosage: 2210, thirdweekdosage: 2600},
        { usage: 'Epilepszia - Orvosi utasításra', weight: 140, product: 'Cannada CBD - 2000 mg', days: 0, firstweekdosage: 1960, secondweekdosage: 2380, thirdweekdosage: 2800},
        { usage: 'Epilepszia - Orvosi utasításra', weight: 150, product: 'Cannada CBD - 2000 mg', days: 0, firstweekdosage: 2100, secondweekdosage: 2550, thirdweekdosage: 3000},
        { usage: 'Alvás javítás', weight: 10, product: 'Cannada CBD Plusz - 2550 mg', days: 1500, firstweekdosage: 1, secondweekdosage: 1, thirdweekdosage: 2},
        { usage: 'Alvás javítás', weight: 20, product: 'Cannada CBD Plusz - 2550 mg', days: 750, firstweekdosage: 2, secondweekdosage: 3, thirdweekdosage: 4},
        { usage: 'Alvás javítás', weight: 30, product: 'Cannada CBD Plusz - 2550 mg', days: 500, firstweekdosage: 4, secondweekdosage: 5, thirdweekdosage: 6},
        { usage: 'Alvás javítás', weight: 40, product: 'Cannada CBD Plusz - 2550 mg', days: 375, firstweekdosage: 5, secondweekdosage: 6, thirdweekdosage: 8},
        { usage: 'Alvás javítás', weight: 50, product: 'Cannada CBD Plusz - 2550 mg', days: 300, firstweekdosage: 7, secondweekdosage: 8, thirdweekdosage: 10},
        { usage: 'Alvás javítás', weight: 60, product: 'Cannada CBD Plusz - 2550 mg', days: 250, firstweekdosage: 8, secondweekdosage: 10, thirdweekdosage: 12},
        { usage: 'Alvás javítás', weight: 70, product: 'Cannada CBD Plusz - 2550 mg', days: 214, firstweekdosage: 9, secondweekdosage: 11, thirdweekdosage: 14},
        { usage: 'Alvás javítás', weight: 80, product: 'Cannada CBD Plusz - 2550 mg', days: 187, firstweekdosage: 11, secondweekdosage: 13, thirdweekdosage: 16},
        { usage: 'Alvás javítás', weight: 90, product: 'Cannada CBD Plusz - 2550 mg', days: 166, firstweekdosage: 12, secondweekdosage: 15, thirdweekdosage: 18},
        { usage: 'Alvás javítás', weight: 100, product: 'Cannada CBD Plusz - 2550 mg', days: 150, firstweekdosage: 14, secondweekdosage: 17, thirdweekdosage: 20},
        { usage: 'Alvás javítás', weight: 110, product: 'Cannada CBD Plusz - 2550 mg', days: 136, firstweekdosage: 15, secondweekdosage: 18, thirdweekdosage: 22},
        { usage: 'Alvás javítás', weight: 120, product: 'Cannada CBD Plusz - 2550 mg', days: 125, firstweekdosage: 16, secondweekdosage: 20, thirdweekdosage: 24},
        { usage: 'Alvás javítás', weight: 130, product: 'Cannada CBD Plusz - 2550 mg', days: 115, firstweekdosage: 18, secondweekdosage: 22, thirdweekdosage: 26},
        { usage: 'Alvás javítás', weight: 140, product: 'Cannada CBD Plusz - 2550 mg', days: 107, firstweekdosage: 19, secondweekdosage: 23, thirdweekdosage: 28},
        { usage: 'Alvás javítás', weight: 150, product: 'Cannada CBD Plusz - 2550 mg', days: 100, firstweekdosage: 21, secondweekdosage: 25, thirdweekdosage: 30},
        { usage: 'Stresszoldás', weight: 10, product: 'Cannada CBD Plusz - 2550 mg', days: 750, firstweekdosage: 2, secondweekdosage: 3, thirdweekdosage: 4},
        { usage: 'Stresszoldás', weight: 20, product: 'Cannada CBD Plusz - 2550 mg', days: 375, firstweekdosage: 5, secondweekdosage: 6, thirdweekdosage: 8},
        { usage: 'Stresszoldás', weight: 30, product: 'Cannada CBD Plusz - 2550 mg', days: 250, firstweekdosage: 8, secondweekdosage: 10, thirdweekdosage: 12},
        { usage: 'Stresszoldás', weight: 40, product: 'Cannada CBD Plusz - 2550 mg', days: 187, firstweekdosage: 11, secondweekdosage: 13, thirdweekdosage: 16},
        { usage: 'Stresszoldás', weight: 50, product: 'Cannada CBD Plusz - 2550 mg', days: 150, firstweekdosage: 14, secondweekdosage: 17, thirdweekdosage: 20},
        { usage: 'Stresszoldás', weight: 60, product: 'Cannada CBD Plusz - 2550 mg', days: 125, firstweekdosage: 16, secondweekdosage: 20, thirdweekdosage: 24},
        { usage: 'Stresszoldás', weight: 70, product: 'Cannada CBD Plusz - 2550 mg', days: 107, firstweekdosage: 19, secondweekdosage: 23, thirdweekdosage: 28},
        { usage: 'Stresszoldás', weight: 80, product: 'Cannada CBD Plusz - 2550 mg', days: 93, firstweekdosage: 22, secondweekdosage: 27, thirdweekdosage: 32},
        { usage: 'Stresszoldás', weight: 90, product: 'Cannada CBD Plusz - 2550 mg', days: 83, firstweekdosage: 25, secondweekdosage: 30, thirdweekdosage: 36},
        { usage: 'Stresszoldás', weight: 100, product: 'Cannada CBD Plusz - 2550 mg', days: 75, firstweekdosage: 28, secondweekdosage: 34, thirdweekdosage: 40},
        { usage: 'Stresszoldás', weight: 110, product: 'Cannada CBD Plusz - 2550 mg', days: 68, firstweekdosage: 30, secondweekdosage: 37, thirdweekdosage: 44},
        { usage: 'Stresszoldás', weight: 120, product: 'Cannada CBD Plusz - 2550 mg', days: 62, firstweekdosage: 33, secondweekdosage: 40, thirdweekdosage: 48},
        { usage: 'Stresszoldás', weight: 130, product: 'Cannada CBD Plusz - 2550 mg', days: 57, firstweekdosage: 36, secondweekdosage: 44, thirdweekdosage: 52},
        { usage: 'Stresszoldás', weight: 140, product: 'Cannada CBD Plusz - 2550 mg', days: 53, firstweekdosage: 39, secondweekdosage: 47, thirdweekdosage: 56},
        { usage: 'Stresszoldás', weight: 150, product: 'Cannada CBD Plusz - 2550 mg', days: 50, firstweekdosage: 42, secondweekdosage: 51, thirdweekdosage: 60},
        { usage: 'Fájdalomcsillapítás', weight: 10, product: 'Cannada CBD Plusz - 2550 mg', days: 500, firstweekdosage: 4, secondweekdosage: 5, thirdweekdosage: 6},
        { usage: 'Fájdalomcsillapítás', weight: 20, product: 'Cannada CBD Plusz - 2550 mg', days: 250, firstweekdosage: 8, secondweekdosage: 10, thirdweekdosage: 12},
        { usage: 'Fájdalomcsillapítás', weight: 30, product: 'Cannada CBD Plusz - 2550 mg', days: 166, firstweekdosage: 12, secondweekdosage: 15, thirdweekdosage: 18},
        { usage: 'Fájdalomcsillapítás', weight: 40, product: 'Cannada CBD Plusz - 2550 mg', days: 125, firstweekdosage: 16, secondweekdosage: 20, thirdweekdosage: 24},
        { usage: 'Fájdalomcsillapítás', weight: 50, product: 'Cannada CBD Plusz - 2550 mg', days: 100, firstweekdosage: 21, secondweekdosage: 25, thirdweekdosage: 30},
        { usage: 'Fájdalomcsillapítás', weight: 60, product: 'Cannada CBD Plusz - 2550 mg', days: 83, firstweekdosage: 25, secondweekdosage: 30, thirdweekdosage: 36},
        { usage: 'Fájdalomcsillapítás', weight: 70, product: 'Cannada CBD Plusz - 2550 mg', days: 71, firstweekdosage: 29, secondweekdosage: 35, thirdweekdosage: 42},
        { usage: 'Fájdalomcsillapítás', weight: 80, product: 'Cannada CBD Plusz - 2550 mg', days: 62, firstweekdosage: 33, secondweekdosage: 40, thirdweekdosage: 48},
        { usage: 'Fájdalomcsillapítás', weight: 90, product: 'Cannada CBD Plusz - 2550 mg', days: 55, firstweekdosage: 37, secondweekdosage: 45, thirdweekdosage: 54},
        { usage: 'Fájdalomcsillapítás', weight: 100, product: 'Cannada CBD Plusz - 2550 mg', days: 50, firstweekdosage: 42, secondweekdosage: 51, thirdweekdosage: 60},
        { usage: 'Fájdalomcsillapítás', weight: 110, product: 'Cannada CBD Plusz - 2550 mg', days: 45, firstweekdosage: 46, secondweekdosage: 56, thirdweekdosage: 66},
        { usage: 'Fájdalomcsillapítás', weight: 120, product: 'Cannada CBD Plusz - 2550 mg', days: 41, firstweekdosage: 50, secondweekdosage: 61, thirdweekdosage: 72},
        { usage: 'Fájdalomcsillapítás', weight: 130, product: 'Cannada CBD Plusz - 2550 mg', days: 38, firstweekdosage: 54, secondweekdosage: 66, thirdweekdosage: 78},
        { usage: 'Fájdalomcsillapítás', weight: 140, product: 'Cannada CBD Plusz - 2550 mg', days: 35, firstweekdosage: 58, secondweekdosage: 71, thirdweekdosage: 84},
        { usage: 'Fájdalomcsillapítás', weight: 150, product: 'Cannada CBD Plusz - 2550 mg', days: 33, firstweekdosage: 63, secondweekdosage: 76, thirdweekdosage: 90},
        { usage: 'Rák terápia támogatás - Orvosi utasításra', weight: 10, product: 'Cannada CBD Plusz - 2550 mg', days: 150, firstweekdosage: 14, secondweekdosage: 17, thirdweekdosage: 20},
        { usage: 'Rák terápia támogatás - Orvosi utasításra', weight: 20, product: 'Cannada CBD Plusz - 2550 mg', days: 75, firstweekdosage: 28, secondweekdosage: 34, thirdweekdosage: 40},
        { usage: 'Rák terápia támogatás - Orvosi utasításra', weight: 30, product: 'Cannada CBD Plusz - 2550 mg', days: 50, firstweekdosage: 42, secondweekdosage: 51, thirdweekdosage: 60},
        { usage: 'Rák terápia támogatás - Orvosi utasításra', weight: 40, product: 'Cannada CBD Plusz - 2550 mg', days: 37, firstweekdosage: 56, secondweekdosage: 68, thirdweekdosage: 80},
        { usage: 'Rák terápia támogatás - Orvosi utasításra', weight: 50, product: 'Cannada CBD Plusz - 2550 mg', days: 30, firstweekdosage: 70, secondweekdosage: 85, thirdweekdosage: 100},
        { usage: 'Rák terápia támogatás - Orvosi utasításra', weight: 60, product: 'Cannada CBD Plusz - 2550 mg', days: 25, firstweekdosage: 84, secondweekdosage: 102, thirdweekdosage: 120},
        { usage: 'Rák terápia támogatás - Orvosi utasításra', weight: 70, product: 'Cannada CBD Plusz - 2550 mg', days: 21, firstweekdosage: 98, secondweekdosage: 119, thirdweekdosage: 140},
        { usage: 'Rák terápia támogatás - Orvosi utasításra', weight: 80, product: 'Cannada CBD Plusz - 2550 mg', days: 18, firstweekdosage: 112, secondweekdosage: 136, thirdweekdosage: 160},
        { usage: 'Rák terápia támogatás - Orvosi utasításra', weight: 90, product: 'Cannada CBD Plusz - 2550 mg', days: 16, firstweekdosage: 126, secondweekdosage: 153, thirdweekdosage: 180},
        { usage: 'Rák terápia támogatás - Orvosi utasításra', weight: 100, product: 'Cannada CBD Plusz - 2550 mg', days: 15, firstweekdosage: 140, secondweekdosage: 170, thirdweekdosage: 200},
        { usage: 'Rák terápia támogatás - Orvosi utasításra', weight: 110, product: 'Cannada CBD Plusz - 2550 mg', days: 13, firstweekdosage: 154, secondweekdosage: 187, thirdweekdosage: 220},
        { usage: 'Rák terápia támogatás - Orvosi utasításra', weight: 120, product: 'Cannada CBD Plusz - 2550 mg', days: 12, firstweekdosage: 168, secondweekdosage: 204, thirdweekdosage: 240},
        { usage: 'Rák terápia támogatás - Orvosi utasításra', weight: 130, product: 'Cannada CBD Plusz - 2550 mg', days: 11, firstweekdosage: 182, secondweekdosage: 221, thirdweekdosage: 260},
        { usage: 'Rák terápia támogatás - Orvosi utasításra', weight: 140, product: 'Cannada CBD Plusz - 2550 mg', days: 10, firstweekdosage: 196, secondweekdosage: 238, thirdweekdosage: 280},
        { usage: 'Rák terápia támogatás - Orvosi utasításra', weight: 150, product: 'Cannada CBD Plusz - 2550 mg', days: 10, firstweekdosage: 210, secondweekdosage: 255, thirdweekdosage: 300},
        { usage: 'Autizmus/ADHD - Orvosi utasításra', weight: 10, product: 'Cannada CBD Plusz - 2550 mg', days: 300, firstweekdosage: 7, secondweekdosage: 8, thirdweekdosage: 10},
        { usage: 'Autizmus/ADHD - Orvosi utasításra', weight: 20, product: 'Cannada CBD Plusz - 2550 mg', days: 150, firstweekdosage: 14, secondweekdosage: 17, thirdweekdosage: 20},
        { usage: 'Autizmus/ADHD - Orvosi utasításra', weight: 30, product: 'Cannada CBD Plusz - 2550 mg', days: 100, firstweekdosage: 21, secondweekdosage: 25, thirdweekdosage: 30},
        { usage: 'Autizmus/ADHD - Orvosi utasításra', weight: 40, product: 'Cannada CBD Plusz - 2550 mg', days: 75, firstweekdosage: 28, secondweekdosage: 34, thirdweekdosage: 40},
        { usage: 'Autizmus/ADHD - Orvosi utasításra', weight: 50, product: 'Cannada CBD Plusz - 2550 mg', days: 60, firstweekdosage: 35, secondweekdosage: 42, thirdweekdosage: 50},
        { usage: 'Autizmus/ADHD - Orvosi utasításra', weight: 60, product: 'Cannada CBD Plusz - 2550 mg', days: 50, firstweekdosage: 42, secondweekdosage: 51, thirdweekdosage: 60},
        { usage: 'Autizmus/ADHD - Orvosi utasításra', weight: 70, product: 'Cannada CBD Plusz - 2550 mg', days: 42, firstweekdosage: 49, secondweekdosage: 59, thirdweekdosage: 70},
        { usage: 'Autizmus/ADHD - Orvosi utasításra', weight: 80, product: 'Cannada CBD Plusz - 2550 mg', days: 37, firstweekdosage: 56, secondweekdosage: 68, thirdweekdosage: 80},
        { usage: 'Autizmus/ADHD - Orvosi utasításra', weight: 90, product: 'Cannada CBD Plusz - 2550 mg', days: 33, firstweekdosage: 63, secondweekdosage: 76, thirdweekdosage: 90},
        { usage: 'Autizmus/ADHD - Orvosi utasításra', weight: 100, product: 'Cannada CBD Plusz - 2550 mg', days: 30, firstweekdosage: 70, secondweekdosage: 85, thirdweekdosage: 100},
        { usage: 'Autizmus/ADHD - Orvosi utasításra', weight: 110, product: 'Cannada CBD Plusz - 2550 mg', days: 27, firstweekdosage: 77, secondweekdosage: 93, thirdweekdosage: 110},
        { usage: 'Autizmus/ADHD - Orvosi utasításra', weight: 120, product: 'Cannada CBD Plusz - 2550 mg', days: 25, firstweekdosage: 84, secondweekdosage: 102, thirdweekdosage: 120},
        { usage: 'Autizmus/ADHD - Orvosi utasításra', weight: 130, product: 'Cannada CBD Plusz - 2550 mg', days: 23, firstweekdosage: 91, secondweekdosage: 110, thirdweekdosage: 130},
        { usage: 'Autizmus/ADHD - Orvosi utasításra', weight: 140, product: 'Cannada CBD Plusz - 2550 mg', days: 21, firstweekdosage: 98, secondweekdosage: 119, thirdweekdosage: 140},
        { usage: 'Autizmus/ADHD - Orvosi utasításra', weight: 150, product: 'Cannada CBD Plusz - 2550 mg', days: 20, firstweekdosage: 105, secondweekdosage: 127, thirdweekdosage: 150},
        { usage: 'Epilepszia - Orvosi utasításra', weight: 10, product: 'Cannada CBD Plusz - 2550 mg', days: 15, firstweekdosage: 140, secondweekdosage: 170, thirdweekdosage: 200},
        { usage: 'Epilepszia - Orvosi utasításra', weight: 20, product: 'Cannada CBD Plusz - 2550 mg', days: 7, firstweekdosage: 280, secondweekdosage: 340, thirdweekdosage: 400},
        { usage: 'Epilepszia - Orvosi utasításra', weight: 30, product: 'Cannada CBD Plusz - 2550 mg', days: 5, firstweekdosage: 420, secondweekdosage: 510, thirdweekdosage: 600},
        { usage: 'Epilepszia - Orvosi utasításra', weight: 40, product: 'Cannada CBD Plusz - 2550 mg', days: 3, firstweekdosage: 560, secondweekdosage: 680, thirdweekdosage: 800},
        { usage: 'Epilepszia - Orvosi utasításra', weight: 50, product: 'Cannada CBD Plusz - 2550 mg', days: 3, firstweekdosage: 700, secondweekdosage: 850, thirdweekdosage: 1000},
        { usage: 'Epilepszia - Orvosi utasításra', weight: 60, product: 'Cannada CBD Plusz - 2550 mg', days: 2, firstweekdosage: 840, secondweekdosage: 1020, thirdweekdosage: 1200},
        { usage: 'Epilepszia - Orvosi utasításra', weight: 70, product: 'Cannada CBD Plusz - 2550 mg', days: 2, firstweekdosage: 980, secondweekdosage: 1190, thirdweekdosage: 1400},
        { usage: 'Epilepszia - Orvosi utasításra', weight: 80, product: 'Cannada CBD Plusz - 2550 mg', days: 1, firstweekdosage: 1120, secondweekdosage: 1360, thirdweekdosage: 1600},
        { usage: 'Epilepszia - Orvosi utasításra', weight: 90, product: 'Cannada CBD Plusz - 2550 mg', days: 1, firstweekdosage: 1260, secondweekdosage: 1530, thirdweekdosage: 1800},
        { usage: 'Epilepszia - Orvosi utasításra', weight: 100, product: 'Cannada CBD Plusz - 2550 mg', days: 1, firstweekdosage: 1400, secondweekdosage: 1700, thirdweekdosage: 2000},
        { usage: 'Epilepszia - Orvosi utasításra', weight: 110, product: 'Cannada CBD Plusz - 2550 mg', days: 1, firstweekdosage: 1540, secondweekdosage: 1870, thirdweekdosage: 2200},
        { usage: 'Epilepszia - Orvosi utasításra', weight: 120, product: 'Cannada CBD Plusz - 2550 mg', days: 1, firstweekdosage: 1680, secondweekdosage: 2040, thirdweekdosage: 2400},
        { usage: 'Epilepszia - Orvosi utasításra', weight: 130, product: 'Cannada CBD Plusz - 2550 mg', days: 1, firstweekdosage: 1820, secondweekdosage: 2210, thirdweekdosage: 2600},
        { usage: 'Epilepszia - Orvosi utasításra', weight: 140, product: 'Cannada CBD Plusz - 2550 mg', days: 1, firstweekdosage: 1960, secondweekdosage: 2380, thirdweekdosage: 2800},
        { usage: 'Epilepszia - Orvosi utasításra', weight: 150, product: 'Cannada CBD Plusz - 2550 mg', days: 1, firstweekdosage: 2100, secondweekdosage: 2550, thirdweekdosage: 3000},        
        
];


// Create a variable to store the chart instance
let myChart;

// Function to create or update the chart
function createOrUpdateChart(firstWeekDosages, secondWeekDosages, thirdWeekDosages) {
    // If the chart already exists, update the data
    if (myChart) {
        myChart.data.datasets[0].data = firstWeekDosages;
        myChart.data.datasets[1].data = secondWeekDosages;
        myChart.data.datasets[2].data = thirdWeekDosages;
        myChart.update();
    } else {
        // If the chart doesn't exist, create it
        const ctx = document.getElementById('myChart').getContext('2d');
        myChart = new Chart(ctx, {
            type: 'bar', // Change the chart type to 'bar'
            data: {
                labels: ['Első hét', 'Második hét', 'Harmadik héttől kezdve'],
                datasets: [
                    {
                        label: 'Napi adag első héten (mg)',
                        data: firstWeekDosages,
                        backgroundColor: 'rgb(75, 192, 192)', // Set the bar color
                        tension: 0.1
                    },
                    {
                        label: 'Napi adag második héten (mg)',
                        data: secondWeekDosages,
                        backgroundColor: 'rgb(255, 99, 132)', // Set the bar color
                        tension: 0.1
                    },
                    {
                        label: 'Napi adag harmadik héttől kezdve (mg)',
                        data: thirdWeekDosages,
                        backgroundColor: 'rgb(54, 162, 235)', // Set the bar color
                        tension: 0.1
                    },
                    
                ]
            },
            options: {
                scales: {
                    y: {
                        ticks: {
                            afterBuildTicks: function(scale) {
                                scale.ticks = [];
                                var stepSize = Math.ceil(scale.max / 5); // 5 is the desired number of ticks
                                for (var i = 0; i <= scale.max; i += stepSize) {
                                    scale.ticks.push(i);
                                }
                            },
                            callback: function(value, index, values) {
                                return value + ' mg';
                            }
                        }
                    }
                }
            }
        });
    }
}



const usages = Array.from(new Set(data.map(item => item.usage)));
const products = Array.from(new Set(data.map(item => item.product)));

usages.forEach(usage => {
        let option = document.createElement('option');
        option.value = usage;
        option.textContent = usage;
        usageSelect.appendChild(option);
});

products.forEach(product => {
        let label = document.createElement('label');
        let radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'product';
        radio.value = product;
        if (products.indexOf(product) === 0) radio.checked = true;
        label.appendChild(radio);
        label.appendChild(document.createTextNode(product));
        productOptions.appendChild(label);
});

function updateResults() {
    const selectedUsage = usageSelect.value;
    const selectedWeight = parseInt(weightSlider.value);
    const selectedProduct = document.querySelector('input[name="product"]:checked').value;

    const result = data.find(item =>
        item.usage === selectedUsage &&
        item.weight === selectedWeight &&
        item.product === selectedProduct);

    daysSupply.textContent = result ? result.days + ' nap' : 'N/A';

    // Get the dosages for the selected result for the chart
    const firstWeekDosages = [result.firstweekdosage, 0, 0];
    const secondWeekDosages = [0, result.secondweekdosage, 0];
    const thirdWeekDosages = [0, 0, result.thirdweekdosage];

      // Check if the result is less than 5
      if (result && result.days < 5) {
        daysSupply.textContent += ' - Vedd fel velünk a kapcsolatot!';
    }

    createOrUpdateChart(firstWeekDosages, secondWeekDosages, thirdWeekDosages);
}

usageSelect.addEventListener('change', updateResults);
weightSlider.addEventListener('input', function() {
        weightValue.textContent = this.value + ' kg';
        updateResults();
});
productOptions.addEventListener('change', updateResults);

updateResults();
 
});


