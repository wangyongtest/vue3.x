module.exports = ctx =>  ({
    // parser: 'sugarss',
    map: false,
    plugins: {

        'postcss-easy-import': {
            "extensions": ['.postcss', '.pcss']
        },
        'postcss-nested': {},
         cssnano: ctx.env === 'production' ? {} : false,
          precss: {},
    }
})
