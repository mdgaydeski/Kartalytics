FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim AS base
WORKDIR /app

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS build
RUN curl -sL https://deb.nodesource.com/setup_10.x |  bash -
RUN apt-get install -y nodejs
WORKDIR /src
COPY ["Kartalytics.csproj", ""]
RUN dotnet restore "./Kartalytics.csproj"
COPY . .
WORKDIR "/src/."
RUN dotnet build "Kartalytics.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Kartalytics.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Kartalytics.dll"]