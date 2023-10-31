# API Rate Limiter

## Description
Implement an API rate limiter that restricts the number of API calls from a particular user/IP within a specific time frame. This project aims to prevent abuse or heavy usage of APIs by limiting how often each user can call the API within a specified time period.

## Features
- **Limit API Requests**: Restrict the number of API calls from a user/IP within a certain time frame.
- **Error Messages**: Provide clear error messages when users exceed their allocated API call limits.
- **Configurable Rate Limits**: Allow administrators to configure rate limits based on their requirements.
- **Request Logging**: Log all API requests with details like IP address, endpoint accessed, and timestamp.

## Technologies
- **Backend**: Node.js
- **Database**: Redis
- **Containerization**: Docker

## Getting Started

### Prerequisites
- Node.js and npm
- Docker
- Redis

### Installation & Setup
1. **Clone the Repository**
   ```sh
   git clone https://github.com/tarlhahn/api-rate-limiter.git
   ```
2. **Navigate to the Project Directory**
   ```sh
   cd api-rate-limiter
   ```
3. **Install Dependencies**
   ```sh
   npm install
   ```
4. **Start Redis Server**
   - Using Docker:
     ```sh
     docker run --name redis-rate-limiter -p 6379:6379 -d redis
     ```
   - Or, [install Redis](https://redis.io/download) and start the server.
5. **Run the Application**
   ```sh
   npm start
   ```
   
## Usage
Once the API server is running, users can make API requests up to the configured limits. If a user exceeds the limit, they will receive a `429 Too Many Requests` HTTP response, along with a message indicating that they have exceeded their rate limit.

## Configuration
Administrators can configure the rate limits by modifying the configuration file or setting environment variables. The following parameters can be configured:
- **REQUEST_LIMIT**: The number of allowed API requests.
- **TIME_WINDOW**: The time frame (in seconds) in which the REQUEST_LIMIT is applicable.

## API Endpoints
- **/api/data**: Get the data for the requesting IP address.

## License
Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Project Link: [https://github.com/tarlhahn/ApiRateLimiter](https://github.com/tarlhahn/ApiRateLimiter)
