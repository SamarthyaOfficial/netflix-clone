package com.netflixclone;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class NetflixCloneApplication {

    public static void main(String[] args) {
        // #region agent log
        try (var w = new java.io.FileWriter("c:\\Users\\samar\\Desktop\\NETFLIX Clone\\.cursor\\debug.log", true)) {
            w.write("{\"location\":\"NetflixCloneApplication.java:main\",\"message\":\"main entered\",\"data\":{\"argsLength\":" + args.length + "},\"timestamp\":" + System.currentTimeMillis() + ",\"sessionId\":\"debug-session\",\"hypothesisId\":\"H2,H3,H5\"}\n");
        } catch (Exception e) { /* ignore */ }
        // #endregion
        SpringApplication.run(NetflixCloneApplication.class, args);
    }
}
