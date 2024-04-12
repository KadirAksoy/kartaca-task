package com.kadiraksoy.Kartacabackend.dto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ScriptParams {

    private Double lat;
    private Double lon;
    private Double intensity;

    public void setLat(Double lat) {
        if (lat < -90 || lat > 90) {
            throw new IllegalArgumentException("Latitude must be between -90 and 90 degrees.");
        }
        this.lat = lat;
    }

    public void setLon(Double lon) {
        if (lon < -180 || lon > 180) {
            throw new IllegalArgumentException("Longitude must be between -180 and 180 degrees.");
        }
        this.lon = lon;
    }
}