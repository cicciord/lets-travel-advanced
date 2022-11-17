# Let's Travel Advanced

Development of a project as an exercise for a Full Stack Developer course followed on Udemy.

url: https://www.udemy.com/course/result-oriented-web-developer-course/

- [Let's Travel Advanced](#lets-travel-advanced)
- [About the project](#about-the-project)
  - [Libraries and Frameworks](#libraries-and-frameworks)
  - [Pages](#pages)
    - [Home](#home)
    - [Post](#post)
    - [Admin](#admin)

# About the project

The project consist in a simple travel blog-like website.

## Libraries and Frameworks

The main libraries and framework utilized are:

- `bootstrap`: page styling
- `express`: server side
- `mongoose`: mongodb database handling
- `ejs`: templating for html pages

## Pages

There are present three pages:

### Home

This is the home of the website, showing some posts styled like a card.

Main feature of this page are:

- **Call me**: section that adds the user number to a call me back list
- **Posts**: Card that presents a brief presentation of the post and a button to open the full page of the post
- **Contact us**: A form to insert a mail

### Post

The following page is dynamically created for each post present using `ejs` for templating.

Main feature of the page are:

- **map**: implemented with map service `here`

### Admin

This section is actually protected by a `middleware`. If the browser present the cookie that shows you logged in the user can access the admin page, if not it gets redirected to a `login-register` page.

In the admin page is possible to see the _numbers to call back_, messages left through _contact me_ form and _create or delete_ posts.

# Deploy

The project has been deployed using `heroku` and is possible to visit at this url

https://lets-travel-advanced.herokuapp.com/

the database has been deployed on `MongoDB Atlas`.

Sometimes the website might be found down, this is due to the database being inactive for a long period causing to be paused automatically.

Also the registration process has been limited. This is an exercise project not a production one, thus it was developed giving anyone the possibility to register (function limited to avoid given everyone the possibility to apply changes).
