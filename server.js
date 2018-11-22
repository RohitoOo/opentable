const express = require ('express');

const app = express();
const path = require ('path');

app.use(express.static(`${__dirname}/build`))

app.get("/" , (req,res) => {

    res.sendFile(path.join(__dirname, "build", "index.html"))
})

app.get('/api' , (req,res) => {
    res.send(
        {
            "name": [{
                "firstName": "Rohit",
                "lastName": "Bhambhani"
            }],
            "skills": [{
                "frontEnd": [
                    "HTML5",
                    {
                        "CSS": [
                            "Bootstrap",
                            "Materialize",
                            "AntD",
                            "Less",
                            "Sass",
                            "React-strap"
                        ]
                    },
                    {
                        "javaScript": [
                            "ReactJs",
                            "Redux",
                            "JQuery",
                            "NodeJS",
                            "Socket.io",
                            "ES6", {
                                "testing": [
                                    "Jest",
                                    "Enzyme"
                                ]
                            }
                        ]
                    },
                    "ReactJs",
                    "Redux",
                    "PUG",
                    "EJS"
                ],
                "backEnd": [
                    "NodeJs",
                    "ExpressJs",
                    "Restify",
                    "MongoDB",
                    "Robo3T"
                ],
                "buildTools": [
                    "Webpack",
                    "Grunt",
                    "Bower"
                ],
                "CMS": [
                    "WordPress",
                    "Open Cart"
                ],
                "cloudComputing": [
                    "Amazon Web Services",
                    "Digital Ocean",
                    "Heroku",
                    "Google Cloud"
                ],
                "tools": [
                    "Git",
                    "Git Hub",
                    "Visual Studio Code",
                    "Jira",
                    "Slack",
                    "Source Tree",
                    "Trello"
                ],
                "Other": [
                    "Solidity"
                ]
            }],
            "projects": [{
                    "name": "Music CRUD Application",
                    "project_link": "https://mysterious-forest-55765.herokuapp.com"
                },
                {
                    "name": "MERN Application",
                    "project_link": "http://159.65.155.169"
                },
                {
                    "name": "",
                    "project_link": ""
                },
                {
                    "name": "Fantasy Footbal",
                    "project_link": "https://floating-bastion-67582.herokuapp.com"
                },
                {
                    "name": "",
                    "project_link": ""
                },
                {
                    "name": "Live Chat - Socket.io",
                    "project_link": "https://pacific-springs-28604.herokuapp.com "
                },
                {
                    "name": "Crud Application",
                    "project_link": "https://sheltered-chamber-10022.herokuapp.com"
                },
                {
                    "name": "React Lyrics Finder",
                    "project_link": "https://lit-oasis-18945.herokuapp.com"
                },
                {
                    "name": "NodeJs Image Uploader",
                    "project_link": "https://murmuring-wildwood-34860.herokuapp.com/"
                }
       
            ],
            "hobbies": [
                "Travel",
                "Soccer"
            ]
       
       
        }
    )
})

app.listen(3000, () => {
    console.log("We are live on port 3000")
})