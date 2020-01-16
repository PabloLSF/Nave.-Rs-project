# Node API BACKEND CHALLENGE by Pablo Sanches

BACKEND CHALLENGE is an API for a job tracking candidate control product.

Within the product will have the following features:

It is possible to register users who will administer the system

System administrators can create job openings

Candidates can register (applicants have a name, email, phone and cpf).

Candidates can apply for one or more job openings (as an application, imagine that a full-stack developer could apply for both front-end and back-end jobs).

Users administering the system can add comments related to each application (relationship between a vacancy and a candidate, so that the interviewer can comment on what they think of the candidate and the stages he or she has already advanced in the test).

# Getting started

## Installation

1. Install [Node.JS](https://nodejs.org/en/download/package-manager/) latest version
2. Install MySql
2. Clone this repository



## Things to do before run the project:

1. Create database (by follow the commands):
  - CREATE USER `root` WITH PASSWORD `starcraft`
  - CREATE DATABASE `navdatabase` 
 


## Testing
1. Run index.js in /BACKEND-CHALLENGE/index.js
2. Open Browser in `http://localhost:8080/`


## Directory Structure

```
├── /BACKEND-CHALLENGE
|   ├── /controllers
|   |    ├── /admin
|   |    ├── /events
|   |    ├── /user
|   ├── /database
|   ├── /middleware
|   ├── /node_modules
|   ├── /public
|   ├── /views
|   |    ├── /admin
|   |    ├── /login
|   |    ├── /partil
|   |    ├── /user

```

