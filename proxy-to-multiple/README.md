# krakend-routing

Route a request to Krakend proxy and send it to multiple containers or services; make a request to krakend and proxy this request to a first server, serv1, which will respond and then route it to serv2 which krakend my hear back or not (use shadow parameter)

To start the containers:
```sh
docker-compose up
```


To test:
```sh
curl -X GET "http://localhost:8080"
curl -X POST -d '{"a":"2"}' -H "Content-Type: application/json" "http://localhost:8080"
```