using JsPageBackEnd.Models;

namespace JsPageBackEnd.Data;

public static class PlanesData
{
    public static List<Plane> Planes = new()
    {
        new Plane { PlaneId = 1, Name = "Boeing 747", FuelCapacityLiters = 50000, PassengersCount = 416, Description = "Large commercial aircraft" },
        new Plane { PlaneId = 2, Name = "Airbus A380", FuelCapacityLiters = 30000, PassengersCount = 853, Description = "Largest passenger airplane" },
        new Plane { PlaneId = 3, Name = "Boeing 787", FuelCapacityLiters = 20000, PassengersCount = 242, Description = "Long-range aircraft" },
        new Plane { PlaneId = 4, Name = "Airbus A320", FuelCapacityLiters = 15000, PassengersCount = 150, Description = "Short-haul aircraft" },
        new Plane { PlaneId = 5, Name = "Embraer E190", FuelCapacityLiters = 10000, PassengersCount = 114, Description = "Regional aircraft" },
        new Plane { PlaneId = 6, Name = "Cessna 172", FuelCapacityLiters = 4000, PassengersCount = 4, Description = "Small single-engine aircraft" },
        new Plane { PlaneId = 7, Name = "Bombardier CRJ-900", FuelCapacityLiters = 8000, PassengersCount = 90, Description = "Regional passenger aircraft" },
        new Plane { PlaneId = 8, Name = "Cessna 208", FuelCapacityLiters = 6000, PassengersCount = 13, Description = "Light transport aircraft" },
        new Plane { PlaneId = 9, Name = "Piper PA-28", FuelCapacityLiters = 3000, PassengersCount = 4, Description = "Training aircraft" },
        new Plane { PlaneId = 10, Name = "Beechcraft King Air", FuelCapacityLiters = 5000, PassengersCount = 8, Description = "Business travel aircraft" }
    };
}