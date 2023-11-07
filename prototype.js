let health = 1;
let happiness = 1;
const baseHealth = 1;
const baseHappiness = 1;

const barLength = 200;

const value = 0.05;

function increaseHealth()
{
    health += value;
    if(health > baseHealth)
    {
        health = baseHealth;
    }

    const healthBarVal = document.getElementById('health');
    healthBarVal.style.width = `${barLength*health}px`;
}

function increaseHappiness()
{
    happiness += value;
    if(happiness > baseHappiness)
    {
        happiness = baseHappiness;
    }

    const healthBarVal = document.getElementById('happy');
    healthBarVal.style.width = `${barLength*happiness}px`;
}

setInterval(function(){

    if(health > 0.05)
    {
        health -= 0.005;
        health = Math.round(health * 1000)/1000;
    }
    // healthbar()

    const healthBarVal = document.getElementById('health');
    healthBarVal.style.width = `${barLength*health}px`;

    if(health <= 0.25)
    {
        healthBarVal.style.backgroundColor = "red";
    }
    else if(health <= 0.6)
    {
        healthBarVal.style.backgroundColor = "gold";
    }
    else
    {
        healthBarVal.style.backgroundColor = "limegreen";
    }

}, 1000);

setInterval(function(){
    if(happiness > 0.05)
    {
        happiness -= 0.01;
        happiness = Math.round(happiness * 100)/100;
    }

    const healthBarVal = document.getElementById('happy');
    healthBarVal.style.width = `${barLength*happiness}px`;

    if(health <= 0.25)
    {
        healthBarVal.style.backgroundColor = "red";
    }
    else if(health <= 0.6)
    {
        healthBarVal.style.backgroundColor = "gold";
    }
    else
    {
        healthBarVal.style.backgroundColor = "limegreen";
    }
    // happybar()
}, 1000);


const bone = document.getElementById('bone');
bone.addEventListener('click', increaseHealth);

const ball = document.getElementById('ball');
ball.addEventListener('click', increaseHappiness);