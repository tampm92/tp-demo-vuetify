export default {
    node: process.env.NODE_ENV || 'development',
    isTest: process.env.NODE_ENV === 'test',
    isProduction: process.env.NODE_ENV === 'production',
    isDevelopment: !!!process.env.NODE_ENV || process.env.NODE_ENV === 'development',
    appTitle: process.env.VUE_APP_TITLE,
    apiBaseUrl: process.env.VUE_APP_API_BASE_URL
};