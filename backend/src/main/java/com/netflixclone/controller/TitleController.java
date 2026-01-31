package com.netflixclone.controller;

import com.netflixclone.dto.TitleDto;
import com.netflixclone.service.CatalogService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/titles")
public class TitleController {

    private final CatalogService catalogService;

    public TitleController(CatalogService catalogService) {
        this.catalogService = catalogService;
    }

    @GetMapping
    public ResponseEntity<List<TitleDto>> getTitles(@RequestParam(required = false) Long categoryId) {
        return ResponseEntity.ok(catalogService.getTitles(categoryId));
    }

    @GetMapping("/{id}")
    public ResponseEntity<TitleDto> getTitleById(@PathVariable Long id) {
        return ResponseEntity.ok(catalogService.getTitleById(id));
    }

    @GetMapping("/featured")
    public ResponseEntity<List<TitleDto>> getFeaturedTitles() {
        // #region agent log
        try (var w = new java.io.FileWriter("c:\\Users\\samar\\Desktop\\NETFLIX Clone\\.cursor\\debug.log", true)) {
            w.write("{\"location\":\"TitleController.java:getFeaturedTitles\",\"message\":\"endpoint called\",\"data\":{},\"timestamp\":" + System.currentTimeMillis() + ",\"sessionId\":\"debug-session\",\"hypothesisId\":\"H4\"}\n");
        } catch (Exception e) { /* ignore */ }
        // #endregion
        try {
            return ResponseEntity.ok(catalogService.getFeaturedTitles());
        } catch (Exception e) {
            // #region agent log
            try (var w = new java.io.FileWriter("c:\\Users\\samar\\Desktop\\NETFLIX Clone\\.cursor\\debug.log", true)) {
                w.write("{\"location\":\"TitleController.java:getFeaturedTitles\",\"message\":\"exception caught\",\"data\":{\"error\":\"" + e.getClass().getName() + "\",\"message\":\"" + e.getMessage().replace("\"", "\\\"") + "\"},\"timestamp\":" + System.currentTimeMillis() + ",\"sessionId\":\"debug-session\",\"hypothesisId\":\"H4\"}\n");
            } catch (Exception ex) { /* ignore */ }
            // #endregion
            throw e;
        }
    }
}
