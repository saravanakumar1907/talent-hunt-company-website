
package com.talenthunt.service;

import java.util.List;

import org.springframework.stereotype.Component;

import com.talenthunt.entity.Service;
import com.talenthunt.repository.ServiceRepository;

@Component
public class ServiceService {

    private final ServiceRepository serviceRepository;

    public ServiceService(ServiceRepository serviceRepository) {
        this.serviceRepository = serviceRepository;
    }

    public List<Service> getAllServices() {
        return serviceRepository.findAll();
    }

    public Service saveService(Service service) {
        return serviceRepository.save(service);
    }

    public void deleteService(Long id) {
        serviceRepository.deleteById(id);
    }
}
