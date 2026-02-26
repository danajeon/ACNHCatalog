import 'dotenv/config';

export default ({ config }) => {
    return {
        ...config,
        plugins: [
            ...(config.plugins || []),
            'expo-font',
        ],
        extra: {
            ...config.extra,
            apiKey: process.env.API_KEY,
        },
    };
};