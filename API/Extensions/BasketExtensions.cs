using System;
using API.DTOs;
using API.Entities;

namespace API.Extensions;

public static class BasketExtensions
{
    public static BasketDto toDto(this Basket basket){
            return new BasketDto{
                Basketid = basket.Basketid,
                Items = basket.Items.Select(i => new BasketItemDto{
                    ProductId = i.ProductId,
                    Name = i.Product.Name,
                    Price = i.Product.Price,
                    PictureUrl = i.Product.PictureUrl,
                    Brand = i.Product.Brand,
                    Type = i.Product.Type,
                    Quantity = i.Quantity
                }).ToList()
            };
    }
}
