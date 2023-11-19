# IT Job Board API

## Overview

The IT Job Board API is a Node.js/Express application that provides endpoints for managing job listings. It comes with Swagger documentation for easy exploration and testing.

## Features

- **Create Job Listing:** Create a new job listing with details like title, company, description, and more.
- **Get All Job Listings:** Retrieve a list of all available job listings.
- **Get Job Listing by ID:** Retrieve a job listing by its unique ID.
- **Update Job Listing:** Update a job listing with new details.
- **Delete Job Listing:** Delete a job listing by its unique ID.

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB Atlas account (for database)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/seymourpublic/it-job-board-api.git
    ```

2. Install dependencies:

    ```bash
    cd it-job-board-api
    npm install
    ```

3. Set up MongoDB:

    - Create a MongoDB Atlas account and configure your connection string in `index.js`.

4. Run the application:

    ```bash
    npm start
    ```

### API Documentation

Explore and test the API using the Swagger documentation. Visit [http://localhost:3000/api-docs](http://localhost:3000/api-docs) in your browser.

## Usage

### Endpoints

- **Create Job Listing:** `POST /jobs`
- **Get All Job Listings:** `GET /jobs`
- **Get Job Listing by ID:** `GET /jobs/:id`
- **Update Job Listing:** `PUT /jobs/:id`
- **Delete Job Listing:** `DELETE /jobs/:id`

### Request and Response Examples

#### Create Job Listing

```json
POST /jobs
{
  "title": "Software Engineer",
  "company": "TechCo",
  "description": "Exciting software engineering position",
  "logoUrl": "https://example.com/logo.png",
  "closingDate": "2023-12-31",
  "emailAddress": "hr@techco.com"
}
