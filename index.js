let grid = document.getElementById('grid');
let startbtn = document.getElementById('start-btn');
let intro = document.getElementById('intro');
let cards = [
    {
        name: 'violet',
        path: 'img/violet.png'
    },
    {
        name: 'blue',
        path: 'img/blue.png'
    },
    {
        name: 'orange',
        path: 'img/orange.png'
    },
    {
        name: 'green',
        path: 'img/green.png'
    }
];
let game = [...cards, ...cards]
game = game.sort(() => Math.floor(Math.random() * (game.length+1)));

let current;
let prev;

function card_toggler(card) {
    card.classList.toggle('card-hidden');
    card.classList.toggle('card-selected');
};
function onloaded () {
for (let i = 0; i < game.length; i++)
{
    let div = document.createElement('div');
    div.classList.add('card', 'card-hidden');
    div.innerHTML = `<img src=${game[i].path}>`;
    div.name = game[i].name;
    grid.appendChild(div);
    div.addEventListener('click', async (ev) => {
        ev.stopImmediatePropagation();
        let check = document.getElementsByClassName('card-selected');

        if (check.length <= 1) {
        current = ev.currentTarget;
        card_toggler(current);
        if (prev)
        {
            if (prev.name == current.name && prev != current) {
                setTimeout(() => {
                ts_prev.classList.add('card-removed');
                current.classList.add('card-removed');
                double_handler();
            }, 1500);
            }
         else if (prev.name != current.name) {
                double_handler();
            }
        }
        let ts_prev = prev;
        function double_handler() {
            setTimeout(() => {
                card_toggler(current);
                card_toggler(ts_prev);
                prev = undefined;
            }, 1500);
            };
         prev = current;
        }
        })
}
}
startbtn.addEventListener('click', async () => {
    intro.remove();
    onloaded();
    for (let i = 0; i < game.length; i++) { setTimeout(() => {
    card_toggler(grid.children[i]);
}, 1000);
setTimeout(() => {
    card_toggler(grid.children[i]);
}, 3000);
}

}
);


























