using JsPageBackEnd.Data;
using JsPageBackEnd.Models;
using Microsoft.AspNetCore.Mvc;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.MapGet("/planes", (
    [FromQuery(Name = "q")] string searchQuery,
    [FromQuery(Name = "s")] string sortField) =>
{
    var planes = PlanesData.Planes;

    if (!string.IsNullOrWhiteSpace(searchQuery))
        planes = planes.Where(p =>
            p.Name.ToLower().Contains(searchQuery.ToLower()))
            .ToList();

    if (!string.IsNullOrWhiteSpace(sortField))
        planes = sortField.ToLower() switch
        {
            "name" => planes.OrderBy(p => p.Name).ToList(),
            "fuelcapacityliters" => planes.OrderBy(p => p.FuelCapacityLiters).ToList(),
            "passengerscount" => planes.OrderBy(p => p.PassengersCount).ToList(),
            _ => planes
        };
    
    return planes;
});

app.MapGet("/planes/{id:int}", (int id) => PlanesData.Planes.FirstOrDefault(plane => plane.PlaneId == id));

app.MapGet("/planes/count", () => PlanesData.Planes.Sum(plane => plane.PassengersCount));

app.MapPost("/planes", ([FromBody] Plane plane) =>
{
    PlanesData.Planes.Add(plane);
    return Results.Ok();
});

app.MapPut("/planes", ([FromBody] Plane request) =>
{
    var plane = PlanesData.Planes.FirstOrDefault(p => p.PlaneId == request.PlaneId)!;

    plane.Description = request.Description;
    plane.Name = request.Name;
    plane.PassengersCount = request.PassengersCount;
    plane.FuelCapacityLiters = request.FuelCapacityLiters;

    return Results.Ok();
});

app.MapDelete("/planes/{id:int}", (int id) => {
    var plane = PlanesData.Planes.FirstOrDefault(p => p.PlaneId == id)!;
    
    PlanesData.Planes.Remove(plane);
    
    return Results.Ok();
});

app.UseCors(policy =>
    policy
        .AllowAnyOrigin()
        .AllowAnyHeader()
        .AllowAnyMethod());

app.Run();