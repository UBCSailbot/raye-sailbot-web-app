# Sailbot Webapp

Django and python with MySql database

### Prerequisites

python version 3

### Installing

After installing python

Inside the project folder:
- pip3 install pipenv
- pipenv install

### After modifying any models or using a new database 
- python manage.py makemigrations
- python manage.py migrate

### Starting the program

- pipenv shell
- python manage.py runserver

### Database
In django_sailbot/settings.py:
- Currently default to using sqlite3 for debugging.
- MySql database connection commented out.
```  
  DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': ‘dbname’,
        'USER': ‘username’,
        'PASSWORD': 'password',
        'HOST': 'localhost',
        'PORT': '3306',
    }
}
```
