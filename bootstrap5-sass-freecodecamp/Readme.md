# Steps to setup a project in the terminal using npm

<!-- Creating a package.json file using npm init-->

- npm init

### 1. Installing sass

- npm install --save-dev sass

### 2. Installing bootstrap

- npm install bootstrap --save

### 3. Installing font awesome

- npm install --save @fortawesome/fontawesome-free

### 4. Installing autoprefixer (Recommended by Google)

- npm i autoprefixer --save

## Creating an npm script to compile sass to css

<!-- Under scripts in the package.json file, remove the test script and enter the following one:-->

- "compile:sass": "sass --watch scss: assets/css"

* npm run compile:sass
