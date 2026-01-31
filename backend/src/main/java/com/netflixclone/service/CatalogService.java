package com.netflixclone.service;

import com.netflixclone.dto.CategoryDto;
import com.netflixclone.dto.TitleDto;
import com.netflixclone.entity.Category;
import com.netflixclone.entity.Title;
import com.netflixclone.repository.CategoryRepository;
import com.netflixclone.repository.TitleRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CatalogService {

    private final CategoryRepository categoryRepository;
    private final TitleRepository titleRepository;

    public CatalogService(CategoryRepository categoryRepository, TitleRepository titleRepository) {
        this.categoryRepository = categoryRepository;
        this.titleRepository = titleRepository;
    }

    public List<CategoryDto> getAllCategories() {
        return categoryRepository.findAllByOrderBySortOrderAsc().stream()
                .map(this::toDto)
                .collect(Collectors.toList());
    }

    public List<TitleDto> getTitles(Long categoryId) {
        List<Title> titles = categoryId != null
                ? titleRepository.findByCategoryIdOrderByCreatedAtDesc(categoryId)
                : titleRepository.findAll();
        return titles.stream()
                .limit(7)
                .map(TitleDto::from)
                .collect(Collectors.toList());
    }

    public TitleDto getTitleById(Long id) {
        Title title = titleRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Title not found: " + id));
        return TitleDto.from(title);
    }

    public List<TitleDto> getFeaturedTitles() {
        // #region agent log
        try (var w = new java.io.FileWriter("c:\\Users\\samar\\Desktop\\NETFLIX Clone\\.cursor\\debug.log", true)) {
            w.write("{\"location\":\"CatalogService.java:getFeaturedTitles\",\"message\":\"method entry\",\"data\":{},\"timestamp\":" + System.currentTimeMillis() + ",\"sessionId\":\"debug-session\",\"hypothesisId\":\"H1,H4\"}\n");
        } catch (Exception e) { /* ignore */ }
        // #endregion
        // Fetch all titles and filter in Java to avoid native query mapping issues
        List<Title> allTitles = titleRepository.findAllByOrderByCreatedAtDesc();
        // #region agent log
        try (var w = new java.io.FileWriter("c:\\Users\\samar\\Desktop\\NETFLIX Clone\\.cursor\\debug.log", true)) {
            w.write("{\"location\":\"CatalogService.java:getFeaturedTitles\",\"message\":\"fetched all titles\",\"data\":{\"totalCount\":\"" + allTitles.size() + "\"},\"timestamp\":" + System.currentTimeMillis() + ",\"sessionId\":\"debug-session\",\"hypothesisId\":\"H1,H4\"}\n");
            if (!allTitles.isEmpty()) {
                Title first = allTitles.get(0);
                w.write("{\"location\":\"CatalogService.java:getFeaturedTitles\",\"message\":\"first title featured value\",\"data\":{\"id\":\"" + first.getId() + "\",\"name\":\"" + first.getName() + "\",\"featuredType\":\"" + (first.getFeatured() != null ? first.getFeatured().getClass().getName() : "null") + "\",\"featuredValue\":\"" + first.getFeatured() + "\"},\"timestamp\":" + System.currentTimeMillis() + ",\"sessionId\":\"debug-session\",\"hypothesisId\":\"H2,H4\"}\n");
            }
        } catch (Exception e) { /* ignore */ }
        // #endregion
        List<Title> featured = allTitles.stream()
                .filter(t -> Boolean.TRUE.equals(t.getFeatured()))
                .collect(Collectors.toList());
        // #region agent log
        try (var w = new java.io.FileWriter("c:\\Users\\samar\\Desktop\\NETFLIX Clone\\.cursor\\debug.log", true)) {
            w.write("{\"location\":\"CatalogService.java:getFeaturedTitles\",\"message\":\"after filtering\",\"data\":{\"featuredCount\":\"" + featured.size() + "\"},\"timestamp\":" + System.currentTimeMillis() + ",\"sessionId\":\"debug-session\",\"hypothesisId\":\"H1,H4\"}\n");
        } catch (Exception e) { /* ignore */ }
        // #endregion
        if (featured.isEmpty()) {
            // Fallback to latest titles if no featured
            featured = allTitles;
        }
        List<TitleDto> result = featured.stream()
                .limit(15)
                .map(TitleDto::from)
                .collect(Collectors.toList());
        // #region agent log
        try (var w = new java.io.FileWriter("c:\\Users\\samar\\Desktop\\NETFLIX Clone\\.cursor\\debug.log", true)) {
            if (!result.isEmpty()) {
                TitleDto firstDto = result.get(0);
                w.write("{\"location\":\"CatalogService.java:getFeaturedTitles\",\"message\":\"first dto featured value\",\"data\":{\"id\":\"" + firstDto.getId() + "\",\"featuredType\":\"" + (firstDto.getFeatured() != null ? firstDto.getFeatured().getClass().getName() : "null") + "\",\"featuredValue\":\"" + firstDto.getFeatured() + "\"},\"timestamp\":" + System.currentTimeMillis() + ",\"sessionId\":\"debug-session\",\"hypothesisId\":\"H2\"}\n");
            }
        } catch (Exception e) { /* ignore */ }
        // #endregion
        return result;
    }

    private CategoryDto toDto(Category c) {
        return new CategoryDto(c.getId(), c.getName(), c.getSortOrder());
    }
}
