package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.Company;

import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;

import java.util.List;

/**
 * Spring Data JPA repository for the Company entity.
 */
public interface CompanyRepository extends JpaRepository<Company,Long> {

    @Query("select distinct company from Company company left join fetch company.users")
    List<Company> findAllWithEagerRelationships();

    @Query("select company from Company company left join fetch company.users where company.id =:id")
    Company findOneWithEagerRelationships(@Param("id") Long id);

}
