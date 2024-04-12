package com.kadiraksoy.Kartacabackend.repository;


import com.kadiraksoy.Kartacabackend.model.Earthquake;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EarthquakeRepository extends JpaRepository<Earthquake, Long> {
}
