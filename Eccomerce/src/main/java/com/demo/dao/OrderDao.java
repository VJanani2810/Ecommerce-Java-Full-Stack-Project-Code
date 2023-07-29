package com.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.demo.entity.Order;

public interface OrderDao extends JpaRepository<Order, Long> {

}