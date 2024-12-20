# KONSPECTO Project Development Plan

## Overview

The KONSPECTO project involves the development of an intelligent agent based on a local LLM model for working with notes and video lectures. To successfully implement the project, tasks are divided into sprints, ensuring a structured and sequential approach to development. Each sprint culminates in a Minimum Viable Product (MVP) that delivers specific functionality. All development activities must adhere to the versions and principles outlined in `development-rules.md` to ensure consistency, quality, and maintainability.

---

## Sprint 1: Initiation and Setup

**Duration:** 2 weeks
**MVP:** Repository initialized with the basic directory structure and Docker configuration.

### Tasks:

1. **Initialize Git Repository:**

   - Create a new repository on GitHub named `KONSPECTO`.
   - Clone the repository locally.

2. **Set Up Directory Structure:**

   - Create the following directories:
     - `frontend/`
     - `backend/`
     - `agent/`
     - `docs/`
     - `docker/`
     - `tests/`
   - Add root-level files:
     - `.gitignore`
     - `docker-compose.yml`
     - `README.md`
     - `LICENSE`

3. **Configure Docker Containers:**

   - Create `Dockerfile` for frontend in `docker/frontend/Dockerfile`.
   - Create `Dockerfile` for backend in `docker/backend/Dockerfile`.
   - Set up `docker-compose.yml` to orchestrate frontend and backend services.
   - Verify that Docker containers can be built and run successfully.

4. **Enforce Development Rules:**
   - **Version Management:**
     - Ensure Python version is set to 3.11 for backend.
     - Ensure Node.js version is set to 18.x for frontend.
   - **Coding Standards:**
     - Configure `flake8` for Python linting in the backend.
     - Configure `ESLint` with Airbnb JavaScript Style Guide for the frontend.
   - **Package Managers:**
     - Use `poetry` for managing Python dependencies in the backend.
     - Use `npm` with the specified version (9.x) for frontend dependencies.
   - **Initial Commit Standards:**
     - Ensure commit messages follow the `<type>: <short description>` format as per Git conventions.

---

## Sprint 2: Core Framework Initialization

**Duration:** 2 weeks
**MVP:** Basic frontend and backend frameworks are set up with a functional health check API.

### Tasks:

1. **Set Up Frontend Framework:**

   - Initialize a React.js project in the `frontend/` directory using Vite.
   - Configure routing with React Router.
   - Implement a basic page for interacting with the agent through a text field.
   - Ensure all frontend dependencies adhere to specified versions (React.js 18.2.0, TailwindCSS 3.3.2).

2. **Set Up Backend Framework:**

   - Initialize a FastAPI project in the `backend/` directory.
   - Implement a health check endpoint (`/health`).
   - Set up basic API structure with versioning (`/v1`).
   - Ensure all backend dependencies adhere to specified versions (FastAPI 0.95.1, Celery 5.3.0, Redis 6.2.6).

3. **Finalize Containerization:**

   - Complete `Dockerfile` configurations for frontend and backend.
   - Update `docker-compose.yml` to include frontend and backend services.
   - Verify that both services are running correctly in Docker containers.

4. **Enforce Development Standards:**

   - **Linting and Formatting:**
     - Ensure `flake8` is properly configured for Python code in the backend.
     - Ensure `ESLint` is properly configured for JavaScript/TypeScript code in the frontend.
     - Integrate `black` (version 23.1.0) for Python code formatting.
     - Integrate `Prettier` (version 2.8.8) for JavaScript/TypeScript code formatting.

5. **Initial Testing Setup:**
   - Set up testing frameworks for frontend (`Jest`, `React Testing Library`) and backend (`pytest` 7.3.1).
   - Write basic tests to verify the health check endpoint and frontend rendering.

---

## Sprint 3: Core Search Functionality

**Duration:** 2 weeks
**MVP:** Functional search API endpoint and corresponding frontend search component displaying results.

### Tasks:

1. **Implement Search API:**

   - Develop `/v1/search` endpoint to handle search queries.
   - Integrate the local LLM model (LLM Studio 1.2.3) for processing search requests.
   - Ensure the endpoint returns full and abbreviated search results with source references.
   - Adhere to FastAPI coding standards and type annotations.

2. **Develop Frontend Search Component:**

   - Create a search component with text input and search button.
   - Display search results in both full and abbreviated formats.
   - Integrate the search component into the main application routing.
   - Ensure React components follow the Airbnb JavaScript Style Guide.

3. **Enforce Development Standards:**

   - Run `flake8` and `black` for backend code.
   - Run `ESLint` and `Prettier` for frontend code.
   - Ensure all dependencies are at specified versions.

4. **Testing Search Functionality:**
   - Write unit tests for the search API endpoint.
   - Develop integration tests to verify frontend and backend interactions.
   - Achieve at least 80% code coverage for search functionality.

---

## Sprint 3.x: Manual correction of errors from past sprints

**Duration:** x weeks
**MVP:** Working functionality from past sprints

### Sprint 3.1:

**Correct Search API:**

- Fix any issues with the `/v1/search` endpoint.

### Sprint 3.2:

**Upgrade RAG and Search API:**

- Implement RAG Pipeline over Google Drive Files
- Current vector store - RedisVectorStore

### Sprint 3.3:

**Upgrade UI**

- Implement chat format for search results
- Add functionality to view Google Drive files

### Sprint 3.4:

**Upgrade UI**

- Improving the design of the UI

### Sprint 3.5:

**Improving project structure**

- Improving the structure of the backend and frontend

### Sprint 3.6:

**Upgrade UI**

- Change colour scheme of the UI

---

## Sprint 4: Audio Transcription Functionality

**Duration:** 2 weeks
**MVP:** Functional transcription API endpoint and corresponding frontend component for processing audio files.

### Implemented Features:

- **API Endpoint `/v1/transcribe`:**
  - Accepts uploaded audio files (MP3 and WAV).
  - Utilizes the Whisper model for transcribing audio to text.
  - Returns the transcribed text in the response.
- **Frontend Transcription Component:**
  - Allows users to upload audio files.
  - Displays the transcribed text after processing.
  - Integrated into the main application routing.

### Tasks:

1. **Implement Transcription API:**

   - Develop the `/v1/transcribe` endpoint to handle audio file uploads.
   - Integrate the `WhisperModel` for audio transcription.
   - Ensure support for MP3 and WAV formats.
   - Implement asynchronous request processing to enhance performance.
   - Adhere to FastAPI coding standards and type annotations.

2. **Develop Frontend Transcription Component:**

   - Create a component for users to upload audio files.
   - Implement functionality to display the transcribed text after successful processing.
   - Integrate the transcription component into the main application routing.
   - Ensure React components adhere to the Airbnb JavaScript Style Guide.

3. **Enforce Development Standards:**

   - Run `flake8` and `black` for backend code.
   - Run `ESLint` and `Prettier` for frontend code.
   - Ensure all dependencies are at specified versions.

4. **Testing Transcription Functionality:**
   - Write unit tests for the `/v1/transcribe` API endpoint.
   - Develop integration tests to verify interactions between frontend and backend during audio transcription.
   - Achieve at least 80% code coverage for transcription functionality.

---

## Sprint 5: Video-to-Slides Conversion Functionality

**Duration:** 2 weeks
**MVP:** Functional video upload API endpoint and frontend component for converting videos to slides.

### Tasks:

1. **Implement Video Conversion API:**

   - Develop the `/v1/convert` endpoint for uploading video lectures.
   - Integrate FFmpeg (version 4.4.1) to extract keyframes from uploaded videos at specified intervals.
   - Ensure extracted images (slides) are saved and accessible.
   - Adhere to FastAPI coding standards and type annotations.

2. **Develop Frontend Video Upload Component:**

   - Create a component for uploading video files.
   - Implement functionality to display and download generated slides.
   - Integrate the video upload component into the main application routing.
   - Ensure React components follow the Airbnb JavaScript Style Guide.

3. **Enforce Development Standards:**

   - Run `flake8` and `black` for backend code.
   - Run `ESLint` and `Prettier` for frontend code.
   - Ensure all dependencies are at specified versions.

4. **Asynchronous Task Processing:**

   - Configure Celery (version 5.3.0) to handle video conversion tasks asynchronously.
   - Ensure the frontend can track task status and notify users upon completion.

5. **Testing Video Conversion Functionality:**

   - Write unit tests for the video conversion API endpoint.
   - Develop integration tests to verify the video-to-slides conversion process.
   - Achieve at least 80% code coverage for video conversion functionality.

6. **Update Documentation:**
   - Document the video conversion endpoint in `docs/api_documentation.md`.
   - Update the user guide with video-to-slides conversion functionality details in `docs/user_guide.md`.

---

## Sprint 6: Deployment and Support

**Duration:** 2 weeks
**MVP:** Fully deployed application with monitoring, logging, and user support channels established.

### Tasks:

1. **Deploy Application to Production Server:**

   - Set up server infrastructure on chosen cloud provider (e.g., AWS, DigitalOcean).
   - Deploy Docker containers using `docker-compose.prod.yml`.
   - Configure environment variables securely on the production server.
   - Ensure all deployed services adhere to specified versions and development standards.

2. **Configure CI/CD Pipelines:**

   - Set up CI/CD pipelines using GitHub Actions or GitLab CI/CD.
   - Automate testing and deployment processes.
   - Ensure pipelines enforce coding standards and version compliance.
   - Achieve seamless integration with the production environment.

3. **Set Up Monitoring and Logging:**

   - Implement monitoring tools (e.g., Prometheus, Grafana) to track system metrics.
   - Configure centralized logging using ELK Stack or Loki.
   - Ensure alerts are set up for critical issues.
   - Verify that monitoring and logging tools adhere to performance and security standards.

4. **Establish User Support Channels:**

   - Create support channels such as email support or a chat system (e.g., Slack, Discord).
   - Document support procedures in `docs/support.md`.
   - Ensure support channels are integrated with user feedback mechanisms.

5. **Collect and Analyze User Feedback:**

   - Implement feedback forms within the application.
   - Gather and categorize user feedback for actionable improvements.
   - Plan future enhancements based on feedback analysis.
   - Ensure feedback collection tools comply with data privacy and security guidelines.

6. **Finalize Documentation and Project Closure:**
   - Complete all technical documentation in the `docs/` directory.
   - Prepare a comprehensive user guide in `docs/user_guide.md`.
   - Conduct a final project audit to ensure all objectives are met.
   - Document lessons learned and hold a retrospective meeting.
   - Finalize and hand over all documentation to stakeholders.

---
