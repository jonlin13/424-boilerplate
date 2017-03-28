## Client-side Technologies

1. SASS / SCSS - CSS preprocessor 
2. Bourbon / Neat - SASS mixins and a grid system
3. JS/Jquery - Simple DOM manipulation

## Client-side Development Technologies

1. Gulp - build task runner
2. Browser-sync - livereload and development server
3. Jshint - Helps to detect errors and potential problems in javascript.

## Client-side Project Setup

1. Install [Node.js](http://nodejs.org/download), [Sass](http://sass-lang.com/tutorial.html) and [Git](http://git-scm.com) on your machine. If you're a Windows user you'll also need to install [Ruby](http://rubyinstaller.org/downloads).
2. [Install Gulp](http://Gulpjs.com/) using `npm install -g gulp`. 
3. In Terminal, run `npm install` to install project dependencies.
4. Run `gulp` to spin up the development server. This should pop open a fresh browser tab with the client running at http://localhost:3000. 

## Client-side Build & Organization

There isn't currently a dedicated build process. Working on the development server from within `~curator/client_src` will automaticaly livereload and inject SCSS changes to `~/curator/assets/CSS`, all other changes force a page reload. Pre-Django-template integration work is displayed on the browserysync development server (localhost:3000). Entry point is `index.html` in `~/curator/assets`. This is where pre-template markup will live.

JavaScript: Single scripts.js file compiles to scripts.min.js.
SCSS: Utilizing 7-1 design pattern, with slightly heavier emphasis on componentization. Compiles down to main.min.css.

### .editorconfig

EditorConfig helps developers define and maintain consistent coding styles between different editors and IDEs. The `.editorconfig` file consists of a format for defining coding styles and a collection of text editor plugins that enable editors to read the file format and adhere to defined styles.