<br />
<div align="center">
<h3 align="center">Movie Chat Web App</h3>

  <p align="center">
    <br />    
    <a href="https://github.com/Dougsrodrigues/movie-chat-web-app/issues">Report Bug</a>
    ·
    <a href="https://github.com/Dougsrodrigues/movie-chat-web-app/issues">Request Feature</a>
  </p>
</div>

<!-- ABOUT THE PROJECT -->
## About The Project

 Movie Chat web is an application where you can see details about films, such as genre, rating and comments from people who watched it.  

### Built With

* [Next JS](https://nextjs.org/docs)
* [Chakra JS](https://chakra-ui.com/getting-started)
* [Firebase](https://firebase.google.com/docs/guides)

<!-- GETTING STARTED -->
## Getting Started
### Prerequisites
* npm
  ```sh
  npm install npm@latest -g
  ```
### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/Dougsrodrigues/movie-chat-web-app.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
### Running

1. Start the server of application
 ```sh
   npm run server
   ```

2. Start the application
```sh
   npm run dev
   ```
## Architecture
For this project i've used a modular approach. With this approach i can divide the project into modules and separate the responsability of each module. 
I have the common module where i developed the code that will be reused throughout the application, like global components, configuration of libraries like firebase and axios, providers, custom hooks, etc.
The second module of this application is the movies module where the movies module will be created with the same configuration of the common. 

I use the json-server to avoid performance issues of listing the big amount of movies and to apply pagination.

<!-- ROADMAP -->
## Roadmap
- [ ] Add auth functionality
- [ ] Add rating functionality
- [ ] Add favorites list functionality
- [ ] Add newsletter functionality to send notifications to subscribers

<!-- CONTACT -->
## Contact

Douglas Santiago - [Linkedin](https://www.linkedin.com/in/douglas-santiago-rodrigues/) - dougsrodrigues@outlook.com

Project Link: [https://github.com/Dougsrodrigues/movie-chat-web-app](https://github.com/Dougsrodrigues/movie-chat-web-app)
