const readline = require('readline');  
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite o nome do Herói: ", (heroName) => {
    rl.question("Quantidade de XP: ", (xpHero) => {
        let heroXp = parseInt(xpHero);
        let heroLvl;

        if(heroXp < 1001) {
            heroLvl = 'Ferro';
        }else if(heroXp >= 1001 && heroXp <= 2000) {
            heroLvl = 'Bronze';
        }else if(heroXp >= 2001 && heroXp <= 5000) {
            heroLvl = 'Prata';
        }else if(heroXp >= 5001 && heroXp <= 7000) {
            heroLvl = 'Ouro';
        }else if(heroXp >= 7001 && heroXp <= 8000) {
            heroLvl = 'Platina';
        }else if(heroXp >= 8001 && heroXp <= 9000) {
            heroLvl = 'Ascendente';
        }else if(heroXp >= 9001 && heroXp <= 10000) {
            heroLvl = 'Imortal';
        }else {
            heroLvl = 'Radiante'
        }

        console.log(`O Herói ${heroName} está no nível ${heroLvl}`);

        rl.close();
    });
});