using JsPageBackEnd.Models;

namespace JsPageBackEnd.Data;

public static class CarrotsData
{
    public static List<Carrot> Carrots = new()
    {
        new Carrot
        {
            Id = 1,
            ImageUrl = "https://chantenay.co.uk/wp-content/uploads/Chantenay-1-300x300.jpg",
            Title = "Chantenay Carrots",
            Description = "Short and stout with a deep orange color. They have a slightly sweet flavor and are often used in soups and stews.",
            Country = "France",
            Price = 2.99,
            IsHotSeason = true,
            IsFavourite = true,
            Specific = new List<CarrotSpecific>
            {
                new()
                {
                    Title = "Washed",
                    Value = "washed",
                    BonusPricePerKilogram = 1
                },
                new()
                {
                    Title = "Peeled",
                    Value = "peeled",
                    BonusPricePerKilogram = 2
                }
            }
        },
        new Carrot
        {
            Id = 2,
            ImageUrl = "https://www.butter-n-thyme.com/wp-content/uploads/2022/10/types-of-carrots-Imperator-Carrot-Variety.jpg",
            Title = "Imperator Carrots",
            Description = "Long and slender with a tapered end. They are named after the town of Imperator, Germany, where it was first grown. This type of carrot is popular in Europe and North America. They have a deep orange color and a sweet flavor.",
            Country = "Germany",
            Price = 3.49,
            IsHotSeason = false,
            IsFavourite = false,
            Specific = new List<CarrotSpecific>
            {
                new()
                {
                    Title = "Washed",
                    Value = "washed",
                    BonusPricePerKilogram = 1.5
                },
                new()
                {
                    Title = "Peeled",
                    Value = "peeled",
                    BonusPricePerKilogram = 3
                }
            }
        },
        new Carrot
        {
            Id = 3,
            ImageUrl = "https://www.butter-n-thyme.com/wp-content/uploads/2022/10/types-of-carrots-Nantes-Carrot-Variety.jpg",
            Title = "Nantes Carrots",
            Description = "Long, thin, and tapered, with a deep orange color. They are named for the city of Nantes in France, where they were first developed. They are sweet and crunchy, with a slightly spicy flavor.",
            Country = "France",
            Price = 2.99,
            IsHotSeason = true,
            IsFavourite = false,
            Specific = new List<CarrotSpecific>
            {
                new()
                {
                    Title = "Washed",
                    Value = "washed",
                    BonusPricePerKilogram = 1
                },
                new()
                {
                    Title = "Peeled",
                    Value = "peeled",
                    BonusPricePerKilogram = 2
                }
            }
        },
        new Carrot
        {
            Id = 4,
            ImageUrl = "https://www.butter-n-thyme.com/wp-content/uploads/2022/10/Babette-Carrots-types-of-carrots.jpg",
            Title = "Baby Carrots",
            Description = "Little finger carrots that have been harvested early. They are usually orange but can also be white, yellow, or red.",
            Country = "Ukraine",
            Price = 1.99,
            IsHotSeason = false,
            IsFavourite = false,
            Specific = new List<CarrotSpecific>
            {
                new()
                {
                    Title = "Washed",
                    Value = "washed",
                    BonusPricePerKilogram = 0.5
                },
                new()
                {
                    Title = "Peeled",
                    Value = "peeled",
                    BonusPricePerKilogram = 1
                }
            }
        },
        new Carrot
        {
            Id = 5,
            ImageUrl = "https://www.butter-n-thyme.com/wp-content/uploads/2022/10/Purple-Dragon-Carrots-types-of-carrots.jpg",
            Title = "Purple Dragon Carrots",
            Description = "Deep purple on the outside and bright orange on the inside. They have a sweet flavor with a hint of spice.",
            Country = "United States",
            Price = 4.99,
            IsHotSeason = false,
            IsFavourite = true,
            Specific = new List<CarrotSpecific>
            {
                new()
                {
                    Title = "Washed",
                    Value = "washed",
                    BonusPricePerKilogram = 0
                },
                new()
                {
                    Title = "Peeled",
                    Value = "peeled",
                    BonusPricePerKilogram = 2
                }
            }
        },
        new Carrot
        {
            Id = 6,
            ImageUrl = "https://www.butter-n-thyme.com/wp-content/uploads/2022/10/Autumn-King-Carrot-types-of-carrots.jpg",
            Title = "Solar Yellow Carrots",
            Description = "Bright yellow on the outside and inside. They have a sweet flavor with a hint of spice.",
            Country = "Poland",
            Price = 4.99,
            IsHotSeason = true,
            IsFavourite = false,
            Specific = new List<CarrotSpecific>
            {
                new()
                {
                    Title = "Washed",
                    Value = "washed",
                    BonusPricePerKilogram = 2
                },
                new()
                {
                    Title = "Peeled",
                    Value = "peeled",
                    BonusPricePerKilogram = 3
                }
            }
        },
        new Carrot
        {
            Id = 7,
            ImageUrl = "https://www.butter-n-thyme.com/wp-content/uploads/2022/10/Sugarsnax-54-Carrots-types-of-carrots.jpg",
            Title = "Sugar Snax Carrots",
            Description = "Long and slender with a tapered end. They are very sweet and crunchy.",
            Country = "United States",
            Price = 3.49,
            IsHotSeason = false,
            IsFavourite = false,
            Specific = new List<CarrotSpecific>
            {
                new()
                {
                    Title = "Washed",
                    Value = "washed",
                    BonusPricePerKilogram = 1.5
                },
                new()
                {
                    Title = "Peeled",
                    Value = "peeled",
                    BonusPricePerKilogram = 2.5
                }
            }
        },
        new Carrot
        {
            Id = 8,
            ImageUrl = "https://www.butter-n-thyme.com/wp-content/uploads/2022/10/Hercules-Carrots-types-of-carrots.jpg",
            Title = "Sweet Crisp Carrots",
            Description = "Medium length with a tapered end and broad shoulders. They have a rich, sweet flavor.",
            Country = "Canada",
            Price = 3.99,
            IsHotSeason = false,
            IsFavourite = false,
            Specific = new List<CarrotSpecific>
            {
                new()
                {
                    Title = "Washed",
                    Value = "washed",
                    BonusPricePerKilogram = 1
                },
                new()
                {
                    Title = "Peeled",
                    Value = "peeled",
                    BonusPricePerKilogram = 2
                }
            }
        },
    };
}