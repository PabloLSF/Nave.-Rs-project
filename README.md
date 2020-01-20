# Node API BACKEND CHALLENGE by Pablo Sanches

BACKEND CHALLENGE is an API for a job tracking candidate tracking product.

Within the product there will be the following features:

## Register Administrators.
 
### Administrators will be able to:

1- Create new job offer.

2- Edit existing job offer.

3-Delete current job offer.

4-View data of candidates and which job offers are registered.

5- Add comment on a specific user
 

## Register candidates.

### Candidates will be able to:

1-Edit your registration data.

2-View open job offers.

3-Register for one or more jobs.

4-View the job offers that they have registered for.

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
2. Open browser in `http://localhost:8080/`
3. Create a new admin and a new user on `Sign Up` area.
4. `Log In` as admin.
5. Create a new job offer.
6. `Log Out`. 
7. `Log In` as user.
8.  Search for  the job offer previously created as admin.
 

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

