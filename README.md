# Kanjikan



## Description

This is an app to learn basic Kanji (logographic Japanese characters), search for unknown words and perform a quiz to test your knowledge

## User Stories

- **404:** As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault
- **Signup:** As an anon I can sign up in the platform so that I can start learning
- **Login:** As a user I can login to the platform so that I can access my current lesson or revisit previous ones
- **Logout:** As a user I can logout from the platform so no one else can use it
- **Add to bookmarks** As a user I can add a kanji to my bookmarks so I can read it again later
- **Delete from bookmarks** As a user I can delete a kanji from my list
- **Edit my profile** As a user I can edit my profile
- **Search** as I user I can search for an English word and receive the translation in Japanese
- **Other resources** as a user i can access other external learning resources

## Backlog

- Create one quiz for every lesson
- Keep track of completed lessons
- Refactor code with Redux and hooks



# Client / Frontend

## React Router Routes (React App)

| Path                    | Component       | Permissions                | Behavior                                                     |
| ----------------------- | --------------- | -------------------------- | ------------------------------------------------------------ |
| `/signup`               | SignupPage      | anon only `<AnonRoute>`    | Signup form, link to login, navigate to homepage after signup |
| `/login`                | LoginPage       | anon only `<AnonRoute>`    | Login form, link to signup, navigate to homepage after login |
| `/logout`               | Logout          | user only `<PrivateRoute>` | Destroys current session. Redirects to LoginPage             |
| `/lessons`              | LessonsListPage | user only `<PrivateRoute>` | Shows all lessons                                            |
| `/lessons/:id`          | KanjiDetailPage | user only `<PrivateRoute>` | Shows details  of every lesson                               |
| `/quiz`                 | QuizPage        | user only `<PrivateRoute>` | Shows quiz                                                   |
| `/private/:userId`      | ProfilePage     | user only `<PrivateRoute>` | Shows personal information and list of bookmarks             |
| `/private/add/:kanjiId` | Bookmarks       | user only `<PrivateRoute>` | Adds an element to user's bookmarks                          |
| `/private/add/:kanjiId` | DeleteBookmarks | user only `<PrivateRoute>` | Removes  an element from user's bookmarks                    |
| `/private/:userId/edit` | EditPage        | user only `<PrivateRoute>` | Allows user to change personal data                          |
| `/dictionary`           | DictionaryPage  | user only `<PrivateRoute>` | Shows results of search                                      |
|                         |                 |                            |                                                              |

## Pages

- LoginPage
- SignupPage
- LessonsListPage
- KanjiDetailPage
- QuizPage
- PrivatePage
- DictionaryPage

## Components

- Blogs
- EditProfile
- Music
- Navbar
- News
- PrivateRoute
- Quiz
- Syllabaries
- Videos

## Services
- Auth Service

  auth.login(user)

  auth.signup(user)

  auth.logout()

  auth.me()

- Lessons Service

  lessons.getAllLessons()

  lessons.getOneLesson(id)

- Private Service

  private.getOneUser(username, password, email, bookmarks,  lessonsCompleted, userId)

  private.editProfile(username, email, password, userId)

  private.addToBookmarks(kanjiId, userId)

  private.deleteFromBookmarks(kanjiId, userId) 

- Dictionary Service

  dictionary.getSearchResults()



# Server / Backend

## Models

User model

```
{
  username: {type: String, required: true, unique: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  lessonsCompleted: [{type: Schema.Types.ObjectId,ref:'Lesson'}]
  bookmarks: [{type: Schema.Types.ObjectId,ref:'Kanji'}]
}
```

Kanji model

```
 {
   kanji: {type: String, required: true},
   grade: {type:Number},
   stroke_count:{type:Number},
   meanings: [{type:String}],
   kun_readings: [{type:String}],
   on_readings: [{type:String}],
   name_readings: [{type:String}],
   jlpt: {type:Number},
   unicode: {type:String},
   heisig_en:{type:String},
}
```

Lesson model

```
{
  name: { type: String },
  img: { type: String },
  kanji: [
    { kanji: { type: String, required: true } ,
    grade: { type: Number },
    stroke_count: { type: Number } ,
     meanings: { type: String } ,
     kun_readings: { type: String } ,
     on_readings: { type: String } ,
     name_readings: { type: String } ,
     heisig_en: { type: String } ,
    }],
}
  


```



## API Endpoints (backend routes)

| HTTP Method | URL                            | Request Body                | Success status | Error Status | Description                                                  |
| ----------- | ------------------------------ | --------------------------- | -------------- | ------------ | ------------------------------------------------------------ |
| POST        | `/auth/signup`                 | {username, email, password} | 201            | 404          | Checks if fields not empty and user not exists, then create user with encrypted password, and store user in session |
| POST        | `/auth/login`                  | {username, password}        | 200            | 401          | Checks if fields not empty, if user exists and if password matches. Then stores user in session |
| GET         | `/auth/logout`                 | (empty)                     | 204            | 400          | Logs out the user                                            |
| GET         | `/auth/me`                     | (empty)                     | 200            | 401          | Gets current user data                                       |
| GET         | `/api/lessons`                 |                             | 200            | 500          | Show all lessons                                             |
| GET         | `/api/lessons/:id`             | {id}                        | 200            | 500          | Show specific kanji in a lesson **AND START THE CARDS**      |
| POST        | `/api/dictionary`              |                             | 200            | 500          | shows dictionary page and search results                     |
| GET         | `/api/private/:userId`         |                             | 200            | 500          | shows user`s profile                                         |
| POST        | `/api/private/:userId/edit`    |                             |                |              |                                                              |
| POST        | `/api/private/add/:kanjiId`    |                             | 200            | 400          | Deletes user's bookmarks                                     |
| POST        | `/api/private/delete/:kanjiId` |                             | 200            | 404          | Deletes user's bookmarks                                     |



## Links

### Trello/Kanban

https://trello.com/b/EBOE2TWZ/kanji

### Git

The url to your repository and to your deployed project

[Client repository Link](https://github.com/Sotid/project-3-client.git)

[Server repository Link](https://github.com/Sotid/project-3-server.git)

[Deployed App Link]()

### Slides

The url to your presentation slides

https://docs.google.com/presentation/d/1CwqboN1i7-AwVykqJz4n9FJ2gjbNklMmVvTU8FbfuII/edit#slide=id.gc45eab6dfd_0_0