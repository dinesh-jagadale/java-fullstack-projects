package com.bank.security;

import java.util.Collection;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.bank.entity.Role;
import com.bank.entity.User;

public class CustomUserDetails implements UserDetails {

    private final User user;

    public CustomUserDetails(User user) {
        this.user = user;
    }

    public User getUser() {
        return user;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {

        Set<Role> roles = user.getRoles();

        return roles.stream()
                .map(role -> new SimpleGrantedAuthority(
                        role.getName().name()))
                .collect(Collectors.toSet());

    }

    @Override
    public String getPassword() {

        return user.getPassword();

    }

    @Override
    public String getUsername() {

        /*
         * Login using username.
         * Change to user.getEmail()
         * if you want email-based login.
         */

        return user.getUsername();

    }

    @Override
    public boolean isAccountNonExpired() {

        return Boolean.TRUE.equals(
                user.getAccountNonExpired());

    }

    @Override
    public boolean isAccountNonLocked() {

        return Boolean.TRUE.equals(
                user.getAccountNonLocked());

    }

    @Override
    public boolean isCredentialsNonExpired() {

        return Boolean.TRUE.equals(
                user.getCredentialsNonExpired());

    }

    @Override
    public boolean isEnabled() {

        return Boolean.TRUE.equals(
                user.getEnabled());

    }

}