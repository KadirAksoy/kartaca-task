package com.kadiraksoy.Kartacabackend.service;


import com.kadiraksoy.Kartacabackend.model.Earthquake;
import com.kadiraksoy.Kartacabackend.repository.EarthquakeRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
public class EarthquakeService {

    private final EarthquakeRepository earthquakeRepository;

    public void save(Earthquake earthquake){
        Earthquake savedEntity = earthquakeRepository.save(earthquake);
        log.info("EarthquakeService.save saved Id: {}", savedEntity.getId());
    }
}