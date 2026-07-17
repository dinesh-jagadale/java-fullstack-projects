package com.bank.entity;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.*;

@Entity
@Table(
        name = "regions",
        uniqueConstraints = {
                @UniqueConstraint(columnNames = "regionCode")
        }
)
public class Region {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /* ==========================================
            Region Information
    ========================================== */

    @Column(nullable = false, unique = true, length = 20)
    private String regionCode;

    @Column(nullable = false, length = 100)
    private String regionName;

    @Column(length = 255)
    private String description;

    /* ==========================================
            Regional Manager
    ========================================== */

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "regional_manager_id")
    private User regionalManager;

    /* ==========================================
            Branches
    ========================================== */

    @OneToMany(mappedBy = "region",
            cascade = CascadeType.ALL,
            orphanRemoval = false)
    private List<Branch> branches = new ArrayList<>();

    /* ==========================================
            Status
    ========================================== */

    @Column(nullable = false)
    private Boolean active = true;

    /* ==========================================
            Audit
    ========================================== */

    @Column(nullable = false)
    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;

    /* ==========================================
            Constructors
    ========================================== */

    public Region() {
    }

    /* ==========================================
            Getters and Setters
    ========================================== */

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getRegionCode() {
        return regionCode;
    }

    public void setRegionCode(String regionCode) {
        this.regionCode = regionCode;
    }

    public String getRegionName() {
        return regionName;
    }

    public void setRegionName(String regionName) {
        this.regionName = regionName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public User getRegionalManager() {
        return regionalManager;
    }

    public void setRegionalManager(User regionalManager) {
        this.regionalManager = regionalManager;
    }

    public List<Branch> getBranches() {
        return branches;
    }

    public void setBranches(List<Branch> branches) {
        this.branches = branches;
    }

    public Boolean getActive() {
        return active;
    }

    public void setActive(Boolean active) {
        this.active = active;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public LocalDateTime getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(LocalDateTime updatedAt) {
        this.updatedAt = updatedAt;
    }

}