package com.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.demo.entity.OrderProduct;

public interface OrderProductDao extends JpaRepository<OrderProduct, Long> 
{

}
