<div id="top"></div>

<!-- PROJECT SHIELDS -->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/diegofcornejo/lambda-github-actions">
    <img src="https://miro.medium.com/max/2000/1*bxhEFjJ4J2CI5sfFsuP7fg.jpeg" alt="Logo" width="auto" height="80">
  </a>
<h3 align="center">Satelite Engineer Lambda Github Actions Template</h3>
  <p align="center">
    This is template anyone can use as a starting point to creating their own Satelite Engineer Templates.
    <br />
    <a href="https://github.com/diegofcornejo/engineer-template-lambda-github-actions"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/diegofcornejo/engineer-template-lambda-github-actions">View Demo</a>
    ·
    <a href="https://github.com/diegofcornejo/engineer-template-lambda-github-actions/issues">Report Bug</a>
    ·
    <a href="https://github.com/diegofcornejo/engineer-template-lambda-github-actions/issues">Request Feature</a>
  </p>
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
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
# About The Project

Satelite Engineer allows anyone to build their own custom templates, promoting a community-based library of resources for other developers to minimize their time and effort put into creating amazing apps.  You can use this template to start creating your own.

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

* [Satelite Engineer](https://github.com/satelite-digital/engineer)
* [AWS CLI](https://github.com/satelite-digital/engineer)
* [Github Actions](https://github.com/satelite-digital/engineer)

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- GETTING STARTED -->
# Getting Started
## Prerequisites

Necesitas tener una cuenta en AWS (obviamente) y generar credenciales con los siguientes permisos:

* IAMFullAccess
* AWSLambda_FullAccess

No te preocupes sino sabes como, aquí te dejo un pequeño tutorial.

* Ir a IAM y crear un nuevo usuario en AWS
![][aws-step-one]

* Click en "Attach existing policies directly" and check this two policies:
  - [x] IAMFullAccess
  - [x] AWSLambda_FullAccess
![][aws-step-two]

* Click en "Next: Tags"
* Click en "Next: Review"
* Tu configuración debería verse así
![][aws-step-three]

* Descarga tus credenciales (guárdalas en un lugar seguro, no las podrás volver a descagar)
![][aws-step-four]

## Installation

### Clone the repo
   ```sh
   git clone https://github.com/diegofcornejo/engineer-template-lambda-github-actions
   ```
or simply use the github template by [clicking here](https://github.com/diegofcornejo/engineer-template-lambda-github-actions/generate) then clone your new repo.

### Setup your lambda
* TODO

## Github
### Create Github Secrets
  ```sh
  AWS_ACCESS_KEY_ID
  AWS_SECRET_ACCESS_KEY
  ```

<!-- CONTACT -->
## Contact

Diego Cornejo - [@diegofcornejo](https://twitter.com/diegofcornejo) - diegof.cornejo@gmail.com

Project Link: [https://github.com/diegofcornejo/engineer-template-lambda-github-actions](https://github.com/diegofcornejo/engineer-template-lambda-github-actions)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/diegofcornejo/engineer-template-lambda-github-actions.svg?style=for-the-badge
[contributors-url]: https://github.com/diegofcornejo/engineer-template-lambda-github-actions/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/diegofcornejo/engineer-template-lambda-github-actions.svg?style=for-the-badge
[forks-url]: https://github.com/diegofcornejo/engineer-template-lambda-github-actions/network/members
[stars-shield]: https://img.shields.io/github/stars/diegofcornejo/engineer-template-lambda-github-actions.svg?style=for-the-badge
[stars-url]: https://github.com/diegofcornejo/engineer-template-lambda-github-actions/stargazers
[issues-shield]: https://img.shields.io/github/issues/diegofcornejo/engineer-template-lambda-github-actions.svg?style=for-the-badge
[issues-url]: https://github.com/diegofcornejo/engineer-template-lambda-github-actions/issues
[license-shield]: https://img.shields.io/github/license/diegofcornejo/engineer-template-lambda-github-actions.svg?style=for-the-badge
[license-url]: https://github.com/diegofcornejo/engineer-template-lambda-github-actions/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/erick-ruano-fullstack
[aws-step-one]: images/aws-step-one.png
[aws-step-two]: images/aws-step-two.png
[aws-step-three]: images/aws-step-three.png
[aws-step-four]: images/aws-step-four.png