module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['src/**/*.js'],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },
    copy: {
      dist: {
        src: [
            //vendors
            'vendor/**/build/*.js', 
            'vendor/**/dist/*.js'
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
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
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
    //// configure watch task
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

  grunt.registerTask(
    'default', 
    'Compiles all of the assets and copies the files to the build directory.', 
    ['clean', 'jshint', 'concat', 'copy']
  );

};
