# E-Diary Management System

A Django-based electronic diary management system that allows users to create, manage and organize their personal diary entries digitally.

## Features

- User authentication and authorization
- Create, edit, and delete diary entries
- Secure and private diary management
- User-friendly interface

## Setup Instructions

1. Clone the repository:
```bash
git clone https://github.com/apsit-aiml-projects/Ayush_SEM_4.git
cd Ayush_SEM_4
```

2. Create a virtual environment and activate it:
```bash
python -m venv venv
source venv/bin/activate  # On Windows use: venv\Scripts\activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Run migrations:
```bash
python manage.py migrate
```

5. Create a superuser (admin):
```bash
python manage.py createsuperuser
```

6. Run the development server:
```bash
python manage.py runserver
```

Visit http://127.0.0.1:8000/ in your browser to access the application.

## Technologies Used

- Python
- Django
- SQLite
- HTML/CSS
- Bootstrap

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/) 