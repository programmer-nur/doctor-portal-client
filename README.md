# Doctor Portal

[Open portal to Doctor Portal](https://doctor-protal-cc252.web.app/)

### Admin credentials

Email - ana@gmail.com
Password - 123456A@2

### Features of this application


1. Other than `Home`, `Blogs`,`About`  route, every route is protected.
2. Admin route is specially protected with `PrivetRoute`
4. Upon login/signUp, a `jsonwebtoken` is issued from the server. Which is stored in the local Storage of the device the user has logged in/singed up from.
5. If the `token` aka `jsonwebtoken` is expired(which is one hour) the user is automatically logged out from the application. And has to log in again to use the application.
6. `jsonwebtoken` 401 and 403 is also implemented.
7. `React Query` is used to manage most of the server states(GET api calls), as it makes life so much easier my giving extra states like `isLoading`, `refetch`, `error`. Also for ease of `cacheting`

### Technologies

- react js
- firebase
- tailwind css
- daisyUI
- react router V6
- react fontAwesome
- react query
- react hook form
- react hot toast
- stripe
- react swiper
- typeWriterJS
- react vertical timeline
- react count up
- react visibility sensor

### Working hours

- Day 1 : `10:00` hours
- Day 2 : `10:00` hours
- Day 3 : `06:00` hours
- Day 4 : `08:00` hours (completed for 60 and some extra features)