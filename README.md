# Getting started
1. Go to settings.py and fill in email and twilio info for email and phone verification respectively
2. Run yarn install or npm install to download node dependencies
3. It is recommended to create a virtual environment for python. Refer to info based on your operating system
4. After, run "pip install -r requirements.txt" to install python packages.
5. Create database with name "beaprose"
6. Run migrations with "python manage.py makemigrations"
7. Then "python manage.py migrate"
8. Start development server with "python manage.py runserver [port_number]"


# Node related stuff
## The project uses webpack to bundle static files.
## A custom webpack.config.js file is included
## Refer to comments for usage

# To bundle
## Watch for development
### Using yarn
yarn run watch
### Using npm
npm run watch

## For Production
### Using yarn
yarn run build
### Using npm
npm run build
