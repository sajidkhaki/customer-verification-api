<!-- PROJECT Intro -->
<br />
<div align="center">
  <h3 align="center">customer-validation CRUD API</h3>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

- [Nest JS](https://docs.nestjs.com/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple example steps.

### Installation

1. Clone the repository
   ```sh
   git clone https://github.com/sajidkhaki/customer-verification-api.git
   cd customer-verification-api.git
   ```
2. Create environment file into directory src/config/env and update the SERVER_PORT with the actual port number i.e `3000`. (Example reference as example.env)
   ```sh
   // Environment could be either development or staging or uat or production.
   cp src/config/env/example.env src/config/env/environment.env
   create development.env for local setup
   ```

### Usage:

1. Incase, to rebuild the image from scratch
   ```sh
   docker-compose up --build --force-recreate
   ```
2. Start Project without docker (Make sure you have the latest Node 16.x version install, however we do not recommend setting up this project without docker)

```sh
npm install
npm start
```

3. Goto http://localhost:3000/docs
   use the swagger document to perform operations like
   validate
   create
   update
   get
   getById
   delete

<p align="right">(<a href="#top">back to top</a>)</p>
