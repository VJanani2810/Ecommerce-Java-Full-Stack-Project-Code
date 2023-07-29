package com.demo.service;

import java.util.List;

import com.demo.entity.User;


public interface UserService {
	
  User addUser(User user);
  
  List<User> findAllUsers();
  
  User editUser(User user, long id);
  
  User findUserById(long id);
  
  void deleteUser(long id);
  
  User findByUsername(String name);
}