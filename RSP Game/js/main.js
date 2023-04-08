let rock = document.querySelector('.elements .rock img');
let scissors = document.querySelector('.elements .scissors img');
let paper = document.querySelector('.elements .paper img');

let rock1 = document.getElementById('first');
let scissors1 = document.getElementById('second');
let paper1 = document.getElementById('third');

let arrelements = [rock, scissors, paper];
let image = document.querySelector('.results .img1 img');
let image1 = document.querySelector('.results .img2 img');

let result1 = document.querySelector('.results .img1 span');
let result2 = document.querySelector('.results .img2 span');

var btn = document.querySelector('#try');

let count1 = 0;
let count2 = 0;

rock.addEventListener("click", Rock)
function Rock() {
    let rndm = Math.floor(Math.random() * 3);
    var choose = arrelements[rndm];
    image.src = rock.src;
    image1.src = choose.src

    scissors.style.filter = 'none'
    rock.style.filter = 'drop-shadow(22px 15px 3px rgb(41, 40, 40))'
    paper.style.filter = 'none'

    if (count2 >= 5) {
        alert('Məğlub Oldunuz! Bir Daha Yoxlayın!');
        btn.style.display = 'block'
    }

    else if (count1 >= 5) {
        alert('Təbriklər Qazandınız!');
        btn.style.display = 'block'
    }

    if (image.src === rock.src && image1.src === scissors.src) {
        count1++;
        result1.innerHTML = count1;
        first.style.filter = 'none'
        second.style.filter = 'drop-shadow(9px  9px 3px rgb(41, 40, 40))'
        third.style.filter = 'none'
    }
    else if (image.src === rock.src && image1.src === paper.src) {
        count2++;
        result2.innerHTML = count2;
        first.style.filter = 'none'
        second.style.filter = 'none'
        third.style.filter = 'drop-shadow(22px 15px 3px rgb(41, 40, 40))'
    }
    else {
        first.style.filter = 'drop-shadow(22px 15px 3px rgb(41, 40, 40))'
        second.style.filter = 'none'
        third.style.filter = 'none'
    }
}

scissors.addEventListener("click", Scissors)
function Scissors() {
    let rndm = Math.floor(Math.random() * 3);
    let choose = arrelements[rndm];
    image.src = scissors.src;
    image1.src = choose.src

    rock.style.filter = 'none'
    scissors.style.filter = 'drop-shadow(9px 9px 3px rgb(41, 40, 40))'
    scissors.style.choose='none'
    
    paper.style.filter = 'none'

    if (count2 >= 5) {
        alert('Məğlub Oldunuz! Bir Daha Yoxlayın!');
        btn.style.display = 'block'
    }


    else if (count1 >= 5) {
        alert('Təbriklər Qazandınız!');
        btn.style.display = 'block'
    }

    if (image.src === scissors.src && image1.src === rock.src) {
        count2++;
        result2.innerHTML = count2;
        first.style.filter = 'drop-shadow(22px 15px 3px rgb(41, 40, 40))'
        second.style.filter = 'none'
        third.style.filter = 'none'
    }
    else if (image.src === scissors.src && image1.src === paper.src) {
        count1++;
        result1.innerHTML = count1;
        first.style.filter = 'none'
        second.style.filter = 'none'
        third.style.filter = 'drop-shadow(22px 15px 3px rgb(41, 40, 40))'
    }
    else {
        first.style.filter = 'none'
        second.style.filter = 'drop-shadow(22px 15px 3px rgb(41, 40, 40))'
        third.style.filter = 'none'
    }
}


paper.addEventListener("click", Paper)
function Paper() {
    let rndm = Math.floor(Math.random() * 3);
    var choose = arrelements[rndm];
    image.src = paper.src;
    image1.src = choose.src

    if (count2 >= 5) {
        alert('Məğlub Oldunuz! Bir Daha Yoxlayın!');
        btn.style.display = 'block'
    }


    else if (count1 >= 5) {
        alert('Təbriklər Qazandınız!');
        btn.style.display = 'block'
    }

    paper.style.filter = 'drop-shadow(9px 9px 3px rgb(41, 40, 40))'
    rock.style.filter = 'none'
    scissors.style.filter = 'none'

    if (image.src === paper.src && image1.src === scissors.src) {
        count2++;
        result2.innerHTML = count2;
        first.style.filter = 'none'
        second.style.filter = 'drop-shadow(22px 15px 3px rgb(41, 40, 40))'
        third.style.filter = 'none'
    }
    else if (image.src === paper.src && image1.src === rock.src) {
        count1++;
        result1.innerHTML = count1;
        first.style.filter = 'drop-shadow(22px 15px 3px rgb(41, 40, 40))'
        second.style.filter = 'none'
        third.style.filter = 'none'
    }
    else {
        first.style.filter = 'none'
        second.style.filter = 'none'
        third.style.filter = 'drop-shadow(22px 15px 3px rgb(41, 40, 40))'
    }
}

btn.addEventListener('click', Try)
function Try() {
    location.reload();
}



