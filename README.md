# API

API built for my talk =]

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

```
NodeJS >= 10.x
npm >= 6.x
MongoDB >= 3.6.4
Docker 18.x
```

### Installing

To run this project on development env you to: 

First install deps

```
npm isntall 
yarn install
```

Then config Database

* Remember to stop mongo service after installation

On Windows : 

* Crate a storage folder and log folder

```
mkdir c:\data\db
mkdir c:\data\log
```

* Create a configuration file

```
 C:\Program Files\MongoDB\Server\3.6\mongod.cfg

mongod.cfg : 
    systemLog:
       destination: file
       path: c:\data\log\mongod.log
    storage:
       dbPath: c:\data\db
```

* Configure Mongodb

```
"C:\Program Files\MongoDB\Server\3.6\bin\mongod.exe" --config "C:\Program Files\MongoDB\Server\3.6\mongod.cfg" --instal
```

*To run your Mongodb 

```
net start MongoDB
net stop MongoDB
```

On Linux : 

Please follow the instructions on : [MongoDB](https://docs.mongodb.com/manual/administration/install-on-linux/)

On MacOS:

```
brew update
brew install mongodb
mkdir -p /data/db
mongod --dbpath <path to data directory>
```

* Run

``` 
mongo --host 127.0.0.1:27017
```

Then run the seed

```
npm run seed -- TODO
```


## Running the tests

On windows install mocha on global

```
TODO
```

## Deployment

For Deploy new containers run: 
```
docker-compose up -d 
```

To rebuild:

```
docker-compose build 

```

Programmers way

```
docker-compose up -d --build
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
