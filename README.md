# Hacker Games project frontend
Still need name

[Docs'as](https://docs.google.com/document/d/1oi_4rW268DrZudaxxaMyEozlN1jvED5BcIcyekEknLc/edit?usp=sharing)

## Created using:
- [ReactJS](https://reactjs.org)
- [Shards theme](https://designrevision.com/docs/shards-react/getting-started)
- [react-map-gl](https://uber.github.io/react-map-gl/#/)
- [deck.gl](https://deck.gl/#/documentation/overview/introduction)
- [styled-components](https://www.styled-components.com/)
- [Turf.js](http://turfjs.org/)
- [Overpass Turbo (OSM API Client)](http://overpass-turbo.eu/#)

## Setup
- Clone this repo
- `npm install`
- `npm start` to run local server

**Deployed version here: https://vykintazo.gitlab.io/hackergames/**

## Coding rules
Because this is a hackathon, speed and efficiency is top priority and consistent coding helps to achieve those.

- ### <u>Do not leave `ESlint` warnings or else CI/CD pipeline will fail</u>.
- ### Use `ES6 (ECMA2015)` javascript please.
    - Arrow functions, array and object spreading and destructuring, etc.
- ### Never ever use `class`.
    - Use only functional componets with Hooks, if you need state.
    - A lot of older tutorials online use classes, you need to rewrite them to function when using here.
- ### Try to use `styled-components` for styling.
    - Never use inline styles. Avoid setting `classNames` and jss styling on them.
- ### Add meaningful commit messages and comments if needed.
