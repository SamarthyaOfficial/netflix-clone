package com.netflixclone.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.Map;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<Map<String, String>> handleIllegalArgument(IllegalArgumentException e) {
        // #region agent log
        try (var w = new java.io.FileWriter("c:\\Users\\samar\\Desktop\\NETFLIX Clone\\.cursor\\debug.log", true)) {
            w.write("{\"location\":\"GlobalExceptionHandler.java:handleIllegalArgument\",\"message\":\"exception handled\",\"data\":{\"error\":\"" + e.getMessage().replace("\"", "\\\"") + "\"},\"timestamp\":" + System.currentTimeMillis() + ",\"sessionId\":\"debug-session\",\"hypothesisId\":\"H4\"}\n");
        } catch (Exception ex) { /* ignore */ }
        // #endregion
        return ResponseEntity
                .status(HttpStatus.BAD_REQUEST)
                .body(Map.of("error", e.getMessage()));
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<Map<String, String>> handleGenericException(Exception e) {
        // #region agent log
        try (var w = new java.io.FileWriter("c:\\Users\\samar\\Desktop\\NETFLIX Clone\\.cursor\\debug.log", true)) {
            w.write("{\"location\":\"GlobalExceptionHandler.java:handleGenericException\",\"message\":\"generic exception\",\"data\":{\"type\":\"" + e.getClass().getName() + "\",\"error\":\"" + e.getMessage().replace("\"", "\\\"") + "\"},\"timestamp\":" + System.currentTimeMillis() + ",\"sessionId\":\"debug-session\",\"hypothesisId\":\"H4\"}\n");
        } catch (Exception ex) { /* ignore */ }
        // #endregion
        return ResponseEntity
                .status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(Map.of("error", e.getMessage() != null ? e.getMessage() : "Internal server error"));
    }
}
