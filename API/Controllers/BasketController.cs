using System;
using API.Data;
using API.DTOs;
using API.Entities;
using API.Extensions;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

public class BasketController(StoreContext context) : BaseApiController
{
    [HttpGet]
    public async Task<ActionResult<BasketDto>> GetBasket(){
        var basket = await RetrieveBasket();

        if(basket == null) return NoContent();

        return basket.toDto();

    }

    [HttpPost]
    public async Task<ActionResult<BasketDto>> AddItemToBasket(int productId, int quantity){


        var basket = await RetrieveBasket();
        
        basket ??= CreateBasket();

        var product = await context.Products.FindAsync(productId);

        if(product == null) return BadRequest("Problem adding item to basket");

        basket.AddItem(product, quantity);

        var result = await context.SaveChangesAsync() > 0;

        if(result) return CreatedAtAction(nameof(GetBasket), basket.toDto());
        
        return BadRequest("Problem updating basket");
    }

    
    private Basket CreateBasket()
    {
        var basketId = Guid.NewGuid().ToString();
        var cookieOptions = new CookieOptions{
            IsEssential = true,
            Expires = DateTime.UtcNow.AddDays(30)
        };
        Response.Cookies.Append("basketId", basketId, cookieOptions);
        var basket = new Basket {Basketid = basketId};
        context.Baskets.Add(basket);

        return basket;
    }

    private async Task<Basket?> RetrieveBasket()
    {
        return await context.Baskets
            .Include(x => x.Items)
            .ThenInclude(x => x.Product)
            .FirstOrDefaultAsync(x => x.Basketid == Request.Cookies["basketId"]);
    }

    [HttpDelete]
    public async Task<ActionResult> DeleteBasketItem(int productId, int quantity){
        var basket = await RetrieveBasket();
        if(basket == null) return BadRequest("No basket available, try adding an item to the basket");
        basket.RemoveItem(productId, quantity);
        var result = await context.SaveChangesAsync() > 0;
        if(result) return Ok();

        return BadRequest("Problem removing item from basket");
    }
}

