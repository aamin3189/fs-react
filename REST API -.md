REST API -

HTTP - Hypertext Transfer Protocol

Send/Recive data 

REST API 

4 Primary methods

GET - Read Data
POST - Create Data
PUT - Update Data
DELETE - Delete Data


Employee LIST 

[
    {
        "id": "1",
        name: "John",
        salary: "10000",
        age: "30"
    },
    {
        "id": "2",
        name: "Mike",
        salary: "20000",
        age: "40"
    },
    {
        "id": "3",
        name: "Smith",
        salary: "30000",
        age: "50"
    }
]

=========================================================

GET All the employees -

GET /employees [DOES'T HAVE REQUEST BODY]
200 - Array
[
    {
        "id": "1",
        name: "John",
        salary: "10000",
        age: "30"
    },
    {
        "id": "2",
        name: "Mike",
        salary: "20000",
        age: "40"
    },
    {
        "id": "3",
        name: "Smith",
        salary: "30000",
        age: "50"
    }
]

GET /employee/1

200 - Object 
{
    "id": "1",
    name: "John",
    salary: "10000",
    age: "30"
}
=========================================================
POST -

Create a new employee

201 - POST - /employees [HAS REQUEST BODY]
{
    name: "Johnathon",
    salary: "10000",
    age: "30"
}

Return 

{
    "id": "4",
    name: "Johnathon",
    salary: "10000",
    age: "30"
}
=========================================================

200 - PUT -

PUT /employees/1 [HAS REQUEST BODY]
{
    "id": "1",
    name: "John",
    salary: "15000",
    age: "32"
}

Return 
{
    "id": "1",
    name: "John",
    salary: "15000",
    age: "32"
}

=========================================================

200 - DELETE -

DELETE /employees/3 

{
    "id": "3",
    name: "Smith",
    salary: "30000",
    age: "50"
}


=========================================================

Response Method

200 - OK
201 - Created
204 - No Content
400 - Bad Request
404 - Not Found
500 - Internal Server Error

