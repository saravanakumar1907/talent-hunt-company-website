
package com.talenthunt.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.talenthunt.entity.Service;

public interface ServiceRepository extends JpaRepository<Service, Long> {
}
