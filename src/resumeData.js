
let resumeData = {
  name: 'Kamandla Jagan',
  role: 'MERN Stack Developer and a Competitive Programmer',
  linkedinId: 'https://www.linkedin.com/in/kamandla-jagan-b751501ab/',
  roleDescription:
    " I'm currently in my Intermediate second year, pursuing 6 years course in IIIT(RGUKT) BASAR. I like to learn about new technologies, make technical tutorials or simply play badminton in my free time.",
  socialLinks: [
    {
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/kamandla-jagan-b751501ab/',
      className: 'fa fa-linkedin',
    },
    {
      name: 'github',
      url: 'http://github.com/jagan9',
      className: 'fa fa-github',
    },
    {
      name: 'facebook',
      url: 'https://www.facebook.com/search/top?q=kamandla%20jagan',
      className: 'fa fa-facebook',
    },
    {
      name: 'mail',
      url: 'mailto:kamandlajagan@gmail.com',
      className: 'fa fa-envelope',
    },
    {
      name: 'youtube',
      url: 'https://www.youtube.com/channel/UCbAI-DRaW65k-Wb7OjW1ytQ',
      className: 'fa fa-youtube',
    },
  ],
  aboutme:
    " I'm currently in my Intermediate second year, pursuing 6 years course in IIIT(RGUKT) BASAR. I like to learn about new technologies, make technical tutorials or simply play badminton in my free time.",
  address: 'India',
  website: 'https://jagan9.netlify.app/',
  education: [
    {
      UniversityName: 'Indian Institutes of Information Technology (IIIT) Basar',
      specialization: 'B.Tech in Computer Science and Engineering',
      duration: 'July 2020 - May 2026',
      Achievements: 'CGPA - 9.10',
    },
    {
      UniversityName: 'Zilla Parishat High School (ZPHS) Raghunathpur',
      specialization: 'Ncert with Computer Science',
      duration: 'April 2016 - May 2020',
      Achievements: 'Scored 98.00%',
    },
  ],
  skillsDescription: 'Your skills here',
  skills: [
    {
      category: 'Programming Languages',
      list: [
        {
          img: '../media/cpp.png',
          name: 'C++',
        },
        {
          img: '../media/javascript.png',
          name: 'JavaScript',
        },
        {
          img: '../media/python.png',
          name: 'Python',
        },
        {
          img: '../media/c.png',
          name: 'C',
        },
      ],
    },
    {
      category: 'Databases',
      list: [
        {
          img: '../media/firebase.png',
          name: 'Firebase',
        },
        {
          img: '../media/mongo.png',
          name: 'MongoDB',
        }
      ],
    },
    {
      category: 'Web Development',
      list: [
        {
          img: '../media/react.png',
          name: 'React',
        },
        {
          img:
            'http://pluspng.com/img-png/nodejs-logo-png-nice-images-collection-node-js-desktop-wallpapers-370.png',
          name: 'Node.js',
        },
        {
          img: '../media/bootstrap.png',
          name: 'Bootstrap',
        },
        {
          img: '../media/jquery.png',
          name: 'JQuery',
        },
        {
          img: '../media/html.png',
          name: 'HTML',
        },
        {
          img: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/CSS.3.svg',
          name: 'CSS',
        },
        {
          img:
            '../media/express.png',
          name: 'Express.js',
        }
      ],
    },
  ],
  portfolio: [
    {
      title: 'Social Media App',
      intro:
        "Full stack, fully-featured social media application using React, Mongo DB, Redux, Express, and Material-UI.",
      des:
        'A simple social media app including chat feature and also this lets the users able to post. It has the following features :  ',
      points: [
        'user login, sign up, and authentication',
        'Customize your user profile and their posts',
        'Following and unfollowing others',
        'Liking, commenting, and saving other users posts',
      ],
      imgurl: '../media/portfolio/socialMedia.png',
      techstack: ['Node.js', 'React', 'Express', 'Mongo DB'],
      links: {
        launch: 'https://mern-social-media.netlify.app/',
        github: 'https://github.com/jagan9/socila-media-client',
      },
    },
    {
      title: 'Rgukt Ola',
      intro:
        "A campus portal that provides a Market Hub with some unique features of 'unrestricted bidding' and 'product verification'.",
      des:
        'It is an E-commerce website where students can sell used items, to other students. It has the following features : ',
      points: [
        'Once a student uploads a product, the admin verifies that it is not a fake product. And if the verification is successful, then only the product is visible publicly.',
        'Students can also allow bidding on their products to earn maximum profit.',
        'Students can place a bid on these products, so that the owner gets to know the details of the ones interested in buying his product and he can contact them.',
        'For the contact details, the user can set what contact details (like mobile no., email, room no.) should be kept confidential in edit profile option.',
      ],
      imgurl: '../media/portfolio/rgukt_ola.png',
      techstack: ['Node.js', 'React', 'Firebase', 'Redux'],
      links: {
        launch: 'https://rgukt-ola.web.app/',
        github: 'https://github.com/jagan9/RGUKT-OLA',
      },
    },
    {
      title: 'More to Store',
      intro:
        'More-To-Store is an app where you can buy items like flipcart, Amazon.',
      des: 'The website has the following features : ',
      points: [
        'The admin can add new items, issue items to some existing users.',
        'The admin can also view the items of more to store, an Admin can edit and delete the items if he wants.',
        'The users can create their account, search for items, edit their profile.',
      ],
      imgurl: '../media/portfolio/moretostore.png',
      techstack: ['Node.js', 'React', 'Firebase', 'Redux'],
      links: {
        launch: 'https://balashekhar.github.io/More-To-Store/',
        github: 'https://github.com/jagan9/More-To-Store',
      },
    },
    {
      title: 'Corona-Tracker Web App',
      intro:
        'A progressive web app to serve corona cases are there in state , country , district. The user can search another state, or district.',
      des:
        'A website made using Bootstrape to display the corona cases are there in state , country , district. The user can search another state, or district. The user can find easily understand th cases information due to in this I used Fusion Charts ["charts Library"] .',
      imgurl: '../media/portfolio/corona.png',
      techstack: ['JavaScript', 'HTML', 'Bootstrape', 'CSS'],
      links: {
        launch: 'https://coronaweb.netlify.app/',
        github: 'https://github.com/jagan9/Corona-Tracker',
      },
    },
    {
      title: 'Clever Circle web game',
      intro:
        'A Clever Circle website made in vanilla JS. The user gets to know the explanation of each click he made on the bubble.',
      des:
        'The user can either play a full screen ["very hard"] or a small screen  and select which he wants. The user gets to know the correct time of each click, while playing.',
      imgurl: '../media/portfolio/clever.png',
      techstack: ['JavaScript', 'HTML', 'CSS'],
      links: {
        launch: 'https://jagan9.github.io/Clever_circle/',
        github: 'https://github.com/jagan9/Clever_circle',
      },
    },
    {
      title: 'Todo List web app',
      intro:
        'A cross-platform mobile app for storing there data in their local storage .User can store your todo list in real time. it cant remove your data.',
      des: 'The app has the following features : ',
      points: [
        'The application allows user to upload his data or his favorites in this. He store his feelings in this like a dairy.',
        'User can store his todo list in real time. it cant remove your data.',
      ],
      imgurl: '../media/portfolio/todo.png',
      techstack: ['HTML', 'CSS', 'JavaScript'],
      links: {
        launch: 'https://todo-list-jagan.netlify.app/',
        github: 'https://github.com/jagan9/TodoList',
      },
    },
    {
      title: 'Heads Tails Game',
      intro:
        'A simple Heads Tails game using vanilla JS and canvas from HTML5',
      des: 'Rules of the game :',
      points: [
        'Select heads or Tails at the same time computer also selects heads or tails',
        'If computer scores 15 then you lose the game.',
        ' The score is calculated using the number of heads or tails.If user scored 15 points user win the game',
      ],
      imgurl: '../media/portfolio/heads_tails.png',
      techstack: ['JavaScript', 'HTML', 'CSS'],
      links: {
        launch: 'https://jagan9.github.io/heads-tails/',
        github: 'https://github.com/jagan9/heads-tails',
      },
    },
    {
      title: 'Rock Paper Scissor',
      intro:
        'Made a responsive website for the people to feel happy when they play this game.',
      des: 'The website is mading using HTML, CSS, Javascript and Bootstrap.',
      imgurl: '../media/portfolio/rock_paper_sissor.png',
      techstack: ['HTML', 'CSS', 'JavaScript'],
      links: {
        launch: 'https://jagan9.github.io/RockPaperScissor/',
        github: 'https://github.com/jagan9/RockPaperScissor',
      },
    },
  ],
};

export default resumeData