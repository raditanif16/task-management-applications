# Task Management Application

Build simple APIs for task management applications using Node.js and Express.js.

The following is a brief guide regarding the application:

- [Endpoints used](#endpoints-used)
- [Instructions on how to run the application](#instructions-on-how-to-run-the-application)
- [Application test in Postman](#application-test-in-postman)

## Endpoints used

The endpoints in this application are as follows:

| Endpoints used      | Description       |
|---------------------|-------------------|
|`GET /tasks`         | Returns a list of all tasks. |
|`POST /task`         | Create a new task. The request body contains the following fields:<br>- title: Title of assignment (required).<br>- description: Description of the task (optional).<br>- completed: Boolean indicating whether the task is complete (default: false). |
|`GET /tasks/{id}`    | Returns a task with the specified ID. |
|`PATCH /tasks/{id}`  | Updates a task with the specified ID. The request body contains the fields that need to be updated. |
|`DELETE /tasks/{id}` | Deletes a task with the specified ID. |

## Instructions on how to run the application

Download the ZIP code in the task-management-applications repository
<br>![image](https://github.com/raditanif16/task-management-applications/assets/72719001/e4135546-c104-4f8e-beec-3534f990decf)

<br>Extract the files and open them in Visual Studio Code or other similar applications
<br>![image](https://github.com/raditanif16/task-management-applications/assets/72719001/9ef1dfdf-bb58-4cdf-b279-3f820c94bc16)

<br>Open Terminal or Windows PowerShell then type yarn, to install and download node_modules.
<br>
```terminal
$ yarn
```
![image](https://github.com/raditanif16/task-management-applications/assets/72719001/b2f81cf6-77cb-4d17-a592-b7bcc3845178)

<br>Make sure you have turned on MySql as the database to be used.
<br>![image](https://github.com/raditanif16/task-management-applications/assets/72719001/287b191c-8c93-4a3b-a339-730a6748cbee)

<br>Create a database named task_management_applications
<br>![image](https://github.com/raditanif16/task-management-applications/assets/72719001/14f8e6d7-a3d5-4c7f-9385-20e3c4b56450)

<br>After that, run the project by typing yarn start in the terminal
<br>
```terminal
$ yarn start
```
![image](https://github.com/raditanif16/task-management-applications/assets/72719001/67761f55-bff9-487f-83f5-571660c7fc2e)

## Application test in Postman

Open the Postman application. Here we will try to test each of the endpoints that have been created.
<br>![image](https://github.com/raditanif16/task-management-applications/assets/72719001/eea785fb-3fb6-4b46-aad0-9b0ed0705ea3)
<br>
- POST /task
  <br>This endpoint will create a new task.
  <br>![image](https://github.com/raditanif16/task-management-applications/assets/72719001/70fa94ca-2b51-4d21-bb71-71810b78509d)
  
- GET /tasks
  <br>This endpoint will display all tasks that have been created.
  <br>![image](https://github.com/raditanif16/task-management-applications/assets/72719001/5917c768-bda4-4042-8a58-4850f5f0af6a)
  
- GET /tasks/{id}
  <br>This endpoint will display tasks based on a specific id.
  <br>![image](https://github.com/raditanif16/task-management-applications/assets/72719001/b0d9f9ca-8cbd-4d38-bfc4-c1d022c3a4d4)

- PATCH /tasks/{id}
  <br>This endpoint will update tasks based on the specified id.
  <br>![image](https://github.com/raditanif16/task-management-applications/assets/72719001/be90d0af-4af6-43da-8fe0-6ff4e5eefda6)
  
- DELETE /tasks/{id}
  <br>This endpoint will delete tasks based on a specific id.
  <br>![image](https://github.com/raditanif16/task-management-applications/assets/72719001/fffbc13f-f794-4cd1-9aa9-b20ed7e7f9cd)




  









 
 
