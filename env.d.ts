/// <reference types="vite/client" />

interface ImportMetaEnv {
    VITE_TMDB_API_KEY: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
