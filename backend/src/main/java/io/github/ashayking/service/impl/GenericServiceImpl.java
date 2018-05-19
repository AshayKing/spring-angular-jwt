package io.github.ashayking.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import io.github.ashayking.domain.RandomCity;
import io.github.ashayking.domain.User;
import io.github.ashayking.repository.RandomCityRepository;
import io.github.ashayking.repository.UserRepository;
import io.github.ashayking.service.GenericService;

@Service
public class GenericServiceImpl implements GenericService {
	@Autowired
	private UserRepository userRepository;

	@Autowired
	private RandomCityRepository randomCityRepository;

	@Override
	public User findByUsername(String username) {
		return userRepository.findByUsername(username);
	}

	@Override
	public List<User> findAllUsers() {
		return (List<User>) userRepository.findAll();
	}

	@Override
	public List<RandomCity> findAllRandomCities() {
		return (List<RandomCity>) randomCityRepository.findAll();
	}
}