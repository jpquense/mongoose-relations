# Example of relations in Mongoose

**Example of `.env` file**
```
DATABASE_URL=mongodb://localhost/mongoose-relations
WEB_CONCURRENCY=1
PORT=3000
JWT_SECRET=adljlkj32kljalkj3oijsdlkjsafjhk
```

## User HTTP status codes

# 2**
 - **200 OK** - Response body contains requested resource. While using with ``PUT`` or ``DELETE`` methods response body contains updated or deleted resource.
 - **201 Created** - Resource was successfully created. Response body contains newly created resource and its location (url) on server is provided in ``Location`` header.

## 4**
 - **400 Bad Request** - Form validation error or user tries to login but he provides wrong user name or password. User should stay at the same page and error message should be shown to him.
 - **401 Unauthorized** - User is logged in and has token but this token has expired or user has changed this token. When user tries to access some endpoint that requires user to be logged in server respond with ``401 Unauthorized``. Token should be removed, user should be logged out and redirected to login page.
 - **403 Forbidden** - User is logged in and has valid token, but he tries to access resource he has no access to see with his role.
 - **404 Not Found** - User tries to access, modify, or delete resource that no longer exists in system. User should be redirected to page with information about his trial of accessing non existing resource.