export default {
  browserPort: 3000,
  UIPort: 3001,
  testPort: 3002,

  sourceDir: './app/',
  buildDir: './build/',

  styles: {
    src: 'app/scss/**/*.scss',
    dest: 'build/css',
    prodSourcemap: false,
    sassIncludePaths: [
      'bower_components',
      'node_modules',
    ]
  },

  scripts: {
    src: 'app/js/**/*.js',
    dest: 'build/js',
    gulp: 'gulp/**/*.js'
  },

  images: {
    src: 'app/images/**/*',
    dest: 'build/images'
  },

  fonts: {
    src: [
      'app/fonts/**/*',
    ],
    dest: 'build/fonts'
  },

  assetExtensions: [
    'js',
    'css',
    'png',
    'jpe?g',
    'gif',
    'svg',
    'eot',
    'otf',
    'ttc',
    'ttf',
    'woff2?'
  ],

  views: {
    index: 'app/index.html',
    // src: 'app/views/**/*.html',
    // dest: 'app/js'
  },

  // svgs: {
  //   src: 'app/svgs/**/*.svg',
  //   dest: 'app/js'
  // },

  // versioning: {
  //   dest: 'app/js'
  // },

  // gzip: {
  //   src: 'build/**/*.{html,xml,json,css,js,js.map,css.map}',
  //   dest: 'build/',
  //   options: {}
  // },

  browserify: {
    bundleName: 'main.js',
    prodSourcemap: true
  },

  // test: {
  //   karma: 'test/karma.conf.js',
  //   protractor: 'test/protractor.conf.js'
  // },

  init: function () {
    this.views.watch = [
      this.views.index,
      // this.views.src
    ];

    // this.svgs.watch = [this.svgs.src];

    return this;
  }

}.init();