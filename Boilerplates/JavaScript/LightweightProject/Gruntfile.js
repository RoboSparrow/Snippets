module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    // banner
    meta: {
      banner:
        [
            '/**',
            ' * <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>',
            ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %>',
            ' * Licensed <%= pkg.licenses.type %> <<%= pkg.licenses.url %>>',
            ' */'
        ].join("\n")
    },

    // concat your js files
    concat: {
      options: {
        separator: ';',
        banner: '<%= meta.banner %>\n'
      },
      dist: {
        src: ['src/**/*.js'],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },

    copy: {
      dist: {
        src: [
            // vendors, this  rule is very broad, so specify this for your module
            'vendor/**/build/*.js',
            'vendor/**/dist/*.js',
            'vendor/**/build/*.css',
            'vendor/**/dist/*.css'
        ],
        dest: 'dist/'
      },

      html: {
        expand: true,
        cwd: 'src/',
        src: ['**/*.html'],
        dest: 'dist/'
      }
    },

    clean: {
        build: {
            src: [ 'build' ]
        }
    },

    uglify: {
      options: {
        banner: '<%= meta.banner %>\n'
      },
      dist: {
        files: {
          'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },

    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: false,
          console: true,
          module: true,
          document: true
        }
      }
    },

    // configure watch task
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint', 'concat']
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // perform tasks, just comment out what you don't need
  grunt.registerTask(
    'default',
    'Compiles all of the assets and copies the files to the build directory.',
    [
        'clean',
        'jshint',
        'concat',
        'copy',
        'uglify'
    ]
  );

};
