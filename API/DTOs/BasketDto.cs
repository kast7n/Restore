using System;

namespace API.DTOs;

public class BasketDto
{
    public required string Basketid {get; set;}
    public List<BasketItemDto> Items {get; set;} = [];

}
