module.exports = {
    purge: [
        './views/*.twig',
        './views/**/*.twig',
        './assets/*.css',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        container: {
            center: true,
            padding: '1rem',
        },
        extend: {},
    },
    variants: {
        extend: {
            gradientColorStops: ['group-hover'],
            boxShadow: ['active'],
        },
    },
    plugins: [],
}
