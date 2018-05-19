package io.github.ashayking.repository;

import org.springframework.data.repository.CrudRepository;

import io.github.ashayking.domain.RandomCity;

public interface RandomCityRepository extends CrudRepository<RandomCity, Long> {
}