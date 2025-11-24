## 📂 Project Structure

```plaintext
├── src
│   ├── config          # Environment configs (DB, AWS, etc.)
│   ├── controllers     # Route controllers
│   ├── models          # Database models (Mongoose/Sequelize/etc.)
│   ├── routes          # API routes
│   ├── services        # AWS services, business logic
│   ├── utils           # Helper functions
│   └── app.js          # Express app entry
│
├── tests               # Unit & integration tests
│
├── .github
│   └── workflows       # CI/CD pipeline configs
│
├── Dockerfile          # Container setup
├── docker-compose.yml  # Local dev setup
├── package.json        # Dependencies & scripts
├── README.md           # Documentation
└── .env.example        # Example environment variables
