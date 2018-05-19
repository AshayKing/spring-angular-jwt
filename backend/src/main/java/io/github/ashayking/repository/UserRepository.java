package io.github.ashayking.repository;

import org.springframework.data.repository.CrudRepository;

import io.github.ashayking.domain.User;

public interface UserRepository extends CrudRepository<User, Long> {
	User findByUsername(String username);
}