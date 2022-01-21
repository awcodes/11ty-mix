const mix = require("laravel-mix");

mix.js("src/js/app.js", "public/js/app.js").postCss("src/css/app.css", "public/css/app.css");
