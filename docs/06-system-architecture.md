# System architecture

The project is a modular monolith. Next.js provides the user interface; Spring Boot provides versioned REST APIs. Retailer data sits behind `PlatformAdapter`, allowing a mock provider now and authorised provider adapters later. PostgreSQL/Flyway is the persistence foundation.
