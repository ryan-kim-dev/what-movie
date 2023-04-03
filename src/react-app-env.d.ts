/// <reference types="react-scripts" />

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production';
    REACT_APP_NOTION_ACCESS_TOKEN: string;
    REACT_APP_NOTION_DATABASE_ID: string;
  }
}
