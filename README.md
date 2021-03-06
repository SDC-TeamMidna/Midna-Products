# Atelier Products API

This is a RESTful JSON API for e-commerce application utilizing clothing related data.

## Purpose

This API service was created to accommodate higher traffic flow utilizing a microservice-based architecture instead of a monolithic design.

## Database Selection

The backend database for this API is PostgreSQL. As a relational database management system, PostgreSQL is able to extract data in the desired format using aggregate functions, and can be optimized for performance using indexing.

## PostgreSQL Schema

![postgresqlSchema](/schema.png)

## API Setup

This API service is initially created with one Express server and one PostgreSQL database.

## Local Performance Metrics

- Local testing confirmed the system capacity to be 100 requests per second.

- Average query speed for each endpoint is 20ms.

## Stress Testing

The server and database is each deployed to an AWS EC2 instance for stress-testing using Loader.io.

With one server in place:

- System capacity achieved 6,000 requests per second, with an average response time of 11ms.

- Duration: 15 seconds

- Error rate: 0.0%

![loaderioResult](/LoaderioResult.png)

## Load Balancing

Nginx was used to horizontally scale system capacity. A total of 3 node servers were deployed as AWS EC2 instances. Load-balancing resulted in a system capacity of 8,000 requests per second.

## Installation

npm is the package management system for this project.

Install dependencies

   ```sh
   npm install
   ```

Run development server

   ```sh
   npm start-dev
   ```

Run production server

   ```sh
   npm start
   ```
