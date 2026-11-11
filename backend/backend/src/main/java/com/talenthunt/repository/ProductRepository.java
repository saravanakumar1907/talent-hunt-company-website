
package com.talenthunt.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.talenthunt.entity.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {

}