# Get Base Image (Full .NET Core SDK)
FROM mcr.microsoft.com/dotnet/core/sdk:3.1 AS base
WORKDIR /app
ENV ASPNETCORE_URLS=http://+:80  
EXPOSE 80

# Copy csproj and restore
FROM mcr.microsoft.com/dotnet/core/sdk:3.1 AS build
WORKDIR /src
COPY Interview.ShippingApp.sln ./
COPY Utilities/*.csproj ./Utilities/
COPY ShippingApp/*.csproj ./ShippingApp/

RUN dotnet restore

# Copy everything else and build
COPY . .

WORKDIR /src/Utilities
RUN dotnet build -c Release -o /app

WORKDIR /src/ShippingApp

# Fetch and install Node 10. Make sure to include the --yes parameter 
# to automatically accept prompts during install, or it'll fail.
RUN curl --silent --location https://deb.nodesource.com/setup_10.x | bash -
RUN apt-get install --yes nodejs

RUN dotnet build -c Release -o /app

FROM build AS publish
RUN dotnet publish -c Release -o /app

# Generate runtime image
FROM base AS final
WORKDIR /app
COPY --from=publish /app .

# To run the app, run `ShippingApp.dll`, which we just copied over.
ENTRYPOINT ["dotnet", "ShippingApp.dll"]