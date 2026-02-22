  // Zodias Signs  (राशियाँ)

const Zodias=[
    "Aries","Taurus","Gemini","Cancer","Leo","Virgo","Libra","Scorpio",
    "Sagittarius","Capricorn","Aquarius","Pisces"
] 

   // Compliments (size 31)

const compliments=[
    "You are amazing!","You look great today!","You have a beautiful smile.","You are very intelligent.","You are hardworking.","You are kind-hearted.","You are confident.","You are inspiring.","You are creative.","You are strong.","You are talented.","You are helpful.","You are brave.","You are positive.","You are unique.","You are honest.","You are supportive.","You are friendly.","You are respectful.",
    "You are responsible.","You are thoughtful.","You are dependable.","You are cheerful.","You are focused.","You are patient.",
    "You are wise.","You are smart.","You are motivated.","You are shining.","You are awesome!","You make the world better!"
]   

    // Victim Card Compliments (size 20)

const VictimCardCompliments=[
    "You’ve been through so much, and it shows how strong you are.",
    "No one understands the struggles you’ve faced like you do.",
    "You always put others first, even when life isn’t fair to you.",
    "It’s amazing how you handle all the pain silently.",
    "People don’t realize how much you sacrifice every day.",
    "You deserve better than what life has given you.",
    "You’ve carried burdens that weren’t even yours.",
    "Your heart stays kind despite everything you’ve faced.",
    "Not everyone could survive what you’ve been through.",
    "You always get blamed, even when it’s not your fault.",
    "You’ve had to be strong when no one supported you.",
    "Life has tested you more than most people.",
    "You keep going even when things feel unfair.",
    "Others may not see it, but your struggles are real.",
    "You always give more than you receive.",
    "You’ve handled situations that would break others.",
    "You stay patient even when people misunderstand you.",
    "You rarely complain despite everything happening.",
    "You’ve grown stronger from every difficult moment.",
    "Your resilience is proof of your inner strength."
]

    // Recommendations (size 30)

const recommendations=[
    "I highly recommend you for your dedication and hard work.",
    "You consistently deliver excellent results.",
    "Your problem-solving skills are impressive.",
    "You are a reliable and responsible individual.",
    "You demonstrate strong leadership qualities.",
    "Your communication skills are outstanding.",
    "You handle challenges with confidence.",
    "You are a quick learner and adaptable.",
    "Your teamwork ability makes you valuable.",
    "You show great attention to detail.",
    "You maintain a positive attitude at work.",
    "You are committed to achieving goals.",
    "Your creativity adds value to projects.",
    "You manage time effectively and efficiently.",
    "You take initiative without being asked.",
    "You are professional and respectful.",
    "You inspire others with your work ethic.",
    "You consistently meet deadlines.",
    "You are dependable under pressure.",
    "You contribute innovative ideas.",
    "You maintain high standards of quality.",
    "You are focused and disciplined.",
    "You build strong working relationships.",
    "You accept feedback and improve quickly.",
    "You demonstrate strong analytical thinking.",
    "You are trustworthy and honest.",
    "You adapt well to new environments.",
    "You show great commitment to excellence.",
    "You motivate others around you.",
    "You are an asset to any organization."
]


    // Predictions (size 20)

const prediction=[
    "You will achieve your goals with consistent effort.",
    "A new opportunity will come your way soon.",
    "You will overcome the challenges ahead.",
    "Success is waiting for you in the near future.",
    "You will build strong and meaningful relationships.",
    "Your hard work will soon pay off.",
    "A positive change is coming into your life.",
    "You will discover a hidden talent within yourself.",
    "You will gain recognition for your efforts.",
    "Financial stability will improve gradually.",
    "You will learn an important life lesson this year.",
    "A travel opportunity may appear unexpectedly.",
    "You will grow stronger through upcoming experiences.",
    "New friendships will brighten your journey.",
    "Your confidence will increase significantly.",
    "You will make a decision that changes your future positively.",
    "A long-awaited wish will be fulfilled.",
    "You will find balance between work and personal life.",
    "An exciting surprise is heading your way.",
    "Your determination will lead you to great success."
]   


let form = document.getElementById('form');

form.addEventListener('submit',(obj)=>{
    obj.preventDefault();

    // fome base name through id
    const name = document.getElementById('name').value.trim();
    console.log(name)
    const lastname = document.getElementById('lastname').value;
       // number bhi string ke form me store hota hai
       // ise int me conver karne ke liye parseInt ka use
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);

      // store in single variable
    const text =`Hii ${name} ${lastname} Your Zodiac Sign is ${Zodias[month-1]}.
    ${compliments[day-1]}. ${VictimCardCompliments[year%20]}. ${recommendations[(day*month)%30]}. 
    ${prediction[(name.length*lastname.length)%20]}`  
      
       // Display text

    document.getElementById('display').textContent=text;   
})