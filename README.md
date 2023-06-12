# Auth0 React SDK Sample Application

This sample demonstrates the integration of Descope Passkeys with a basic username-password based application using the [Auth0 React SDK](https://github.com/auth0/auth0-react).

> **Note**: If you need the flow, to work with OIDC and Passkeys, it is the `oidc-flow.json` file in the root of this directory. This can be downloaded and imported via the [Descope Console](https://app.descope.com/flows).

## Project Setup

1. Create `.env` for env variables;

```
DESCOPE_PROJECT_ID=<Descope Project ID from Descope Console>
```

2. Edit `auth_config.json` under the `views` folder, with your Auth0 credentials from the [Auth0 Settings Page](https://auth0.com/docs/get-started/applications/application-settings#basic-settings)

```
{
  "domain": "<domain prefix>.us.auth0.com",
  "clientId": "OyzabZF...",
  "audience": "https://<domain prefix>.us.auth0.com/api/v2/"
}
```

> **Note**: This app uses the Auth0 Universal Login Page, so it can be easily re-configured. The app would operately similarly however if a custom login page was used instead.

Use `yarn` to install the project dependencies:

```bash
yarn install
```

Then run the application with this command:

```bash
yarn start
```

## Deployment

### Compiles and minifies for production

```bash
yarn run build
```

### Docker build

To build and run the Docker image, run `exec.sh`, or `exec.ps1` on Windows.

### Run your tests

```bash
yarn run test
```

## Issue Reporting

If you have found a bug or if you have a feature request, please report them at this repository issues section.

## Author

[Auth0](https://auth0.com)
[Descope](https://descope.com)

## License

This project is licensed under the MIT license.
