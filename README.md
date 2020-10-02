# Interview.ShippingApp
# Information

Solution created using 
    vscode
    dotnet 
    dotnet ef
    docker
    npm 

## Setup 

> dotnet new reactredux
> dotnet build
> dotnet run

## EntityFramework

Added the following entity packages

    dotnet add package Microsoft.EntityFrameworkCore  
    dotnet add package Microsoft.EntityFrameworkCore.tools 
    dotnet add package Microsoft.EntityFrameworkCore.SqlServer

Setup Models with Model and ModelContext
Added reference to db in StartUp.cs ConfigureServices Method
> dotnet ef migrations add ProductModel

## Create A DB using docker

> docker run -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=Pa55w0rd2020' -e 'MSSQL_PID=Express' -p 1433:1433 -d mcr.microsoft.com/mssql/server:2017-latest-ubuntu
![Db Creation](/Images/DB_Creation.jpg "Db Creation")
![Writing to DB](/Images/Writing_To_DB.jpg "Writing to DB")

## Docker

Username kfarrugia

Working Directory './Interview.ShippingApp'

> docker build -t kfarrugia/shippingapp .  
> docker run  -p 8080:80 kfarrugia/shippingapp
> docker-compose up
