package com.accenture.client;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class KopeeteariaDashboardApplication extends SpringBootServletInitializer {

	public static void main(String[] args) {
		SpringApplication.run(KopeeteariaDashboardApplication.class, args);
	}
	
	// Override method for Tomcat deployment
	@Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
        return builder.sources(KopeeteariaDashboardApplication.class);
    }

}
