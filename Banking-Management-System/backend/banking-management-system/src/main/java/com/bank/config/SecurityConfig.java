package com.bank.config;

import org.springframework.context.annotation.Bean;

import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.List;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.bank.security.CustomUserDetailsService;
import com.bank.security.jwt.JwtAuthenticationFilter;

import lombok.RequiredArgsConstructor;

@Configuration
@EnableMethodSecurity
@RequiredArgsConstructor
public class SecurityConfig {

	private final JwtAuthenticationFilter jwtAuthenticationFilter;

	private final CustomUserDetailsService customUserDetailsService;
	
    @Bean
    public PasswordEncoder passwordEncoder() {

        return new BCryptPasswordEncoder();

    }
    
    
    @Bean
    CorsConfigurationSource corsConfigurationSource() {

        CorsConfiguration configuration = new CorsConfiguration();

        configuration.setAllowedOrigins(
                List.of("http://localhost:5173")
        );

        configuration.setAllowedMethods(
                List.of(
                        "GET",
                        "POST",
                        "PUT",
                        "DELETE",
                        "OPTIONS"
                )
        );

        configuration.setAllowedHeaders(
                List.of("*")
        );

        configuration.setAllowCredentials(true);

        UrlBasedCorsConfigurationSource source =
                new UrlBasedCorsConfigurationSource();

        source.registerCorsConfiguration("/**", configuration);

        return source;
    }
    
    

    @Bean
    public AuthenticationProvider authenticationProvider() {

        DaoAuthenticationProvider provider =
                new DaoAuthenticationProvider();

        provider.setUserDetailsService(customUserDetailsService);

        provider.setPasswordEncoder(passwordEncoder());

        return provider;

    }
    
    
    
    
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http)
            throws Exception {

        http
                .cors(Customizer.withDefaults())

                .csrf(AbstractHttpConfigurer::disable)

                .sessionManagement(session ->
                        session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))

                .authenticationProvider(authenticationProvider())

                .authorizeHttpRequests(auth -> auth

                        .requestMatchers(HttpMethod.OPTIONS, "/**").permitAll()

                        .requestMatchers(
                                "/api/auth/login",
                                "/api/auth/register",
                                "/swagger-ui/**",
                                "/v3/api-docs/**"
                        ).permitAll()

                        .requestMatchers("/api/customer/**")
                        .hasRole("CUSTOMER")

                        .requestMatchers("/api/employee/**")
                        .hasAnyRole(
                                "EMPLOYEE",
                                "BRANCH_MANAGER",
                                "OPERATIONS_MANAGER"
                        )

                        .requestMatchers("/api/loan/**")
                        .hasAnyRole(
                                "LOAN_OFFICER",
                                "ADMIN"
                        )

                        .requestMatchers("/api/admin/**")
                        .hasRole("ADMIN")

                        .requestMatchers(HttpMethod.GET, "/api/reports/**")
                        .hasAnyRole(
                                "ADMIN",
                                "AUDITOR"
                        )

                        .anyRequest()
                        .authenticated()
                )

                .addFilterBefore(
                        jwtAuthenticationFilter,
                        UsernamePasswordAuthenticationFilter.class
                )

                .httpBasic(AbstractHttpConfigurer::disable);

        return http.build();
    }
}