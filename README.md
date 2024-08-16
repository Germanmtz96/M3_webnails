# M3_webnails

https://excalidraw.com/#json=V6LDAezn7QS5YXyOGvEJq,R_Jfbdk4ieCpaPRfw76JNQ




# Reixelnails

## [See the App!](https://reixelnails.netlify.app/)

![App Logo](https://imgur.com/2WqrE7w)

## Description

Un proyecto de página web para un salón de uñas donde los usuarios registrados pueden agendar citas en horarios establecidos por el administrador, interactuar con publicaciones mediante comentarios y "me gusta", y disfrutar de contenido exclusivo, todo gestionado eficientemente por un administrador.
#### [Client Repo here](https://github.com/Germanmtz96/M3_webnails)
#### [Server Repo here](https://github.com/Germanmtz96/M3_Reixelnails_Server)

## Technologies & Libraries used

**Frontend -**
- **HTML/CSS** To structure and style the user interface.
- **JavaScript (React)** For creating a dynamic and responsive interface.
- **Bootstrap** To facilitate responsive and modern design.
- **Axios** To make HTTP requests to the backend, handling communication with APIs efficiently.
- **React Context** To manage the global state of the application and share data between components without the need to manually pass props.

**Backend -**
- **Express** To handle the server and routes.
- **RESTful API** For communication between the frontend and backend.

**Base de datos -**
- **MongoDB** To store user data, schedules, posts, and comments.

**Autenticación y Seguridad -**
- **JWT (JSON Web Tokens)** For user authentication.
**Others -**
- **Git y GitHub** For version control and project collaboration.
- **Nodemailer** To send appointment confirmation emails and registration notifications.
- **Cloudinary** For image storage and management, allowing easy and scalable integration with the backend.


# Client Structure

## User Stories

- **homepage** - As a user I want to be able to access the homepage so that I see what the app is about and login and signup
- **sign up** - As a user I want to sign up on the webpage so that I can see all the events that I could attend
- **login** - As a user I want to be able to log in on the webpage so that I can get back to my account
- **logout** - As a user I want to be able to log out from the webpage so that I can make sure no one will access my account
- **404** - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault 
- **500** - As a user I want to see a nice error page when the super team screws it up so that I know that is not my fault
- **view posts** - As a user, I want to browse through posts related to nail art and services, so I can get inspired and see what the salon offers
- **like posts** - As a user, I want to like posts so I can show appreciation for the content and engage with the community
- **view profile** - As a user, I want to view and edit my profile details, such as my name, contact information, and preferences
- **receive notifications** - As a user, I want to receive notifications for appointment confirmations, reminders, or updates, so I’m always informed about my bookings.
- **book an appointment** - As a user, I want to book an appointment with the salon, selecting a specific time slot to receive the service I need
- **view appointment availability** - As a user, I want to check available time slots for appointments, so I can choose a time that works best for me
- **comment on posts** - As a user, I want to leave comments on posts to share my thoughts or ask questions, enhancing my interaction with the content.
- **delete my account** - As a user, I want to delete my account so that I can remove all my personal data from the app
- **delete my comments** - As a user, I want to delete my comments so that I can remove any of my interactions on posts
- **view scheduled appointments as an administrator** - As an administrator, I want to view all scheduled appointments so that I can manage the salon's schedule effectively
- **view a database of all users as an administrator** - As an administrator, I want to access a database of all users so that I can manage user information and track user activity

## Client Routes

## React Router Routes (React App)
| Path                      | Page            | Components                     | Permissions              | Behavior                                                      |
| ------------------------- | ----------------| -----------------------------  | ------------------------ | ------------------------------------------------------------  |
| `/`                       | Home            | IntroWeb,InfoServicios,SobreMi | public                   | Home page                                                     |
| `/agenda`                 | Agenda          | AgendaCard                     | only admin `<Admin>`     | See the appointments already taken by clients                 |
| `/cita`                   | Appointment     | CitaServicioCard               | public                   | You can view the different services to select one             |
| `/clientas`               | Clients         | ClientaCard                    | only admin `<Admin>`     | You can see the database of registered users on the page      |
| `/servicios`              | Services        |                                | public                   | See the services and the steps to follow to get it done       |
| `/signup`                 | Signup          |                                | only unregistered        | Signup form, link to login, navigate to homepage after signup |
| `/login`                  | Login           |                                | only unregistered        | Login form, link to signup, navigate to homepage after login  |
| `/profile`                | Profile         | EditProfile                    | user only `<Private>`    | Navigate to homepage after logout, expire session             |
| `/galeria`                | Gallery         | Cloudinary, ImgCard            | user only `<Private>`    | See posts, with details such as comments, likes               |
| `/horarios`               | Schedules       | CitaFormulario                 | user only `<Private>`    | You can see the times available to make an appointment        |
| `/error`                  | Error           |                                | public                   | see an error page                                             |
| `*`                       | Not found       |                                | public                   | see a not found page                                          |

## Other Components

- Navbar
- Footer

## Context

- auth.context
  
## Links

### Collaborators

[Germán Martínez](https://github.com/Germanmtz96)

### Project

[Repository Link Client](https://github.com/Germanmtz96/M3_webnails)

[Repository Link Server](https://github.com/Germanmtz96/M3_Reixelnails_Server)

[Deploy Link](https://reixelnails.netlify.app/)

### Slides

[Slides Link](https://www.canva.com/design/DAGOAXFj4og/ysvbmpIM6mJZMuEWUzsFKA/view?utm_content=DAGOAXFj4og&utm_campaign=designshare&utm_medium=link&utm_source=editor)