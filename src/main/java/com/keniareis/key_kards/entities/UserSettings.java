package com.keniareis.key_kards.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;

import java.util.UUID;

@Entity
public class UserSettings {
    @Id
    @GeneratedValue
    private UUID userId;
    private String preferredLanguage;
    private String theme;

    @OneToOne
    private User user;
}
