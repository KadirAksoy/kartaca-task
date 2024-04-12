package com.kadiraksoy.Kartacabackend.model;

import com.kadiraksoy.Kartacabackend.dto.ScriptParams;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Earthquake {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Double lat;
    private Double lon;
    private Double intensity;

    public static Earthquake eventToEarthquakeEntity(ScriptParams scriptParams){
        return Earthquake.builder()
                .lat(scriptParams.getLat())
                .lon(scriptParams.getLon())
                .intensity(scriptParams.getIntensity())
                .build();
    }
}