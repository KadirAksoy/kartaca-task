package com.kadiraksoy.Kartacabackend.service;

import com.kadiraksoy.Kartacabackend.dto.ScriptParams;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import com.kadiraksoy.Kartacabackend.kafka.producer.KafkaProducer;

import java.util.Random;

@Service
@RequiredArgsConstructor
@Slf4j
public class ScriptService {

    private final KafkaProducer kafkaProducer;


    public ScriptParams sentScript(ScriptParams scriptParams){
        kafkaProducer.produceScriptData(scriptParams);
        log.info("lat, lon ve şiddet bilgisi gönderildi.");
        return scriptParams;
    }

    public ScriptParams randomSentScript(){
        Random random = new Random();
        double lat = -90 + (90 - (-90)) * random.nextDouble();
        double lon = -180 + (180 - (-180)) * random.nextDouble();
        double intensity = 10 * random.nextDouble();

        ScriptParams createdScriptParams = ScriptParams.builder()
                .lat(lat)
                .lon(lon)
                .intensity(intensity)
                .build();
        log.info("CreatedScriptParams oluşturuldu.");

        kafkaProducer.produceScriptData(createdScriptParams);
        return createdScriptParams;
    }
}