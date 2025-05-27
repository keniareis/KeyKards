package com.keniareis.key_kards.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.*;

import java.util.UUID;

@Entity
public class Deck {
    @Id
    @GeneratedValue
    private UUID id;
    private String name;
    private String description;
    private String language;

    @OneToMany
    private User owner;
}
