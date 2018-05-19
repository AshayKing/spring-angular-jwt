package io.github.ashayking.repository;

import org.springframework.data.repository.CrudRepository;

import io.github.ashayking.domain.Role;

public interface RoleRepository extends CrudRepository<Role, Long> {
}