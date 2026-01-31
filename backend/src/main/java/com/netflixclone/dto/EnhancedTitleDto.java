package com.netflixclone.dto;

import java.time.Instant;

public class EnhancedTitleDto {
    private Long id;
    private String name;
    private String description;
    private String thumbnailUrl;
    private String videoUrl;
    private String type;
    private Long categoryId;
    private String cast;
    private String languages;
    private Integer duration;
    private Instant releaseDate;
    private Double rating;
    private Boolean isLatest;
    private Instant createdAt;

    public EnhancedTitleDto() {}

    public EnhancedTitleDto(Long id, String name, String description, String thumbnailUrl, 
                            String videoUrl, String type, Long categoryId, String cast, 
                            String languages, Integer duration, Instant releaseDate, 
                            Double rating, Boolean isLatest, Instant createdAt) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.thumbnailUrl = thumbnailUrl;
        this.videoUrl = videoUrl;
        this.type = type;
        this.categoryId = categoryId;
        this.cast = cast;
        this.languages = languages;
        this.duration = duration;
        this.releaseDate = releaseDate;
        this.rating = rating;
        this.isLatest = isLatest;
        this.createdAt = createdAt;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getThumbnailUrl() {
        return thumbnailUrl;
    }

    public void setThumbnailUrl(String thumbnailUrl) {
        this.thumbnailUrl = thumbnailUrl;
    }

    public String getVideoUrl() {
        return videoUrl;
    }

    public void setVideoUrl(String videoUrl) {
        this.videoUrl = videoUrl;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Long getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(Long categoryId) {
        this.categoryId = categoryId;
    }

    public String getCast() {
        return cast;
    }

    public void setCast(String cast) {
        this.cast = cast;
    }

    public String getLanguages() {
        return languages;
    }

    public void setLanguages(String languages) {
        this.languages = languages;
    }

    public Integer getDuration() {
        return duration;
    }

    public void setDuration(Integer duration) {
        this.duration = duration;
    }

    public Instant getReleaseDate() {
        return releaseDate;
    }

    public void setReleaseDate(Instant releaseDate) {
        this.releaseDate = releaseDate;
    }

    public Double getRating() {
        return rating;
    }

    public void setRating(Double rating) {
        this.rating = rating;
    }

    public Boolean getIsLatest() {
        return isLatest;
    }

    public void setIsLatest(Boolean isLatest) {
        this.isLatest = isLatest;
    }

    public Instant getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Instant createdAt) {
        this.createdAt = createdAt;
    }
}
