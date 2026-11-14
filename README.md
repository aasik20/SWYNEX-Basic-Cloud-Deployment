# Task 2: Basic Cloud Deployment

A complete beginner-friendly Node.js and Express application ready for local testing and cloud deployment.

## Features
- Responsive web interface
- Express web server
- `/api/status` status endpoint
- `/health` cloud health-check endpoint
- Environment-based `PORT`
- Docker configuration
- Render Blueprint configuration

## Run locally
1. Install Node.js 18 or newer.
2. Open this folder in VS Code.
3. Open the terminal and run:
   ```bash
   npm install
   npm start
   ```
4. Open `http://localhost:3000`.

## Deploy using Render
1. Create a new GitHub repository and upload all project files.
2. Sign in to Render and select **New > Blueprint**.
3. Connect the GitHub repository.
4. Render reads `render.yaml` and creates the web service.
5. Open the generated public URL and verify `/health` returns `{"status":"healthy"}`.

## Deploy using Docker
```bash
docker build -t basic-cloud-deployment .
docker run -p 3000:3000 basic-cloud-deployment
```
Then open `http://localhost:3000`.

## Submission evidence
Include screenshots of:
1. The project open in VS Code.
2. `npm start` running successfully.
3. The application at the local URL.
4. The deployed cloud URL.
5. The `/health` endpoint.

## Short report text
**Objective:** Deploy a basic web application to a cloud platform and verify that it is publicly accessible.

**Implementation:** The project uses Node.js and Express to serve a responsive front end and two API endpoints. The server reads the port supplied by the cloud platform through the `PORT` environment variable. A health endpoint is provided for deployment monitoring.

**Result:** The application can run locally, inside Docker, or as a Render web service. A successful deployment shows the website and returns a healthy response from `/health`.
