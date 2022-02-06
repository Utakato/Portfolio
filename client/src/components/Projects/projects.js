const githubLink = "https://github.com/Utakato/"

export const moonshots = {
    name: "Moonshots",
    github: githubLink + "moonshots",
    live: "https://test-moonshots.herokuapp.com/",
    frontEndStack : ["React", "Redux"],
    imageName : "Moonshots.png",
    backEndStack : ["Node.js", "Express", "MongoDB", "Python(scrappers)"],
    details: `This is NOT RESPONSIVE. When I built this I thought people should only use this from a PC. (my views have changed since and a mobile version is WIP) \
    \n\nMoonshots is a tool I made that helps me choose crypto projects which are worth researching. My criteria for a good project is based on Product, Marketing and Community. \
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
    details: `Better.me V2 is my second attempt at creating a productivity app. \
    \n\nThe app is supposed to have a task list, a habit tracker, and a way of sorting tasks by importance with the ABCDE method. \
    \n\nAt this point it’s just a simple task list with no back-end, just using React + Redux. \
    \n\nThe first version (you can find it on github) failed because I was learning too many things at once : React, Redux, Mui, Node,js and MongoDB. Also it was my first “big” project after ossoimobiliare.ro. A few months later I decided to try again, but slowly and steady. \
    \n\nThe app also has a light/dark mode which you can switch on/off by pressing the sun /moon on the top right. \
    \n\nThe design is not mine. \
    `,
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
    github: "https://github.com/Utakato/ossoimobiliare",
    live: "https://ossoimobiliare.herokuapp.com/",
    frontEndStack : ["HTML/CSS", "EJS"],
    backEndStack : ["MongoDB","Node.js", "Python(used to fetch data from CRM API to MongoDB)"],
    imageName : "ossoimobiliare.png",
    details: `This is my first web-dev project, we needed the site remade, we had no more money(paid ~800$ for a broken wordpress site - delivered in 4 months), I had some python knowledge and got the taste of programming so I started learning Web-dev and decided to make a brand new website for our business.\ 
    \n\n\
    On the first tought I wanted to make it from scratch with React and no design. On the second thought we needed this up and running faster than it would've taken me to build it from scratch(because I barely knew React and web-dev). So I bought an HTML template for 25$ and worked with that (created a mongoDB to store data from the CRM API, a script that ran every day to update the DB and then used EJS to display data on the site.)\
    \n\n\
    I've replaced most of the images that we had on the website with placeholders. I've also made some updates to the DB to replace sensible information.\
    \n\n\
    Some of the custom parts that I've made:\n
    - Agent Modal;\n
    - Leaflet.js maps with circle location\n
    - Filters\n
    - Sort\n
    - 'Alege zona'\n
    - Customized search bar on home page\n
    You can see the difference by comparing it to realdeal theme which you can find on github README. \n
    `,
}