import { createServer, Model } from "miragejs";
export function makeServer() {
  return createServer({
    models: {
      car: Model, // Define your resources (e.g., cars in your project)
    },

    seeds(server) {
      // Prepopulate the database with sample data
      server.create("car", { id: 1, name: "Tesla Model S", price: "$100/day" });
      server.create("car", { id: 2, name: "BMW X5", price: "$80/day" });
      server.create("car", { id: 3, name: "Audi A6", price: "$90/day" });
    },

    routes() {
      this.namespace = "api"; // Set a namespace for API routes

      // Define API endpoints
      this.get("/cars", (schema) => {
        return schema.cars.all();
      });

      this.post("/cars", (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        return schema.cars.create(attrs);
      });

      // Add other routes as needed
    },
  });
}
