namespace JsPageBackEnd.Models;

public class CarrotPreviewDto
{
    public int Id { get; set; }
    public string ImageUrl { get; set; }
    public string Title { get; set; }
    public string Country { get; set; }
    public double Price { get; set; }
    public bool IsHotSeason { get; set; }
    public bool IsFavourite { get; set; }
}