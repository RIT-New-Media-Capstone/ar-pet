let health = 1;
let happiness = 1;
const baseHealth = 1;
const baseHappiness = 1;

const barLength = 200;

const value = 0.05;

const myCanvas = document.getElementById("myCanvas");
const ctx = myCanvas.getContext("2d");
healthbar();
happybar();


function healthbar()
{
    ctx.clearRect(20, 20, barLength, 25);
    ctx.fillStyle = "darkslategray";
    ctx.strokeStyle = "green";
    ctx.fillRect(20, 20, barLength, 25);

    if(health <= 0.25)
    {
        ctx.fillStyle = "red";
    }
    else if(health <= 0.6)
    {
        ctx.fillStyle = "gold";
    }
    else
    {
        ctx.fillStyle = "limegreen";
    }
    
    ctx.fillRect(20, 20, barLength*health, 25);
    ctx.strokeRect(20, 20, barLength, 25);
}

function happybar()
{
    ctx.clearRect(20, 60, barLength, 25);
    ctx.fillStyle = "darkslategray";
    ctx.strokeStyle = "green";
    ctx.fillRect(20, 60, barLength, 25);
    if(happiness <= 0.25)
    {
        ctx.fillStyle = "red";
    }
    else if(happiness <= 0.6)
    {
        ctx.fillStyle = "gold";
    }
    else
    {
        ctx.fillStyle = "limegreen";
    }
    ctx.fillRect(20, 60, barLength*happiness, 25);
    ctx.strokeRect(20, 60, barLength, 25);
}

function increaseHealth()
{
    health += value;
    if(health > baseHealth)
    {
        health = baseHealth;
    }
    healthbar()
}

function increaseHappiness()
{
    happiness += value;
    if(happiness > baseHappiness)
    {
        happiness = baseHappiness;
    }
    happybar()
}

setInterval(function(){

    if(health > 0.05)
    {
        if(health <= 0.25)
        {
            health -= 0.01;
            health = Math.round(health * 100)/100;
        }
        else if(health <= 0.6)
        {
            health -= 0.001;
            health = Math.round(health * 1000)/1000;
        }
        else
        {
            health -= 0.0001;
            health = Math.round(health * 10000)/10000;
        }
    }
    healthbar()
}, 100);

setInterval(function(){
    if(happiness > 0.05)
    {
        happiness -= 0.001;
        happiness = Math.round(happiness * 1000)/1000;
    }
    happybar()
}, 100);

let healthDecreasion = function()
{

}

const bone = document.getElementById('bone');
bone.addEventListener('click', increaseHealth);

const ball = document.getElementById('ball');
ball.addEventListener('click', increaseHappiness);