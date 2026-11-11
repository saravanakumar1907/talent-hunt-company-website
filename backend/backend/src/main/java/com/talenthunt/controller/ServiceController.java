
package com.talenthunt.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.talenthunt.entity.Service;
import com.talenthunt.service.ServiceService;

@RestController
@RequestMapping("/api/services")
@CrossOrigin(origins = "http://localhost:5173")
public class ServiceController {

    private final ServiceService serviceService;

    public ServiceController(ServiceService serviceService) {
        this.serviceService = serviceService;
    }

    // Get all services
    @GetMapping
    public List<Service> getAllServices() {
        return serviceService.getAllServices();
    }

    // Add a new service
    @PostMapping
    public Service addService(@RequestBody Service service) {
        return serviceService.saveService(service);
    }

    // Delete service
    @DeleteMapping("/{id}")
    public String deleteService(@PathVariable Long id) {
        serviceService.deleteService(id);
        return "Service deleted successfully";
    }
}
