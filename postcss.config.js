module.exports = ctx =>  ({
    map: false,
    plugins: {
        'postcss-easy-import': {
            "extensions": ['.postcss', '.pcss']
        },
        'postcss-nested': {},
         cssnano: ctx.env === 'production' ? {} : false,
    }
})
