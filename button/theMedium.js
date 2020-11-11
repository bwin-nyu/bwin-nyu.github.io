
let theBody = document.querySelector('body');
let theButton = document.querySelector("button");
let theName = document.querySelector("p");

let prevButton = document.querySelector('button[name="prev"]');
let nextButton = document.querySelector('button[name]="next"]');

let firstName = document.querySelector('div[class="first"]');

let firstNames = ["Angry", "Barefoot", "Bashful", "Beefy", "Bendy", "Big", "Blue", "Bony", "Brave", "Bronze", "Busy", "Calm", "Cheerful", "Chilly", "Clean", "Comical", "Cool", "Crazy", "Creepy", "Cuddly", "Curious", "Dangerous", "Dizzy", "Fast", "Fearless", "Fierce", "Friendly", "Funny", "Gentle", "Giant", "Golden", "Greedy", "Green", "Grey", "Grumpy", "Happy", "Hungry", "Hyper", "Icy", "Incredible", "Invisible", "Jumpy", "Lazy", "Little", "Lone", "Loud", "Lucky", "Mad", "Magic", "Maroon", "Massive", "Messy", "Mighty", "Moody", "Muddy", "Neat", "Nervous", "Nice", "Noisy", "Orange", "Perfect", "Popular", "Prickly", "Purple", "Quick", "Quiet", "Red", "Rough", "Scary", "Serious", "Shaggy", "Shaky", "Shield", "Shifty", "Shiny", "Shoeless", "Short", "Shy", "Silly", "Silver", "Skinny", "Sleepy", "Sleepy", "Slippery", "Small", "Smart", "Sneaky", "Speedy", "Sporty", "Spotted", "Squeezy", "Sticky", "Strange", "Striped", "Super", "Tall", "Thirsty", "Tiny", "Tough", "Trusty", "Wild", "White", "Yellow", "Young", "Zippy", "Zany"]
let lastNames = ["Ant", "Axe", "Bean", "Bear", "Bee", "Beetle", "Belly", "Berry", "Biker", "Bird", "Bite", "Boa", "Bones", "Boot", "Brain", "Bubbles", "Bug", "Burger", "Cactus", "Carrot", "Catfish", "Cheetah", "Chick", "Chicken", "Claw", "Cloud", "Clown", "Club", "Comet", "Coyote", "Crab", "Crown", "Crumb", "Crush", "Diamond", "Diver", "Dolphin", "Donut", "Dragon", "Drummer", "Eagle", "Eel", "Eye", "Fang", "Feather", "Fire", "Fish", "Flame", "Flipper", "Fly", "Flyer", "Foot", "Fox", "Gamer", "Ghost", "Glove", "Goose", "Grape", "Hamburger", "Hammer", "Hawk", "Heart", "Hero", "Hippo", "Hopper", "Horse", "Ice", "Icicle", "Jester", "Joker", "Jumper", "Kid", "Knuckle", "Laser", "Leaf", "Leopard", "Lightning", "Lion", "Lizard", "Lobster", "Melon", "Monster", "Moon", "Mosquito", "Ninja", "Noodle", "Octopus", "Onion", "Owl", "Panda", "Paw", "Peanut", "Pear", "Pelican", "Penguin", "Plug", "Popper", "Raptor", "Rider", "Ring", "Rock", "Runner", "Scorpion", "Seal", "Seagull", "Shadow", "Shark", "Shell", "Singer", "Sinker", "Skull", "Skunk", "Sky", "Sneeze", "Snowball", "Socks", "Speck", "Spider", "Spinner", "Sponge", "Star", "Starfish", "Stomper", "Storm", "Sun", "Sword", "Thunder", "Tiger", "Toes", "Tomato", "Tooth", "Tornado", "Tummy", "Turkey", "Turtle", "Typhoon", "Walker", "Whale"]

let i = 0;

theButton.addEventListener('click', randomizeClick);
prevButton.addEventListener('click', prevClick);
nextButton.addEventListener('click', nextClick);


function randomizeClick(){
    console.log("click!!!");
    theName.textContent = firstNames[Math.floor(Math.random() * (firstNames.length - 1))] + " " + lastNames[Math.floor(Math.random() * (lastNames.length - 1))];
}

function prevClick(){
    console.log("prev clicked");
    if (i > 0){
        i = i-1;
    }else{
        i = firstNames.length - 1;
    }

    firstName.textContent = firstNames[i];
}

function nextClick(){
    console.log("next clicked");
    if (i < firstNames.length - 1){
        i = i+1;
    }else{
        i = 0;
    }
    firstName.textContent = firstNames[i];
}



