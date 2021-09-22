var answer;
var score = 0;
// var backgroundImages = [];
var signs = ["+", "/", "-", "x"]
facts = ["SPACE IS COMPLETELY SILENT", "THE HOTTEST PLANET IN OUR SOLAR SYSTEM IS 450° C.", "A FULL NASA SPACE SUIT COSTS $12,000,000.",
  "THE SUN’S MASS TAKES UP 99.86% OF THE SOLAR SYSTEM.", "THE SUN’S MASS TAKES UP 99.86% OF THE SOLAR SYSTEM.", "THERE ARE MORE TREES ON EARTH THAN STARS IN THE MILKY WAY",
  "THE SUNSET ON MARS APPEARS BLUE", " THERE ARE MORE STARS IN THE UNIVERSE THAN GRAINS OF SANDS ON EARTH", "ONE DAY ON VENUS IS LONGER THAN ONE YEAR.",
  "THERE IS A PLANET MADE OF DIAMONDS", "You wouldn’t be able to walk on Jupiter, Saturn, Uranus or Neptune because they have no solid surface!",
  "There are more stars in the universe than grains of sand on all the beaches on Earth. That’s at least a billion trillion!", "Jupiter's moon Io has towering volcanic eruptions",
  "The sun makes up more than 99% of the solar system's mass.", "if the sun were the size of a typical front door, Earth would be the size of a nickel.",
  "There's an asteroid that has rings, like Saturn.", "One of Saturn's moons is walnut-shaped because it's absorbed some of Saturn's rings.",
  "Mercury & Venus are the only 2 planets in our solar system that have no moons.", "If a star passes too close to a black hole, it can be torn apart.",
  "Our solar system is 4.57 billion years old.", "The highest mountain discovered is the Olympus Mons, which is located on Mars.", "The Whirlpool Galaxy (M51) was the first celestial object identified as being spiral.",
  "A light-year is the distance covered by light in a single year.", "The Milky Way galaxy is 105,700 light-years wide.",
  "Footprints left on the Moon won’t disappear as there is no wind.", "Because of lower gravity, a person who weighs 220 lbs on Earth would weigh 84 lbs on Mars.",
  "The Martian day is 24 hours 39 minutes and 35 seconds long.", "The Sun makes a full rotation once every 25 – 35 days.",
  "Earth is the only planet not named after a God.", "Neptune takes nearly 165 Earth years to make one orbit of the Sun.", "The International Space Station is the largest manned object ever sent into space.", "Any free-moving liquid in outer space will form itself into a sphere.", "There are three main types of galaxies: elliptical, spiral & irregular.",
  "There are approximately 100 thousand million stars in the Milky Way.", "Using the naked eye, you can see 3 – 7 different galaxies from Earth.",
  "In 2016, scientists detected a radio signal from a source 5 billion light-years away.", "The closest galaxy to us is the Andromeda Galaxy – it’s estimated at 2.5 million light-years away.",
  "The first-ever black hole photographed is 3 million times the size of Earth.", "On Venus, it snows metal and rains sulfuric acid.", "Coca-Cola was the first commercial soft drink that was ever consumed in space.",
  "Astronauts can grow approximately two inches (5 cm) in height when in space.", "The Kuiper Belt is a region of the Solar System beyond the orbit of Neptune.",
  "The first woman in space was a Russian called Valentina Tereshkova.", "If Saturn’s rings were 3 feet long, they would be 10,000 times thinner than a razor blade.", "The first artificial satellite in space was called “Sputnik”.", "Our moon is moving away from Earth at a rate of 1.6 inch (4 cm) per year!",
  "The ISS is visible to more than 90% of the Earth’s population.", "Asteroids are the byproducts of formations in the solar system, more than 4 billion years ago.", "Astronauts can’t burp in space.", "Uranus was originally called “George’s Star”.", "The first living mammal to go into space was a dog named “Laika” from Russia.",
  "The word “astronaut” means “star sailor” in its origins.", "Gennady Padalka has spent more time in space than anyone else.", "In China, the Milky Way is known as the “Silver River”.",
  "Red Dwarf stars that are low in mass can burn continually for up to 10 trillion years!", "Jupiter’s Red Spot is shrinking.", "A day on Mercury is equivalent to 58 Earth days.",
  "There are 88 recognized star constellations in our night sky.",
  "The center of a comet is called a 'nucleus'.",
  "As early as 240BC the Chinese began to document the appearance of Halley’s Comet.",
  "Mars is the most likely planet in our solar system to be hospitable to life."
]


function nextQuestion() {


  const sign = signs[Math.floor(Math.random() * signs.length)];
  document.getElementById('sign').innerHTML = sign;

  function randomNumber(min, max) {

    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  if (sign == "+") {
    n1_num = 6;
    n2_num = 5;
  } else if (sign == "-") {
    n1_num = 9;
    n2_num = 5;

  } else if (sign == "x") {
    n1_num = 4;
    n2_num = 4;
  } else if (sign == "/") {


    n1_num = 9;
    n2_num = 5;
  } else {

  }



  n1 = Math.floor(Math.random() * n1_num);
  document.getElementById('n1').innerHTML = n1;

  n2 = Math.floor(Math.random() * n2_num);
  document.getElementById('n2').innerHTML = n2;



  if (sign == "+") {
    answer = n1 + n2;
  } else if (sign == "-") {
    if (n2>n1){
      t=n2;
      n2=n1;
      n1=t;
      document.getElementById('n1').innerHTML = n1;

      document.getElementById('n2').innerHTML = n2;
    }
    answer = n1 - n2;

  } else if (sign == "x") {
    answer = n1 * n2;
  } else if (sign == "/") {
    k = randomNumber(1,2)
    if (k == 1) {
      d1 = [0, 2, 4, 6, 8]
      d2 = [0, 1, 2]
      a = d1[randomNumber(1, 4)];
      b = d2[randomNumber(1, 2)];
    } else {
      d1 = [0,3, 6, 9]
      d2 = [0,1, 3]
      a = d1[randomNumber(1, 3)];
      b = d2[randomNumber(1, 2)];
    }

      document.getElementById('n1').innerHTML = a;

      document.getElementById('n2').innerHTML = b;
      answer = a / b;
      console.log(a);
      console.log(b);

  }
}

function checkAnswer() {

  const space_fact = facts[Math.floor(Math.random() * facts.length)];
  const prediction = predictImage();
  console.log(`Answer: ${answer}, prediction: ${prediction}`);

  if (prediction == answer) {
    score.toExponential()
    score++;
    console.log(`Correct! Score: ${score}`);
    score.toString();
    document.getElementById('astronaut_talk').innerText = "Correct! Score: "+score+"\n\n"+space_fact;


    if (score <= 9) {

    } else {

      document.getElementById('astronaut_talk').innerText = "Houston, we have a problem! I am running out of fuel and I need to solve maths problems to refuel. Could you please help me?";
alert("Well done! Let's start again");
      score = 0;

    }
  } else {
    if (score != 0) {

    }

    score.toString();
    document.getElementById('astronaut_talk').innerText = "\n\n\n\n"+"Score: "+score;

    alert('Oops! Wrong answer. ');
    setTimeout(function() {

    }, 1000);
  }

}
