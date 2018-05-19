package io.github.ashayking.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import io.github.ashayking.domain.RandomCity;
import io.github.ashayking.domain.User;
import io.github.ashayking.service.GenericService;

@RestController
@RequestMapping("/springjwt")
public class ResourceController {
	@Autowired
	private GenericService userService;

	@RequestMapping(value = "/cities")
	@PreAuthorize("hasAuthority('ADMIN_USER') or hasAuthority('STANDARD_USER')")
	public List<RandomCity> getUser() {
		return userService.findAllRandomCities();
	}

	@RequestMapping(value = "/users", method = RequestMethod.GET)
	@PreAuthorize("hasAuthority('ADMIN_USER')")
	public List<User> getUsers() {
		return userService.findAllUsers();
	}
}