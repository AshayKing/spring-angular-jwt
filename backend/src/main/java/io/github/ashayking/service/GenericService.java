package io.github.ashayking.service;

import java.util.List;

import io.github.ashayking.domain.RandomCity;
import io.github.ashayking.domain.User;

public interface GenericService {
	User findByUsername(String username);

	List<User> findAllUsers();

	List<RandomCity> findAllRandomCities();
}