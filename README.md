# Jobly

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Usage](#usage)
- [Tech Stack](#tech-stack)

## Introduction

Jobly is a mock job posting website that enables users (job seekers) to search and apply for job openings. The platform utilizes Node.js as the backend and React for the front end. Job names and company names were sourced from a custom API provided by the school.

## Features

- User Registration and Login: Users can create accounts and log in using JWT authentication.
- Job and Company Filtering: Users can search and filter through a list of jobs and companies using various criteria such as search terms, maximum employees, or minimum salary.
- Applied Jobs Tracking: Applied jobs are saved in an SQL Database and are displayed on the user profile page.
- Company-Centric Job Application: Users can apply for jobs through the "Companies" tab, where job openings are listed by company. Clicking on a specific job reveals an "Apply" button.

## Usage

To use the website, follow these steps:

1. Open your web browser and go to [https://reactjobly.surge.sh/](https://reactjobly.surge.sh/).
2. Signup or login (demo login - username: test15, password: test15).
3. Browse through the "Jobs" or "Companies" tab, optionally applying filters.
4. Click on "Apply" for desired jobs.
5. View applied jobs on the "Profile" tab, with the option to edit details.
6. Apply for jobs by company by clicking on a company and selecting specific job openings.

## Tech Stack

The project employs the following technologies:

- Backend: Node.js
- Frontend: React
- HTTP/API Requests: Axios
- Routing: React Router DOM
- Database: SQL
- Deployment: Heroku (backend) and Surge (frontend)
- Logo: Custom-made using Canva

Jobly offers a user-friendly experience for job seekers, enabling efficient job searching, application, and tracking, all while leveraging a modern tech stack for a seamless and responsive interface.

