#FROM openjdk:17-jdk-alpine
#ARG JAR_FILE=target/*.jar
#COPY ./target/script-service.jar script-service.jar
#ENTRYPOINT ["java","-jar","/script-service.jar"]


FROM openjdk:17-jdk-alpine as build
RUN apk add --no-cache maven
ARG JAR_FILE=target/*.jar
COPY ./target/kartaca-backend.jar kartaca-backend.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","/kartaca-backend.jar"]
