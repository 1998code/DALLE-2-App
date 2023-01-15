# DALLE 2 App (Next.js)
### Create realistic images and art from a description in natural language.

[![DeepScan grade](https://deepscan.io/api/teams/18632/projects/21948/branches/641242/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=18632&pid=21948&bid=641242)

![Xnapper-2023-01-15-23 41 21](https://user-images.githubusercontent.com/54872601/212551185-c762e8b3-1d88-4c50-aeb2-caf7b302e9d2.jpg)

## Requirement
- Get the API token via https://beta.openai.com/account/api-keys

## Tutorial
- Medium (https://bit.ly/3ul3pyf)

## Getting Started
1. Clone/Download this project
2. Install:
```bash
npm install
# or
yarn
```
3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Usage
1. Input token start from `sk-`
2. Query anything, e.g. `cat on space`:
<img width="1024" alt="CleanShot 2022-06-18 at 16 36 25@2x" src="https://user-images.githubusercontent.com/54872601/174429869-97ce491e-6aa1-4887-a7e9-f9b99b5df38a.png">

## Structure
![Diagram](https://raw.githubusercontent.com/1998code/DALLE-2-App/v1/diagram.svg)

## Deploy on Vercel
Check out [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Looking for iOS/iPadOS/macOS version?
Swift/SwiftUI: https://github.com/1998code/DALLE2-Swift

## Developer Notes
- V2 is using OpenAI official API. V1 is using OpenAI Labs Bearer Key.

## License
MIT
