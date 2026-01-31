package com.netflixclone.config;

import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class StartupLogger implements ApplicationRunner {

    @Override
    public void run(ApplicationArguments args) {
        // #region agent log
        try (var w = new java.io.FileWriter("c:\\Users\\samar\\Desktop\\NETFLIX Clone\\.cursor\\debug.log", true)) {
            w.write("{\"location\":\"StartupLogger.java:run\",\"message\":\"Spring context up\",\"data\":{},\"timestamp\":" + System.currentTimeMillis() + ",\"sessionId\":\"debug-session\",\"hypothesisId\":\"H2,H5\"}\n");
        } catch (Exception e) { /* ignore */ }
        // #endregion
    }
}
