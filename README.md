# Star Wars 
**Half-Serious Test Angular frontend**

### Overview

Angular application that allows evaluating the quality of the code, meets the requirements with attention to detail.

The purpose of this application is to connect an APIRestful and get starships and pilots from Star Wars.

## Requirements

* The landing page should show the list of all Star Wars spaceships with a summary of the specifications for each of them.
* When clicking on a starship, it shows the details of the spaceship, including the list of the pilots.
* When clicking on a pilot listed in the spaceship details, the app leads the user to the details of the selected pilot.

### Constraints

1. It’s mandatory to be able to come back to the spaceship list at any moment, or to the last page visited.
2. Data should load only once when the app is launched. It should not call the API thereafter, as long as the page is not refreshed.
3. You can’t use the “wrapper swapi” offered on the site for the calls made to the web service.

## Technologies

The following technologies are used in this project:

||Version|Command for checking
|-|-:|-|
|node|20.11.1|node --version
|npm|10.2.4|npm --version
|angular-cli|17.3.0|ng --version

## Deployment

To deploy the application, follow these steps:

1. Install dependencies:

```bash
  npm install
```

2. Start the server:

```bash
  ng serve
```

## Running Tests

Execute the following command to run the tests:

```bash
   ng test
```

## Solution Approach

The solution for building the Landing Page - StarWars involves the following steps:

> Note:
> This project was migrated from my old repository [GitHub: malfoc](https://github.com/malfoc)

**Design Thinking:** Due to the creative freedom that this project had, certain stages of the Design Thinking methodology were implemented. Others were omitted due to time constraints. 

After empathizing with and defining the requirements of the project, we proceeded with ideating.

> Note:
>
> This project is an Angular test for a hiring process, in which we aimed to assess code quality and meet the requested functional requirements. As such, the design is not optimized for mobile devices, and responsiveness was not taken into account during development. While we understand the importance of responsiveness in most projects, in this case we chose to focus on other technical aspects.

**Inspiration & References**

* https://dribbble.com/shots/14543693--Artist-Info-Carousel-Concept
* https://dribbble.com/shots/17471156-MetaSpace-Metaverse-Landing-Page
* https://dribbble.com/shots/20247474-Education-Website-Design-business-landing-web-page-site-designer
* https://dribbble.com/shots/4686153-Toy-store-website
* https://dribbble.com/shots/14921442-Mandalorian-CONCEPT

> Credits:
>
> The Loading Page:
> See the Pen [Loading Animation](https://codepen.io/42EG4M1/pen/bVMzze) CSS by Tatsuya Azegami ([@42EG4M1](https://codepen.io/42EG4M1))

**Wireframes**

In the folder ./wireframes from my old repository you will find four schematic pages as a visual guide that represents the skeletal framework of the project, created using [Adobe XD](https://helpx.adobe.com/support/xd.html).

**Mockups**

In the folder ./mockups from my old repository you will find the model pages as graphic guidelines of the to-be system, created using Figma.

**Graphic Guidelines**

||HEX Color
|-|-:
|bg|#E3E7EB
|primary|#181A1C
|secondary|#EDF1F4
|tertiary|#B0B4B7

**Fonts:**

Provider|Font Family|Font Size|Font Weight|CSS Selector
|-|-|-|-|-
|Google Fonts|Montserrat|150px|Bold|H1
|Google Fonts|Montserrat|70px|Bold|H2
|Google Fonts|Montserrat|36px|Bold|H3
|Adobe Fonts|Proxima Nova|24px|Bold|.text-title
|Adobe Fonts|Proxima Nova|20px|Bold|.text-subtitle
|Adobe Fonts|Proxima Nova|18px|Bold|.text-bold
|Adobe Fonts|Proxima Nova|18px|Regular|

## Additional Features
At least one of the following bonuses should be used for the project demo.

* Show what you can do with css/scss. (chosen)
* If you have time, use other parts of the SWAPI (like the planets, the films, etc) (chosen)
* Connect an API like https://unsplash.com/developers to add visuals.

In this case, this project did require hinting at the planet's API to get the name of the planet related to the key Pilot.Homeworld and attach it to the pilot model.