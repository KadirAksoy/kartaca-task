package com.kadiraksoy.Kartacabackend.kafka.consumer;

import com.kadiraksoy.Kartacabackend.dto.ScriptParams;
import com.kadiraksoy.Kartacabackend.model.Earthquake;
import com.kadiraksoy.Kartacabackend.service.EarthquakeService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
@Slf4j
public class ScriptDataConsumer {

    private final EarthquakeService earthquakeService;

    // containerfactory eklenebilir hata durumunda
    @KafkaListener(topics = "script-topic", groupId = "earthquake-consumer-group")
    public void consumeScriptData(ScriptParams scriptParams){
        Earthquake entity = Earthquake.eventToEarthquakeEntity(scriptParams);
        if(entity.getIntensity() != null){
            log.info("Entity başarılı bir şekilde alındı");
        }

        earthquakeService.save(entity);
        log.info("Deprem verisi kaydedildi, şiddeti:" + entity.getIntensity());

    }
}
