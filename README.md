# Assignment_project
This Project entails the designing of a REST interface using a user's name, phone number, and timings. Technologies used were REST API using mongodb,expressjs and nodejs.

In the models folder the Post file contains the schema used for the database. The database  was setup on cloud using mongodb Atlas, which is a cloud based database service provider. The routes folder contains the posts file which contains various routes asked by the user.

**Images of testing via postman are uploaded in the repoisitory**

The end pointd added were -
1. To book a ticket using a user’s name, phone number, and timings.
The user's details were taken, with proper vaidation and were stored on the database.
It was done using POST request.

2. Updation of timing of tickets was done using the ticketid, wherein the the id was 
asked from the user and on the basis of that updation was carried out. This was done using
PATCH request.

3. To view all the tickets of a particular time, the time was asked by the user which comprises
of date, hours and minutes. On the basis of it find function was used and reults were responded
back, it was done using GET request.

4. To delete a particular ticket, the user provided his ticketid which was searched in the database
using find function and was deleted using remove function. It was done using DELETE request.

5. To view a user's details on the basis of his/her ticketid, the ticketid was asked from the user
and was displayed back to the user after using find function. It was carried out using GET request.
