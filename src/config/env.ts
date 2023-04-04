const env = {
  development: {
    BASE_URL: "http://localhost:7000/supaki/partner-dashboard/",
    USER_NAME: "test@gmail.com",
    PASSWORD: "samplereact",
  },
  production: {
    BASE_URL: "https://www.example.com/",
    USER_NAME: "test@gmail.com",
    PASSWORD: "samplereact",
  },
  test: {
    BASE_URL: "https://www.example.com/",
    USER_NAME: "test@gmail.com",
    PASSWORD: "samplereact",
  },
};

export const env_var = env[process.env.NODE_ENV];
