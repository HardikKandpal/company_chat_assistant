
# Chat Assistant for SQLite Database
This project is a web-based chatbot application designed to process natural language queries and fetch data from a SQLite database. The chatbot can respond to various employee-related queries, such as showing employees from a specific department, listing employees hired after a certain date, and more.

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)  
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://choosealicense.com/licenses/gpl-3.0/)  
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](https://choosealicense.com/licenses/gpl-3.0/)


## Screenshots  

![Screenshot 2025-02-02 120621](https://github.com/user-attachments/assets/e263b0a9-3848-4511-b9f9-425007fa1bdc)

![Screenshot 2025-02-02 120710](https://github.com/user-attachments/assets/3966784b-e8c4-49bc-9e39-3d21200c8447)

## Tech Stack  

- **Backend**: Flask (Python web framework)
- **NLP Models**: Transformer-based models (e.g., BERT) for intent detection and query understanding (future improvements)
- **Database**: SQLite
- **Frontend**: HTML, CSS, and JavaScript for the chat interface
- **CORS**: Allows cross-origin requests between the frontend and backend

## Features

- **Natural Language Query Processing**: Users can interact with the database using natural language queries, making the interface intuitive and user-friendly.
- **SQLite Database Interaction**: The assistant connects to an SQLite database to process and retrieve data.
- **Flask Web Framework**: Built with Flask for simple and lightweight web service deployment.
- **Real-time Query Results**: The assistant fetches data from the database in real-time based on user input.
- **Interactive Chat Interface**: Allows seamless interaction with the application via a chat-based interface.
- **Instructions for Users**: The app provides user-friendly instructions to guide users in formulating their queries.
- **Error Handling**: Basic error handling to ensure the system responds appropriately to invalid queries or system failures.

## Limitations

- **Limited Query Scope**: Currently, the assistant only handles basic SQL queries and may not support complex query generation.
- **Dependence on SQLite**: The app is tied to SQLite for database interaction, limiting scalability for larger datasets or high-concurrency environments.
- **Basic Natural Language Processing (NLP)**: The NLP component is rudimentary, and more advanced features like query intent recognition or semantic analysis are not yet implemented.
- **Error-Prone Query Handling**: The system might struggle with handling certain complex or ambiguous queries, especially when the user input is not directly mapped to a valid SQL query.


## Run Locally  

Clone the project  

~~~bash  
  git clone https://github.com/HardikKandpal/company_chat_assistant.git
~~~

Go to the project directory  

~~~bash  
  cd company_chat_assistant
~~~

Set up a virtual environment
~~~bash  
python -m venv venv
source venv/bin/activate  # For Linux/macOS
venv\Scripts\activate     # For Windows
~~~

Install dependencies  

~~~bash  
pip install -r requirements.txt
~~~

Usage  

~~~bash  
python backend/app.py
~~~

## Future Improvements
- **Advanced NLP**: Integrating pre-trained transformer models like BERT for more accurate intent detection and entity extraction.
- **Contextual Awareness**: Implementing context tracking to remember previous interactions in a conversation.
- **Dynamic Data Fetching**: Replacing the static dataset with a dynamic, real-time database.
- **Personalization**: Tailoring responses based on user interactions and preferences.
- **Better Error Handling**: Providing more detailed error messages and suggestions for rephrasing queries.


## Feedback  

If you have any feedback, please reach out to at hardikkandpal705@gmail.com

## License  

[MIT](https://choosealicense.com/licenses/mit/)
