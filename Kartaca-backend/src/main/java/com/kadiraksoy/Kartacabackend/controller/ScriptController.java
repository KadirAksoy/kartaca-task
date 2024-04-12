package com.kadiraksoy.Kartacabackend.controller;

import com.kadiraksoy.Kartacabackend.dto.ScriptParams;
import com.kadiraksoy.Kartacabackend.service.ScriptService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/script")
@RequiredArgsConstructor
public class ScriptController {

    private final ScriptService scriptService;

    @PostMapping("/sent")
    public ResponseEntity<ScriptParams> sentScript(@RequestBody ScriptParams scriptParams){
        scriptService.sentScript(scriptParams);
        return ResponseEntity.ok(scriptParams);
    }


    @GetMapping("/randomScript")
    public ResponseEntity<ScriptParams> randomSentScript(){
        ScriptParams scriptParams = scriptService.randomSentScript();
        return ResponseEntity.ok(scriptParams);

    }
}