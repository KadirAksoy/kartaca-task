package com.kadiraksoy.Kartacabackend.kafka.producer;

import com.kadiraksoy.Kartacabackend.dto.ScriptParams;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Component;


@Component
@RequiredArgsConstructor
@Slf4j
public class KafkaProducer {

    //Kafka ile iletişim kurmak için kullanılan KafkaTemplate nesnesini enjekte eder.
    // Bu nesne, mesajları belirtilen konulara göndermek için kullanılır.
    private final KafkaTemplate<String, Object> kafkaTemplate;
    private static final String TOPIC_NAME = "script-topic";

    public void produceScriptData(ScriptParams scriptParams) {
        kafkaTemplate.send(TOPIC_NAME, scriptParams);
        log.info("İşlem başarılı.");
    }



}