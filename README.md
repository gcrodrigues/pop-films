# Pop Films

Pop Films is an application that lists popular movies from the MovideDB API and allows the user to search for them by entering their name.

## Getting Started

After install the dependencies, run the following command and fill the environment variables:

```sh
cp .env.example .env
```

After filling the environment variables, run the following command to start the server:

```sh
yarn start
```

### Prerequisites:

- Node 16.13.2+
- Yarn

### Installing dependencies:

Install project dependencies by running:

```sh
yarn
```

### Running the tests

While developing the project, it is recommended to run the tests with:

```sh
yarn test:watch
```

## Setting up

When building the application be sure that your `.env` file contains the following variables:

- API_URL=`The MovieDB API URL`
- API_KEY=`Key generated from the MovieDB API`

## Built With

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [Webpack](https://webpack.js.org/) - A bundler for JavaScript.
- [Jest](https://jestjs.io/) - A delightful JavaScript Testing Framework.
