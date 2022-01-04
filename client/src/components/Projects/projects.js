const githubLink = "https://github.com/Utakato/"

export const moonshots = {
    name: "Moonshots",
    github: githubLink + "moonshots",
    live: "https://test-moonshots.herokuapp.com/",
    frontEndStack : ["React", "Redux"],
    imageName : "Moonshots.png",
    backEndStack : ["Node.js", "Express", "MongoDB", "Python(scrappers)"],
    details: `Moonshots is a tool I made that helps me choose crypto projects which are worth researching. My criteria for a good project is based on Product, Marketing and Community. \
    \n\nMoonshots help me narrow down these project based on Community so I only look into projects that have a good community. \
    \n\nI built a python scrapper that gathers data from coinmarketcap.com and regularly updates it. Also the app is also connected to Twitter through their API to get followers data for each project.(this is running daily on a webserver).\
    \n\nI store data on a MongoDB(Atlas), I created an API to access this data in Node.js (with express and mongoose), and then used React with redux to display it on the web.  I used redux to store data received from the Node.js API and also store the query that goes the API ( offset for pagination and sort order )`,
}   

export const betterMeV2 = {
    name: "better.me V2",
    github: githubLink + "better.meV2",
    live: "https://better-me-v2.herokuapp.com/",
    frontEndStack : ["React", "Redux"],
    backEndStack : ["Node.js", "Express", "MongoDB"],
    imageName : "Better-me-v2.png", 
    details: "This is my attempt to recreate my original project 'better.me' which was a failure because I was trying to learn too many things in one project.",
}

export const sapiens = {
    name: "Sapiens",
    github: githubLink + "mobile-first",
    live: "https://utakato.github.io/mobile-first/",
    frontEndStack : ["HTML/CSS", "vanilla JS"],
    backEndStack : ["No back-end"],
    imageName : "Sapiens.png",
    details: "I tried making a little presentation site for this book that I really enjoyed, 'Sapiens, a brief history of humankind' by Yuval Noah Harrari.",
}

export const ossoImobiliare = {
    name: "Osso Imobiliare",
    github: "",
    live: "",
    frontEndStack : ["HTML/CSS", "EJS"],
    backEndStack : ["MongoDB","Node.js", "Python(used to fetch data from CRM API to MongoDB)"],
    imageName : "", //TBA
    details: "Based on a template (REALDEAL)",
}