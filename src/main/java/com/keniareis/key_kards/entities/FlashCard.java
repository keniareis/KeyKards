package com.keniareis.key_kards.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

import java.util.UUID;

@Entity
public class FlashCard {
    @Id
    @GeneratedValue
    private UUID id;
    private String frontCard;
    private String backCard;

    @OneToMany
    private Deck Deck;
}
