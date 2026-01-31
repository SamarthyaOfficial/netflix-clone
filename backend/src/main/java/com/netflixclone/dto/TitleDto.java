package com.netflixclone.dto;

import com.netflixclone.entity.Title;

public class TitleDto {

    private Long id;
    private String name;
    private String description;
    private String thumbnailUrl;
    private String videoUrl;
    private String type;
    private Long categoryId;
    private String cast;
    private String languages;
    private Integer releaseYear;
    private String rating;
    private String genre;
    private Boolean featured;

    public TitleDto() {}

    public static TitleDto from(Title title) {
        TitleDto dto = new TitleDto();
        dto.setId(title.getId());
        dto.setName(title.getName());
        dto.setDescription(title.getDescription());
        dto.setThumbnailUrl(title.getThumbnailUrl());
        dto.setVideoUrl(title.getVideoUrl());
        dto.setType(title.getType().name());
        dto.setCategoryId(title.getCategoryId());
        dto.setCast(title.getCast());
        dto.setLanguages(title.getLanguages());
        dto.setReleaseYear(title.getReleaseYear());
        dto.setRating(title.getRating());
        dto.setGenre(title.getGenre());
        dto.setFeatured(title.getFeatured());
        return dto;
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

    public Integer getReleaseYear() {
        return releaseYear;
    }

    public void setReleaseYear(Integer releaseYear) {
        this.releaseYear = releaseYear;
    }

    public String getRating() {
        return rating;
    }

    public void setRating(String rating) {
        this.rating = rating;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public Boolean getFeatured() {
        return featured;
    }

    public void setFeatured(Boolean featured) {
        this.featured = featured;
    }
}
