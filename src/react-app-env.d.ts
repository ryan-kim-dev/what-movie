/// <reference types="react-scripts" />

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production';
    REACT_APP_OPENAI_API_KEY: string;
    REACT_APP_TMDB_API_KEY: string;
  }
}
