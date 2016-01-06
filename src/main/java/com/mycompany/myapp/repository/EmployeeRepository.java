package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.Employee;

import org.springframework.data.jpa.repository.*;

import java.util.List;

/**
 * Spring Data JPA repository for the Employee entity.
 */
public interface EmployeeRepository extends JpaRepository<Employee,Long> {

    @Query("select employee from Employee employee where employee.user.login = ?#{principal.username}")
    List<Employee> findByUserIsCurrentUser();

}
