package com.demo.service;

import java.util.List;

import com.demo.entity.Cart;

public interface CartService {
	
	Cart addCartToUser(Cart cart, long idUser);
	
	void deleteCart(long id);
	
	List<Cart> findCartsForUser(long idUser);
	
	Cart findCartById(long id);
	
	void removeFromCart(long idCart, long idUser);
	
	Cart findByCartName(String name);

}