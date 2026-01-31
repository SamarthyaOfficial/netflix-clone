package com.netflixclone.repository;

import com.netflixclone.entity.Title;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.util.List;

public interface TitleRepository extends JpaRepository<Title, Long> {

    List<Title> findByCategoryIdOrderByCreatedAtDesc(Long categoryId);

    @Query(value = "SELECT * FROM titles WHERE featured = 1 ORDER BY created_at DESC", nativeQuery = true)
    List<Title> findByFeaturedTrueOrderByCreatedAtDesc();

    List<Title> findAllByOrderByCreatedAtDesc();
}
