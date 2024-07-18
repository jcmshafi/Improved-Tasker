# Tasker

Tasker is an intuitive task management system designed for everyone. It enables easy creation and management of tasks with features such as task creation (title, description, tags, due date, priority, owner), task listing, powerful search with 'debounce' for an enhanced experience, task categorization (by tag, priority, owner), marking tasks as favorites, tracking and updating task status, task editing, and efficient task deletion. Simplify your task management with Tasker.

## Table of Contents
- [Description](#description)
- [Features](#features)
- [Additional Features](#additional-features)
- [Technology](#technology)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Links](#links)

## Description
Tasker is an intuitive task management system designed for everyone. It enables easy creation and management of tasks with features such as task creation (title, desc, tags, due date, priority, owner), task listing, powerful search with 'debounce' for an enhanced experience, task categorization (by tag, priority, owner), marking tasks as favourites, tracking and updating task status, task editing, and efficient task deletion. Simplify your task management with Tasker.

## Features
1. **Task Creation**: Add new tasks with a title, description, tags, due date, priority, and owner.
2. **Task Listing**: View all tasks in a list format.
3. **Search**: Search for tasks by entering keywords that match one or more tasks. Implement the 'debounce' technique for improved search experience.
4. **Task Categorization**: Categorize tasks by tag, priority, and owner.
5. **Mark as Favourite**: Mark tasks as favorites for quick access.
6. **Status Tracking**: Track and update the status of tasks.
7. **Task Editing**: Edit existing tasks.
8. **Task Deletion**: Delete one or more tasks.

## Additional Features
1. **Validation on Task Creation**: Basic validation when creating a new task. If the "Create New Task" button is clicked without setting the Title, Description, Tags, or Priority, a warning will be displayed without submitting.
2. **Validation on Task Editing**: Validation when editing a task.
3. **Basic Search Feature**: Filter tasks in the Task List by typing in the search bar. If the search bar is empty, all tasks will be shown in the Task List. The search will only match the Task Title.
4. **Tag Input Formatting**: Tags input should be separated by commas (e.g., "python, javascript, java"). The tag list will not display tags as comma-separated.
5. **Random Tag Colors**: Generate random colors for tags in the tag list.
6. **Empty Task List Message**: When there are no tasks, display a message - "Task List is empty!"

## Technology
- ReactJs
- React Context API
- React useReducer
- Tailwind CSS

## Installation

### Prerequisites
- Node.js
- npm or yarn

### Steps
1. Clone the repository:
    ```sh
    git clone https://github.com/jcmshafi/Improved-Tasker.git
    ```
2. Navigate to the project directory:
    ```sh
    cd Improved-Tasker
    ```
3. Install dependencies:
    ```sh
    npm install
    # or
    yarn install
    ```

## Usage

### Running the Project
```sh
npm start
# or
yarn start
