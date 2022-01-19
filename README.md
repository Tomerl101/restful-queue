

# RESTFUL-QUEUE
This is a restful queue.
Project use nestjs (TS) and in memory database for the queues.
The implementation can be found in the `/apps/restful-queue/src/queue` folder.
The tests can be found in the `/apps/restful-queue/src/queue/**.spec.ts` files.

## USAGE
(Note: make sure to run the commands below in the root folder of the project)
1. `npm install`
2. `nx run restful-queue:serve`

## API

Create new queue:
* POST `/queue/:queue_name` - Body: { "name": "<queue_name>" } - Response: 200:{ "status": "Queue created" } 409:{ "status": "Queue already exists" }

Get queue snapshot by name:
* GET `/queue/:queue_name/snapshot` - Response: 200:{ string[] } 404:{ "status": "Queue not found" }

Enqueue from queue by name:
* POST `/queue/:queue_name` - Body: raw text or json string` - Response: 200:{item: String} 404:{ "status": "Queue not found" }

Deququ from queue by name:
* POST `/queue/:queue_name` - Body: raw text or json string` - Response: 200:{ last_dequeued_item: String } 404:{ "status": "Queue not found" }

### Example
```bash
http://localhost:3333/queue - Body: { "name": "test" } # Create queue
http://localhost:3333/queue/test/enqueue - Body: "Hello World" # Enqueue
http://localhost:3333/queue/test/dequeue # Dequeue
http://localhost:3333/queue/test/snapshot # Get snapshot
```

## TEST
```bash
 nx run restful-queue:test
```
